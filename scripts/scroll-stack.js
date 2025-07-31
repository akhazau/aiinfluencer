document.addEventListener("DOMContentLoaded", function () {
  // Scroll-stack только для мобильных (и мобильного режима браузера)
  const stack = document.getElementById("price-stack-scroll");
  if (!stack) return;

  const offer = document.getElementById("mobile-offer-card");
  const bonuses = document.getElementById("mobile-bonuses-card");
  const learnmap = document.getElementById("mobile-learnmap-card");
  const cards = [offer, bonuses, learnmap];

  // Spacer для виртуального скролла
  let spacer = stack.querySelector(".scroll-stack-spacer");
  if (!spacer) {
    spacer = document.createElement("div");
    spacer.className = "scroll-stack-spacer";
    stack.appendChild(spacer);
  }

  function getCardHeight() {
    return offer ? offer.offsetHeight || 350 : 350;
  }

  function updateSpacer() {
    // Высота spacer = 2 * высота карточки (чтобы хватило на 3 шага)
    const h = getCardHeight();
    spacer.style.height = h * 2 + "px";
  }

  function updateStack() {
    const scroll = stack.scrollTop;
    const cardHeight = getCardHeight();
    const thresholds = [0, cardHeight * 0.7, cardHeight * 1.4];
    cards.forEach((card) => {
      card.classList.remove("active", "below", "under");
    });
    if (scroll < thresholds[1]) {
      offer.classList.add("active");
      bonuses.classList.add("below");
      learnmap.classList.add("under");
    } else if (scroll < thresholds[2]) {
      offer.classList.add("under");
      bonuses.classList.add("active");
      learnmap.classList.add("below");
    } else {
      offer.classList.add("under");
      bonuses.classList.add("under");
      learnmap.classList.add("active");
    }
  }

  stack.addEventListener("scroll", updateStack);
  window.addEventListener("resize", function () {
    updateSpacer();
    updateStack();
  });
  setTimeout(function () {
    updateSpacer();
    updateStack();
  }, 100);

  // Автопрокрутка к следующей секции после полного скролла
  stack.addEventListener("scroll", function () {
    const cardHeight = getCardHeight();
    if (stack.scrollTop > cardHeight * 2.1) {
      const nextSection = stack.closest("section").nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
