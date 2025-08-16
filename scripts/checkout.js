class CheckoutManager {
    constructor() {
        this.paymentUrl = 'https://aico.lemonsqueezy.com/buy/37ce1a4c-91d3-4c2e-b38a-69e3d41e3933?embed=1';
        this.init();
    }

    init() {
        console.log('CheckoutManager initialized');
    }

    openPaymentWindow() {
        try {
            // Используем LemonSqueezy API для открытия окна оплаты
            if (window.LemonSqueezy && window.LemonSqueezy.Url) {
                window.LemonSqueezy.Url.Open(this.paymentUrl);
            } else {
                // Fallback: открываем в новом окне если LemonSqueezy не загружен
                window.open(this.paymentUrl, '_blank', 'width=800,height=600');
            }
            
            console.log('Payment window opened');
            return true;
        } catch (error) {
            console.error('Error opening payment window:', error);
            // Fallback: прямая ссылка
            window.open('https://aico.lemonsqueezy.com/buy/37ce1a4c-91d3-4c2e-b38a-69e3d41e3933', '_blank');
            return false;
        }
    }

    // Метод для обработки событий LemonSqueezy (если нужно)
    handlePaymentEvents() {
        if (window.LemonSqueezy) {
            window.LemonSqueezy.Setup({
                eventHandler: (event) => {
                    console.log('LemonSqueezy event:', event);
                    // Здесь можно добавить обработку событий оплаты
                }
            });
        }
    }
}

// Создаем глобальный экземпляр
window.checkoutManager = new CheckoutManager();

// Экспортируем для использования в других скриптах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CheckoutManager;
}