// Кастомная анимация стопки карточек (только внутри price-stack-scroll)
document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.getElementById("price-stack-scroll");
  if (!scroller) return;
  const cards = Array.from(scroller.querySelectorAll(".scroll-stack-card"));
  const itemDistance = 100;
  const itemScale = 0.03;
  const baseScale = 0.85;
  const itemStackDistance = 30;
  function updateCardTransforms() {
    console.log("updateCardTransforms called");
    const scrollTop = scroller.scrollTop;
    const containerHeight = scroller.clientHeight;
    const stackPositionPx = 0.2 * containerHeight;
    const scaleEndPositionPx = 0.1 * containerHeight;
    const endElement = scroller.querySelector(".scroll-stack-end");
    const endElementTop = endElement ? endElement.offsetTop : 0;
    cards.forEach((card, i) => {
      const cardTop = card.offsetTop;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;
      let scaleProgress = 0;
      if (scrollTop < triggerStart) scaleProgress = 0;
      else if (scrollTop > triggerEnd) scaleProgress = 1;
      else
        scaleProgress =
          (scrollTop - triggerStart) / (triggerEnd - triggerStart);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }
      // Только для мобильных (ширина < 768px) и только если карточка видима
      if (window.innerWidth < 768 && card.style.display !== 'none') {
        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      } else if (window.innerWidth >= 768) {
        card.style.transform = "";
      }
      card.style.zIndex = cards.length - i;
    });
  }
  scroller.addEventListener("scroll", updateCardTransforms);
  window.addEventListener("resize", updateCardTransforms);
  setTimeout(updateCardTransforms, 100);
});
