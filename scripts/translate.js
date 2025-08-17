class Translator {
  constructor() {
    this.currentLang = 'en';
    this.cache = new Map();
    this.translations = {
      en: {
        // Sticky Banner
        "sticky-btn-text-mobile": "Grab",
        "sticky-btn-text-desktop": "Grab the Offer",
        "sticky-btn-price-old": "$120",
        "sticky-btn-price-new": "$27",
        "support-btn": "support",

        // Hero Section
        "hero-title-1": "AI Influencer 3.0",
        "hero-title-2": "ALREADY EASY.",
        "hero-subtitle": 'GROW A LOYAL INSTAGRAM FANBASE<br>Even your parents will figure it out',
        "main-btn-text": "Grab the Offer",
        "main-btn-price-old": "$120",
        "main-btn-price-new": "$27",
        "live-viewers-text": "people currently viewing this page",
        "join-members-text": 'Join <span class="text-purple-300">2,132+</span> creators inside',
        "rating-text": "4.9 (300+ reviews)",

        // Pain Section
        "pain-title": "Complicated?",
        "pain-title-gradient": "Not Anymore!",
        "pain-desc": "Taking the first step today is easier than ever <span class=\"hidden md:inline\">before</span>",
        "pain-card1-title": "Kill The Your Fear",
        "pain-card1-desc": "From \"I can't\" to \"Posted\" — in one evening",
        "pain-card1-point1": "Copy–paste prompts",
        "pain-card1-point2": "Safe presets — no \"plastic AI\"",
        "pain-card1-point3": "Quick fixes on mistakes",
        "pain-card1-point4": "Support at every step",
        "pain-card2-title": "Edutainment",
        "pain-card2-desc": "Modern models lead you by the hand",
        "pain-card2-point1": "Learning made fun",
        "pain-card2-point2": "Daily inspiration",
        "pain-card2-point3": "Guided steps to your first shot",
        "pain-card2-point4": "Ready for ads",
        "pain-card3-title": "Studio-Ready",
        "pain-card3-desc": "Shoot Without a Studio",
        "pain-card3-point1": "Fashion-level realism",
        "pain-card3-point2": "Perfect light & tone",
        "pain-card3-point3": "Ready for ads",

        // Benefits Section
        "benefits-title": "AI Model Making — <br class=\"block md:hidden\">Your",
        "benefits-title-gradient": "Superpower",
        "benefits-desc": "Wanted to start a blog? No more excuses — today's the day",
        "benefits-card-1-title": "Feel Like an Artist",
        "benefits-card-1-desc-1": "YOU'LL BECOME an designer, art director, producer — one superhero creator behind it all, even if you're new",
        "benefits-card-1-why-title": "Why this course?",
        "benefits-card-1-feature-1": "Copy → paste → tweak → publish",
        "benefits-card-1-feature-2": "No need to show your face on camera",
        "benefits-card-1-feature-3": "Build studio-level visuals, zero gear",
        "benefits-card-1-feature-4": "Personality-first content",
        "benefits-card-1-feature-5": "Mindset over tools",
        "benefits-card-1-feature-6": "Zero-experience friendly",
        "benefits-card-1-feature-7": "First-try win tonight",
        "benefits-card-2-title-mobile": "Studio Quality",

        // Price Section
        "price-title-start": "No Studio, No Stress — <br class=\"block md:hidden\">at",
        "price-title-gradient": "T-shirt Price",
        "price-subtitle": "From ambition to influence — strengthen your brand and digital presence",
        "price-course-title": "AI Influencer 3.0 course",
        "price-current": "$27",
        "price-regular": "Regular Price: $120",
        "price-discount": "77% OFF — Only Today!",
        "price-feature-1": "Instant access after payment",
        "price-feature-2": "Watch anytime, at your own pace",
        "price-feature-3": "2.5 h of step-by-step video lessons",
        "price-feature-4": "No-code AI model training",
        "price-feature-5": "Ready-made visual framework",
        "price-feature-6": "Face-swapping explained",
        "price-btn-text": "Grab the Offer",
        "bonuses-title": "🎁 Bonuses",
        "bonus-1": "I give paste-ready prompts",
        "bonus-2": "Lifetime access anytime",
        "bonus-3": "Waitlisted to new AI platform",
        "bonus-4": "Human email support",
        "learnmap-title": "Learning Path",
        "learnmap-1": "Pose & style setup",
        "learnmap-2": "Angles & realism tips",
        "learnmap-3": "Face-lock AI LoRA training",
        "learnmap-4": "Visual control & outfit",
        "learnmap-5": "Merge & publish fast",
        "learnmap-1-dup": "Pose & style setup",
        "learnmap-2-dup": "Angles & realism tips",
        "learnmap-3-dup": "Face-lock AI LoRA training",
        "learnmap-4-dup": "Visual control & outfit",
        "learnmap-5-dup": "Merge & publish fast",

        // Reviews Section
        "reviews-title": "What Our",
        "reviews-title-gradient": "Students Say",
        "testimonial-subtitle": "Why do our AI model-makers keep sharing the course with friends?",
        "review-text-1": "❝ AI is finally simple and accessible. The ready-made tools are a joy to use—I'm glad I just decided to try! ❞",
        "review-name-1": "28 yo Mark R.",
        "review-role-1": "Fouder of Startup",
        "review-text-2": "❝ My wife and I needed a face for a new line with a zero budget. We trained an AI model with flawless yet natural skin. Followers think she's a real top model—and foundation sales jumped 17% in the first week ❞",
        "review-name-2": "33 yo David K.",
        "review-role-2": "Brand Manager",
        "review-text-3": "❝ I used to worry about my looks. Now I have an upgraded AI version of myself—editorial-quality shots, growing audience, no paid ads. I stay off-camera while the good-looking persona racks up likes ❞",
        "review-name-3": "26 yo Tony Jr.",
        "review-role-3": "Travel Blogger",
        "review-text-4": "❝ I feared nothing would work, but now I run an Instagram page for an influencer I built from scratch. Followers can't believe it's AI ❞",
        "review-name-4": "21 yo Huata A.",
        "review-role-4": "Student",
        "review-text-5": "❝ Thank you, Leo! Your explanations are crystal-clear. Halfway through the course I launched my first AI project—and it's already getting results. You're one of my favorite instructors ❞",
        "review-name-5": "29 yo Elif S.",
        "review-role-5": "Motion Designer",
        "review-text-6": "❝ Always wanted an IG feed for the shop but feared photo quality. AI built a portrait mascot that looks real—customers snap selfies with him more than with the mirror! ❞",
        "review-name-6": "31 yo Murat K.",
        "review-role-6": "Barbershop Owner",
        "review-text-7": "❝ I thought I'd be the oldest student, but the course breaks everything into bite-size steps. By lesson three I had a studio-grade shot with ultra-detailed skin. Fantastic experience, Leo! ❞",
        "review-name-7": "50 yo Pav Williams L.",
        "review-role-7": "Entrepreneur",
        "review-text-8": "❝ I tested the course skeptically, sure AI couldn't replace real lighting. It didn't—it helped. Now I generate skin-realistic references, show couples, and they get the vision instantly. Shoots run faster, images feel more emotional ❞",
        "review-name-8": "42 yo Denis T.",
        "review-role-8": "Wedding Photographer",

        // About Section
        "about-title-text": "Meet Your",
        "about-title-gradient": "Mentor",
        "about-name": "Leo Lewaro",
        "about-role": "AI Creator & Media Innovator",
        "about-desc-p1": "Former Dubai Future Labs AI researcher turned content strategist, together with his wife, Leo built AI Influencer 3.0— a system that's helped 2,130+ creators launch AI-powered brands and triple their reach without studio budgets",
        "about-desc-p2": "Leo turns raw ideas into revenue: his mastery of Midjourney, Omnisphere, and custom face-lock workflows cuts production costs and speeds content-to-market 3×",
        "about-more-btn": "more",
        "about-less-btn": "less",
        "about-exp-pill": "2,130+ Students",
        "about-fact-1-title": "100+ viral projects",
        "about-fact-1-desc": "Hyper-real AI characters delivered for global brands",
        "about-fact-2-title": "Certified instructor",
        "about-fact-2-desc": "Teaches AI tools & digital-identity pipelines",
        "about-fact-3-title": "50k + followers",
        "about-fact-3-desc": "Learners from 20 + countries use his methods",
        "about-fact-4-title": "Featured in",
        "about-fact-4-desc": "Forbes, TechCrunch",

        // FAQ Section
        "faq-title": "Frequently Asked",
        "faq-title-gradient": "Questions",
        "faq-desc": "Build parasocial bonds — let fans feel connected to your Influencer",
        "faq-q1": "Max asked… How long does it take to see results?",
        "faq-a1": "First photo-real shots on the very first evening; a full feed in 4–7 days with 1–2 h of daily practice",
        "faq-q2": "Isabelle asked… Can I do this alongside my job or school?",
        "faq-a2": "Yes. Lessons are under 20 min and on-demand 24/7 — watch in the evenings or on weekends",
        "faq-q3": "Anika asked… How much time do I need to dedicate to this business?",
        "faq-a3": "1–2 h per day is enough to launch content and scale the project",
        "faq-q4": "Hassan asked… What tools will I need to purchase?",
        "faq-a4": "Just Midjourney — Basic $10/mo to start or Standard $30/mo for speed. Other services are cheap pay-as-you-go — pennies versus one pro shoot",
        "faq-q5": "Sara asked… How do you keep every shot consistent?",
        "faq-a5": "The course includes a Face-Lock Consistency System — ready prompts & settings that lock facial features so every frame feels from the same shoot",
        "faq-q6": "Sophie asked… Will people know my model is AI, and do I have to show my face?",
        "faq-a6": "With our workflow images look like real photos. Showing your own face is optional — use a fictional persona or an upgraded you",
        "faq-q7": "Alex asked… Can I use my character for private or personal projects?",
        "faq-a7": "Absolutely. Your trained model is yours — use it in blogs, ads or closed content with no restrictions",
        "faq-q8": "Bella asked… What makes this course different, and can I learn at my own pace?",
        "faq-a8": "2.5 h of distilled step-by-step video, ready templates, check-lists and support. Learn at your own speed, lifetime access and updates",

        // Final CTA Section
        "final-cta-title": "AI Models Will Be a <br class=\"block md:hidden\"> <span class=\"gradient-text\">$45.9B Industry</span> by 2030",
        "final-cta-subtitle": "The AI-influencer hype feels like Bitcoin's 2012 gold rush and the 2021 NFT boom",
        "final-cta-save": "⏳ Save $98.00 Today!",
        "final-cta-btn-text": "Grab The Course For",
        "course-sales-label": "course sales today",
        "footer-title": "AI Influencer 3.0",
        "footer-desc": "Jump into the AI game — your guide starts here. Master modern tools fast",
        "footer-email": "hi@aiinfluencer.site",
        "footer-copyright": "© 2025 AI Influencer 3.0. All rights reserved",
        "footer-legal": "All sales are final due to instant access to digital content",
        "rating-text-footer": "4.9 (300+ reviews)"
      },

      ru: {
        // Sticky Banner
        "sticky-btn-text-mobile": "Сейчас –",
        "sticky-btn-text-desktop": "Начни сейчас –",
        "sticky-btn-price-old": "$120",
        "sticky-btn-price-new": "$27",
        "support-btn": "поддержка",

        // Hero Section
        "hero-title-1": "AI-Инфлюенсер",
        "hero-title-2": "ЭТО УЖЕ ЛЕГКО.",
        "hero-subtitle": "ВЫРАСТИ INSTAGRAM АУДИТОРИЮ<br>Разберётся даже твой батя!",
        "main-btn-text": "Получить курс",
        "main-btn-price-old": "$120",
        "main-btn-price-new": "$27",
        "live-viewers-text": "человек сейчас смотрит страницу",
        "join-members-text": '<span class="text-purple-300">2,132+</span> человека уже на борту',
        "rating-text": "4.9 (300+ отзывов)",

        // Pain Section
        "pain-title": "Сложно?",
        "pain-title-gradient": "Больше Нет!",
        "pain-desc": "Сделать первый шаг сегодня проще, чем когда-либо",
        "pain-card1-title": "Победи свой страх",
        "pain-card1-desc": "От \"Не cмогу\" до \"Опубликовано\"",
        "pain-card1-point1": "Копируй и вставляй готовые промпты",
        "pain-card1-point2": "Точные настройки — никакого \"пластика\"",
        "pain-card1-point3": "Быстрые исправления ошибок",
        "pain-card1-point4": "Поддержка на каждом шаге",
        "pain-card2-title": "Обучение-развлечение",
        "pain-card2-desc": "Современные модели ведут тебя за руку",
        "pain-card2-point1": "Обучение в удовольствие",
        "pain-card2-point2": "Ежедневное вдохновение",
        "pain-card2-point3": "Пошаговые инструкции",
        "pain-card2-point4": "Готово для рекламы",

        // Benefits Section
        "benefits-title": "Создание AI-моделей — <br class=\"block md:hidden\">Ваша",
        "benefits-title-gradient": "Суперсила",
        "benefits-desc": "Хотели начать блог? Никаких оправданий — сегодня тот самый день",
        "benefits-card-1-title": "Почувствуйте себя художником",
        "benefits-card-1-desc-1": "ВЫ СТАНЕТЕ дизайнером, арт-директором, продюсером — супергероем-создателем всего, даже если вы новичок",
        "benefits-card-1-why-title": "Почему этот курс?",
        "benefits-card-1-feature-1": "Копировать → вставить → править → опубликовать",
        "benefits-card-1-feature-2": "Без лица в кадре и речи на камеру",
        "benefits-card-1-feature-3": "Студийные визуалы без оборудования",
        "benefits-card-1-feature-4": "Контент с характером",
        "benefits-card-1-feature-5": "Мышление важнее инструментов",
        "benefits-card-1-feature-6": "Подходит даже если вы полный \"ноль\"",
        "benefits-card-1-feature-7": "Первай результат сегодня вечером",
        "benefits-card-2-title-mobile": "Студийное качество",
        "benefits-card-2-desc-1-mobile": "Снимайте без студии. Модный реализм, идеальная кожа, свет и тон. Готово для рекламы, магазинов, соцсетей.",

        // Price Section
        "price-title-start": "Никаких Студий, Никакого Стресса — <br class=\"block md:hidden\">и по Цене",
        "price-title-gradient": "Футболки",
        "price-subtitle": "Есть амбиции? — укрепи свой бренд и цифровое присутствие",
        "price-course-title": "Курс «AI Influencer 3.0»",
        "price-current": "$27",
        "price-regular": "Обычная цена: $120",
        "price-discount": "Скидка 79% — только сегодня!",
        "price-feature-1": "Доступ сразу после оплаты",
        "price-feature-2": "Смотрите в любое время, в своём темпе",
        "price-feature-3": "2,5 часа пошаговых видеоуроков",
        "price-feature-4": "Обучение собственной модели",
        "price-feature-5": "Готовый визуальный каркас",
        "price-feature-6": "Face-swap — простым языком",
        "price-btn-text": "Начни сейчас –",
        "bonuses-title": "🎁 Бонусы",
        "bonus-1": "Большой пакет точных промптов",
        "bonus-2": "Пожизненный доступ",
        "bonus-3": "В листе ожидания ИИ платформы",
        "bonus-4": "Живая email-поддержка",
        "learnmap-title": "Карта обучения",
        "learnmap-1": "Поза и стиль персонажа",
        "learnmap-2": "Красивые ракурсы и советы",
        "learnmap-3": "Face-Lock AI Lora-обучение",
        "learnmap-4": "Визуальный контроль и образы",
        "learnmap-5": "Все объединить и опубликовать",
        "learnmap-1-dup": "Поза и стиль персонажа",
        "learnmap-2-dup": "Красивые ракурсы и советы",
        "learnmap-3-dup": "Face-Lock AI Lora-обучение",
        "learnmap-4-dup": "Визуальный контроль и образы",
        "learnmap-5-dup": "Все объединить и опубликовать",

        // Reviews Section
        "reviews-title": "Что",
        "reviews-title-gradient": "Говорят Студенты",
        "testimonial-subtitle": "Почему создатели AI-моделей советуют нас друзьям?",
        "review-text-1": "❝ ИИ наконец стал простым и доступным. Готовые инструменты — одно удовольствие, рад, что просто решился попробовать! ❞",
        "review-name-1": "28 лет Mark R.",
        "review-role-1": "Основатель стартапа",
        "review-text-2": "❝ Нам с женой нужно было «лицо» новой линейки с нулевым бюджетом. Обучили модель с безупречной, но естественной кожей. Подписчики уверены — это топ-модель, продажи тона +17% за первую неделю ❞",
        "review-name-2": "33 года David K.",
        "review-role-2": "Бренд-менеджер",
        "review-text-3": "❝ Раньше переживал из-за внешности. Теперь у меня прокачанная AI-версия — кадры уровня редакции, рост аудитории, без рекламы. Я за кадром, а персона собирает лайки ❞",
        "review-name-3": "26 лет Tony Jr.",
        "review-role-3": "Тревел-блогер",
        "review-text-4": "❝ Боялся, что ничего не выйдет, а теперь веду IG-страницу инфлюенсера, созданного с нуля. Подписчики не верят, что это ИИ ❞",
        "review-name-4": "21 год Huata A.",
        "review-role-4": "Студент",
        "review-text-5": "❝ Спасибо, Лео! Ваши объяснения кристально ясны. На середине курса я запустил свой первый AI-проект — и он уже даёт результаты. Вы один из моих любимых преподавателей ❞",
        "review-name-5": "29 лет Elif S.",
        "review-role-5": "Моушн-дизайнер",
        "review-text-6": "❝ Всегда хотел IG-ленту для магазина, но боялся качества фото. ИИ создал портретный талисман, который выглядит реально — клиенты делают с ним селфи чаще, чем с зеркалом! ❞",
        "review-name-6": "31 год Murat K.",
        "review-role-6": "Владелец Барбершопа",
        "review-text-7": "❝ Думал, что буду самым старшим студентом, но курс разбивает всё на небольшие шаги. К третьему уроку у меня был студийный кадр с ультра-детализированной кожей. Фантастический опыт, Лео! ❞",
        "review-name-7": "50 лет Pav Williams L.",
        "review-role-7": "Предприниматель",
        "review-text-8": "❝ Тестировал курс скептически, был уверен, что ИИ не заменит настоящий свет. Он и не заменил — он помог. Теперь генерирую реалистичные референсы, съёмки проходят быстрее, изображения более эмоциональны ❞",
        "review-name-8": "42 yo Denis T.",
        "review-role-8": "Свадебный Фотограф",

        // About Section
        "about-title-text": "Знакомьтесь, ваш",
        "about-title-gradient": "Ментор",
        "about-name": "Лео Леваро",
        "about-role": "AI-креатор и медиа-инноватор",
        "about-desc-p1": "Бывший исследователь ИИ Dubai Future Labs, ставший контент-стратегом, вместе со своей женой, Лео создал AI Influencer 3.0 — систему, которая помогла 2,130+ креаторам запустить AI-бренды и утроить охват без студийных бюджетов",
        "about-desc-p2": "Лео превращает сырые идеи в доходы: его мастерство Midjourney, Omnisphere и кастомных face-lock воркфлоу сокращает производственные затраты и ускоряет выход контента на рынок в 3 раза",
        "about-more-btn": "больше",
        "about-less-btn": "меньше",
        "about-exp-pill": "2,130+ студентов",
        "about-fact-1-title": "100+ вирусных проектов",
        "about-fact-1-desc": "Гиперреалистичные AI-персонажи для глобальных брендов",
        "about-fact-2-title": "Сертифицированный ментор",
        "about-fact-2-desc": "Обучает AI-инструментам и цифровой идентичности",
        "about-fact-3-title": "50k+ подписчиков",
        "about-fact-3-desc": "Ученики из 20+ стран используют эти методы",
        "about-fact-4-title": "Упоминания в",
        "about-fact-4-desc": "Forbes, TechCrunch",

        // FAQ Section
        "faq-title": "Часто Задаваемые",
        "faq-title-gradient": "Вопросы",
        "faq-desc": "Создавайте парасоциальные связи — пусть фанаты чувствуют связь с вашим Инфлюенсером",
        "faq-q1": "Макс спросил… Сколько времени нужно, чтобы увидеть результаты?",
        "faq-a1": "Первые фотореалистичные кадры в первый же вечер, полная лента за 4–7 дней при 1–2 часах ежедневной практики",
        "faq-q2": "Изабель спросила… Могу ли я совмещать это с работой или учёбой?",
        "faq-a2": "Да. Уроки длятся менее 20 минут и доступны 24/7 — смотрите вечерами или на выходных",
        "faq-q3": "Аника спросила… Сколько времени нужно посвящать этоту бизнесу?",
        "faq-a3": "1–2 часа в день достаточно для запуска контента и масштабирования проекта",
        "faq-q4": "Хассан спросил… Какие инструменты мне нужно будет купить?",
        "faq-a4": "Только Midjourney — Basic $10/мес для старта или Standard $30/мес для скорости. Другие сервисы дешёвые pay-as-you-go — копейки против одной профессиональной съёмки",
        "faq-q5": "Сара спросила… Как сохранить консистентность каждого кадра?",
        "faq-a5": "Курс включает Face-Lock Consistency System — готовые промпты и настройки, которые фиксируют черты лица, чтобы каждый кадр выглядел из одной съёмки",
        "faq-q6": "София спросила… Поймут ли люди, что моя модель — ИИ, и должен ли я показывать своё лицо?",
        "faq-a6": "С нашим воркфлоу изображения выглядят как настоящие фото. Показывать своё лицо необязательно — используйте вымышленную персону или улучшенную версию себя",
        "faq-q7": "Алекс спросил… Могу ли я использовать своего персонажа для частных или личных проектов?",
        "faq-a7": "Абсолютно. Ваша обученная модель принадлежит вам — используйте её в блогах, рекламе или закрытом контенте без ограничений",
        "faq-q8": "Белла спросила… Чем отличается этот курс, и могу ли я учиться в своём темпе?",
        "faq-a8": "2,5 часа концентрированного пошагового видео, готовые шаблоны, чек-листы и поддержка. Учитесь в своём темпе, пожизненный доступ",

        // Final CTA Section
        "final-cta-title": "AI-модели Станут Индустрией на <span class=\"gradient-text-inverse\">$45,9B</span> к 2030 году",
        "final-cta-subtitle": "Хайп вокруг AI-инфлюенсеров напоминает золотую лихорадку Bitcoin 2012 и бум NFT 2021",
        "final-cta-save": "Сэкономьте $98.00 сегодня!",
        "final-cta-btn-text": "Получить курс за",
        "course-sales-label": "продаж курса сегодня",
        "footer-title": "AI Influencer 3.0",
        "footer-desc": "Прыгайте в AI-игру — ваш путь начинается здесь. Быстро освойте современные инструменты",
        "footer-email": "hi@aiinfluencer.site",
        "footer-copyright": "© 2025 AI Influencer 3.0. Все права защищены",
        "footer-legal": "Курс — в образовательных целях. Результаты не гарантируются. Используя сайт, вы принимаете условия и берёте ответственность за решения и действия. Возвратов за цифровой контент нет",
        "rating-text-footer": "4.9 (300+ отзывов)"
      },

      tr: {
        // Sticky Banner
        "sticky-btn-text-mobile": "Şimdi –",
        "sticky-btn-text-desktop": "Şimdi başla –",
        "sticky-btn-price-old": "$120",
        "sticky-btn-price-new": "$27",
        "support-btn": "destek",

        // Hero Section
        "hero-title-1": "AI Influencer 3.0",
        "hero-title-2": "ARTIK KOLAY.",
        "hero-subtitle": "SADIK BİR INSTAGRAM KİTLESİ BÜYÜTÜN<br>AI'yi günlerde öğrenin — <span class=\"text-purple-300 font-semibold\">BÜYÜYÜ</span> bugün serbest bırakın!",
        "main-btn-text": "Teklifi Al",
        "main-btn-price-old": "$120",
        "main-btn-price-new": "$27",
        "live-viewers-text": "kişi şu anda bu sayfayı görüntülüyor",
        "join-members-text": '<span class="text-purple-300">2,132+</span> yaratıcıya katılın',
        "rating-text": "4.9 (300+ yorumlar)",

        // Pain Section
        "pain-title": "Karmaşık mı?",
        "pain-title-gradient": "Artık değil!",
        "pain-desc": "Diğer modellere bakın — AI elinizde olduğunda neler yaratacağınızı hayal edin!",
        "pain-card1-title": "Korkunu Öldür",
        "pain-card1-desc": "\"Yapamam\"dan \"Yayınlandı\"ya — bir akşamda",
        "pain-card1-point1": "Kopyala-yapıştır komutları",
        "pain-card1-point2": "Güvenli ayarlar — \"plastik AI\" yok",
        "pain-card1-point3": "Hataları hızlı düzeltme",
        "pain-card1-point4": "Her adımda destek",
        "pain-card2-title": "Eğlenceli Öğrenme",
        "pain-card2-desc": "Modern modeller sizi el ele götürür",
        "pain-card2-point1": "Eğlenceli öğrenme",
        "pain-card2-point2": "Günlük ilham",
        "pain-card2-point3": "İlk çekiminize rehberli adımlar",
        "pain-card2-point4": "Reklamlar için hazır",
        "pain-card3-title": "Stüdyo Hazır",
        "pain-card3-desc": "Stüdyo Olmadan Çekim Yapın.",
        "pain-card3-point1": "Moda seviyesi gerçekçilik",
        "pain-card3-point2": "Mükemmel ışık ve ton",
        "pain-card3-point3": "Reklamlar için hazır",

        // Benefits Section
        "benefits-title": "AI Model Yapımı — Sizin",
        "benefits-title-gradient": "Süper Gücünüz",
        "benefits-desc": "Blog başlatmak mı istiyordunuz? Artık bahane yok — bugün o gün",
        "benefits-card-1-title": "Sanatçı Gibi Hissetmek",
        "benefits-card-1-desc-1": "SİZ tasarımcı, sanat yönetmeni, yapımcı — her şeyin arkasındaki tek süper kahraman yaratıcı OLACAKSINIZ, yeni olsanız bile",
        "benefits-card-1-why-title": "Neden bu kurs?",
        "benefits-card-1-feature-1": "Kopyala → yapıştır → ayarla → yayınla",
        "benefits-card-1-feature-2": "Kamerada yüzünüzü göstermeye gerek yok",
        "benefits-card-1-feature-3": "Stüdyo seviyesi görseller, sıfır ekipman",
        "benefits-card-1-feature-4": "Kişilik odaklı içerik",
        "benefits-card-1-feature-5": "Araçlardan çok zihniyet",
        "benefits-card-1-feature-6": "Deneyimsizler için uygun",
        "benefits-card-1-feature-7": "Bu gece ilk deneme kazancı",
        "benefits-card-2-title-mobile": "Stüdyo Kalitesi",
        "benefits-card-2-desc-1-mobile": "Stüdyo Olmadan Çekim Yapın. Moda seviyesi gerçekçilik, mükemmel cilt, ton ve ışık. Reklamlar, mağazalar, sosyal medya için hazır",

        // Price Section
        "price-title-start": "Stüdyo Yok<span class=\"gradient-text\">,</span> Stres Yok — hepsi",
          "price-title-gradient": "Tişört Fiyatında",
         "price-title-end": "",
        "price-subtitle": "Hırstan etkiye — markanızı ve dijital varlığınızı güçlendirin",
        "price-course-title": "AI Influencer 3.0 kursu",
        "price-current": "$27",
        "price-regular": "Normal Fiyat: $120",
        "price-discount": "%79 İNDİRİM — Sadece Bugün!",
        "price-feature-1": "Ödeme sonrası anında erişim",
        "price-feature-2": "İstediğiniz zaman, kendi hızınızda izleyin",
        "price-feature-3": "2,5 saatlik adım adım video dersleri",
        "price-feature-4": "Kodsuz AI model eğitimi",
        "price-feature-5": "Hazır görsel çerçeve",
        "price-feature-6": "Yüz değiştirme açıklaması",
        "price-btn-text": "Şimdi başla –",
        "bonuses-title": "🎁 Bonuslar",
        "bonus-1": "Büyük Gerçekçilik Prompt Paketi",
        "bonus-2": "Yaşam Boyu Erişim",
        "bonus-3": "Gizli Platforma Bekleme Listesi",
        "bonus-4": "İnsan e-posta desteği",
        "learnmap-title": "Öğrenme Haritası",
        "learnmap-1": "Poz ve stil kurulumu",
        "learnmap-2": "Açılar ve gerçekçilik ipuçları",
        "learnmap-3": "Face-Lock AI Lora eğitimi",
        "learnmap-4": "Görsel kontrol ve kıyafet",
        "learnmap-5": "Hızlı birleştir ve yayınla",
        "learnmap-1-dup": "Poz ve stil kurulumu",
        "learnmap-2-dup": "Açılar ve gerçekçilik ipuçları",
        "learnmap-3-dup": "Face-Lock AI Lora eğitimi",
        "learnmap-4-dup": "Görsel kontrol ve kıyafet",
        "learnmap-5-dup": "Hızlı birleştir ve yayınla",
        "rating-text-footer": "4.9 (300+ yorumlar)",

        // Reviews Section
        "reviews-title": "Öğrencilerimiz",
        "reviews-title-gradient": "Ne Diyor",
        "testimonial-subtitle": "AI model yapımcılarımız neden kursu arkadaşlarıyla paylaşmaya devam ediyor?",
        "review-text-1": "❝ AI nihayet basit ve erişilebilir. Hazır araçları kullanmak çok keyifli—denemeye karar verdiğim için mutluyum! ❞",
        "review-name-1": "28 yaşında Mark R.",
        "review-role-1": "Startup Kurucusu",
        "review-text-2": "❝ Eşim ve ben sıfır bütçeyle yeni bir hat için yüze ihtiyacımız vardı. Kusursuz ama doğal ciltli bir AI modeli eğittik. Takipçiler onun gerçek bir top model olduğunu düşünüyor—ve fondöten satışları ilk hafta %17 arttı ❞",
        "review-name-2": "33 yaşında David K.",
        "review-role-2": "Marka Müdürü",
        "review-text-3": "❝ Görünüşüm konusunda endişelenirdim. Şimdi kendimin yükseltilmiş AI versiyonum var—editöryal kalitede çekimler, büyüyen kitle, ücretli reklam yok. Ben kamera arkasındayken güzel görünen kişilik beğeni topluyor ❞",
        "review-name-3": "26 yaşında Tony Jr.",
        "review-role-3": "Seyahat Blogcusu",
        "review-text-4": "❝ Hiçbir şeyin işe yaramayacağından korkuyordum, ama şimdi sıfırdan inşa ettiğim bir influencer için Instagram sayfası yönetiyorum. Takipçiler bunun AI olduğuna inanamıyor ❞",
        "review-name-4": "21 yaşında Huata A.",
        "review-role-4": "Öğrenci",
        "review-text-5": "❝ Teşekkürler Leo! Açıklamalarınız kristal berraklığında. Kursun yarısında ilk AI projemi başlattım—ve zaten sonuç alıyor. En sevdiğim eğitmenlerden birisiniz ❞",
        "review-name-5": "29 yaşında Elif S.",
        "review-role-5": "Motion Tasarımcı",
        "review-text-6": "❝ Mağaza için hep IG besini istedim ama fotoğraf kalitesinden korkuyordum. AI gerçek görünen bir portre maskot yarattı—müşteriler onunla aynadan daha çok selfie çekiyor! ❞",
        "review-name-6": "31 yaşında Murat K.",
        "review-role-6": "Berber Dükkanı Sahibi",
        "review-text-7": "❝ En yaşlı öğrenci olacağımı düşünüyordum, ama kurs her şeyi küçük adımlara bölüyor. Üçüncü derste ultra detaylı ciltli stüdyo kalitesinde çekim yapmıştım. Harika deneyim, Leo! ❞",
        "review-name-7": "50 yaşında Pav Williams L.",
        "review-role-7": "Girişimci",
        "review-text-8": "❝ Kursu şüpheyle test ettim, AI'nin gerçek ışığı değiştiremeyeceğinden emindim. Değiştirmedi—yardım etti. Şimdi cilt-gerçekçi referanslar üretiyorum, çiftlere gösteriyorum ve vizyonu anında anlıyorlar. Çekimler daha hızlı, görüntüler daha duygusal ❞",
        "review-name-8": "42 yaşında Denis T.",
        "review-role-8": "Düğün Fotoğrafçısı",

        // About Section
        "about-title-text": "Mentorunuzla",
        "about-title-gradient": "Tanışın",
        "about-name": "Leo Lewaro",
        "about-role": "AI Yaratıcısı ve Medya Yenilikçisi",
        "about-desc-p1": "Eski Dubai Future Labs AI araştırmacısından içerik stratejistine dönüşen Leo, eşiyle birlikte AI Influencer 3.0'ı inşa etti— 2,130+ yaratıcının stüdyo bütçeleri olmadan AI destekli markalar başlatmasına ve erişimlerini üçe katlamasına yardımcı olan bir sistem",
        "about-desc-p2": "Leo ham fikirleri gelire dönüştürür: Midjourney, Omnisphere ve özel yüz kilitleme iş akışlarındaki ustalığı üretim maliyetlerini düşürür ve içeriğin pazara çıkış süresini 3 kat hızlandırır",
        "about-more-btn": "daha fazla",
        "about-less-btn": "daha az",
        "about-exp-pill": "2,130+ Öğrenci",
        "about-fact-1-title": "100+ viral proje",
        "about-fact-1-desc": "Küresel markalar için hiper-gerçek AI karakterler",
        "about-fact-2-title": "Sertifikalı eğitmen",
        "about-fact-2-desc": "AI araçları ve dijital kimlik hatları öğretiyor",
        "about-fact-3-title": "50k+ takipçi",
        "about-fact-3-desc": "20+ ülkeden öğrenciler onun yöntemlerini kullanıyor",
        "about-fact-4-title": "Yer aldığı yayınlar",
        "about-fact-4-desc": "Forbes, TechCrunch",

        // FAQ Section
        "faq-title": "Sıkça Sorulan",
        "faq-title-gradient": "Sorular",
        "faq-desc": "Parasosyal bağlar kurun — hayranların Influencer'ınızla bağlı hissetmelerini sağlayın",
        "faq-q1": "Max sordu… Sonuçları görmek ne kadar sürer?",
        "faq-a1": "İlk fotoğraf-gerçek çekimler ilk akşam; günde 1-2 saatlik pratikle 4-7 günde tam beslenme",
        "faq-q2": "Isabelle sordu… Bunu işim veya okuluyla birlikte yapabilir miyim?",
        "faq-a2": "Evet. Dersler 20 dakikanın altında ve 24/7 talep üzerine — akşamları veya hafta sonları izleyin",
        "faq-q3": "Anika sordu… Bu işe ne kadar zaman ayırmam gerekiyor?",
        "faq-a3": "Günde 1-2 saat içerik başlatmak ve projeyi ölçeklendirmek için yeterli",
        "faq-q4": "Hassan sordu… Hangi araçları satın almam gerekecek?",
        "faq-a4": "Sadece Midjourney — başlamak için Basic $10/ay veya hız için Standard $30/ay. Diğer hizmetler ucuz kullandıkça öde — bir profesyonel çekime karşı kuruşlar",
        "faq-q5": "Sara sordu… Her çekimi nasıl tutarlı tutuyorsunuz?",
        "faq-a5": "Kurs Face-Lock Tutarlılık Sistemi içerir — yüz özelliklerini kilitleyen hazır promptlar ve ayarlar, böylece her kare aynı çekimden geliyormuş gibi hissedilir",
        "faq-q6": "Sophie sordu… İnsanlar modelimin AI olduğunu anlayacak mı ve yüzümü göstermek zorunda mıyım?",
        "faq-a6": "İş akışımızla görüntüler gerçek fotoğraflar gibi görünür. Kendi yüzünüzü göstermek isteğe bağlı — kurgusal bir kişilik veya yükseltilmiş bir siz kullanın",
        "faq-q7": "Alex sordu… Karakterimi özel veya kişisel projeler için kullanabilir miyim?",
        "faq-a7": "Kesinlikle. Eğitilmiş modeliniz sizin — bloglarda, reklamlarda veya kapalı içerikte kısıtlama olmadan kullanabilirsiniz",
        "faq-q8": "Bella sordu… Bu kursu farklı kılan nedir ve kendi hızımda öğrenebilir miyim?",
        "faq-a8": "2,5 saatlik damıtılmış adım adım video, hazır şablonlar, kontrol listeleri ve destek. Kendi hızınızda öğrenin; yaşam boyu erişim ve güncellemeler",

        // Final CTA Section
        "final-cta-title": "AI Modeller 2030'a Kadar <span class=\"gradient-text-inverse\">$45,9B Endüstri</span> Olacak",
        "final-cta-subtitle": "AI-influencer hype feels like Bitcoin's 2012 gold rush and the 2021 NFT boom",
        "final-cta-save": "Bugün $98.00 Tasarruf Edin!",
        "final-cta-btn-text": "Kursu Şu Fiyata Alın",
        "course-sales-label": "bugün kurs satışı",
        "footer-title": "AI Influencer 3.0",
        "footer-desc": "AI oyununa atlayın — rehberiniz burada başlıyor. Modern araçları hızla öğrenin",
        "footer-email": "hi@aiinfluencer.site",
        "footer-copyright": "© 2025 AI Influencer 3.0. Tüm hakları saklıdır",
        "footer-legal": "Bu kurs yalnızca eğitim amaçlıdır. Sonuçlar garanti edilmez. Bu siteyi kullanarak şartlarımızı kabul eder ve kararların ile eylemlerinin sorumluluğunu üstlenirsin. Dijital içerikte iade yoktur"
      }
    };
  }

  get(key) {
    return this.translations[this.currentLang]?.[key] || key;
  }

  setLang(lang) {
    if (!this.translations[lang]) return false;
    this.currentLang = lang;
    this.updateDOM();
    this.updateLangButtons();
    return true;
  }

  updateDOM() {
    const skipIds = new Set(['about-desc-p1', 'about-desc-p2']);
    Object.keys(this.translations[this.currentLang]).forEach(key => {
      if (skipIds.has(key)) return; // keep complex mobile DOM intact
      let el = this.cache.get(key);
      if (!el) {
        el = document.getElementById(key);
        if (el) this.cache.set(key, el);
      }
      if (el) el.innerHTML = this.get(key);
    });
  }

  updateLangButtons() {
    document.querySelectorAll('[data-lang]').forEach(btn => {
      const isActive = btn.dataset.lang === this.currentLang;
      btn.classList.toggle('active', isActive);
      btn.classList.toggle('gradient-text', isActive);
      if (isActive) {
        btn.style.background = 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)';
        btn.style.border = 'none';
      } else {
        btn.style.background = '';
        btn.style.border = '';
      }
    });
  }

  init() {
    const browserLang = navigator.language.slice(0, 2);
    this.setLang(this.translations[browserLang] ? browserLang : 'en');
    
    document.addEventListener('click', e => {
      const langBtn = e.target.closest('[data-lang]');
      if (langBtn) this.setLang(langBtn.dataset.lang);
    });
  }
}

// Глобальный экземпляр
const translator = new Translator();

// Автоинициализация
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => translator.init());
} else {
  translator.init();
}