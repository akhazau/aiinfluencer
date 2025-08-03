// MOBILE: Простое автоперелистывание бонусов и карты обучения
document.addEventListener("DOMContentLoaded", function () {
  // Только для мобильных
  if (window.innerWidth >= 768) return;

  const bonusCard = document.querySelector('.scroll-stack-card:has(#bonuses-title)');
  const learnMapCard = document.querySelector('.scroll-stack-card:has(#learnmap-title)');
  
  if (!bonusCard || !learnMapCard) return;

  const cards = [bonusCard, learnMapCard];
  let currentCard = 0;
  let isAutoPlaying = true;

  // Простая функция переключения
  function switchCard() {
    if (!isAutoPlaying) return;
    
    cards.forEach((card, i) => {
      if (i === currentCard) {
        card.style.display = 'block';
        card.style.transform = 'none';
        card.style.zIndex = '10';
      } else {
        card.style.display = 'none';
        card.style.transform = 'none';
        card.style.zIndex = '1';
      }
    });
    currentCard = (currentCard + 1) % cards.length;
  }

  // Создаем зеленые точки
  const dotsWrap = document.getElementById("bonus-dots");
  if (dotsWrap) {
    dotsWrap.innerHTML = "";
    cards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "w-3 h-3 rounded-full mx-1 bg-white/20 transition";
      dot.setAttribute("aria-label", "Show card " + (i + 1));
      dot.onclick = () => {
        currentCard = i;
        switchCard();
        updateDots();
      };
      dotsWrap.appendChild(dot);
    });
  }

  // Функция обновления точек
  function updateDots() {
    const dots = document.querySelectorAll("#bonus-dots button");
    dots.forEach((dot, i) => {
      dot.className = "w-3 h-3 rounded-full mx-1 transition " + 
        (i === currentCard ? "bg-green-400" : "bg-white/20");
    });
  }

  // Останавливаем автоперелистывание при скролле
  const scroller = document.getElementById("price-stack-scroll");
  if (scroller) {
    scroller.addEventListener("scroll", () => {
      isAutoPlaying = false;
    });
  }

  // Показываем первую карточку
  switchCard();
  updateDots();

  // Автопереключение каждые 8 секунд
  setInterval(() => {
    if (isAutoPlaying) {
      switchCard();
      updateDots();
    }
  }, 8000);
}); 