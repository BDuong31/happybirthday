/**
 * ✨ CHỈNH SỬA TỆP TIN NÀY để tùy chỉnh lời chúc sinh nhật.! ✨
 *
 * Đây là tập tin DUY NHẤT bạn cần chỉnh sửa..
 * Không cần phải động đến HTML, CSS hoặc bất kỳ tệp JavaScript nào khác.
 *
 * CẤU TRÚC TẬP TIN:
 *   "greeting"      → Lời chào mở đầu kèm tên người nhận
 *   "announcement"  → Thông báo sinh nhật
 *   "chatbox"       → Tin nhắn chat với hiệu ứng gõ
 *   "ideas"         → Hiển thị văn bản tuần tự, từng dòng
 *   "quote"         → Thẻ trích dẫn được định dạng với tác giả tùy chọn
 *   "countdown"     → Đếm ngược 3-2-1 có hiệu ứng
 *   "stars"         → Phông nền sao lấp lánh
 *   "fireworks"     → Những tia pháo hoa rực rỡ nổ tung
 *   "balloons"      → Animation bóng bay nổi lên
 *   "profile"       → Hình ảnh hồ sơ với lời chúc sinh nhật
 *   "confetti"      → Animation bắn confetti
 *   "closing"       → Thông báo kết thúc với nút phát lại
 *
 * CÁCH SỬ DỤNG:
 *   REMOVE a section  → Xóa đối tượng đó khỏi mảng các phần.
 *   DUPLICATE          → Sao chép và dán bất kỳ đối tượng phần nào
 *   REORDER            → Di chuyển đối tượng phần lên/xuống trong mảng
 *   EDIT TEXT          → Thay đổi các giá trị chuỗi
 */

const CONFIG = {
  name: "Bảo Trâm",
  photo: "./img/irene.jpg",
  music: "./music/hbd.mpeg",

  colors: {
    primary: "#f472b6",
    accent: "#60a5fa",
    dark: {
      background: "#0f172a",
      text: "#f1f5f9",
    },
    light: {
      background: "#fafaf9",
      text: "#1e293b",
    },
  },

  defaultMode: "dark",

  sections: [
    {
      type: "greeting",
      title: "Chào",
      subtitle: "Mình có một điều nhỏ muốn dành cho bạn hôm nay...",
    },

    {
      type: "countdown",
      from: 3,
      goText: "🎂",
    },

    {
      type: "announcement",
      text: "Bởi vì hôm nay là ngày rất đặc biệt — sinh nhật của bạn 🎉",
    },

    {
      type: "chatbox",
      message:
        "Chúc mừng sinh nhật Bảo Trâm. Mong rằng hôm nay sẽ là một ngày thật vui, thật nhiều tiếng cười và thật nhiều điều tốt đẹp đến với bạn.",
      buttonText: "Gửi",
    },

    {
      type: "ideas",
      lines: [
        "Ban đầu mình định chỉ gửi một tin nhắn chúc mừng thôi...",
        "Một tin nhắn rất bình thường như bao người khác.",
        "Nhưng rồi mình nghĩ lại...",
        "Một người như bạn rất <strong>đặc biệt</strong>",
        "thì nên nhận được một điều gì đó <strong>đặc biệt</strong>  hơn một chút.",
        "Nên mình đã làm trang nhỏ này.",
        "Hy vọng khi bạn đọc đến đây...",
        "bạn sẽ mỉm cười một chút <span>:)</span>",
      ],
      bigLetters: "BAO TRAM",
    },

    {
      type: "quote",
      text:
        "Tuổi mới không chỉ là thêm một con số, mà là thêm nhiều kỷ niệm, nhiều nụ cười và nhiều câu chuyện đẹp trong cuộc sống.",
      author: "Baso",
    },

    {
      type: "stars",
      count: 50,
    },

    {
      type: "balloons",
      count: 30,
    },

    {
      type: "profile",
      wishTitle: "Chúc mừng sinh nhật",
      wishText:
        "Mong rằng tuổi mới của bạn sẽ thật nhiều niềm vui, thật nhiều may mắn và thật nhiều điều tốt đẹp. Mong rằng dù có chuyện gì xảy ra thì bạn vẫn luôn giữ được nụ cười của mình. Vì nụ cười đó thật sự rất đẹp.",
    },

    {
      type: "fireworks",
      count: 30,
    },

    {
      type: "confetti",
      count: 12,
    },

    {
      type: "closing",
      text:
        "Cảm ơn bạn đã dành thời gian xem món quà nhỏ này. Hy vọng sinh nhật năm nay của bạn sẽ thật đáng nhớ.",
      replayText: "Nếu muốn xem lại, bạn có thể nhấn vào đây 🎉",
    },
  ],
};