// MOBILE: Автоматическое перелистывание бонусов и карты обучения
document.addEventListener("DOMContentLoaded", function () {
  // Проверяем, что мы на мобильном устройстве
  if (window.innerWidth >= 768) return;

  const bonusCard = document.querySelector('.scroll-stack-card:has(#bonuses-title)');
  const learnMapCard = document.querySelector('.scroll-stack-card:has(#learnmap-title)');
  
  // Альтернативный способ поиска карточек, если :has() не поддерживается
  const allCards = document.querySelectorAll('.scroll-stack-card');
  const bonusCardAlt = Array.from(allCards).find(card => card.querySelector('#bonuses-title'));
  const learnMapCardAlt = Array.from(allCards).find(card => card.querySelector('#learnmap-title'));
  
  const bonusCardFinal = bonusCard || bonusCardAlt;
  const learnMapCardFinal = learnMapCard || learnMapCardAlt;
  
  if (!bonusCardFinal || !learnMapCardFinal) return;

  let currentCard = 0; // 0 = бонусы, 1 = карта обучения
  const cards = [bonusCardFinal, learnMapCardFinal];
  
  // Функция для показа карточки
  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.zIndex = '10';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.zIndex = '1';
      }
    });
  }

  // Функция для переключения карточек
  function switchCard() {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
  }

  // Инициализация
  showCard(0); // Показываем бонусы сначала

  // Автоматическое переключение каждые 8 секунд
  setInterval(switchCard, 8000);

  // Добавляем индикаторы
  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.className = 'flex justify-center gap-2 mt-4';
  indicatorsContainer.innerHTML = `
    <div class="w-2 h-2 rounded-full bg-pink-400 transition-all duration-300" id="indicator-0"></div>
    <div class="w-2 h-2 rounded-full bg-gray-400 transition-all duration-300" id="indicator-1"></div>
  `;

  // Вставляем индикаторы после карточек
  const cardsContainer = bonusCardFinal.parentElement;
  cardsContainer.appendChild(indicatorsContainer);

  // Функция для обновления индикаторов
  function updateIndicators() {
    const indicators = document.querySelectorAll('[id^="indicator-"]');
    indicators.forEach((indicator, i) => {
      if (i === currentCard) {
        indicator.classList.remove('bg-gray-400');
        indicator.classList.add('bg-pink-400');
      } else {
        indicator.classList.remove('bg-pink-400');
        indicator.classList.add('bg-gray-400');
      }
    });
  }

  // Обновляем индикаторы при переключении
  const originalSwitchCard = switchCard;
  switchCard = function() {
    originalSwitchCard();
    updateIndicators();
  };

  // Инициализируем индикаторы
  updateIndicators();

  // Добавляем возможность ручного переключения по клику
  cards.forEach((card, i) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      currentCard = i;
      showCard(currentCard);
      updateIndicators();
    });
  });

  // Добавляем стили для плавных переходов
  cards.forEach(card => {
    card.style.transition = 'all 0.5s ease-in-out';
  });
}); 