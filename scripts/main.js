document.addEventListener("DOMContentLoaded", function () {
  // Удаляем эти строки:
  // const lang = "en";
  // document.addEventListener('click', (e) => { ... });
  // i18n.apply(lang);

  // Оставляем только остальную логику main.js
  // Счетчик просмотров
  function updateViewerCount() {
    const viewerElement = document.getElementById("live-viewers-count");
    if (viewerElement) {
      const baseCount = 23;
      const variation = Math.floor(Math.random() * 6) - 3;
      const currentCount = baseCount + variation;
      viewerElement.textContent = currentCount;
    }
  }

  // Обновляем счетчик каждые 3-7 секунд
  setInterval(updateViewerCount, Math.random() * 4000 + 3000);
  updateViewerCount();

  // Счетчик продаж курса
  function updateSalesCount() {
    const salesElement = document.getElementById("course-sales-count");
    if (salesElement) {
      const baseCount = 23;
      const variation = Math.floor(Math.random() * 6) - 3;
      const currentCount = Math.max(1, baseCount + variation);
      salesElement.textContent = currentCount;
    }
  }

  // Обновляем счетчик продаж каждые 5-10 секунд
  setInterval(updateSalesCount, Math.random() * 5000 + 5000);
  updateSalesCount();

  // Таймер обратного отсчета
  function startCountdownTimer() {
    // Устанавливаем время окончания (3 часа от текущего времени)
    let endTime = new Date().getTime() + (3 * 60 * 60 * 1000);
    
    function updateTimer() {
      const now = new Date().getTime();
      const timeLeft = endTime - now;
      
      if (timeLeft > 0) {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Форматируем время с ведущими нулями
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        // Обновляем таймер в sticky banner
        const bannerTimerValues = document.querySelectorAll('#banner-timer .timer-value');
        if (bannerTimerValues.length >= 3) {
          bannerTimerValues[0].textContent = formattedHours;
          bannerTimerValues[1].textContent = formattedMinutes;
          bannerTimerValues[2].textContent = formattedSeconds;
        }
        
        // Обновляем таймер в final CTA
        const finalTimerValues = document.querySelectorAll('#final-cta-timer-wrap .timer-value');
        if (finalTimerValues.length >= 3) {
          finalTimerValues[0].textContent = formattedHours;
          finalTimerValues[1].textContent = formattedMinutes;
          finalTimerValues[2].textContent = formattedSeconds;
        }
      } else {
        // Таймер истек, сбрасываем на 3 часа
        const newEndTime = new Date().getTime() + (3 * 60 * 60 * 1000);
        endTime = newEndTime;
      }
    }
    
    // Обновляем таймер каждую секунду
    updateTimer(); // Сразу обновляем
    setInterval(updateTimer, 1000);
  }
  
  // Запускаем таймер
  startCountdownTimer();

  // Функция для кнопки "Больше" в секции About
  const moreBtn = document.querySelector(".about-more-btn");
  const lessBtn = document.querySelector(".about-less-btn");
  const hiddenContent = document.querySelector(".about-hidden-content");

  if (moreBtn && lessBtn && hiddenContent) {
    moreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      hiddenContent.style.display = "block";
      moreBtn.style.display = "none";
      lessBtn.style.display = "inline";

      // Обновляем текст кнопки в зависимости от языка
      lessBtn.textContent = i18n.translations[i18n.getLang()]["about-less-btn"];
    });

    lessBtn.addEventListener("click", function (e) {
      e.preventDefault();
      hiddenContent.style.display = "none";
      lessBtn.style.display = "none";
      moreBtn.style.display = "inline";

      // Обновляем текст кнопки в зависимости от языка
      moreBtn.textContent = i18n.translations[i18n.getLang()]["about-more-btn"];
    });
  }

  // Smooth scroll для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Анимация появления элементов при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Наблюдаем за всеми секциями
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Параллакс эффект для hero секции
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero-section");
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Липкий баннер
  const stickyBanner = document.querySelector("#sticky-banner");
  let isOnFinalSection = false;
  
  if (stickyBanner) {
    // Отслеживаем последнюю секцию
    const finalSection = document.querySelector("#final-cta");
    if (finalSection) {
      const finalSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isOnFinalSection = entry.isIntersecting;
        });
      }, {
        threshold: 0.3 // Когда 30% секции видно
      });
      
      finalSectionObserver.observe(finalSection);
    }
    
    window.addEventListener("scroll", () => {
      // Скрываем шторку на последней секции
      if (isOnFinalSection) {
        stickyBanner.style.opacity = "0";
        stickyBanner.style.transform = "translateY(-32px)";
        stickyBanner.style.pointerEvents = "none";
      } else if (window.scrollY > 100) {
        stickyBanner.style.opacity = "1";
        stickyBanner.style.transform = "translateY(0)";
        stickyBanner.style.pointerEvents = "auto";
      } else {
        stickyBanner.style.opacity = "0";
        stickyBanner.style.transform = "translateY(-32px)";
        stickyBanner.style.pointerEvents = "none";
      }
    });
  }

  // Обработка кликов по кнопкам CTA
  document.querySelectorAll(".cta-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // Здесь можно добавить аналитику или другую логику
      console.log("CTA button clicked");
    });
  });

  // Обработка FAQ аккордеона
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-toggle");
    const answer = item.querySelector(".faq-answer");

    if (question && answer) {
      question.addEventListener("click", () => {
        const isOpen = answer.classList.contains("open");

        // Закрываем все остальные FAQ
        document.querySelectorAll(".faq-item").forEach((otherItem) => {
          const otherAnswer = otherItem.querySelector(".faq-answer");
          const otherToggle = otherItem.querySelector(".faq-toggle");
          if (otherAnswer && otherToggle) {
            otherAnswer.classList.remove("open");
            otherAnswer.classList.add("hidden");
            otherToggle.classList.remove("open");
          }
        });

        // Открываем/закрываем текущий FAQ
        if (!isOpen) {
          answer.classList.add("open");
          answer.classList.remove("hidden");
          question.classList.add("open");
        }
      });
    }
  });

});

// Строка 5 (закомментированная):
// translate.apply(lang);  // ← Было: // i18n.apply(lang);

// Строка 100:
lessBtn.textContent = translate.translations[translate.getLang()]["about-less-btn"];  // ← Было: i18n

// Строка 110:
moreBtn.textContent = translate.translations[translate.getLang()]["about-more-btn"];  // ← Было: i18n
