// MOBILE: Инициализация слайдера только в вертикальной ориентации
if (window.matchMedia('(orientation: portrait)').matches) {
  new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
