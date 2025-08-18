document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector('input[type="email"]');
  // ensure placeholder is never auto-translated
  if (emailInput) {
    emailInput.setAttribute('translate', 'no');
    emailInput.setAttribute('lang', 'en');
    emailInput.classList.add('notranslate');
  }
  const ctaSelectors = [
    '#sticky-banner .animated-gradient-btn',
    '#main-btn',
    '#price-section .animated-gradient-btn', 
    '#final-cta .animated-gradient-btn',
    '.hero-section .animated-gradient-btn'
  ];
  
  const ctaButtons = ctaSelectors.map(sel => document.querySelector(sel)).filter(Boolean);
  
  let typewriterActive = false;
  // Lock text we want to keep in the placeholder
  const PLACEHOLDER_TEXT = 'Enter your email';
  
  const typewriterEffect = (input, text, speed = 120) => {
    if (typewriterActive || input.value.length > 0) return;
    typewriterActive = true;
    
    let i = 0;
    input.placeholder = '';
    input.classList.add('typewriter-active');
    
    const type = () => {
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
  
  // ===== Focus mode (dim everything except email, CTA, sales counter) =====
  const overlayId = 'focus-overlay';
  let overlay = document.getElementById(overlayId);
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = overlayId;
    document.body.appendChild(overlay);
  }

  const emailWrap = document.querySelector('#hero-form-wrap .gradient-border-wrap');
  const finalCtaBtn = document.getElementById('final-cta-btn');
  const finalCtaTimerWrap = document.getElementById('final-cta-timer-wrap');
  // Убрали sales-counter из подсветки, чтобы оставить ровно 3 элемента без затемнения
  // const salesCounter = document.querySelector('.sales-counter-pulse');
  // const salesCountNum = document.getElementById('course-sales-count');
  // const salesLabel = document.getElementById('course-sales-label');
  // const salesCounterWrapper = salesCounter ? salesCounter.parentElement : null;

  const highlightTargets = [finalCtaTimerWrap, emailWrap, finalCtaBtn].filter(Boolean);

  const toggleFocusMode = (enable) => {
    if (!overlay) return;
    if (enable) {
      overlay.classList.add('active');
      highlightTargets.forEach(el => el && el.classList.add('focus-highlight'));
      // click outside to exit
      const off = () => disableFocusMode();
      overlay.addEventListener('click', off, { once: true });
    } else {
      overlay.classList.remove('active');
      highlightTargets.forEach(el => el && el.classList.remove('focus-highlight'));
    }
  };

  // const escHandler = (e) => {
  //   if (e.key === 'Escape') disableFocusMode();
  // };

  const enableFocusMode = () => toggleFocusMode(true);
  const disableFocusMode = () => toggleFocusMode(false);

  const safeScrollIntoView = () => {
    if (!emailInput) return;
    const targets = [finalCtaTimerWrap, emailWrap, finalCtaBtn].filter(Boolean);
    // Compute union rect
    const rects = targets.map(t => t.getBoundingClientRect());
    const union = rects.reduce((acc, r) => ({
      top: Math.min(acc.top, r.top),
      bottom: Math.max(acc.bottom, r.bottom)
    }), { top: rects[0]?.top ?? 0, bottom: rects[0]?.bottom ?? 0 });

    const vv = window.visualViewport;
    const vh = vv ? vv.height : window.innerHeight;
    
    // Адаптивные паддинги для мобильной клавиатуры
    const topPad = 16;
    const keyboardHeight = window.innerHeight - vh;
    // Больше отступ снизу если клавиатура открыта (для панели автоподсказок iOS)
    const bottomPad = keyboardHeight > 50 ? Math.min(keyboardHeight * 0.3, 120) : 20;

    const currentScrollY = window.scrollY || window.pageYOffset;
    const targetTopDoc = union.top + currentScrollY;
    const targetBottomDoc = union.bottom + currentScrollY;

    // Проверяем, нужно ли корректировать позицию
    const availableSpace = vh - topPad - bottomPad;
    const unionHeight = union.bottom - union.top;
    
    // Если блок не помещается или выходит за границы
    if (union.top < topPad || union.bottom > vh - bottomPad || unionHeight > availableSpace) {
      // Целимся показать блок в верхней части доступного пространства
      let desiredScroll = targetTopDoc - topPad - (availableSpace - unionHeight) * 0.1;
      desiredScroll = Math.max(0, Math.min(desiredScroll, document.body.scrollHeight - vh));
      
      window.scrollTo({ top: desiredScroll, behavior: 'smooth' });
    }

    // Фокус с задержкой после скролла
    setTimeout(() => {
      emailInput.focus({ preventScroll: true });
      typewriterEffect(emailInput, 'Enter your email');
    }, 200);

    if (vv) {
      let resizeRetries = 0;
      const maxRetries = 3;
      
      const onResize = () => {
        // Ретраи для iOS Safari (viewport меняется ступенчато)
        const retryCheck = () => {
          const r2 = targets.map(t => t.getBoundingClientRect());
          const u2 = r2.reduce((acc, r) => ({ 
            top: Math.min(acc.top, r.top), 
            bottom: Math.max(acc.bottom, r.bottom) 
          }), { top: r2[0]?.top ?? 0, bottom: r2[0]?.bottom ?? 0 });
          
          const newKeyboardHeight = window.innerHeight - vv.height;
          const newBottomPad = newKeyboardHeight > 50 ? Math.min(newKeyboardHeight * 0.3, 120) : 20;
          
          if (u2.bottom > vv.height - newBottomPad || u2.top < topPad) {
            const newAvailableSpace = vv.height - topPad - newBottomPad;
            const newDesired = (window.scrollY + u2.top) - topPad - (newAvailableSpace - (u2.bottom - u2.top)) * 0.1;
            window.scrollTo({ top: Math.max(0, newDesired), behavior: 'smooth' });
          }
        };
        
        retryCheck();
        
        // Дополнительные ретраи через requestAnimationFrame и setTimeout
        if (resizeRetries < maxRetries) {
          requestAnimationFrame(() => {
            retryCheck();
            setTimeout(retryCheck, 50);
            setTimeout(retryCheck, 150);
            setTimeout(retryCheck, 300);
          });
          resizeRetries++;
        }
      };
      
      vv.addEventListener('resize', onResize, { passive: true });
      
      // Cleanup после blur
      const cleanup = () => {
        vv.removeEventListener('resize', onResize);
        emailInput.removeEventListener('blur', cleanup);
        resizeRetries = 0;
      };
      emailInput.addEventListener('blur', cleanup);
    }
  };
  
  const focusOnEmail = () => {
    if (!emailInput) return;
    enableFocusMode();
    safeScrollIntoView();
  };
  
  ctaButtons.forEach(btn => {
    ['click', 'keydown'].forEach(event => {
      btn.addEventListener(event, e => {
        if (event === 'keydown' && e.key !== 'Enter') return;
        e.preventDefault();
        focusOnEmail();
      });
    });
  });
  
  if (emailInput) {
    // Gate overlay activation only for user-initiated focus
    let userInitiatedFocus = false;
    let userInitiatedTimer = null;

    const markUserInitiated = () => {
      userInitiatedFocus = true;
      if (userInitiatedTimer) clearTimeout(userInitiatedTimer);
      // short window to treat the next focus as user-initiated
      userInitiatedTimer = setTimeout(() => { userInitiatedFocus = false; }, 1500);
    };

    emailInput.addEventListener('pointerdown', markUserInitiated, { passive: true });
    emailInput.addEventListener('touchstart', markUserInitiated, { passive: true });
    emailInput.addEventListener('mousedown', markUserInitiated, { passive: true });

    emailInput.addEventListener('focus', () => {
      enableFocusMode();
      safeScrollIntoView();  // Добавляем вызов для прямого клика в поле
      typewriterEffect(emailInput, 'Enter your email');
      setCaretToEnd(emailInput);
    });
    emailInput.addEventListener('input', () => {
      if (emailInput.value.length > 0) {
        typewriterActive = false;
        emailInput.placeholder = 'Enter your email';
        setCaretToEnd(emailInput);
      }
    });
    emailInput.addEventListener('change', () => {
      setCaretToEnd(emailInput);
    });
    emailInput.addEventListener('select', () => {
      setCaretToEnd(emailInput);
    });
    // Safari autofill hook: срабатывает при применении :-webkit-autofill
    emailInput.addEventListener('animationstart', (e) => {
      if (e.animationName === 'autofill-fix') {
        setCaretToEnd(emailInput);
      }
    }, { passive: true });
    emailInput.addEventListener('blur', () => {
      typewriterActive = false;
      emailInput.placeholder = 'Enter your email';
      userInitiatedFocus = false;
      // overlay остаётся активным, закрывается только кликом по нему
    });
    // Protect placeholder from external modifications (e.g., auto-translate)
    const placeholderObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'placeholder') {
          if (!typewriterActive && emailInput.placeholder !== PLACEHOLDER_TEXT) {
            emailInput.placeholder = PLACEHOLDER_TEXT;
          }
        }
      }
    });
    placeholderObserver.observe(emailInput, { attributes: true, attributeFilter: ['placeholder'] });
  }
  
  console.log(`CTA Focus Script loaded - ${ctaButtons.length} buttons found`);
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