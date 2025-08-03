// MOBILE: Простое автоперелистывание бонусов и карты обучения
document.addEventListener("DOMContentLoaded", function () {
  // Только для мобильных
  if (window.innerWidth >= 768) return;

  const bonusCard = document.querySelector('.scroll-stack-card:has(#bonuses-title)');
  const learnMapCard = document.querySelector('.scroll-stack-card:has(#learnmap-title)');
  
  if (!bonusCard || !learnMapCard) return;

  const cards = [bonusCard, learnMapCard];
  let currentCard = 0;

  // Простая функция переключения
  function switchCard() {
    cards.forEach((card, i) => {
      card.style.display = i === currentCard ? 'block' : 'none';
    });
    currentCard = (currentCard + 1) % cards.length;
  }

  // Показываем первую карточку
  switchCard();

  // Автопереключение каждые 8 секунд
  setInterval(switchCard, 8000);
}); 