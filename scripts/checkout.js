class CheckoutManager {
    constructor() {
        this.paymentUrl = 'https://aiinfluencer.site/buy/37ce1a4c-91d3-4c2e-b38a-69e3d41e3933?discount=0';
        this.init();
    }

    init() {
        console.log('CheckoutManager initialized');
    }

    openPaymentWindow() {
        try {
            // Открываем новый URL напрямую
            window.open(this.paymentUrl, '_blank');
            console.log('Payment window opened:', this.paymentUrl);
            return true;
        } catch (error) {
            console.error('Error opening payment window:', error);
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