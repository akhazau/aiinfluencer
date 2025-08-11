document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector('input[type="email"]');
  const ctaSelectors = [
    '#sticky-banner .animated-gradient-btn',
    '#main-btn',
    '#price-section .animated-gradient-btn', 
    '#final-cta .animated-gradient-btn'
  ];
  
  const ctaButtons = ctaSelectors.map(sel => document.querySelector(sel)).filter(Boolean);
  
  let typewriterActive = false;
  
  const typewriterEffect = (input, text, speed = 80) => {
    if (typewriterActive || input.value.length > 0) return;
    typewriterActive = true;
    
    let i = 0;
    input.placeholder = '';
    
    const type = () => {
      if (input.value.length > 0) {
        typewriterActive = false;
        input.placeholder = text;
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
          }
        }, 2000);
      }
    };
    type();
  };
  
  const focusOnEmail = () => {
    if (!emailInput) return;
    emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      emailInput.focus();
      typewriterEffect(emailInput, 'Your email address');
    }, 300);
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
    emailInput.addEventListener('focus', () => typewriterEffect(emailInput, 'Your email address'));
    emailInput.addEventListener('input', () => {
      if (emailInput.value.length > 0) {
        typewriterActive = false;
        emailInput.placeholder = 'Your email address';
      }
    });
    emailInput.addEventListener('blur', () => {
      typewriterActive = false;
      emailInput.placeholder = 'Your email address';
    });
  }
  
  console.log(`CTA Focus Script loaded - ${ctaButtons.length} buttons found`);
});