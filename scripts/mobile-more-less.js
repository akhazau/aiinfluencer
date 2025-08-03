// MOBILE: Функционал More/Less для текста
document.addEventListener("DOMContentLoaded", function () {
  // Проверяем, что мы на мобильном устройстве
  if (window.innerWidth >= 768) return;

  const moreBtn = document.querySelector('.about-more-btn');
  const lessBtn = document.querySelector('.about-less-btn');
  const fullText = document.querySelector('.about-desc-mobile-full');

  if (!moreBtn || !lessBtn || !fullText) return;

  // Функция для показа полного текста
  function showFullText() {
    fullText.style.display = 'inline';
    moreBtn.style.display = 'none';
    lessBtn.style.display = 'block';
  }

  // Функция для скрытия полного текста
  function hideFullText() {
    fullText.style.display = 'none';
    moreBtn.style.display = 'block';
    lessBtn.style.display = 'none';
  }

  // Обработчики событий
  moreBtn.addEventListener('click', showFullText);
  lessBtn.addEventListener('click', hideFullText);

  // Инициализация - скрываем полный текст
  hideFullText();
}); 