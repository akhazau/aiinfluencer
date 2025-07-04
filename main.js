// Инициализация при загрузке DOM
        document.addEventListener('DOMContentLoaded', function() {
            // Языковой переключатель
            const langSelector = document.getElementById('language-selector');
            if (langSelector) {
                langSelector.addEventListener('click', e => {
                if (e.target.classList.contains('lang-btn')) {
                    changeLanguage(e.target.dataset.lang);
                }
            });
            }
            
            // Восстановление языка
            const savedLang = localStorage.getItem('selectedLang') || 'en';
            changeLanguage(savedLang);

            // Слайдер изображений
            const sliderImages = ['media/av01.png', 'media/av02.png', 'media/av03.png', 'media/av04.png', 'media/av05.png', 'media/av06.png', 'media/av07.png'];
            let sliderIndex = 0;
            const sliderImg = document.querySelector('img[alt="AI Art Example"]');
            if (sliderImg) {
              setInterval(() => {
                sliderIndex = (sliderIndex + 1) % sliderImages.length;
                sliderImg.src = sliderImages[sliderIndex];
              }, 4000);
            }

            // Sticky banner
            const mainBtn = document.getElementById('main-btn');
            const stickyBanner = document.getElementById('sticky-banner');
            const stickyGlow = document.querySelector('.sticky-glow');
            const stickyGlowLine = document.querySelector('.sticky-glow-line');
            let bannerForceHidden = false;
            let heroVisible = false;
            
            function toggleBanner() {
                if (!mainBtn || !stickyBanner) return;
                if (bannerForceHidden || heroVisible) {
                    stickyBanner.style.opacity = '0';
                    stickyBanner.style.transform = 'translateY(-32px)';
                    stickyBanner.style.pointerEvents = 'none';
                    if (stickyGlow) stickyGlow.style.opacity = '0';
                    if (stickyGlowLine) stickyGlowLine.style.opacity = '0';
                    return;
                }
                const rect = mainBtn.getBoundingClientRect();
                const isVisible = rect.top < 28;
                stickyBanner.style.opacity = isVisible ? '1' : '0';
                stickyBanner.style.transform = isVisible ? 'translateY(0)' : 'translateY(-32px)';
                stickyBanner.style.pointerEvents = isVisible ? 'auto' : 'none';
                if (stickyGlow) stickyGlow.style.opacity = isVisible ? '0.95' : '0';
                if (stickyGlowLine) stickyGlowLine.style.opacity = isVisible ? '1' : '0';
                    }

            // Observer для финального CTA
            const finalCta = document.getElementById('final-cta');
            if (finalCta) {
                const ctaObserver = new IntersectionObserver(entries => {
                    if (entries[0].isIntersecting) {
                        bannerForceHidden = true;
                        toggleBanner();
                    } else {
                        bannerForceHidden = false;
                        toggleBanner();
                    }
                }, { threshold: 0.7 });
                ctaObserver.observe(finalCta);
            }
            // Observer для hero-секции
            const heroSection = document.getElementById('hero-section');
            if (heroSection) {
                const heroObserver = new IntersectionObserver(entries => {
                    heroVisible = entries[0].isIntersecting;
                    toggleBanner();
                }, { threshold: 0.1 });
                heroObserver.observe(heroSection);
            }

            window.addEventListener('scroll', toggleBanner);
            window.addEventListener('resize', toggleBanner);
            toggleBanner();

            // Анимация live viewers
            const countEl = document.getElementById('live-viewers-count');
            if (countEl) {
                setInterval(() => {
                    const n = Math.floor(Math.random() * 16) + 17; // 17-32
                    countEl.textContent = n;
                }, 1800);
            }

            // Автоскролл карусели
            const carousel = document.getElementById('reviews-carousel');
            if (carousel) {
                setInterval(() => {
                    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 1) {
                        carousel.scrollLeft = 0;
                    } else {
                        carousel.scrollLeft += 1;
                    }
                }, 20);
            }

            // FAQ аккордеон
            function initFAQ() {
                document.querySelectorAll('.faq-toggle').forEach(btn => {
                    btn.onclick = () => {
                        document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.add('hidden'));
                        btn.nextElementSibling.classList.toggle('hidden');
                    };
                });
            }
            initFAQ();

            // Intersection Observer для анимаций
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.art-card, .flex.items-start').forEach(el => observer.observe(el));

        });

        // Переводы
        const translations = {
            en: {
                "hero-title-1": "AI Influencer 3.0",
                "hero-title-2": "ALREADY EASY.",
                "hero-subtitle": "Master the tools in couple of the days\nAI MAGIC is now available for you!\nBUILD A LOYAL FANBASE ON INSTAGRAM",
                "join-text": "Join",
                "members-text": "digital creators already inside",
                "rating-text": "4.9 (300+ reviews)",
                "about-title": "Meet Your",
                "about-name": "Leo Lawaro",
                "about-role": "AI Visual Creator & Media Innovator",
                "about-desc": "For the past 3 years, Leo has been turning high-budget content production into accessible, AI-powered workflows. With a background in visual storytelling, he helps creators produce hyper-realistic media—without expensive equipment or technical barriers.",
                "about-exp-pill": "3 years experience",
                "about-fact-1-title": "100+ projects",
                "about-fact-1-desc": "Realistic AI characters built for clients",
                "about-fact-2-title": "Certified instructor",
                "about-fact-2-desc": "AI tools & digital identity workflows",
                "about-fact-3-title": "10,000+ followers",
                "about-fact-3-desc": "Sharing creative AI techniques online",
                "about-fact-4-title": "Global impact",
                "about-fact-4-desc": "Students from over 20 countries",
                "faq-title": "FAQ",
                "faq-q1": "I have no experience with neural networks. Is this for me?",
                "faq-a1": "Yes, everything is explained with live examples. The main thing is your desire to learn.",
                "faq-q2": "Does it really look like a real person?",
                "faq-a2": "Yes. The key is the right technique. You'll get specific prompts and methodology.",
                "faq-q3": "Can I use the character for personal or private purposes?",
                "faq-a3": "You get a tool that can be adapted for any format—from a visual blog to more private and closed projects. Everything remains under your control.",
                "faq-q4": "Is there support if something doesn't work?",
                "faq-a4": "Yes, you can ask a question about the course topic and get help.",
                "faq-q5": "Are neural networks paid?",
                "faq-a5": "Yes, the neural networks we will work with are paid—for example, Midjourney. Others use micropayments. <br><br>💡 On average, you'll spend dozens of times less than on a single professional photoshoot—and get a tool you can use again and again.",
                "faq-q6": "What if I already have some skills—will it be interesting for me?",
                "faq-a6": "Absolutely. You'll learn how to create realistic, consistent images and train a neural network for yourself. This is a higher level.",
                "final-cta-title": "AI Models Will Be A ",
                "final-cta-title-highlight": "$1B Industry",
                "final-cta-subtitle": "<em>Seize This Golden Opportunity While It's Still Here...<br>Or Watch Others Get Rich While You Kept Waiting...</em>",
                "final-cta-form-title": "Join The Waitlist Now",
                "final-cta-spots": "Only 250 spots remaining",
                "final-cta-legal": "By joining, you agree to our <a href=\"#\" class=\"underline\" id=\"final-cta-privacy-link\">Privacy Policy</a> and <a href=\"#\" class=\"underline\" id=\"final-cta-terms-link\">Terms</a>. We will not spam or sell your data.",
                "footer-tagline": "Exploring the intersection of art and artificial intelligence"
            },
            ru: {
                "hero-title-1": "AI Influencer 3.0",
                "hero-title-2": "Это будущее?",
                "hero-subtitle": "Присоединяйтесь к листу ожидания, чтобы помочь проверить рынок AI-арта. Ранние подписчики получат доступ и скидки.",
                "join-text": "Присоединились",
                "members-text": "художников и коллекционеров",
                "rating-text": "5.0 (300+ отзывов)",
                "about-title": "Учитесь с профессиональным инструктором",
                "about-name": "Ким Ретро",
                "about-role": "Эксперт по технологиям сохранения игр",
                "about-desc": "Как эксперт, который более 10 лет исследует технологию сохранения ретро-игр, он выполнил более 500 редких проектов по восстановлению игровых данных в стране и за рубежом. Он известен своей способностью объяснять сложные методы простым для понимания способом даже для начинающих, и многие студенты успешно приобрели навыки сохранения игр благодаря его лекциям.",
                "about-exp-pill": "10 лет опыта",
                "about-fact-1-title": "500+ восстановлений игр",
                "about-fact-1-desc": "Сохранение данных отечественных и зарубежных редких игр",
                "about-fact-2-title": "Более 10 лет опыта",
                "about-fact-2-desc": "Исследование технологии сохранения игр",
                "about-fact-3-title": "Международная сертификация",
                "about-fact-3-desc": "Сертифицированный эксперт Ассоциации по сохранению игр",
                "about-fact-4-title": "1000+ студентов",
                "about-fact-4-desc": "Успешная передача технологии",
                "faq-title": "FAQ",
                "faq-q1": "У меня нет опыта в нейросетях. Мне подойдёт?",
                "faq-a1": "Да, всё объясняется на живых примерах. Главное — желание научиться.",
                "faq-q2": "Это реально выглядит как живой человек?",
                "faq-a2": "Да. Главное — правильная техника. Ты получишь конкретные промпты и методику.",
                "faq-q3": "Можно ли использовать персонажа в личных или приватных целях?",
                "faq-a3": "Ты получаешь инструмент, который можно адаптировать под любые форматы — от визуального блога до более приватных и закрытых проектов. Всё остаётся в рамках твоего контроля.",
                "faq-q4": "Есть ли поддержка, если что-то не получится?",
                "faq-a4": "Да, ты можешь задать вопрос по теме курса и получить помощь.",
                "faq-q5": "Нейросети платные?",
                "faq-a5": "Да, нейросети, с которыми мы будем работать, платные — к примеру Midjourney. Другие используют микроплатежи. <br><br>💡 В среднем, ты потратишь в десятки раз меньше, чем на одну профессиональную фотосессию — и получишь инструмент, который можно использовать снова и снова.",
                "faq-q6": "А если я уже что-то умею — будет ли мне интересно?",
                "faq-a6": "Безусловно. Ты узнаешь, как делать реалистичные, консистентные образы и обучать нейросеть под себя. Это уровень выше.",
                "final-cta-title": "AI-модели станут ",
                "final-cta-title-highlight": "индустрией на $1 млрд",
                "final-cta-subtitle": "<em>Воспользуйся этим золотым шансом, пока он есть...<br>Или смотри, как другие зарабатывают, пока ты ждёшь...</em>",
                "final-cta-form-title": "Запишись в лист ожидания",
                "final-cta-spots": "Осталось только 250 мест",
                "final-cta-legal": "Регистрируясь, вы соглашаетесь с <a href=\"#\" class=\"underline\" id=\"final-cta-privacy-link\">Политикой конфиденциальности</a> и <a href=\"#\" class=\"underline\" id=\"final-cta-terms-link\">Условиями</a>. Мы не спамим и не продаём ваши данные.",
                "footer-tagline": "Исследуем пересечение искусства и искусственного интеллекта"
            }
        };

        // Функция смены языка
        function changeLanguage(language) {
            document.documentElement.lang = language;
            // Перевод элементов
            document.querySelectorAll('[id]').forEach(element => {
                const id = element.id;
                if (translations[language][id]) {
                    if (element.placeholder !== undefined) {
                        element.placeholder = translations[language][id];
                    } else {
                        element.textContent = translations[language][id];
                    }
                }
            });
            // Сбросить выделение у всех кнопок
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.style.background = '';
                btn.style.color = '';
                btn.style.border = '1px solid #fff';
            });
            // Выделить только выбранную
            const activeBtn = document.querySelector('.lang-btn[data-lang="' + language + '"]');
            if (activeBtn) {
                activeBtn.classList.add('active');
                activeBtn.style.background = 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)';
                activeBtn.style.color = '#fff';
                activeBtn.style.border = 'none';
            }
            localStorage.setItem('selectedLang', language);
            // Обработка заголовка "About"
            const aboutTitle = translations[language]["about-title"];
            const aboutTitleText = document.getElementById("about-title-text");
            if (aboutTitleText && aboutTitle) {
                const match = aboutTitle.match(/(.+)(Instructor|инструктор|профессиональным инструктором)(.*)/i);
                if (match) {
                    aboutTitleText.innerHTML = `${match[1]}<span class='gradient-text'>${match[2]}</span>${match[3]}`;
                } else {
                    aboutTitleText.textContent = aboutTitle;
                }
            }
        }

        // Обработчики кнопок языка
        document.querySelectorAll('.lang-btn').forEach(btn =>
            btn.addEventListener('click', () => changeLanguage(btn.dataset.lang))
        );

        // --- Слайдер отзывов ---
        const reviews = [
          {
            text: "I made $1.2k in an hour through tips alone - thanks to this method!",
            photo: "media/av01.png",
            name: "Mark",
            role: "AI Creator"
          },
          {
            text: "After failing with dropshipping and Amazon FBA, their Fanvue optimization strategies helped me earn $6.5K part-time in just one month of joining the program.",
            photo: "media/av02.png",
            name: "Alex",
            role: "Digital Marketer"
          },
          {
            text: "As a complete beginner with no technical background, their simple Genfluence tutorials and Discord community helped me make $500 in my first week.",
            photo: "media/av03.png",
            name: "James",
            role: "Community Member"
          },
          {
            text: "I scaled to $16.6K in less than 2 months through AI Models!",
            photo: "media/av04.png",
            name: "Pav",
            role: "Entrepreneur"
          },
          {
            text: "My followers can't believe my influencer isn't real.",
            photo: "media/av00.png",
            name: "Ayşe",
            role: "Social Media Manager"
          },
          {
            text: "Running full ad campaigns with AI models now—clients love it.",
            photo: "media/av00.png",
            name: "Murat",
            role: "Creative Producer"
          }
        ];

        let reviewIndex = 0;
        const reviewText = document.getElementById('review-text');
        const reviewPhoto = document.getElementById('review-photo');
        const reviewName = document.getElementById('review-name');
        const reviewRole = document.getElementById('review-role');
        const dotsWrap = document.getElementById('reviews-dots');

        function renderReview(idx) {
          const r = reviews[idx];
          reviewText.textContent = r.text;
          reviewPhoto.src = r.photo;
          reviewName.textContent = r.name;
          reviewRole.textContent = r.role;
          // Обновить индикатор
          dotsWrap.innerHTML = '';
          reviews.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'w-3 h-3 rounded-full ' + (i === idx ? 'bg-purple-400' : 'bg-white/20') + ' transition';
            dot.style.outline = 'none';
            dot.onclick = () => { reviewIndex = i; renderReview(reviewIndex); };
            dotsWrap.appendChild(dot);
          });
        }

        // Стрелки
        const prevBtn = document.getElementById('reviews-prev');
        const nextBtn = document.getElementById('reviews-next');
        if (prevBtn && nextBtn) {
          prevBtn.onclick = () => {
            reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
            renderReview(reviewIndex);
          };
          nextBtn.onclick = () => {
            reviewIndex = (reviewIndex + 1) % reviews.length;
            renderReview(reviewIndex);
          };
        }

        // Инициализация
        if (reviewText && reviewPhoto && reviewName && reviewRole && dotsWrap) {
          renderReview(reviewIndex);
          }
        // ... конец слайдера отзывов ... 