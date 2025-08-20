document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector('input[type="email"]');
  // ensure placeholder is never auto-translated
  if (emailInput) {
    emailInput.setAttribute('translate', 'no');
    emailInput.setAttribute('lang', 'en');
    emailInput.classList.add('notranslate');
    
    // Обработчики для автозаполнения - устанавливаем курсор в конец
    const handleAutofill = () => {
      if (emailInput.value) {
        setTimeout(() => setCaretToEnd(emailInput), 10);
        setTimeout(() => setCaretToEnd(emailInput), 100);
        setTimeout(() => setCaretToEnd(emailInput), 300);
      }
    };
    
    emailInput.addEventListener('input', handleAutofill);
    emailInput.addEventListener('change', handleAutofill);
    emailInput.addEventListener('animationstart', handleAutofill);
    
    // Специальный обработчик для Safari автозаполнения
    emailInput.addEventListener('blur', () => {
      setTimeout(handleAutofill, 50);
    });
  }
  const ctaSelectors = [
    '#sticky-banner .animated-gradient-btn',
    '#main-btn',
    '#price-section .animated-gradient-btn', 
    '#final-cta .animated-gradient-btn',
    '.hero-section .animated-gradient-btn'
  ];
  
  const ctaButtons = ctaSelectors.map(sel => document.querySelector(sel)).filter(Boolean);

  // === Overlay control (dim background) ===
  const overlay = document.getElementById('focus-overlay');
  const finalCtaBtn = document.getElementById('final-cta-btn');
  const salesCounter = document.querySelector('.sales-counter-pulse');
  const salesCounterWrap = salesCounter ? salesCounter.parentElement : null; // parent has transform: scale -> stacking context
  const gradientWrap = emailInput ? emailInput.closest('.gradient-border-wrap') : null; // show full bordered input above overlay

  // Prefer wrappers that create visual box over inner nodes
  const highlightTargets = [
    gradientWrap || emailInput,
    finalCtaBtn,
    salesCounterWrap || salesCounter
  ].filter(Boolean);

  const addHighlights = () => highlightTargets.forEach(el => el.classList.add('focus-highlight'));
  const removeHighlights = () => highlightTargets.forEach(el => el.classList.remove('focus-highlight'));

  const showOverlay = () => {
    if (!overlay) return;
    overlay.classList.add('active');
    addHighlights();
  };
  const hideOverlay = () => {
    if (!overlay) return;
    overlay.classList.remove('active');
    removeHighlights();
  };
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      e.stopPropagation();
      hideOverlay();
    });
  }
  
  let typewriterActive = false;
  let cancelTypewriter = () => {};
  const PLACEHOLDER_TEXT = 'Enter your email';
  
  const typewriterEffect = (input, text, speed = 120) => {
    if (typewriterActive || input.value.length > 0) return;
    typewriterActive = true;
    let cancelled = false;
    cancelTypewriter = () => { cancelled = true; };
    
    let i = 0;
    input.placeholder = '';
    input.classList.add('typewriter-active');
    
    const type = () => {
      if (cancelled) {
        typewriterActive = false;
        input.placeholder = text;
        input.classList.remove('typewriter-active');
        return;
      }
      if (input.value.length > 0) {
        typewriterActive = false;
        input.placeholder = text;
        input.classList.remove('typewriter-active');
        return;
      }
      if (i < text.length) {
        input.placeholder += text[i++];
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          if (cancelled) {
            typewriterActive = false;
            input.placeholder = text;
            input.classList.remove('typewriter-active');
            return;
          }
          if (input.value.length === 0) {
            input.placeholder = '';
            i = 0;
            type();
          } else {
            typewriterActive = false;
            input.placeholder = text;
            input.classList.remove('typewriter-active');
          }
        }, 2500);
      }
    };
    type();
  };

  const scrollToEmail = () => {
    const emailSection = document.getElementById('hero-form-wrap') || emailInput?.closest('form');
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const focusOnEmail = () => {
    if (!emailInput) return;
    // Сначала прокручиваем к email полю
    scrollToEmail();
    // Небольшая задержка для завершения прокрутки
    setTimeout(() => {
      emailInput.setAttribute('translate', 'no');
      emailInput.setAttribute('lang', 'en');
      emailInput.classList.add('notranslate');
      emailInput.placeholder = PLACEHOLDER_TEXT;
      emailInput.focus({ preventScroll: true });
      setCaretToEnd(emailInput);
      // show overlay when programmatically focusing
      showOverlay();
    }, 300);
  };

  // Typewriter effect will only start when user interacts with the field
  // No automatic typewriter on page load
  
  ctaButtons.forEach(btn => {
    ['click', 'keydown'].forEach(event => {
      btn.addEventListener(event, e => {
        if (event === 'keydown' && e.key !== 'Enter') return;
        
        // Все CTA кнопки теперь прокручивают к email полю
        
        e.preventDefault();
        // Для остальных кнопок - прокручиваем к email полю
        focusOnEmail();
      });
    });
  });

  if (emailInput) {
    let userInitiatedFocus = false;
    let userInitiatedTimer = null;

    const markUserInitiated = () => {
      userInitiatedFocus = true;
      if (userInitiatedTimer) clearTimeout(userInitiatedTimer);
      userInitiatedTimer = setTimeout(() => { userInitiatedFocus = false; }, 1500);
    };

    emailInput.addEventListener('pointerdown', markUserInitiated, { passive: true });
    emailInput.addEventListener('touchstart', markUserInitiated, { passive: true });
    emailInput.addEventListener('mousedown', markUserInitiated, { passive: true });

    emailInput.addEventListener('focus', () => {
      // остановить "печатание" при фокусе
      cancelTypewriter();
      // show overlay when user focuses the input
      showOverlay();
      // запускать печать только если фокус — от клика по самому полю и поле пустое
      if (userInitiatedFocus && emailInput.value.length === 0) {
        typewriterEffect(emailInput, PLACEHOLDER_TEXT);
      } else {
        emailInput.placeholder = PLACEHOLDER_TEXT;
      }
    });

    emailInput.addEventListener('blur', () => {
      // останавливаем печать и НЕ запускаем её заново
      cancelTypewriter();
      typewriterActive = false;
      if (emailInput.value.length === 0) {
        emailInput.placeholder = PLACEHOLDER_TEXT;
      }
      userInitiatedFocus = false;
      // do NOT hide overlay on blur — only overlay click should close it
    });
  }
  
  console.log(`CTA Focus Script loaded - ${ctaButtons.length} buttons found (no modal)`);
  console.log('CTA Focus: Compatible with email-save.js');
});

// СТАВИМ КАРЕТКУ В КОНЕЦ (ретраи для iOS Safari после автозаполнения)
const setCaretToEnd = (input) => {
  if (!input) return;
  const attempt = () => {
    try {
      const len = input.value.length;
      input.setSelectionRange(len, len);
    } catch (e) {}
  };
  attempt();
  if (window.requestAnimationFrame) requestAnimationFrame(attempt);
  setTimeout(attempt, 50);
  setTimeout(attempt, 150);
  setTimeout(attempt, 300);
};