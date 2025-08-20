// Email Save Handler
class EmailSaver {
  constructor() {
    this.init();
  }

  init() {
    console.log('EmailSaver init called');
    // LemonSqueezy теперь обрабатывает checkout, форма больше не нужна
    console.log('EmailSaver: Using LemonSqueezy for checkout');
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted!');

    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput?.value?.trim();
    console.log('Email:', email);

    if (!email) {
      this.showMessage('Please enter your email address', 'error');
      if (emailInput) emailInput.focus();
      return;
    }

    try {
      await this.saveEmail(email);
      this.showMessage('Email saved successfully!', 'success');
      console.log('Email saved, opening checkout...');

      // Открываем оплату ТОЛЬКО после успешного сохранения email
      if (window.checkoutManager && typeof window.checkoutManager.openPaymentWindow === 'function') {
        console.log('Using checkoutManager');
        window.checkoutManager.openPaymentWindow();
      } else {
        console.log('Using fallback');
        // Фолбек, если checkoutManager ещё не инициализирован
        try {
          window.open('https://aiinfluencer.site/buy/37ce1a4c-91d3-4c2e-b38a-69e3d41e3933?discount=0', '_blank');
        } catch (err) {
          console.error('Fallback open failed:', err);
        }
      }

      emailInput.value = '';
    } catch (error) {
      console.error('Error saving email:', error);
      this.showMessage('Error saving email', 'error');
    }
  }

  async saveEmail(email) {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    // Получаем существующие email из localStorage
    const savedEmails = JSON.parse(localStorage.getItem('savedEmails') || '[]');
    
    // Проверяем, есть ли уже такой email
    const existingEmail = savedEmails.find(item => item.email === email);
    const tag = existingEmail ? 'repeat' : 'new';
    
    // Создаём новую запись
    const emailRecord = {
      date,
      email,
      tag,
      timestamp: now.getTime()
    };
    
    // Добавляем в массив
    savedEmails.push(emailRecord);
    localStorage.setItem('savedEmails', JSON.stringify(savedEmails));
    
    // Логируем для отладки
    console.log('Email saved:', emailRecord);
    console.log('Tag:', tag === 'repeat' ? 'Повторный email' : 'Новый email');
    
    return true;
  }

  // Функция для экспорта данных в формате таблицы
  exportToMarkdown() {
    const savedEmails = JSON.parse(localStorage.getItem('savedEmails') || '[]');
    
    if (savedEmails.length === 0) {
      console.log('No emails to export');
      return;
    }
    
    let markdown = '# Email Save Log\n\n';
    markdown += '| Date | Email | Tag |\n';
    markdown += '|------|-------|-----|\n';
    
    savedEmails.forEach(record => {
      markdown += `| ${record.date} | ${record.email} | ${record.tag} |\n`;
    });
    
    markdown += '\n## Tags:\n';
    markdown += '- `new` - новый email\n';
    markdown += '- `repeat` - повторный email\n';
    
    console.log('Markdown export:');
    console.log(markdown);
    
    // Копируем в буфер обмена (если поддерживается)
    if (navigator.clipboard) {
      navigator.clipboard.writeText(markdown).then(() => {
        console.log('Markdown copied to clipboard');
      });
    }
    
    return markdown;
  }

  showMessage(text, type = 'info') {
    // Удаляем предыдущее сообщение если есть
    const existingMessage = document.querySelector('.email-save-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Создаём новое сообщение
    const message = document.createElement('div');
    message.className = `email-save-message fixed top-4 right-4 z-[9999] px-4 py-2 rounded-lg text-white font-medium transition-all duration-300`;
    
    if (type === 'success') {
      message.classList.add('bg-green-600');
    } else if (type === 'error') {
      message.classList.add('bg-red-600');
    } else {
      message.classList.add('bg-blue-600');
    }
    
    message.textContent = text;
    document.body.appendChild(message);
    
    // Автоматически убираем через 3 секунды
    setTimeout(() => {
      message.style.opacity = '0';
      setTimeout(() => message.remove(), 300);
    }, 3000);
  }
}

// Инициализируем EmailSaver при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded - initializing EmailSaver');
  const emailSaver = new EmailSaver();
  emailSaver.init();
  
  // Добавляем обработчики для кнопок - прокрутка к email полю
  const heroCta = document.getElementById('hero-cta-btn');
  const priceCta = document.getElementById('price-cta-btn');
  
  [heroCta, priceCta].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const emailInput = document.querySelector('input[type="email"]');
        if (emailInput) {
          emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          emailInput.focus();
        }
      });
    }
  });
  
  // Делаем функцию экспорта доступной глобально
  window.exportEmails = () => emailSaver.exportToMarkdown();
  
  // Экспортируем в глобальную область видимости для отладки
  window.emailSaver = emailSaver;
});

console.log('email-save.js loaded');

// Функция для просмотра сохранённых email в консоли
window.viewSavedEmails = () => {
  const savedEmails = JSON.parse(localStorage.getItem('savedEmails') || '[]');
  console.table(savedEmails);
  return savedEmails;
};