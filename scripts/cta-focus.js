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
  const salesCounter = document.querySelector('.sales-counter-pulse');
  const salesCountNum = document.getElementById('course-sales-count');
  const salesLabel = document.getElementById('course-sales-label');
  const salesCounterWrapper = salesCounter ? salesCounter.parentElement : null;

  const highlightTargets = [emailWrap, finalCtaBtn, salesCounterWrapper, salesCounter, salesCountNum, salesLabel].filter(Boolean);

  const toggleFocusMode = (enable) => {
    if (!overlay) return;
    if (enable) {
      overlay.classList.add('active');
      highlightTargets.forEach(el => el && el.classList.add('focus-highlight'));
      // click outside to exit
      const off = () => disableFocusMode();
      overlay.addEventListener('click', off, { once: true });
      document.addEventListener('keydown', escHandler);
    } else {
      overlay.classList.remove('active');
      highlightTargets.forEach(el => el && el.classList.remove('focus-highlight'));
      document.removeEventListener('keydown', escHandler);
    }
  };

  const escHandler = (e) => {
    if (e.key === 'Escape') disableFocusMode();
  };

  const enableFocusMode = () => toggleFocusMode(true);
  const disableFocusMode = () => toggleFocusMode(false);

  const safeScrollIntoView = () => {
    if (!emailInput) return;
    const targets = [emailWrap, finalCtaBtn, (salesCounterWrapper || salesCounter)].filter(Boolean);
    // Compute union rect
    const rects = targets.map(t => t.getBoundingClientRect());
    const union = rects.reduce((acc, r) => ({
      top: Math.min(acc.top, r.top),
      bottom: Math.max(acc.bottom, r.bottom)
    }), { top: rects[0]?.top ?? 0, bottom: rects[0]?.bottom ?? 0 });

    const vv = window.visualViewport;
    const vh = vv ? vv.height : window.innerHeight;
    const offset = 12; // small padding

    // target center Y within visual viewport
    const currentScrollY = window.scrollY || window.pageYOffset;
    const targetTopDoc = union.top + currentScrollY;
    const targetBottomDoc = union.bottom + currentScrollY;

    // Aim to bring union into view with a bit of top padding
    let desiredScroll = targetTopDoc - (vh * 0.15);
    desiredScroll = Math.max(0, Math.min(desiredScroll, document.body.scrollHeight - vh));

    window.scrollTo({ top: desiredScroll, behavior: 'smooth' });

    // After scroll, ensure focus and re-adjust for keyboard changes
    setTimeout(() => {
      emailInput.focus({ preventScroll: true });
      typewriterEffect(emailInput, 'Enter your email');
    }, 200);

    if (vv) {
      const onResize = () => {
        // When keyboard opens, keep union in view
        const r2 = targets.map(t => t.getBoundingClientRect());
        const u2 = r2.reduce((acc, r) => ({ top: Math.min(acc.top, r.top), bottom: Math.max(acc.bottom, r.bottom) }), { top: r2[0]?.top ?? 0, bottom: r2[0]?.bottom ?? 0 });
        if (u2.bottom > vv.height - offset || u2.top < offset) {
          const newDesired = (window.scrollY + u2.top) - (vv.height * 0.15);
          window.scrollTo({ top: Math.max(0, newDesired), behavior: 'smooth' });
        }
      };
      vv.addEventListener('resize', onResize, { passive: true });
      // remove after blur
      const cleanup = () => {
        vv.removeEventListener('resize', onResize);
        emailInput.removeEventListener('blur', cleanup);
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
      if (userInitiatedFocus) enableFocusMode();
      typewriterEffect(emailInput, 'Enter your email');
    });
    emailInput.addEventListener('input', () => {
      if (emailInput.value.length > 0) {
        typewriterActive = false;
        emailInput.placeholder = 'Enter your email';
      }
    });
    emailInput.addEventListener('blur', () => {
      typewriterActive = false;
      emailInput.placeholder = 'Enter your email';
      userInitiatedFocus = false;
      disableFocusMode();
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