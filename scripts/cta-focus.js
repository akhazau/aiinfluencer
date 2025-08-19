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

  const focusOnEmail = () => {
    if (!emailInput) return;
    emailInput.setAttribute('translate', 'no');
    emailInput.setAttribute('lang', 'en');
    emailInput.classList.add('notranslate');
    emailInput.placeholder = PLACEHOLDER_TEXT;
    emailInput.focus({ preventScroll: true });
    setCaretToEnd(emailInput);
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

    emailInput.addEventListener('focus', () => {
      // простой режим: фокус остаётся в исходном поле
      emailInput.placeholder = PLACEHOLDER_TEXT;
    });

    emailInput.addEventListener('blur', () => {
      typewriterActive = false;
      emailInput.placeholder = PLACEHOLDER_TEXT;
      userInitiatedFocus = false;
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