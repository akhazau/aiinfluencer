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

  // 2. СЧЕТЧИК ПРОДАЖ КУРСА (course sales)
  const initSalesCounter = () => {
    const element = document.getElementById("course-sales-count");
    if (!element) return;
    
    const update = () => {
      const baseCount = 23;
      const variation = Math.floor(Math.random() * 6) - 3;
      const currentCount = Math.max(1, baseCount + variation);
      element.textContent = currentCount;
    };
    
    update();
    setInterval(update, Math.random() * 5000 + 5000); // 5-10 секунд
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
    const [moreBtn, lessBtn, hiddenContent] = [
      '.about-more-btn', '.about-less-btn', '.about-hidden-content'
    ].map(sel => document.querySelector(sel));
    
    if (!moreBtn || !lessBtn || !hiddenContent) return;
    
    const toggle = (show) => {
      hiddenContent.style.display = show ? 'block' : 'none';
      moreBtn.style.display = show ? 'none' : 'inline';
      lessBtn.style.display = show ? 'inline' : 'none';
      
      const key = show ? 'about-less-btn' : 'about-more-btn';
      const btn = show ? lessBtn : moreBtn;
      if (window.translate) {
        btn.textContent = translate.translations[translate.getLang()][key];
      }
    };
    
    moreBtn.onclick = (e) => { e.preventDefault(); toggle(true); };
    lessBtn.onclick = (e) => { e.preventDefault(); toggle(false); };
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

    window.addEventListener('scroll', () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        updateBanner();
        ticking = false;
      });
      ticking = true;
    });
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
  initParallaxEffect();          // 9. Параллакс эффект
  initFAQAccordion();            // 10. FAQ аккордеон

});