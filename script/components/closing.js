(function () {
  window.Components = window.Components || {};

  window.Components.closing = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-closing";
      div.innerHTML = `
        <p class="closing-text">${
          section.text || "Được rồi, giờ hãy quay lại và cho tôi biết bạn có thích nó không nhé."
        }</p>
        <p class="replay-btn" id="replay">${
          section.replayText || "Hoặc nhấn vào, nếu bạn muốn xem lại."
        }</p>
        <p class="last-smile">:)</p>
      `;
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const ideaIn = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
      tl.from(el.querySelectorAll("p"), {
        duration: 1, ...ideaIn, stagger: 1.2,
      })
      // Chỉ kích hoạt nút phát lại sau khi nút đó hiển thị.
      .set(el.querySelector("#replay"), { pointerEvents: "auto" })
      .to(el.querySelector(".last-smile"), {
        duration: 0.5, rotation: 90,
      }, "+=1");
    },
  };
})();
