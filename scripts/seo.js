// SEO Enhancement Functions
// Функции для улучшения SEO и пользовательского опыта

// Инициализация всех SEO функций
function initSEOEnhancements() {
  initLazyLoading();
  initStructuredData();
  initMetaTagsUpdate();
  initPagePerformance();
  initAnalytics();
}

// Ленивая загрузка изображений для улучшения производительности
function initLazyLoading() {
  // Проверяем поддержку Intersection Observer
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    // Наблюдаем за всеми изображениями с атрибутом loading="lazy"
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Динамическое обновление структурированных данных
function initStructuredData() {
  // Добавляем дополнительные структурированные данные для отзывов
  const reviews = document.querySelectorAll('.review-item');
  if (reviews.length > 0) {
    const reviewsData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "AI Influencer 3.0 Course",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "300",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": []
    };

    // Добавляем отзывы в структурированные данные
    reviews.forEach((review, index) => {
      const reviewText = review.querySelector('[id^="review-text-"]')?.textContent;
      const reviewerName = review.querySelector('[id^="review-name-"]')?.textContent;
      const reviewerRole = review.querySelector('[id^="review-role-"]')?.textContent;
      
      if (reviewText && reviewerName) {
        reviewsData.review.push({
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": reviewerName
          },
          "reviewBody": reviewText.replace(/[❝❞]/g, '').trim()
        });
      }
    });

    // Добавляем структурированные данные в head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(reviewsData);
    document.head.appendChild(script);
  }
}

// Динамическое обновление мета-тегов
function initMetaTagsUpdate() {
  // Обновляем мета-теги в зависимости от выбранного языка
  const languageSelector = document.getElementById('language-selector');
  if (languageSelector) {
    languageSelector.addEventListener('click', (e) => {
      if (e.target.classList.contains('lang-btn')) {
        const lang = e.target.dataset.lang;
        updateMetaForLanguage(lang);
      }
    });
  }
}

// Обновление мета-тегов для разных языков
function updateMetaForLanguage(lang) {
  const metaDescriptions = {
    'en': 'Create an AI Influencer in days. Master modern AI tools and start earning on Instagram today!',
    'ru': 'Создайте AI-инфлюенсера за несколько дней. Освойте современные AI инструменты и начните зарабатывать в Instagram уже сегодня!',
    'tr': 'Günlerde bir AI Influencer yaratın. Modern AI araçlarında ustalaşın ve Instagram\'da bugün kazanmaya başlayın!'
  };

  const metaTitles = {
    'en': 'AI Influencer 3.0 - Create Your AI Influencer in Days',
    'ru': 'AI Influencer 3.0 - Создай своего AI-инфлюенсера за дни',
    'tr': 'AI Influencer 3.0 - Günlerde AI Influencer Yaratın'
  };

  // Обновляем description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && metaDescriptions[lang]) {
    metaDesc.setAttribute('content', metaDescriptions[lang]);
  }

  // Обновляем title
  if (metaTitles[lang]) {
    document.title = metaTitles[lang];
  }

  // Обновляем Open Graph теги
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  
  if (ogTitle && metaTitles[lang]) {
    ogTitle.setAttribute('content', metaTitles[lang]);
  }
  
  if (ogDesc && metaDescriptions[lang]) {
    ogDesc.setAttribute('content', metaDescriptions[lang]);
  }

  // Обновляем lang атрибут html
  document.documentElement.setAttribute('lang', lang);
}

// Оптимизация производительности страницы
function initPagePerformance() {
  // Предзагрузка критических ресурсов
  const criticalImages = [
    'media/av01.png',
    'media/av_1.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Оптимизация шрифтов
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preconnect';
  fontPreload.href = 'https://fonts.googleapis.com';
  document.head.appendChild(fontPreload);

  // Добавляем preconnect для внешних ресурсов
  const preconnectUrls = [
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com',
    'https://cdn.jsdelivr.net'
  ];

  preconnectUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
  });
}

// Базовая аналитика и отслеживание
function initAnalytics() {
  // Отслеживание времени на странице
  let startTime = Date.now();
  let maxScroll = 0;

  // Отслеживание прокрутки
  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    maxScroll = Math.max(maxScroll, scrollPercent);
  });

  // Отслеживание кликов по CTA
  document.addEventListener('click', (e) => {
    if (e.target.closest('.animated-gradient-btn')) {
      const buttonText = e.target.textContent || e.target.closest('.animated-gradient-btn').textContent;
      console.log('CTA Click:', buttonText.trim());
      
      // Здесь можно добавить отправку данных в аналитику
      // gtag('event', 'click', { 'event_category': 'CTA', 'event_label': buttonText.trim() });
    }
  });

  // Отслеживание отправки формы
  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', () => {
      console.log('Form Submit');
      // gtag('event', 'submit', { 'event_category': 'Form', 'event_label': 'Lead Form' });
    });
  }

  // Отправка данных при уходе со страницы
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    console.log('Page Analytics:', {
      timeOnPage: timeOnPage + 's',
      maxScroll: maxScroll + '%'
    });
  });
}

// Добавляем функцию в глобальную область видимости
window.initSEOEnhancements = initSEOEnhancements;

// Автоматическая инициализация при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSEOEnhancements);
} else {
  initSEOEnhancements();
}