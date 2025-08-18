// Email Save Handler
class EmailSaver {
  constructor() {
    this.init();
  }

  init() {
    const form = document.getElementById('lead-form');
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput?.value?.trim();

    if (!email) {
      this.showMessage('Please enter your email address', 'error');
      if (emailInput) emailInput.focus();
      return;
    }

    try {
      await this.saveEmail(email);
      this.showMessage('Email saved successfully!', 'success');

      // Открываем оплату ТОЛЬКО после успешного сохранения email
      if (window.checkoutManager && typeof window.checkoutManager.openPaymentWindow === 'function') {
        window.checkoutManager.openPaymentWindow();
      } else {
        // Фолбек, если checkoutManager ещё не инициализирован
        try {
          window.open('https://aico.lemonsqueezy.com/buy/37ce1a4c-91d3-4c2e-b38a-69e3d41e3933', '_blank', 'width=800,height=600');
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
    // Создаём CSV строку для добавления
    const now = new Date();
    const date = now.toLocaleDateString('ru-RU');
    const time = now.toLocaleTimeString('ru-RU');
    const csvLine = `${email},${date},${time}\n`;
    
    // Симуляция сохранения (в реальности нужен backend)
    // Пока просто логируем и показываем пользователю
    console.log('Saving email to Excel:', { email, date, time });
    
    // Добавляем в localStorage для демонстрации
    const savedEmails = JSON.parse(localStorage.getItem('savedEmails') || '[]');
    savedEmails.push({ email, date, time, timestamp: now.getTime() });
    localStorage.setItem('savedEmails', JSON.stringify(savedEmails));
    
    // Ранее здесь открывалось окно оплаты. Перенесено в handleSubmit(), чтобы открывалось строго по клику.
    return true;
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

// Инициализируем при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  new EmailSaver();
});