// MOBILE: Инициализация слайдера только на мобильных
if (window.innerWidth < 768) {
  new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
