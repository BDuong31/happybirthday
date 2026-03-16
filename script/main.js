/**
* Engine — đọc CONFIG, tải các thành phần, hiển thị và tạo hiệu ứng động.
* KHÔNG chỉnh sửa tệp này để tùy chỉnh. Chỉ chỉnh sửa config.js.
*/

// const birthdayDate = new Date("2026-03-17 00:00:00").getTime();

// if (Date.now() < birthdayDate) {

//   document.addEventListener("DOMContentLoaded", () => {

//     document.body.innerHTML = `
//       <div id="countdown-screen">
//         <div class="countdown-box">
//           <div id="countdown"></div>
//         </div>
//       </div>
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = `
//       #countdown-screen{
//         height:100vh;
//         display:flex;
//         justify-content:center;
//         align-items:center;
//         background:linear-gradient(135deg,#020617,#0f172a,#1e293b);
//         font-family:Poppins,sans-serif;
//         color:white;
//         text-align:center;
//       }

//       .countdown-box{
//         padding:40px 60px;
//         border-radius:20px;
//         background:rgba(255,255,255,0.05);
//         backdrop-filter:blur(10px);
//         box-shadow:0 0 40px rgba(236,72,153,0.3);
//       }

//       #countdown{
//         font-size:40px;
//         font-weight:700;
//         margin-top:15px;
//         color:#f472b6;
//       }
//     `;
//     document.head.appendChild(style);

//     const countdownEl = document.getElementById("countdown");

//     function updateCountdown(){

//       const now = new Date().getTime();
//       const distance = birthdayDate - now;

//       if(distance <= 0){
//         location.reload();
//         return;
//       }

//       const days = Math.floor(distance/(1000*60*60*24));
//       const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
//       const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
//       const seconds = Math.floor((distance%(1000*60))/1000);

//       let text="";

//       if(days>0){
//         text=`${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
//       }
//       else if(hours>0){
//         text=`${hours} giờ ${minutes} phút ${seconds} giây`;
//       }
//       else if(minutes>0){
//         text=`${minutes} phút ${seconds} giây`;
//       }
//       else{
//         text=`${seconds} giây`;
//       }

//       countdownEl.innerHTML=text;
//     }

//     setInterval(updateCountdown,1000);
//     updateCountdown();

//   });

//   throw new Error("Birthday page locked until the date.");
// }

// ── Chủ đề ────────────────────────────────────────────────────────
let currentMode = (CONFIG.defaultMode || "dark");

function applyTheme(mode) {
  currentMode = mode;
  const root = document.documentElement;
  const c = CONFIG.colors;

  root.style.setProperty("--primary", c.primary || "#ff69b4");
  root.style.setProperty("--accent", c.accent || "#15a1ed");

  const theme = c[mode] || c.dark || {};
  root.style.setProperty("--bg", theme.background || "#1a1a2e");
  root.style.setProperty("--text", theme.text || "#ffffff");

  // Cập nhật chuyển đổi icon
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = mode === "dark" ? "☀️" : "🌙";
}

function createThemeToggle() {
  const btn = document.createElement("button");
  btn.id = "theme-toggle";
  btn.title = "Chuyển đổi chế độ tối/sáng";
  btn.textContent = currentMode === "dark" ? "☀️" : "🌙";
  btn.addEventListener("click", () => {
    applyTheme(currentMode === "dark" ? "light" : "dark");
  });
  document.body.appendChild(btn);
}

// ── Script Loader ────────────────────────────────────────────────
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error("Component not found: " + src));
    document.head.appendChild(s);
  });
}

// ── Main ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", async () => {
  applyTheme(currentMode);
  createThemeToggle();

  // Thiết lập nhạc nền nếu được cấu hình
  const audio = document.querySelector(".song");
  if (audio && CONFIG.music) {
    audio.querySelector("source").src = CONFIG.music;
    audio.load();
  }

  // Tìm tất cả loại phần duy nhất để tải các thành phần tương ứng
  const types = [...new Set(CONFIG.sections.map((s) => s.type))];

  // Tải các thành phần theo thứ tự xuất hiện trong config
  for (const type of types) {
    try {
      await loadScript(`./script/components/${type}.js`);
    } catch (e) {
      console.warn(e.message);
    }
  }

  // Kết xuất tất cả phần vào DOM
  const container = document.querySelector(".container");
  const rendered = [];

  CONFIG.sections.forEach((section) => {
    const comp = window.Components && window.Components[section.type];
    if (!comp) {
      console.warn(`Thành phần "${section.type}" không được tìm thấy, đang bỏ qua.`);
      return;
    }
    const el = comp.render(container, section, CONFIG);
    rendered.push({ el, comp, section });
  });

  // Hỏi người dùng có muốn phát nhạc nền không trước khi bắt đầu timeline
  const isDark = currentMode === "dark";
  Swal.fire({
    title: "Phát nhạc nền trong nền?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: CONFIG.colors.accent || "#3085d6",
    cancelButtonColor: "#888",
    confirmButtonText: "Có!",
    cancelButtonText: "Không",
    background: isDark ? "#1e293b" : "#ffffff",
    color: isDark ? "#f1f5f9" : "#1e293b",
  }).then((result) => {
    if (result.isConfirmed && audio) {
      audio.play().catch(() => {});
    }
    buildTimeline(rendered);
  });
});

// ── Xây dựng dòng thời gian ─────────────────────────────────────────────
function buildTimeline(rendered) {
  const tl = gsap.timeline();

  tl.to(".container", { duration: 0.6, visibility: "visible" });

  // Một số phần có thể là lớp phủ (ví dụ: pháo hoa) và nên tồn tại cùng lúc với phần tiếp theo thay vì bị xóa ngay lập tức.
  let deferredExits = [];

  rendered.forEach(({ el, comp, section }, i) => {
    const isOverlay = comp.overlay === true;

    // Nếu phần này không phải là lớp phủ và có các hàm exit bị trì hoãn từ phần trước, hãy thực thi chúng trước khi tiếp tục.
    if (!isOverlay && deferredExits.length > 0) {
      deferredExits.forEach((fn) => fn());
      deferredExits = [];
    }

    // Bắt đầu phần này
    comp.animate(tl, el, CONFIG);

    // Nếu phần này có hàm exit, hãy quyết định khi nào thực thi nó dựa trên việc phần tiếp theo có phải là lớp phủ hay không.
    if (comp.exit) {
      const next = rendered[i + 1];
      const nextIsOverlay = next && next.comp.overlay === true;

      if (nextIsOverlay) {
        deferredExits.push(() => comp.exit(tl, el));
      } else if (!isOverlay) {
        comp.exit(tl, el);
      }
    }
  });

  // Nếu phần cuối cùng có các hàm exit bị trì hoãn, hãy thực thi chúng sau khi tất cả phần đã được xử lý.
  deferredExits.forEach((fn) => fn());

  // Thêm nút phát lại ở cuối timeline
  const replayBtn = document.getElementById("replay");
  if (replayBtn) {
    replayBtn.addEventListener("click", () => tl.restart());
  }
}
