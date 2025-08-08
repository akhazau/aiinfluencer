// MOBILE: Автоперелистывание карточек в offer-center-content
document.addEventListener("DOMContentLoaded", function () {
  // Только для мобильных
  if (window.innerWidth >= 768) return;

  const center = document.getElementById("offer-center-scroll");
  const blocks = center ? Array.from(center.querySelectorAll(".offer-center-content")) : [];
  
  if (blocks.length === 0) return;

  let current = 0;
  let isAutoPlaying = true;

  // Функция показа блока
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

  // Создаем зеленые точки
  const dotsWrap = document.getElementById("bonus-dots");
  if (dotsWrap) {
    dotsWrap.innerHTML = "";
    blocks.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "w-3 h-3 rounded-full mx-1 bg-white/20 transition";
      dot.setAttribute("aria-label", "Show block " + (i + 1));
      dot.onclick = () => {
        current = i;
        showBlock(current);
        updateDots();
      };
      dotsWrap.appendChild(dot);
    });
  }

  // Функция обновления точек
  function updateDots() {
    const dots = document.querySelectorAll("#bonus-dots button");
    dots.forEach((dot, i) => {
      dot.className = "w-3 h-3 rounded-full mx-1 transition " + 
        (i === current ? "bg-green-400" : "bg-white/20");
    });
  }

  // Останавливаем автоперелистывание при свайпе
  let startY = null;
  let isSwiping = false;

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
        isSwiping = true;
        e.preventDefault();
      }
    }
  }

  function onTouchEnd(e) {
    if (startY === null) return;
    const endY = e.changedTouches[0].clientY;
    const dy = endY - startY;
    if (isSwiping && Math.abs(dy) > 40) {
      if (dy < 0 && current < blocks.length - 1) current++;
      if (dy > 0 && current > 0) current--;
      showBlock(current);
      updateDots();
    }
    startY = null;
    isSwiping = false;
  }

  // Добавляем обработчики свайпа
  if (center) {
    center.addEventListener("touchstart", onTouchStart, { passive: false });
    center.addEventListener("touchmove", onTouchMove, { passive: false });
    center.addEventListener("touchend", onTouchEnd, { passive: false });
  }

  // Показываем первый блок
  showBlock(current);
  updateDots();

  // Переменная для хранения интервала
  let autoSlideInterval = null;

  // Функция запуска автоперелистывания
  function startAutoSlide() {
    if (autoSlideInterval) return; // Уже запущено
    autoSlideInterval = setInterval(() => {
      if (isAutoPlaying) {
        current = (current + 1) % blocks.length;
        showBlock(current);
        updateDots();
      }
    }, 6000);
  }

  // Функция остановки автоперелистывания
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  // Intersection Observer для запуска автоперелистывания при попадании в область видимости
  const priceSection = document.getElementById('price-section');
  if (priceSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAutoSlide();
        } else {
          stopAutoSlide();
        }
      });
    }, {
      threshold: 0.3 // Запускаем когда 30% секции видно
    });
    
    observer.observe(priceSection);
  }
});