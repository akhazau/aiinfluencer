// CTA Focus Script - фокус на поле email при клике на кнопки
document.addEventListener("DOMContentLoaded", function () {
  
  // Находим поле email
  const emailInput = document.querySelector('input[type="email"]');
  
  // Находим все CTA кнопки
  const ctaButtons = [
    // Шторка (Sticky Banner)
    document.querySelector('#sticky-banner .animated-gradient-btn'),
    // Hero секция
    document.querySelector('#main-btn'),
    // Price секция
    document.querySelector('#price-section .animated-gradient-btn'),
    // Final CTA секция
    document.querySelector('#final-cta .animated-gradient-btn')
  ];
  
  // Функция для эффекта печатания placeholder
  function typewriterEffect(input, text, speed = 100) {
    let i = 0;
    const originalPlaceholder = input.placeholder;
    
    // Очищаем placeholder
    input.placeholder = '';
    
    function type() {
      if (i < text.length) {
        input.placeholder += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // После завершения печатания возвращаем оригинальный placeholder
        setTimeout(() => {
          input.placeholder = originalPlaceholder;
        }, 2000); // Показываем 2 секунды
      }
    }
    
    type();
  }
  
  // Функция для фокуса на поле email с эффектом печатания
  function focusOnEmail() {
    if (emailInput) {
      // Плавно прокручиваем к полю email
      emailInput.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // Небольшая задержка для плавности
      setTimeout(() => {
        emailInput.focus();
        // Запускаем эффект печатания
        typewriterEffect(emailInput, 'Your email address', 80);
      }, 300);
    }
  }
  
  // Добавляем обработчики событий для всех CTA кнопок
  ctaButtons.forEach(button => {
    if (button) {
      button.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение
        focusOnEmail();
      });
    }
  });
  
  // Дополнительно можно добавить обработчик для Enter на кнопках
  ctaButtons.forEach(button => {
    if (button) {
      button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          focusOnEmail();
        }
      });
    }
  });
  
  // Эффект печатания при прямом клике на поле email
  if (emailInput) {
    emailInput.addEventListener('focus', function() {
      typewriterEffect(this, 'Your email address', 80);
    });
  }
  
  console.log('CTA Focus Script loaded -', ctaButtons.length, 'buttons found');
}); 