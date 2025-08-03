// MOBILE: Функционал More/Less для текста
document.addEventListener("DOMContentLoaded", function () {
  console.log("Mobile more/less script loaded");
  
  // Проверяем, что мы на мобильном устройстве
  if (window.innerWidth >= 768) {
    console.log("Desktop detected, exiting");
    return;
  }

  const moreBtn = document.querySelector('.about-more-btn');
  const lessBtn = document.querySelector('.about-less-btn');
  const shortText = document.querySelector('#about-desc-mobile-short');
  const fullText = document.querySelector('#about-desc-mobile-full');

  console.log("More button found:", !!moreBtn);
  console.log("Less button found:", !!lessBtn);
  console.log("Short text found:", !!shortText);
  console.log("Full text found:", !!fullText);
  
  if (moreBtn) console.log("More button text:", moreBtn.textContent);
  if (lessBtn) console.log("Less button text:", lessBtn.textContent);
  if (shortText) console.log("Short text content:", shortText.textContent);
  if (fullText) console.log("Full text content:", fullText.textContent);

  if (!moreBtn || !lessBtn || !shortText || !fullText) {
    console.log("Elements not found, exiting");
    return;
  }

  // Функция для показа полного текста
  function showFullText() {
    console.log("Showing full text");
    shortText.style.display = 'none';
    fullText.style.display = 'block';
    moreBtn.style.display = 'none';
    lessBtn.style.display = 'block';
  }

  // Функция для скрытия полного текста
  function hideFullText() {
    console.log("Hiding full text");
    shortText.style.display = 'block';
    fullText.style.display = 'none';
    moreBtn.style.display = 'block';
    lessBtn.style.display = 'none';
  }

  // Обработчики событий
  moreBtn.addEventListener('click', showFullText);
  lessBtn.addEventListener('click', hideFullText);

  // Инициализация - скрываем полный текст
  console.log("Initializing more/less functionality");
  hideFullText();
  console.log("Initialization complete");
}); 