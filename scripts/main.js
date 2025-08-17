document.addEventListener("DOMContentLoaded", () => {
  
  // 1. СЧЕТЧИК ПРОСМОТРОВ (live viewers)
  const initViewersCounter = () => {
    const element = document.getElementById("live-viewers-count");
    if (!element) return;
    
    const update = () => {
      const baseCount = 23;
      const variation = Math.floor(Math.random() * 6) - 3;
      element.textContent = baseCount + variation;
    };
    
    update();
    setInterval(update, Math.random() * 4000 + 3000); // 3-7 секунд
  };

// СЧЁТЧИК ПРОДАЖ: 3 → 48 за календарные сутки (локальное время)
const initSalesCounter = () => {
  const el = document.getElementById("course-sales-count");
  if (!el) return;

  const min = 3;
  const max = 48;

  const render = () => {
    const now = new Date();
    const start = new Date(now); start.setHours(0,0,0,0);          // 00:00 сегодня
    const end = new Date(start); end.setDate(end.getDate() + 1);    // 00:00 завтра
    const total = end - start;                                      // мс в сутках
    const elapsed = Math.min(Math.max(now - start, 0), total);      // [0..total]
    const progress = elapsed / total;                               // [0..1]

    const value = Math.floor(min + (max - min) * progress);         // линейно
    el.textContent = Math.max(min, Math.min(value, max));
  };

  render();
  setInterval(render, 60 * 1000); // обновлять раз в минуту
};

  // 3. ТАЙМЕР ОБРАТНОГО ОТСЧЕТА
  const initCountdownTimer = () => {
    let endTime = Date.now() + 3 * 60 * 60 * 1000;
    
    const updateTimer = () => {
      const timeLeft = Math.max(0, endTime - Date.now());
      
      if (timeLeft === 0) {
        endTime = Date.now() + 3 * 60 * 60 * 1000;
        return;
      }
      
      const hours = Math.floor(timeLeft / 3600000).toString().padStart(2, '0');
      const minutes = Math.floor((timeLeft % 3600000) / 60000).toString().padStart(2, '0');
      const seconds = Math.floor((timeLeft % 60000) / 1000).toString().padStart(2, '0');
      
      ['#banner-timer .timer-value', '#final-cta-timer-wrap .timer-value'].forEach(selector => {
        const values = document.querySelectorAll(selector);
        if (values.length >= 3) {
          [hours, minutes, seconds].forEach((time, i) => values[i].textContent = time);
        }
      });
    };
    
    updateTimer();
    setInterval(updateTimer, 1000);
  };

  // 4. ПЕРЕКЛЮЧАТЕЛЬ КОНТЕНТА "БОЛЬШЕ/МЕНЬШЕ"
  const initToggleContent = () => {
    console.log('initToggleContent called, window width:', window.innerWidth);
    if (window.innerWidth >= 768) {
      console.log('Desktop detected, skipping mobile toggle');
      return; // Только для мобильных
    }
    
    const moreBtn = document.getElementById('about-more-btn');
    const lessBtn = document.getElementById('about-less-btn');
    const shortDesc = document.getElementById('about-desc-short');
    const dots = document.getElementById('about-desc-dots');
    const fullDesc = document.getElementById('about-desc-full');
    const p2Full = document.getElementById('about-desc-p2-full');
    
    console.log('Elements found:', {
      moreBtn: !!moreBtn,
      lessBtn: !!lessBtn,
      shortDesc: !!shortDesc,
      dots: !!dots,
      fullDesc: !!fullDesc,
      p2Full: !!p2Full
    });
    
    if (!moreBtn || !lessBtn || !shortDesc || !dots || !fullDesc || !p2Full) {
      console.log('Some elements missing, aborting');
      return;
    }
    
    console.log('Setting up click handlers');
    
    moreBtn.onclick = () => {
      console.log('More button clicked');
      shortDesc.style.display = 'none';
      dots.style.display = 'none';
      moreBtn.style.display = 'none';
      fullDesc.style.display = 'block';
      p2Full.style.display = 'block';
      lessBtn.style.display = 'inline';
    };
    
    lessBtn.onclick = () => {
      console.log('Less button clicked');
      shortDesc.style.display = 'inline';
      dots.style.display = 'inline';
      moreBtn.style.display = 'inline';
      fullDesc.style.display = 'none';
      p2Full.style.display = 'none';
      lessBtn.style.display = 'none';
    };
  };

  // 5. SMOOTH SCROLL ДЛЯ ЯКОРНЫХ ССЫЛОК
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.onclick = (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      };
    });

  };

  // 6. АНИМАЦИИ ПОЯВЛЕНИЯ СЕКЦИЙ
  const initSectionAnimations = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-in');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
  };

  // 7. ОТСЛЕЖИВАНИЕ ФИНАЛЬНОЙ СЕКЦИИ
  const initFinalSectionObserver = () => {
    const finalSection = document.querySelector('#final-cta');
    if (!finalSection) return;

    const observer = new IntersectionObserver(entries => {
      window.isOnFinalSection = entries[0]?.isIntersecting || false;
    }, { threshold: 0.3 });

    observer.observe(finalSection);
  };

  // 8. ЛИПКИЙ БАННЕР (STICKY BANNER)
  const initStickyBanner = () => {
    const stickyBanner = document.querySelector('#sticky-banner');
    if (!stickyBanner) return;

    let ticking = false;
    
    const updateBanner = () => {
      const scrollY = window.scrollY;
      const isVisible = !window.isOnFinalSection && scrollY > 100;
      
      Object.assign(stickyBanner.style, {
        opacity: isVisible ? '1' : '0',
        transform: `translateY(${isVisible ? '0' : '-32px'})`,
        pointerEvents: isVisible ? 'auto' : 'none'
      });
    };

    // Функция проверки пересечения элементов
    const checkElementsOverlap = () => {
      const bannerBtn = document.querySelector('.banner-btn');
      const bannerTimer = document.querySelector('#banner-timer');
      const supportBtn = document.querySelector('.support-mail-btn');
      
      if (!bannerBtn || !bannerTimer || !supportBtn) return;
      
      // Проверяем видимость баннера
      const bannerOpacity = parseFloat(stickyBanner.style.opacity || '0');
      if (bannerOpacity < 0.5) return; // Баннер не виден
      
      const btnRect = bannerBtn.getBoundingClientRect();
      const timerRect = bannerTimer.getBoundingClientRect();
      const supportRect = supportBtn.getBoundingClientRect();
      
      // Проверяем пересечение кнопки с таймером или кнопкой support
      const btnTimerOverlap = btnRect.right + 15 >= timerRect.left;
      const btnSupportOverlap = btnRect.right + 10 >= supportRect.left;
      const isOverlapping = btnTimerOverlap || btnSupportOverlap;
      
      if (isOverlapping && !supportBtn.classList.contains('force-hidden')) {
        supportBtn.style.display = 'none';
        supportBtn.classList.add('force-hidden');
      } else if (!isOverlapping && supportBtn.classList.contains('force-hidden')) {
        supportBtn.style.display = '';
        supportBtn.classList.remove('force-hidden');
      }
    };

    window.addEventListener('scroll', () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        updateBanner();
        checkElementsOverlap();
        ticking = false;
      });
      ticking = true;
    });
    
    // Проверка при изменении размера окна
    window.addEventListener('resize', () => {
      setTimeout(checkElementsOverlap, 50);
    });
    
    // Дополнительная проверка на основе ширины экрана
    const checkScreenWidth = () => {
      const supportBtn = document.querySelector('.support-mail-btn');
      if (!supportBtn) return;
      
      const screenWidth = window.innerWidth;
      
      // Скрываем кнопку support на экранах меньше 1050px (раньше чем кнопка начнет уменьшаться)
      if (screenWidth < 1050) {
        if (!supportBtn.classList.contains('force-hidden')) {
          supportBtn.style.display = 'none';
          supportBtn.classList.add('force-hidden');
        }
      } else if (screenWidth >= 1150) {
        // Показываем кнопку на больших экранах, если нет пересечения
        if (supportBtn.classList.contains('force-hidden')) {
          supportBtn.style.display = '';
          supportBtn.classList.remove('force-hidden');
          setTimeout(checkElementsOverlap, 50);
        }
      }
    };
    
    // Проверка ширины экрана при изменении размера
    window.addEventListener('resize', () => {
      checkScreenWidth();
      setTimeout(checkElementsOverlap, 100);
    });
    
    // Первоначальные проверки
    setTimeout(() => {
      checkScreenWidth();
      checkElementsOverlap();
    }, 500);
    
    // Дополнительная проверка через интервал для надежности
    setInterval(() => {
      if (parseFloat(stickyBanner.style.opacity || '0') > 0.5) {
        checkScreenWidth();
        checkElementsOverlap();
      }
    }, 2000);
  };

  // 8.5. АДАПТИВНАЯ ЛОГИКА ДЛЯ СТРАНИЦ 2, 4, 6
  const initResponsiveLayout = () => {
    const checkLayoutBreakpoint = () => {
      const screenWidth = window.innerWidth;
      
      // Страница 2 (PAIN) - карточки (теперь только 2 карточки)
      const artCardsRow = document.getElementById('art-cards-row');
      if (artCardsRow) {
        // Всегда используем flex для центрирования двух карточек
        artCardsRow.className = 'flex flex-col md:flex-row gap-8 px-4 py-8 justify-center items-center';
      }
      
      // Страница 4 (PRICE) - заголовок
      const priceTitle = document.querySelector('#price-section h2');
      if (priceTitle) {
        if (screenWidth < 1050) {
          priceTitle.className = 'text-[1.7rem] md:text-4xl font-bold mb-2 leading-tight';
        } else {
          priceTitle.className = 'text-[1.9rem] md:text-5xl font-bold mb-2 leading-tight';
        }
      }
      
      // Страница 6 (ABOUT) - факты
      const aboutFactsGrid = document.getElementById('about-facts-grid');
      if (aboutFactsGrid) {
        const hiddenFacts = aboutFactsGrid.querySelectorAll('.hidden.md\\:flex');
        if (screenWidth < 1050) {
          hiddenFacts.forEach(fact => {
            fact.classList.add('hidden');
            fact.classList.remove('md:flex');
          });
        } else {
          hiddenFacts.forEach(fact => {
            fact.classList.remove('hidden');
            fact.classList.add('md:flex');
          });
        }
      }
    };
    
    // Проверка при изменении размера окна
    window.addEventListener('resize', () => {
      setTimeout(checkLayoutBreakpoint, 50);
    });
    
    // Первоначальная проверка
    setTimeout(checkLayoutBreakpoint, 100);
  };

  // 9. ПАРАЛЛАКС ЭФФЕКТ ДЛЯ HERO СЕКЦИИ
  const initParallaxEffect = () => {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        hero.style.transform = `translateY(${scrollY * 0.5}px)`;
        ticking = false;
      });
      ticking = true;
    });
  };

  // 10. FAQ АККОРДЕОН
  const initFAQAccordion = () => {
    document.querySelectorAll('.faq-item').forEach(item => {
      const [question, answer] = ['.faq-toggle', '.faq-answer'].map(sel => item.querySelector(sel));
      if (!question || !answer) return;
      
      question.onclick = () => {
        const isOpen = answer.classList.contains('open');
        
        // Закрываем все FAQ
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          const [otherAnswer, otherToggle] = ['.faq-answer', '.faq-toggle'].map(sel => otherItem.querySelector(sel));
          if (otherAnswer && otherToggle) {
            otherAnswer.classList.remove('open');
            otherAnswer.classList.add('hidden');
            otherToggle.classList.remove('open');
          }
        });
        
        // Открываем текущий, если был закрыт
        if (!isOpen) {
          answer.classList.add('open');
          answer.classList.remove('hidden');
          question.classList.add('open');
        }
      };
    });
  };

  // ИНИЦИАЛИЗАЦИЯ ВСЕХ КОМПОНЕНТОВ
  initViewersCounter();          // 1. Счетчик просмотров (3-7 сек)
  initSalesCounter();            // 2. Счетчик продаж (5-10 сек)
  initCountdownTimer();          // 3. Таймер обратного отсчета
  initToggleContent();           // 4. Переключатель контента
  initSmoothScroll();            // 5. Smooth scroll
  initSectionAnimations();       // 6. Анимации секций
  initFinalSectionObserver();    // 7. Отслеживание финальной секции
  initStickyBanner();            // 8. Липкий баннер
  initResponsiveLayout();        // 8.5. Адаптивная логика для страниц 2, 4, 6
  initParallaxEffect();          // 9. Параллакс эффект
  initFAQAccordion();            // 10. FAQ аккордеон
  
  // Переинициализация при изменении размера окна
  window.addEventListener('resize', () => {
    initToggleContent();
  });

  // 0. PERSIST SCROLL POSITION BETWEEN RELOADS (dev helper)
  // Saves scrollY on unload and restores it on next load. Non-invasive, easily removable.
  try {
    const savedY = sessionStorage.getItem('dev:lastScrollY');
    if (savedY !== null) {
      // Restore after next frame to avoid layout thrash with other init scripts
      requestAnimationFrame(() => window.scrollTo(0, parseInt(savedY, 10) || 0));
      // One-time restore
      sessionStorage.removeItem('dev:lastScrollY');
    }
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('dev:lastScrollY', String(window.scrollY || window.pageYOffset || 0));
    });
  } catch (e) {
    console.debug('Scroll persist unavailable:', e);
  }
});