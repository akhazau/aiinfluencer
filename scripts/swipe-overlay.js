(function () {
  if (window.innerWidth >= 768) return;
  const swipezone = document.getElementById("swipe-overlay");
  const center = document.getElementById("offer-center-scroll");
  const blocks = center
    ? Array.from(center.querySelectorAll(".offer-center-content"))
    : [];
  let current = 0;
  let startY = null;
  let isSwiping = false;
  function showBlock(idx) {
    blocks.forEach((el, i) => {
      if (i === idx) {
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
        el.style.position = i === 0 ? "static" : "absolute";
      } else {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
        el.style.position = i === 0 ? "static" : "absolute";
      }
    });
  }
  function onTouchStart(e) {
    if (e.touches.length === 1) {
      startY = e.touches[0].clientY;
      isSwiping = false;
    }
  }
  function onTouchMove(e) {
    if (startY !== null && e.touches.length === 1) {
      const dy = e.touches[0].clientY - startY;
      if (Math.abs(dy) > 10) {
        // Разрешаем скролл только если:
        // - на Learn Map и свайп вверх (dy < 0)
        // - на преимуществах и свайп вниз (dy > 0)
        // Во всех остальных случаях блокируем скролл
        if (!((current === 2 && dy < 0) || (current === 0 && dy > 0))) {
          isSwiping = true;
          e.preventDefault();
        }
      }
    }
  }
  function onTouchEnd(e) {
    if (startY === null) return;
    const endY = e.changedTouches[0].clientY;
    const dy = endY - startY;
    if (isSwiping && Math.abs(dy) > 40) {
      if (dy < 0 && current < 2) current++;
      if (dy > 0 && current > 0) current--;
      showBlock(current);
    }
    startY = null;
    isSwiping = false;
  }
  if (swipezone) {
    swipezone.addEventListener("touchstart", onTouchStart, { passive: false });
    swipezone.addEventListener("touchmove", onTouchMove, { passive: false });
    swipezone.addEventListener("touchend", onTouchEnd, { passive: false });
  }
  showBlock(current);
})();
