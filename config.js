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
  photo: "./img/tram.png",
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
      subtitle: "Nếu bạn đang xem trang này thì... mình có một điều nhỏ muốn gửi đến bạn hôm nay.",
    },

    {
      type: "countdown",
      from: 3,
      goText: "🎂",
    },

    {
      type: "announcement",
      text: "Vì hôm nay là sinh nhật của bạn đó! 🎉",
    },

    {
      type: "chatbox",
      message:
        "Chúc mừng sinh nhật Bảo Trâm! nha, Mong rằng hôm nay của bạn sẽ thật vui, thật nhiều tiếng cười và nhận được thật nhiều điều tốt đẹp.",
      buttonText: "Xem tiếp một chút nha",
    },

    {
  type: "ideas",
    lines: [
      "Ban đầu mình định nhắn một tin chúc sinh nhật thôi.",
      "Kiểu rất bình thường á.",
      "\"Chúc mừng sinh nhật nha 🎂\" rồi thêm vài emoji 🎉",
      "Xong chắc cũng giống như bao tin nhắn khác.",
      "Nhưng mà nghĩ lại...",
      "Sinh nhật mỗi năm chỉ có một lần.",
      "Nếu chỉ nhắn vài dòng rồi hết thì có vẻ hơi nhanh quá.",
      "Nên mình nghĩ thử làm một cái gì đó khác một chút.",
      "Và rồi mình ngồi làm cái web nhỏ này.",
      "Không phải là coder xịn sò gì đâu",
      "Chỉ là muốn tạo ra một thứ gì đó hơi <strong>đặc biệt</strong>",
      "Để khi bạn xem tới đây...",
      "có thể dừng lại vài giây và mỉm cười nhẹ một cái <span>:)</span>",
    ],
    bigLetters: "BAO TRAM",
  },

    {
      type: "quote",
      text:
        "Thêm một tuổi mới không chỉ là thêm một con số. Mà là thêm một năm với nhiều trải nghiệm, nhiều câu chuyện và nhiều kỷ niệm mới.",
      author: "Baso - cụ thể là Báo 🐧",
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
        "Mong rằng tuổi mới của bạn sẽ có thật nhiều niềm vui, thật nhiều may mắn và thật nhiều điều tích cực. Mong rằng dù cuộc sống có bận rộn hay đôi lúc hơi mệt mỏi thì bạn vẫn luôn giữ được nụ cười của mình. Vì nụ cười đó thật sự rất đẹp.",
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
        "Cảm ơn bạn đã xem tới đây. Hy vọng trang nhỏ này làm sinh nhật của bạn vui hơn một chút 🎉",
      replayText: "Nếu muốn xem lại, bạn có thể nhấn vào đây 🎉",
    },
  ],
};