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
  
  // ===== Focus overlay (kept for dimming background) =====
  const overlayId = 'focus-overlay';
  let overlay = document.getElementById(overlayId);
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = overlayId;
    document.body.appendChild(overlay);
  }

  const emailWrap = document.querySelector('#hero-form-wrap .gradient-border-wrap');
  const finalCtaBtn = document.getElementById('final-cta-btn');
  const salesCounter = document.querySelector('.sales-counter-pulse');
  const salesCountNum = document.getElementById('course-sales-count');
  const salesLabel = document.getElementById('course-sales-label');
  const salesCounterWrapper = salesCounter ? salesCounter.parentElement : null;

  const highlightTargets = [emailWrap, finalCtaBtn, salesCounterWrapper, salesCounter, salesCountNum, salesLabel].filter(Boolean);

  // === Modal DOM (bottom sheet) ===
  const ensureModal = () => {
    let sheet = document.getElementById('cta-modal-sheet');
    if (sheet) return sheet;
    sheet = document.createElement('div');
    sheet.id = 'cta-modal-sheet';

    const content = document.createElement('div');
    content.id = 'cta-modal-content';

    const closeBtn = document.createElement('button');
    closeBtn.id = 'cta-modal-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

    sheet.appendChild(content);
    sheet.appendChild(closeBtn);
    document.body.appendChild(sheet);
    return sheet;
  };

  const modal = ensureModal();
  const modalContent = modal.querySelector('#cta-modal-content');
  const modalClose = modal.querySelector('#cta-modal-close');

  // Placeholders for returning nodes
  const phEmail = document.createElement('div'); phEmail.style.display = 'none';
  const phCta = document.createElement('div'); phCta.style.display = 'none';
  const phSales = document.createElement('div'); phSales.style.display = 'none';

  const targets = {
    emailWrap,
    finalCtaBtn,
    salesCounterWrapper
  };

  const moveIn = () => {
    // insert placeholders before moving
    if (targets.emailWrap && !phEmail.parentNode) targets.emailWrap.parentNode.insertBefore(phEmail, targets.emailWrap);
    if (targets.finalCtaBtn && !phCta.parentNode) targets.finalCtaBtn.parentNode.insertBefore(phCta, targets.finalCtaBtn);
    if (targets.salesCounterWrapper && !phSales.parentNode) targets.salesCounterWrapper.parentNode.insertBefore(phSales, targets.salesCounterWrapper);

    // container inside modal
    // Use a simple stack layout; reuse existing nodes without cloning
    if (targets.emailWrap) modalContent.appendChild(targets.emailWrap);
    if (targets.finalCtaBtn) modalContent.appendChild(targets.finalCtaBtn);
    if (targets.salesCounterWrapper) modalContent.appendChild(targets.salesCounterWrapper);
  };

  const moveBack = () => {
    if (phEmail.parentNode && targets.emailWrap) phEmail.parentNode.insertBefore(targets.emailWrap, phEmail);
    if (phCta.parentNode && targets.finalCtaBtn) phCta.parentNode.insertBefore(targets.finalCtaBtn, phCta);
    if (phSales.parentNode && targets.salesCounterWrapper) phSales.parentNode.insertBefore(targets.salesCounterWrapper, phSales);

    [phEmail, phCta, phSales].forEach(ph => ph.remove());
  };

  const openModal = () => {
    if (!modal) return;
    document.body.classList.add('modal-open');
    overlay.classList.add('active');
    moveIn();
    modal.classList.add('active');
    // focus the email input inside moved container
    const movedEmailInput = modal.querySelector('input[type="email"]') || emailInput;
    if (movedEmailInput) {
      movedEmailInput.setAttribute('translate', 'no');
      movedEmailInput.setAttribute('lang', 'en');
      movedEmailInput.classList.add('notranslate');
      movedEmailInput.placeholder = PLACEHOLDER_TEXT;
      sanitizeEmailValue && sanitizeEmailValue();
      movedEmailInput.focus({ preventScroll: true });
      setCaretToEnd(movedEmailInput);
    }
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
    moveBack();
  };

  // Close interactions
  overlay.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Old focus overlay kept minimal for compatibility
  const toggleFocusMode = (enable) => {
    if (!overlay) return;
    if (enable) overlay.classList.add('active'); else overlay.classList.remove('active');
  };

  const enableFocusMode = () => toggleFocusMode(true);
  const disableFocusMode = () => toggleFocusMode(false);

  const focusOnEmail = () => {
    openModal();
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
      // вместо фокуса в исходном месте — открываем модалку
      openModal();
    });

    emailInput.addEventListener('blur', () => {
      typewriterActive = false;
      emailInput.placeholder = 'Enter your email';
      userInitiatedFocus = false;
    });
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