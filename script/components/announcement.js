(function () {
  window.Components = window.Components || {};

  window.Components.announcement = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-announcement";
      div.innerHTML = `<p>${section.text || "Hôm nay là sinh nhật của bạn!!"}</p>`;
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      tl.from(el.querySelector("p"), {
        duration: 0.7, opacity: 0, y: 10,
      })
      .to(el.querySelector("p"), {
        duration: 0.7, opacity: 0, y: 10,
      }, "+=3");
    },
  };
})();
