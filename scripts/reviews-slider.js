// Слайдер отзывов с автопереключением и точками навигации
function initReviewsSlider() {
  const reviewItems = document.querySelectorAll(".review-item");
  const dotsContainer = document.getElementById("reviews-dots");
  
  if (reviewItems.length === 0 || !dotsContainer) return;

  let currentReview = 0;
  let autoSlideInterval = null;
  let isAutoPlaying = true;

  // Создаем точки навигации
  function createDots() {
    dotsContainer.innerHTML = "";
    reviewItems.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "w-3 h-3 rounded-full mx-1 bg-white/20 transition-all duration-300 hover:bg-white/40";
      dot.setAttribute("aria-label", `Show review ${index + 1}`);
      dot.onclick = () => {
        currentReview = index;
        showReview(currentReview);
        updateDots();
        restartAutoSlide();
      };
      dotsContainer.appendChild(dot);
    });
  }

  // Обновляем состояние точек
  function updateDots() {
    const dots = dotsContainer.querySelectorAll("button");
    dots.forEach((dot, index) => {
      if (index === currentReview) {
        dot.className = "w-3 h-3 rounded-full mx-1 bg-purple-400 transition-all duration-300";
      } else {
        dot.className = "w-3 h-3 rounded-full mx-1 bg-white/20 transition-all duration-300 hover:bg-white/40";
      }
    });
  }

  // Показываем конкретный отзыв
  function showReview(index) {
    reviewItems.forEach((item, i) => {
      if (i === index) {
        item.classList.remove("hidden", "fade-out");
        item.classList.add("block", "fade-in");
      } else {
        item.classList.remove("block", "fade-in");
        item.classList.add("hidden", "fade-out");
      }
    });
  }

  // Переключение на следующий отзыв
  function nextReview() {
    currentReview = (currentReview + 1) % reviewItems.length;
    showReview(currentReview);
    updateDots();
  }

  // Запуск автопереключения
  function startAutoSlide() {
    if (autoSlideInterval) return;
    autoSlideInterval = setInterval(() => {
      if (isAutoPlaying) {
        nextReview();
      }
    }, 5000); // Переключение каждые 5 секунд
  }

  // Остановка автопереключения
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  // Перезапуск автопереключения
  function restartAutoSlide() {
    stopAutoSlide();
    setTimeout(startAutoSlide, 2000); // Пауза 2 секунды после ручного переключения
  }

  // Обработка видимости секции отзывов
  const reviewsSection = document.querySelector("#testimonials");
  
  if (reviewsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isAutoPlaying = true;
          startAutoSlide();
        } else {
          isAutoPlaying = false;
          stopAutoSlide();
        }
      });
    }, {
      threshold: 0.3
    });
    
    observer.observe(reviewsSection);
  }

  // Пауза при наведении мыши
  const reviewsContainer = document.getElementById("review-slide");
  if (reviewsContainer) {
    reviewsContainer.addEventListener("mouseenter", () => {
      isAutoPlaying = false;
    });
    
    reviewsContainer.addEventListener("mouseleave", () => {
      isAutoPlaying = true;
    });
  }

  // Инициализация
  createDots();
  showReview(0);
  updateDots();
  
  // Запускаем автопереключение через небольшую задержку
  setTimeout(startAutoSlide, 2000);
}

// Безопасная инициализация: сразу, если DOM уже готов, иначе по DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initReviewsSlider);
} else {
  initReviewsSlider();
}
