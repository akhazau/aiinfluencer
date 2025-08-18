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
  // Возвращаем счётчик продаж как третий незатемняемый элемент
  const salesCounter = document.querySelector('.sales-counter-pulse');
  const salesCountNum = document.getElementById('course-sales-count');
  const salesLabel = document.getElementById('course-sales-label');
  const salesCounterWrapper = salesCounter ? salesCounter.parentElement : null;

  const highlightTargets = [emailWrap, finalCtaBtn, salesCounterWrapper, salesCounter, salesCountNum, salesLabel].filter(Boolean);

  const toggleFocusMode = (enable) => {
    if (!overlay) return;
    const root = document.documentElement;
    if (enable) {
      overlay.classList.add('active');
      root.classList.add('focus-mode');
      highlightTargets.forEach(el => el && el.classList.add('focus-highlight'));
      // click outside to exit
      const off = () => disableFocusMode();
      overlay.addEventListener('click', off, { once: true });
    } else {
      overlay.classList.remove('active');
      root.classList.remove('focus-mode');
      highlightTargets.forEach(el => el && el.classList.remove('focus-highlight'));
    }
  };

  // const escHandler = (e) => {
  //   if (e.key === 'Escape') disableFocusMode();
  // };

  const enableFocusMode = () => toggleFocusMode(true);
  const disableFocusMode = () => toggleFocusMode(false);

  // Вспомогательный spacer для времени открытой клавиатуры, чтобы избежать "отпружинивания"
  let keyboardSpacer = null;
  const ensureKeyboardSpacer = () => {
    if (keyboardSpacer) return keyboardSpacer;
    keyboardSpacer = document.createElement('div');
    keyboardSpacer.setAttribute('data-keyboard-spacer', '');
    keyboardSpacer.style.width = '100%';
    keyboardSpacer.style.height = '0px';
    keyboardSpacer.style.pointerEvents = 'none';
    keyboardSpacer.style.background = 'transparent';
    // без переходов, чтобы не было дёргания
    keyboardSpacer.style.transition = 'none';
    document.body.appendChild(keyboardSpacer);
    return keyboardSpacer;
  };
  const updateKeyboardSpacerHeight = () => {
    if (!keyboardSpacer) return;
    const vv = window.visualViewport;
    if (vv) {
      const keyboardHeight = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop));
      const extra = 80; // запас под панель подсказок
      keyboardSpacer.style.height = Math.max(0, keyboardHeight + extra) + 'px';
    } else {
      // Фолбэк, если visualViewport недоступен
      keyboardSpacer.style.height = '260px';
    }
  };
  const removeKeyboardSpacer = () => {
    if (keyboardSpacer && keyboardSpacer.parentNode) {
      keyboardSpacer.parentNode.removeChild(keyboardSpacer);
    }
    keyboardSpacer = null;
  };
  
  const safeScrollIntoView = () => {
    if (!emailInput) return;
    const targets = [emailWrap, finalCtaBtn, (salesCounterWrapper || salesCounter)].filter(Boolean);
    if (!targets.length) return;

    const rects = targets.map(t => t.getBoundingClientRect());
    const union = rects.reduce((acc, r) => ({
      top: Math.min(acc.top, r.top),
      bottom: Math.max(acc.bottom, r.bottom)
    }), { top: rects[0]?.top ?? 0, bottom: rects[0]?.bottom ?? 0 });

    const vv = window.visualViewport;
    const topPad = 16;

    const adjustNow = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      const r2 = targets.map(t => t.getBoundingClientRect());
      const u2 = r2.reduce((acc, r) => ({ top: Math.min(acc.top, r.top), bottom: Math.max(acc.bottom, r.bottom) }), { top: r2[0]?.top ?? 0, bottom: r2[0]?.bottom ?? 0 });

      let vh = window.innerHeight;
      let safeBottom = 20;
      if (vv) {
        const keyboardHeight = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop));
        vh = vv.height;
        safeBottom = keyboardHeight + 80;
      }

      const availableSpace = vh - topPad - safeBottom;
      const unionHeight = u2.bottom - u2.top;
      let desiredTop = null;

      const allowedBottom = vh - safeBottom;
      if (u2.bottom > allowedBottom) {
        const delta = u2.bottom - allowedBottom;
        desiredTop = currentScrollY + delta;
      }
      if (u2.top < topPad) {
        const deltaTop = u2.top - topPad;
        desiredTop = (desiredTop ?? currentScrollY) + deltaTop;
      }
      if (unionHeight > availableSpace && u2.top < topPad + 8) {
        desiredTop = (desiredTop ?? currentScrollY) - 8;
      }

      if (desiredTop != null) {
        desiredTop = Math.max(0, Math.min(desiredTop, document.body.scrollHeight - vh));
        window.scrollTo({ top: desiredTop, behavior: 'auto' });
      }
    };

    // Важно: сначала ставим spacer, затем корректируем скролл
    ensureKeyboardSpacer();
    updateKeyboardSpacerHeight();

    adjustNow();

    if (window.requestAnimationFrame) requestAnimationFrame(adjustNow);
    setTimeout(adjustNow, 100);
    setTimeout(adjustNow, 300);
    setTimeout(adjustNow, 600);

    if (vv) {
      const onViewportChange = () => { updateKeyboardSpacerHeight(); adjustNow(); };
      vv.addEventListener('resize', onViewportChange, { passive: true });
      vv.addEventListener('scroll', onViewportChange, { passive: true });
      const cleanup = () => {
        vv.removeEventListener('resize', onViewportChange);
        vv.removeEventListener('scroll', onViewportChange);
        emailInput.removeEventListener('blur', cleanup);
        removeKeyboardSpacer();
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
      userInitiatedTimer = setTimeout(() => { userInitiatedFocus = false; }, 1500);
      // Подготовительная прокрутка до появления клавиатуры
      ensureKeyboardSpacer();
      updateKeyboardSpacerHeight();
      setTimeout(() => safeScrollIntoView(), 0);
    };

    emailInput.addEventListener('pointerdown', markUserInitiated, { passive: true });
    emailInput.addEventListener('touchstart', markUserInitiated, { passive: true });
    emailInput.addEventListener('mousedown', markUserInitiated, { passive: true });

    // Защита от мусорных автоподстановок/переводов в value
    const isGarbageEmailPrompt = (val) => {
    if (!val) return false;
    const s = val.toLowerCase().trim();
    if (s.includes('@')) return false;
    if (s.length > 40) return false;
    const patterns = [
    'enter your email', 'your email', 'email address',
    'введите', 'почта', 'электрон', 'почтовый адрес',
    'tu correo', 'correo electrónico',
    'e-mailinizi', 'e-posta', 'メール', '메일'
    ];
    return patterns.some(p => s.includes(p));
    };
    const sanitizeEmailValue = () => {
    if (emailInput && isGarbageEmailPrompt(emailInput.value)) {
    emailInput.value = '';
    }
    };

    emailInput.addEventListener('focus', () => {
      // Сначала создаём/обновляем spacer, чтобы закрепить позицию
      ensureKeyboardSpacer();
      updateKeyboardSpacerHeight();

      enableFocusMode();
      // Фиксированный плейсхолдер и зачистка мусора в value
      emailInput.placeholder = PLACEHOLDER_TEXT;
      sanitizeEmailValue();

      safeScrollIntoView();
      setTimeout(() => safeScrollIntoView(), 50);
      // typewriterEffect убран, чтобы не провоцировать перевод/подстановки
      setCaretToEnd(emailInput);
    });

    // Усиливаем защиту на вводе
    emailInput.addEventListener('input', () => {
      sanitizeEmailValue();
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
      document.documentElement.classList.remove('focus-mode');
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