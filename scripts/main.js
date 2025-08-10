document.addEventListener("DOMContentLoaded", function () {
  // Определяем язык до первого использования
  let lang = localStorage.getItem("selectedLang") || "en";
  // Языковой переключатель и перевод
  const translations = {
    en: {
      // Sticky Banner
      "sticky-btn-text-mobile": "now –",
      "sticky-btn-text-desktop": "Start now –",
      "sticky-btn-price-old": "$127",
      "sticky-btn-price-new": "$27",
      "support-btn": "support",

      // Hero Section
      "hero-title-1": "AI Influencer 3.0",
      "hero-title-2": "ALREADY EASY.",
      "hero-subtitle": 'GROW A LOYAL INSTAGRAM FANBASE Master AI in days — unleash <span class="text-purple-300 font-semibold">MAGIC</span> today!',
      "main-btn-text": "Start now –",
      "main-btn-price-old": "$127",
      "main-btn-price-new": "$27",
      "live-viewers-text": "people currently viewing this page",
      "join-members-text": "Join 2,132+ creators inside",
      "rating-text": "4.9 (300+ reviews)",

      // Pain Section
      "pain-title": "Tired of",
      "pain-title-gradient": "Plastic AI faces?",
      "pain-desc":
        "See other models — imagine what you'll create with AI in your hands!",
      "pain-card1-title": "Edutainment",
      "pain-card1-desc": "Learn & Enjoy — education meets entertainment.",
      "pain-card1-point1": "Daily idea spark",
      "pain-card1-point2": "Fun + skill boost",
      "pain-card1-point3": "Create like a pro",
      "pain-card2-title": "Hyper-Realism",
      "pain-card2-desc": "Look Real. Feel Real.",
      "pain-card2-point1": "Human emotion",
      "pain-card2-point2": "No AI-fake look",
      "pain-card2-point3": "Photo-grade detail",
      "pain-card3-title": "Studio-Ready",
      "pain-card3-desc": "Shoot Without a Studio.",
      "pain-card3-point1": "Fashion-level realism",
      "pain-card3-point2": "Perfect light & tone",
      "pain-card3-point3": "Ready for ads",

      // Benefits Section
      "benefits-title": "AI Model Makers Are Your",
      "benefits-title-gradient": "Superpower",
      "benefits-desc":
        "Build a strong visual identity for content on social media to enhance your digital presence.",
      "benefits-card-1-title": "Feeling Like a Artist",
      "benefits-card-1-desc-1":
        "YOU'LL BECOME the architect, designer, sculptor, art director, producer, owner — the influencer superhero behind it all.",
      "benefits-card-1-why-title": "Why this course?",
      "benefits-card-1-feature-1": "No need to show your face on camera",
      "benefits-card-1-feature-2": "Build studio-level visuals, zero gear",
      "benefits-card-1-feature-3": "Personality-first content",
      "benefits-card-1-feature-4": "Mindset over tools",
      "benefits-card-2-title-mobile": "Studio Quality",
      "benefits-card-2-desc-1-mobile":
        "Shoot Without a Studio. Fashion-level realism, perfect skin, tone & light. Built for ads, stores, socials.",

      // Price Section
      "price-title-start": "Ambition &",
      "price-title-gradient": "AI tools",
      "price-title-middle": " >",
      "price-title-end": " Instant Influencer",
      "price-subtitle":
        "No studio, no makeup, no crew, no shooting — all for the price of a T-shirt.",
      "price-course-title": "AI Influencer 3.0 course",
      "price-current": "$27",
      "price-regular": "Regular Price: $127",
      "price-discount": "79% OFF — Only Today!",
      "price-feature-1": "Instant access after payment",
      "price-feature-2": "Watch anytime, at your own pace",
      "price-feature-3": "2.5 h of step-by-step video lessons",
      "price-feature-4": "No-code AI model training",
      "price-feature-5": "Ready-made visual framework",
      "price-feature-6": "Face-swapping explained",
      "price-btn-text": "Start now –",
      "bonuses-title": "🎁 Bonuses",
      "bonus-1": "Big Realism Prompt Pack",
      "bonus-2": "Lifetime Access Anytime",
      "bonus-3": "Waitlisted to Secret Platform soon",
      "bonus-4": "Human email support",
      "learnmap-title": "Learn Map",
      "learnmap-1": "Pose & style setup",
      "learnmap-2": "Angles & realism tips",
      "learnmap-3": "Face-Lock AI Lora training",
      "learnmap-4": "Visual control & outfit",
      "learnmap-5": "Merge & publish fast",

      // Reviews Section
      "reviews-title": "What Our",
      "reviews-title-gradient": "Students Say",
      "testimonial-subtitle":
        "Why do our AI model-makers keep sharing the course with friends?",
      "review-text-1":
        "❝ AI is finally simple and accessible. The ready-made tools are a joy to use—I'm glad I just decided to try! ❞",
      "review-name-1": "28 yo Mark R.",
      "review-role-1": "Fouder of Startup",
      "review-text-2":
        "❝ My wife and I needed a face for a new line with a zero budget. We trained an AI model with flawless yet natural skin. Followers think she's a real top model—and foundation sales jumped 17% in the first week. ❞",
      "review-name-2": "33 yo David K.",
      "review-role-2": "Brand Manager",
      "review-text-3":
        "❝ I used to worry about my looks. Now I have an upgraded AI version of myself—editorial-quality shots, growing audience, no paid ads. I stay off-camera while the good-looking persona racks up likes. ❞",
      "review-name-3": "26 yo Tony Jr.",
      "review-role-3": "Travel Blogger",
      "review-text-4":
        "❝ I feared nothing would work, but now I run an Instagram page for an influencer I built from scratch. Followers can't believe it's AI. ❞",
      "review-name-4": "21 yo Huata A.",
      "review-role-4": "Student",
      "review-text-5":
        "❝ Thank you, Leo! Your explanations are crystal-clear. Halfway through the course I launched my first AI project—and it's already getting results. You're one of my favorite instructors. ❞",
      "review-name-5": "29 yo Elif S.",
      "review-role-5": "Motion Designer",
      "review-text-6":
        "❝ Always wanted an IG feed for the shop but feared photo quality. AI built a portrait mascot that looks real—customers snap selfies with him more than with the mirror! ❞",
      "review-name-6": "31 yo Murat K.",
      "review-role-6": "Barbershop Owner",
      "review-text-7":
        "❝ I thought I'd be the oldest student, but the course breaks everything into bite-size steps. By lesson three I had a studio-grade shot with ultra-detailed skin. Fantastic experience, Leo! ❞",
      "review-name-7": "50 yo Pav Williams L.",
      "review-role-7": "Entrepreneur",
      "review-text-8":
        "❝ I tested the course skeptically, sure AI couldn't replace real lighting. It didn't—it helped. Now I generate skin-realistic references, show couples, and they get the vision instantly. Shoots run faster, images feel more emotional. ❞",
      "review-name-8": "42 yo Denis T.",
      "review-role-8": "Wedding Photographer",

      // About Section
      "about-title-text": "Meet Your",
      "about-title-gradient": "Mentor",
      "about-name": "Leo Lewaro",
      "about-role": "AI Creator & Media Innovator",
      "about-desc-p1":
        "Former Dubai Future Labs AI researcher turned content strategist, together with his wife, Leo built AI Influencer 3.0— a system that's helped 2,130+ creators launch AI-powered brands and triple their reach without studio budgets.",
      "about-desc-p2":
        "Leo turns raw ideas into revenue: his mastery of Midjourney, Omnisphere, and custom face-lock workflows cuts production costs and speeds content-to-market 3×.",
      "about-exp-pill": "2,130+ Students",
      "about-fact-1-title": "100+ viral projects",
      "about-fact-1-desc": "Hyper-real AI characters delivered for global brands",
      "about-fact-2-title": "Certified instructor",
      "about-fact-2-desc": "Teaches AI tools & digital-identity pipelines",
      "about-fact-3-title": "50k + followers",
      "about-fact-3-desc": "Learners from 20 + countries use his methods",
      "about-fact-4-title": "Featured in",
      "about-fact-4-desc": "Forbes, TechCrunch",
      "about-more-btn": "more",
      "about-less-btn": "less",

      // FAQ Section
      "faq-title": "Frequently Asked",
      "faq-title-gradient": "Questions",
      "faq-desc":
        "Build parasocial bonds — let fans feel truly connected.",
      "faq-q1":
        "Max asked… How long does it take to see results?",
      "faq-a1":
        "First photo-real shots on the very first evening; a full feed in 4–7 days with 1–2 h of daily practice.",
      "faq-q2":
        "Isabelle asked… Can I do this alongside my job or school?",
      "faq-a2":
        "Yes. Lessons are under 20 min and on-demand 24/7 — watch in the evenings or on weekends.",
      "faq-q3":
        "Anika asked… How much time do I need to dedicate to this business?",
      "faq-a3":
        "1–2 h per day is enough to launch content and scale the project.",
      "faq-q4":
        "Hassan asked… What tools will I need to purchase?",
      "faq-a4":
        "Just Midjourney — Basic $10/mo to start or Standard $30/mo for speed. Other services are cheap pay-as-you-go — pennies versus one pro shoot.",
      "faq-q5":
        "Sara asked… How do you keep every shot consistent?",
      "faq-a5":
        "The course includes a Face-Lock Consistency System — ready prompts & settings that lock facial features so every frame feels from the same shoot.",
      "faq-q6":
        "Sophie asked… Will people know my model is AI, and do I have to show my face?",
      "faq-a6":
        "With our workflow images look like real photos. Showing your own face is optional — use a fictional persona or an upgraded you.",
      "faq-q7":
        "Alex asked… Can I use my character for private or personal projects?",
      "faq-a7":
        "Absolutely. Your trained model is yours — use it in blogs, ads or closed content with no restrictions.",
      "faq-q8":
        "Bella asked… What makes this course different, and can I learn at my own pace?",
      "faq-a8":
        "2.5 h of distilled step-by-step video, ready templates, check-lists and support. Learn at your own speed; lifetime access and updates.",

      // Final CTA Section
      "final-cta-title":
        'AI Models Will Be a <span class="gradient-text-inverse">$2.5B Industry</span> by 2030',
      "final-cta-subtitle":
        "The AI-influencer hype feels like Bitcoin's 2012 gold rush and NFTs boom 2021.",
      "final-cta-save": "Save $98.00 Today!",
      "final-cta-btn-text":
        "Grab The Course For",
      "course-sales-label": "course sales today",
      "footer-title": "AI Influencer 3.0",
      "footer-desc":
        "Jump into the AI game — your guide starts here. Master modern tools fast.",
      "footer-email": "support@aiinfluencer.site",
      "footer-copyright":
        "© 2025 AI Influencer 3.0. All rights reserved.",
      "footer-legal":
        "This course is for educational purposes only. Results are not guaranteed and may vary based on individual effort, experience, and market conditions. By purchasing and using this course, you acknowledge that you have read and agree to our terms of service and privacy policy. You assume full responsibility for your decisions, actions, and any outcomes resulting from the application of the course materials. Digital products are non-refundable due to their immediate accessibility and downloadable nature. All content is protected by copyright and intellectual property laws.",
    },

    ru: {
      // Sticky Banner
      "sticky-btn-text-mobile": "сейчас –",
      "sticky-btn-text-desktop": "Начни сейчас –",
      "sticky-btn-price-old": "$127",
      "sticky-btn-price-new": "$27",
      "support-btn": "поддержка",

      // Hero Section
      "hero-title-1": "AI-Инфлюенсер 3.0",
      "hero-title-2": "ЭТО УЖЕ ПРОСТО.",
      "hero-subtitle":
        'Растите верную IG-аудиторию<br><br>Освойте ИИ за дни — запустите <span class="text-purple-300 font-semibold">МАГИЮ</span> уже сегодня!',
      "main-btn-text": "Начни сейчас –",
      "main-btn-price-old": "$127",
      "main-btn-price-new": "$27",
      "live-viewers-text": "человек сейчас просматривают эту страницу",
      "join-members-text": "Присоединяйтесь к 2,132+ креаторам",
      "rating-text": "4.9 (300+ отзывов)",

      // Pain Section
      "pain-title": "Устали от",
      "pain-title-gradient": "пластиковых AI-лиц?",
      "pain-desc":
        "Посмотрите на чужие модели — представьте, что создадите сами, когда ИИ будет в ваших руках!",
      "pain-card1-title": "Учись играючи",
      "pain-card1-desc": "Учитесь и наслаждайтесь — образование встречается с развлечением.",
      "pain-card1-point1": "Ежедневное вдохновение",
      "pain-card1-point2": "Весело и полезно",
      "pain-card1-point3": "Твори как профи",
      "pain-card2-title": "Гиперреализм",
      "pain-card2-desc": "Выглядит реально. Ощущается реально.",
      "pain-card2-point1": "Живые эмоции",
      "pain-card2-point2": "Без искусственного вида",
      "pain-card2-point3": "Фотореалистичная детализация",
      "pain-card3-title": "Студийное качество",
      "pain-card3-desc": "Снимайте без студии.",
      "pain-card3-point1": "Реализм уровня fashion",
      "pain-card3-point2": "Идеальный свет и тон",
      "pain-card3-point3": "Готово для рекламы",

      // Benefits Section
      "benefits-title": "Создатели AI-моделей — ваша",
      "benefits-title-gradient": "суперсила",
      "benefits-desc":
        "Постройте сильную визуальную идентичность для соцсетей и усиливайте цифровое присутствие.",
      "benefits-card-1-title": "Почувствуйте себя художником",
      "benefits-card-1-desc-1":
        "ВЫ СТАНЕТЕ архитектором, дизайнером, скульптором, арт-директором, продюсером, владельцем — супергероем-инфлюенсером, стоящим за всем этим.",
      "benefits-card-1-why-title": "Почему этот курс?",
      "benefits-card-1-feature-1": "Без лица в кадре и речи на камеру",
      "benefits-card-1-feature-2": "Студийные визуалы без оборудования",
      "benefits-card-1-feature-3": "Контент с характером",
      "benefits-card-1-feature-4": "Мышление важнее инструментов",
      "benefits-card-2-title-mobile": "Студийное качество",
      "benefits-card-2-desc-1-mobile":
        "Снимайте без студии. Модный реализм, идеальная кожа, свет и тон. Готово для рекламы, магазинов, соцсетей.",

      // Price Section
      "price-title-start": "Амбиции и",
      "price-title-gradient": "инструменты ИИ",
      "price-title-middle": " >",
      "price-title-end": " моментальный инфлюенсер",
      "price-subtitle":
        "Без студии, макияжа, команды и съёмок — всё по цене футболки.",
      "price-course-title": "Курс «AI Influencer 3.0»",
      "price-current": "$27",
      "price-regular": "Обычная цена: $127",
      "price-discount": "Скидка 79% — только сегодня!",
      "price-feature-1": "Доступ сразу после оплаты",
      "price-feature-2": "Смотрите в любое время, в своём темпе",
      "price-feature-3": "2,5 часа пошаговых видеоуроков",
      "price-feature-4": "Обучение модели без кода",
      "price-feature-5": "Готовый визуальный каркас",
      "price-feature-6": "Face-swap — простым языком",
      "price-btn-text": "Начни сейчас –",
      "bonuses-title": "🎁 Бонусы",
      "bonus-1": "Большой пакет реалистичных промптов",
      "bonus-2": "Пожизненный доступ",
      "bonus-3": "В листе ожидания секретной платформы",
      "bonus-4": "Живая email-поддержка",
      "learnmap-title": "Карта обучения",
      "learnmap-1": "Поза и стиль персонажа",
      "learnmap-2": "Ракурсы и советы по реалистичности",
      "learnmap-3": "Face-Lock AI Lora-обучение",
      "learnmap-4": "Визуальный контроль и образы",
      "learnmap-5": "Быстро объединить и опубликовать",

      // Reviews Section
      "reviews-title": "Что",
      "reviews-title-gradient": "говорят студенты",
      "testimonial-subtitle":
        "Почему наши создатели AI-моделей советуют курс друзьям?",
      "review-text-1":
        "❝ ИИ наконец стал простым и доступным. Готовые инструменты — одно удовольствие, рад, что просто решился попробовать! ❞",
      "review-name-1": "Марк Р., 28",
      "review-role-1": "Основатель стартапа",
      "review-text-2":
        "❝ Нам с женой нужно было «лицо» новой линейки с нулевым бюджетом. Обучили модель с безупречной, но естественной кожей. Подписчики уверены — это топ-модель; продажи тона +17% за первую неделю. ❞",
      "review-name-2": "Дэвид К., 33",
      "review-role-2": "Бренд-менеджер",
      "review-text-3":
        "❝ Раньше переживал из-за внешности. Теперь у меня прокачанная AI-версия — кадры уровня редакции, рост аудитории, без рекламы. Я за кадром, а персона собирает лайки. ❞",
      "review-name-3": "Тони Jr., 26",
      "review-role-3": "Тревел-блогер",
      "review-text-4":
        "❝ Боялся, что ничего не выйдет, а теперь веду IG-страницу инфлюенсера, созданного с нуля. Подписчики не верят, что это ИИ. ❞",
      "review-name-4": "Хуата А., 21",
      "review-role-4": "Студент",
      "review-text-5":
        "❝ Спасибо, Лео! Объяснения кристально ясные. На середине курса запустил первый AI-проект — уже есть результат. Ты — в топе моих преподавателей. ❞",
      "review-name-5": "Элиф С., 29",
      "review-role-5": "Motion-дизайнер",
      "review-text-6":
        "❝ Хотел ленту салона, но боялся качества фото. ИИ сделал портрет-маскота как живого — с ним фоткаются чаще, чем с зеркалом! ❞",
      "review-name-6": "Мурат К., 31",
      "review-role-6": "Владелец барбершопа",
      "review-text-7":
        "❝ Думал, буду самым возрастным, но курс — по шагам. К третьему уроку — снимок студийного уровня с ультра-деталями кожи. Отличный опыт, Лео! ❞",
      "review-name-7": "Pav Williams L., 50",
      "review-role-7": "Предприниматель",
      "review-text-8":
        "❝ Скептически тестил — думал, свет не заменить. ИИ не заменил — помог. Делаю skin-референсы, показываю парам — картинка понятна мгновенно. Съёмки быстрее, эмоций больше. ❞",
      "review-name-8": "Денис Т., 42",
      "review-role-8": "Свадебный фотограф",

      // About Section
      "about-title-text": "Познакомьтесь с",
      "about-title-gradient": "наставником",
      "about-name": "Лео Леваро",
      "about-role": "AI-креатор и медиановатор",
      "about-desc-p1":
        "Бывший исследователь Dubai Future Labs, ныне контент-стратег. Вместе с женой создал AI Influencer 3.0 — систему, которая помогла 2,130+ авторам запускать AI-бренды и утраивать охваты без студийных бюджетов.",
      "about-desc-p2":
        "Лео превращает идеи в доход: Midjourney, Omnisphere и face-lock-пайплайны снижают затраты и ускоряют вывод контента в 3 раза.",
      "about-exp-pill": "2,130+ студентов",
      "about-fact-1-title": "100+ вирусных проектов",
      "about-fact-1-desc": "Гиперреальные AI-персонажи для глобальных брендов",
      "about-fact-2-title": "Сертифицированный инструктор",
      "about-fact-2-desc": "Обучает AI-инструментам и цифровой идентичности",
      "about-fact-3-title": "50k+ подписчиков",
      "about-fact-3-desc": "Ученики из 20+ стран применяют методики",
      "about-fact-4-title": "Публикации",
      "about-fact-4-desc": "Forbes, TechCrunch",
      "about-more-btn": "ещё",
      "about-less-btn": "свернуть",

      // FAQ Section
      "faq-title": "Часто задаваемые",
      "faq-title-gradient": "вопросы",
      "faq-desc":
        "Стройте парасоциальные связи — пусть фанаты чувствуют настоящую вовлечённость.",
      "faq-q1": "Макс: Сколько ждать первых результатов?",
      "faq-a1":
        "Первые фотореальные кадры — уже в первый вечер; полноценная лента — за 4–7 дней при 1–2 ч в день.",
      "faq-q2": "Изабель: Совмещается с работой или учёбой?",
      "faq-a2":
        "Да. Уроки до 20 минут и доступны 24/7 — смотрите вечером или на выходных.",
      "faq-q3": "Аника: Сколько времени уделять проекту?",
      "faq-a3":
        "1–2 часа в день достаточно, чтобы запустить контент и масштабироваться.",
      "faq-q4": "Хассан: Какие инструменты покупать?",
      "faq-a4":
        "Только Midjourney — Basic $10/мес для старта или Standard $30/мес быстрее. Остальное — дешёвая поминутная оплата, копейки против одного профи-съёма.",
      "faq-q5": "Сара: Как держать постоянство кадров?",
      "faq-a5":
        "Внутри — Face-Lock Consistency System: готовые промпты и настройки, фиксирующие черты лица, чтобы каждый кадр был «из одной съёмки».",
      "faq-q6": "Софи: Поймут ли, что модель — ИИ? Нужна ли моя внешность?",
      "faq-a6":
        "Наш пайплайн делает кадры «как фото». Показывать своё лицо не обязательно — используйте вымышленного персонажа или «прокачанную» версию себя.",
      "faq-q7": "Алекс: Можно для личных/частных проектов?",
      "faq-a7":
        "Да. Обученная модель — ваша. Используйте в блогах, рекламе и закрытом контенте без ограничений.",
      "faq-q8": "Белла: Чем этот курс отличается? Учиться в своём темпе?",
      "faq-a8":
        "2,5 часа выжимки, шаблоны, чек-листы и поддержка. Учитесь в своём темпе; пожизненный доступ и обновления.",

      // Final CTA
      "final-cta-title":
        'AI-модели станут <span class="gradient-text">рынком $2.5B</span> к 2030',
      "final-cta-subtitle":
        "Хайп вокруг AI-инфлюенсеров — как золотая лихорадка Bitcoin 2012 и бум NFT 2021.",
      "final-cta-save": "Сэкономьте $98 сегодня!",
      "final-cta-btn-text": "Забрать курс за",
      "course-sales-label": "покупок курса сегодня",
      "footer-title": "AI Influencer 3.0",
      "footer-desc":
        "Включайтесь в AI-игру — старт здесь. Быстро осваивайте современные инструменты.",
      "footer-email": "support@aiinfluencer.site",
      "footer-copyright":
        "© 2025 AI Influencer 3.0. Все права защищены.",
      "footer-legal":
        "Этот курс предназначен только для образовательных целей. Результаты не гарантированы и могут варьироваться в зависимости от индивидуальных усилий, опыта и рыночных условий. Покупая и используя этот курс, вы подтверждаете, что прочитали и согласны с нашими условиями обслуживания и политикой конфиденциальности. Вы берёте на себя полную ответственность за свои решения, действия и любые результаты, полученные от применения материалов курса. Цифровые продукты не подлежат возврату из-за их немедленной доступности и загружаемой природы. Весь контент защищён авторским правом и законами об интеллектуальной собственности.",
    },

    tr: {
      // Sticky Banner
      "sticky-btn-text-mobile": "şimdi –",
      "sticky-btn-text-desktop": "Hemen başla –",
      "sticky-btn-price-old": "$127",
      "sticky-btn-price-new": "$27",
      "support-btn": "destek",

      // Hero Section
      "hero-title-1": "AI Influencer 3.0",
      "hero-title-2": "ARTIK ÇOK KOLAY.",
      "hero-subtitle":
        'SADIK BİR INSTAGRAM KİTLESİ BÜYÜT<br><br>Yapay zekâyı birkaç günde öğren — <span class="text-purple-300 font-semibold">SİHİR</span>i bugün başlat!',
      "main-btn-text": "Hemen başla –",
      "main-btn-price-old": "$127",
      "main-btn-price-new": "$27",
      "live-viewers-text": "kişi şu anda bu sayfayı inceliyor",
      "join-members-text": "İçeride 2.132+ yaratıcıya katıl",
      "rating-text": "4.9 (300+ yorum)",

      // Pain Section
      "pain-title": "Bıktınız mı",
      "pain-title-gradient": "sahte görünen AI yüzlerden?",
      "pain-desc":
        "Başkalarının modellerine bak — AI senin elindeyken neler yaratacağını hayal et!",
      "pain-card1-title": "Eğlenceli Öğrenme",
      "pain-card1-desc": "Öğren ve eğlen — eğitim, eğlenceyle buluşuyor.",
      "pain-card1-point1": "Günlük fikir kıvılcımı",
      "pain-card1-point2": "Eğlence + beceri artışı",
      "pain-card1-point3": "Usta gibi üret",
      "pain-card2-title": "Hiper-gerçekçilik",
      "pain-card2-desc": "Gerçek görün. Gerçek hissettir.",
      "pain-card2-point1": "İnsani duygu",
      "pain-card2-point2": "Yapay görünüm yok",
      "pain-card2-point3": "Fotoğraf seviyesinde detay",
      "pain-card3-title": "Stüdyoya Hazır",
      "pain-card3-desc": "Stüdyo olmadan çek.",
      "pain-card3-point1": "Moda çekimi düzeyi gerçekçilik",
      "pain-card3-point2": "Mükemmel ışık ve ton",
      "pain-card3-point3": "Reklama hazır",

      // Benefits Section
      "benefits-title": "AI model üreticileri senin",
      "benefits-title-gradient": "süper gücün",
      "benefits-desc":
        "Sosyal medya içeriğin için güçlü bir görsel kimlik kur; dijital varlığını büyüt.",
      "benefits-card-1-title": "Kendini sanatçı gibi hisset",
      "benefits-card-1-desc-1":
        "Mimar, tasarımcı, heykeltıraş, sanat yönetmeni, yapımcı, sahip — hepsine dönüş; hepsinin arkasındaki influencer süper kahramanı ol.",
      "benefits-card-1-why-title": "Neden bu kurs?",
      "benefits-card-1-feature-1": "Yüzünü kameraya göstermen gerekmez",
      "benefits-card-1-feature-2": "Ekipmansız stüdyo seviyesi görseller",
      "benefits-card-1-feature-3": "Önce kişilik, sonra filtre",
      "benefits-card-1-feature-4": "Araçlardan önce zihniyet",
      "benefits-card-2-title-mobile": "Stüdyo Kalitesi",
      "benefits-card-2-desc-1-mobile":
        "Stüdyo olmadan çek. Moda düzeyi gerçekçilik; kusursuz cilt, ışık ve ton. Reklam, mağaza, sosyal için ideal.",

      // Price Section
      "price-title-start": "Hırs &",
      "price-title-gradient": "AI araçları",
      "price-title-middle": " >",
      "price-title-end": " Anında Fenomen",
      "price-subtitle":
        "Stüdyo yok, makyaj yok, ekip yok, çekim yok — hepsi bir tişört fiyatına.",
      "price-course-title": "AI Influencer 3.0 kursu",
      "price-current": "$27",
      "price-regular": "Normal Fiyat: $127",
      "price-discount": "%79 İNDİRİM — Sadece Bugün!",
      "price-feature-1": "Ödeme sonrası anında erişim",
      "price-feature-2": "İstediğin zaman, kendi hızında izle",
      "price-feature-3": "Adım adım 2,5 saat video ders",
      "price-feature-4": "Kodsuz AI model eğitimi",
      "price-feature-5": "Hazır görsel çerçeve",
      "price-feature-6": "Yüz değiştirme açıklanıyor",
      "price-btn-text": "Hemen başla –",
      "bonuses-title": "🎁 Bonuslar",
      "bonus-1": "Büyük Realism Prompt Paketi",
      "bonus-2": "Süresiz erişim",
      "bonus-3": "Yakında Gizli Platform bekleme listesi",
      "bonus-4": "Gerçek kişi e-posta desteği",
      "learnmap-title": "Öğrenim Haritası",
      "learnmap-1": "Poz ve stil kurulumu",
      "learnmap-2": "Açı & gerçekçilik ipuçları",
      "learnmap-3": "Face-Lock AI Lora eğitimi",
      "learnmap-4": "Görsel kontrol & kıyafet",
      "learnmap-5": "Birleştir ve hızla yayınla",

      // Reviews Section
      "reviews-title": "Öğrencilerimiz",
      "reviews-title-gradient": "ne diyor",
      "testimonial-subtitle":
        "Neden AI model üreticilerimiz kursu arkadaşlarıyla paylaşmaya devam ediyor?",
      "review-text-1":
        "❝ AI sonunda basit ve erişilebilir. Hazır araçları kullanmak çok keyifli—iyi ki denemişim! ❞",
      "review-name-1": "28, Mark R.",
      "review-role-1": "Startup kurucusu",
      "review-text-2":
        "❝ Eşimle sıfır bütçeyle yeni bir seri için 'yüz'e ihtiyacımız vardı. Kusursuz ama doğal cilde sahip bir AI model eğittik. Takipçiler onun gerçek bir top model olduğuna inanıyor—ilk haftada fondöten satışları %17 arttı. ❞",
      "review-name-2": "33, David K.",
      "review-role-2": "Marka Yöneticisi",
      "review-text-3":
        "❝ Görünüşümden endişe ederdim. Şimdi kendimin geliştirilmiş AI versiyonu var—editoryal kalite kareler, büyüyen kitle, reklamsız. Ben kameranın dışında kalıyorum, şık persona beğenileri topluyor. ❞",
      "review-name-3": "26, Tony Jr.",
      "review-role-3": "Seyahat Bloggerı",
      "review-text-4":
        "❝ Hiçbir şey işe yaramaz sanıyordum ama sıfırdan kurduğum bir influencer için IG sayfası yürütüyorum. Takipçiler bunun AI olduğuna inanamıyor. ❞",
      "review-name-4": "21, Huata A.",
      "review-role-4": "Öğrenci",
      "review-text-5":
        "❝ Teşekkürler, Leo! Açıklamaların tertemiz. Kursun ortasında ilk AI projemi başlattım—şimdiden sonuç veriyor. En sevdiğim eğitmenlerdensin. ❞",
      "review-name-5": "29, Elif S.",
      "review-role-5": "Motion Designer",
      "review-text-6":
        "❝ Mağaza için IG akışı istiyordum ama fotoğraf kalitesinden korkuyordum. AI gerçek gibi duran bir portre maskotu yaptı—müşteriler aynadan çok onunla selfie çekiyor! ❞",
      "review-name-6": "31, Murat K.",
      "review-role-6": "Berber Dükkanı Sahibi",
      "review-text-7":
        "❝ En yaşlı öğrenci ben olurum sanmıştım, ama kurs her şeyi lokma lokma ayırıyor. Üçüncü derste, ultra detaylı ciltle stüdyo seviyesinde bir karem vardı. Harika deneyim, Leo! ❞",
      "review-name-7": "50, Pav Williams L.",
      "review-role-7": "Girişimci",
      "review-text-8":
        "❝ Kursu şüpheyle denedim; gerçek ışığı AI'ın yerine koyamayacağına emindim. Yerine koymadı—yardım etti. Şimdi cilt-gerçekçi referanslar üretiyorum; çiftlere gösteriyorum ve vizyonu anında kavrıyorlar. Çekimler hızlı, kareler daha duygusal. ❞",
      "review-name-8": "42, Denis T.",
      "review-role-8": "Düğün Fotoğrafçısı",

      // About Section
      "about-title-text": "Eğitmeninle",
      "about-title-gradient": "tanış",
      "about-name": "Leo Lewaro",
      "about-role": "AI Üreticisi & Medya Yenilikçisi",
      "about-desc-p1":
        "Eski Dubai Future Labs AI araştırmacısı, şimdi içerik stratejisti. Eşiyle birlikte AI Influencer 3.0'ı kurdu—2.130+ yaratıcının AI destekli marka başlatmasına ve stüdyo bütçesi olmadan erişimini üçe katlamasına yardım etti.",
      "about-desc-p2":
        "Leo, ham fikirleri gelire çevirir: Midjourney, Omnisphere ve özel face-lock iş akışları maliyeti düşürür ve pazara çıkışı 3× hızlandırır.",
      "about-exp-pill": "2.130+ öğrenci",
      "about-fact-1-title": "100+ viral proje",
      "about-fact-1-desc": "Küresel markalara hiper-gerçek AI karakterler",
      "about-fact-2-title": "Sertifikalı eğitmen",
      "about-fact-2-desc": "AI araçları ve dijital kimlik hatlarını öğretir",
      "about-fact-3-title": "50k+ takipçi",
      "about-fact-3-desc": "20+ ülkeden öğrenciler yöntemlerini kullanıyor",
      "about-fact-4-title": "Öne çıkanlar",
      "about-fact-4-desc": "Forbes, TechCrunch",
      "about-more-btn": "daha fazla",
      "about-less-btn": "daha az",

      // FAQ Section
      "faq-title": "Sıkça Sorulan",
      "faq-title-gradient": "Sorular",
      "faq-desc":
        "Parasosyal bağlar kur — hayranların gerçekten bağlı hissetsin.",
      "faq-q1": "Max sordu… Sonuçları görmek ne kadar sürer?",
      "faq-a1":
        "İlk akşamda fotogerçek kareler; günde 1–2 saatle 4–7 günde tam bir akış.",
      "faq-q2": "Isabelle sordu… Bunu iş/okulla birlikte yapabilir miyim?",
      "faq-a2":
        "Evet. Dersler 20 dakikanın altında ve 7/24 talep üzerine — akşamları veya hafta sonu izle.",
      "faq-q3": "Anika sordu… Bu işe ne kadar zaman ayırmalıyım?",
      "faq-a3":
        "Günde 1–2 saat içerik başlatmak ve projeyi büyütmek için yeterli.",
      "faq-q4": "Hassan sordu… Hangi araçları satın almalıyım?",
      "faq-a4":
        "Sadece Midjourney — başlangıç için Basic $10/ay veya hız için Standard $30/ay. Diğer servisler ucuz, kullandığın kadar öde — tek bir profesyonel çekime kıyasla kuruşlar.",
      "faq-q5": "Sara sordu… Tutarlılığı nasıl koruyorsunuz?",
      "faq-a5":
        "Kursta Face-Lock Tutarlılık Sistemi var — her kare aynı çekimden gibi hissettiren, yüz özelliklerini kilitleyen hazır promptlar ve ayarlar.",
      "faq-q6": "Sophie sordu… Modelimin AI olduğu anlaşılır mı; yüzümü göstermeli miyim?",
      "faq-a6":
        "İş akışımız görüntüleri gerçek fotoğraf gibi yapar. Yüzünü göstermek zorunda değilsin — kurgusal persona ya da geliştirilmiş 'sen' kullan.",
      "faq-q7": "Alex sordu… Karakterimi özel/kişisel projelerde kullanabilir miyim?",
      "faq-a7":
        "Kesinlikle. Eğitilmiş model senindir — bloglarda, reklamlarda veya kapalı içerikte sınırsız kullan.",
      "faq-q8": "Bella sordu… Bu kursu farklı kılan ne; kendi hızımda öğrenebilir miyim?",
      "faq-a8":
        "2,5 saat damıtılmış adım adım video, hazır şablonlar, kontrol listeleri ve destek. Kendi hızında öğren; ömür boyu erişim ve güncellemeler.",

      // Final CTA
      "final-cta-title":
        'AI Modelleri 2030\'a kadar <span class="gradient-text-inverse">$2.5B</span>\'lık bir sektör olacak',
      "final-cta-subtitle":
        "AI-influencer çılgınlığı, 2012 Bitcoin altına hücumu ve 2021 NFT patlaması gibi hissettiriyor.",
      "final-cta-save": "Bugün $98 tasarruf et!",
      "final-cta-btn-text": "Kursu Kap",
      "course-sales-label": "bugünkü kurs satışları",
      "footer-title": "AI Influencer 3.0",
      "footer-desc":
        "AI oyununa dal — rehberin burada başlıyor. Modern araçları hızla ustalaş.",
      "footer-email": "support@aiinfluencer.site",
      "footer-copyright":
        "© 2025 AI Influencer 3.0. Tüm hakları saklıdır.",
      "footer-legal":
        "Bu kurs yalnızca eğitim amaçlıdır. Sonuçlar garanti edilmez ve bireysel çaba, deneyim ve pazar koşullarına göre değişebilir. Bu kursu satın alarak ve kullanarak, hizmet şartlarımızı ve gizlilik politikamızı okuduğunuzu ve kabul ettiğinizi onaylarsınız. Kararlarınız, eylemleriniz ve kurs materyallerinin uygulanmasından kaynaklanan sonuçlar için tam sorumluluk üstlenirsiniz. Dijital ürünler, anında erişilebilir ve indirilebilir doğaları nedeniyle iade edilemez. Tüm içerik telif hakkı ve fikri mülkiyet yasalarıyla korunmaktadır.",
    }
  };

  // Делаем функцию глобальной
  window.changeLanguage = function(selectedLang) {
    lang = selectedLang;
    localStorage.setItem("selectedLang", lang);

    // Обновляем все элементы по их id
    Object.keys(translations[lang]).forEach((key) => {
      const element = document.getElementById(key);
      if (element && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Обновляем активное состояние кнопок
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.remove("active");
      btn.classList.remove("gradient-text");
      btn.style.background = "transparent";
      btn.style.border = "1px solid #fff";
    });
    
    const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
    if (activeBtn) {
      activeBtn.classList.add("active");
      activeBtn.classList.add("gradient-text");
      activeBtn.style.background = "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)";
      activeBtn.style.border = "none";
    }

    // Специальная обработка для заголовка секции "О нас"
    const aboutTitle = document.querySelector(".about-title");
    if (aboutTitle) {
      const titleText = aboutTitle.querySelector(".about-title-text");
      const titleGradient = aboutTitle.querySelector(".about-title-gradient");
      if (titleText && titleGradient) {
        titleText.textContent = translations[lang]["about-title-text"];
        titleGradient.textContent = translations[lang]["about-title-gradient"];
      }
    }
  }

  // Обработчики событий для кнопок языка
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedLang = btn.getAttribute("data-lang");
      changeLanguage(selectedLang);
    });
  });

  // Инициализация языка при загрузке страницы
  window.changeLanguage(lang);

  // Остальной код остается без изменений...
  // Счетчик просмотров
  function updateViewerCount() {
    const viewerElement = document.getElementById("live-viewers-count");
    if (viewerElement) {
      const baseCount = 23;
      const variation = Math.floor(Math.random() * 6) - 3;
      const currentCount = baseCount + variation;
      viewerElement.textContent = currentCount;
    }
  }

  // Обновляем счетчик каждые 3-7 секунд
  setInterval(updateViewerCount, Math.random() * 4000 + 3000);
  updateViewerCount();

  // Счетчик продаж курса
  function updateSalesCount() {
    const salesElement = document.getElementById("course-sales-count");
    if (salesElement) {
      const baseCount = 23;
      const variation = Math.floor(Math.random() * 6) - 3;
      const currentCount = Math.max(1, baseCount + variation);
      salesElement.textContent = currentCount;
    }
  }

  // Обновляем счетчик продаж каждые 5-10 секунд
  setInterval(updateSalesCount, Math.random() * 5000 + 5000);
  updateSalesCount();

  // Таймер обратного отсчета
  function startCountdownTimer() {
    // Устанавливаем время окончания (3 часа от текущего времени)
    let endTime = new Date().getTime() + (3 * 60 * 60 * 1000);
    
    function updateTimer() {
      const now = new Date().getTime();
      const timeLeft = endTime - now;
      
      if (timeLeft > 0) {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Форматируем время с ведущими нулями
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        // Обновляем таймер в sticky banner
        const bannerTimerValues = document.querySelectorAll('#banner-timer .timer-value');
        if (bannerTimerValues.length >= 3) {
          bannerTimerValues[0].textContent = formattedHours;
          bannerTimerValues[1].textContent = formattedMinutes;
          bannerTimerValues[2].textContent = formattedSeconds;
        }
        
        // Обновляем таймер в final CTA
        const finalTimerValues = document.querySelectorAll('#final-cta-timer-wrap .timer-value');
        if (finalTimerValues.length >= 3) {
          finalTimerValues[0].textContent = formattedHours;
          finalTimerValues[1].textContent = formattedMinutes;
          finalTimerValues[2].textContent = formattedSeconds;
        }
      } else {
        // Таймер истек, сбрасываем на 3 часа
        const newEndTime = new Date().getTime() + (3 * 60 * 60 * 1000);
        endTime = newEndTime;
      }
    }
    
    // Обновляем таймер каждую секунду
    updateTimer(); // Сразу обновляем
    setInterval(updateTimer, 1000);
  }
  
  // Запускаем таймер
  startCountdownTimer();

  // Функция для кнопки "Больше" в секции About
  const moreBtn = document.querySelector(".about-more-btn");
  const lessBtn = document.querySelector(".about-less-btn");
  const hiddenContent = document.querySelector(".about-hidden-content");

  if (moreBtn && lessBtn && hiddenContent) {
    moreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      hiddenContent.style.display = "block";
      moreBtn.style.display = "none";
      lessBtn.style.display = "inline";

      // Обновляем текст кнопки в зависимости от языка
      lessBtn.textContent = translations[lang]["about-less-btn"];
    });

    lessBtn.addEventListener("click", function (e) {
      e.preventDefault();
      hiddenContent.style.display = "none";
      lessBtn.style.display = "none";
      moreBtn.style.display = "inline";

      // Обновляем текст кнопки в зависимости от языка
      moreBtn.textContent = translations[lang]["about-more-btn"];
    });
  }

  // Smooth scroll для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Анимация появления элементов при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Наблюдаем за всеми секциями
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Параллакс эффект для hero секции
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero-section");
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Липкий баннер
  const stickyBanner = document.querySelector("#sticky-banner");
  let isOnFinalSection = false;
  
  if (stickyBanner) {
    // Отслеживаем последнюю секцию
    const finalSection = document.querySelector("#final-cta");
    if (finalSection) {
      const finalSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isOnFinalSection = entry.isIntersecting;
        });
      }, {
        threshold: 0.3 // Когда 30% секции видно
      });
      
      finalSectionObserver.observe(finalSection);
    }
    
    window.addEventListener("scroll", () => {
      // Скрываем шторку на последней секции
      if (isOnFinalSection) {
        stickyBanner.style.opacity = "0";
        stickyBanner.style.transform = "translateY(-32px)";
        stickyBanner.style.pointerEvents = "none";
      } else if (window.scrollY > 100) {
        stickyBanner.style.opacity = "1";
        stickyBanner.style.transform = "translateY(0)";
        stickyBanner.style.pointerEvents = "auto";
      } else {
        stickyBanner.style.opacity = "0";
        stickyBanner.style.transform = "translateY(-32px)";
        stickyBanner.style.pointerEvents = "none";
      }
    });
  }

  // Обработка кликов по кнопкам CTA
  document.querySelectorAll(".cta-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // Здесь можно добавить аналитику или другую логику
      console.log("CTA button clicked");
    });
  });

  // Обработка FAQ аккордеона
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-toggle");
    const answer = item.querySelector(".faq-answer");

    if (question && answer) {
      question.addEventListener("click", () => {
        const isOpen = answer.classList.contains("open");

        // Закрываем все остальные FAQ
        document.querySelectorAll(".faq-item").forEach((otherItem) => {
          const otherAnswer = otherItem.querySelector(".faq-answer");
          const otherToggle = otherItem.querySelector(".faq-toggle");
          if (otherAnswer && otherToggle) {
            otherAnswer.classList.remove("open");
            otherAnswer.classList.add("hidden");
            otherToggle.classList.remove("open");
          }
        });

        // Открываем/закрываем текущий FAQ
        if (!isOpen) {
          answer.classList.add("open");
          answer.classList.remove("hidden");
          question.classList.add("open");
        }
      });
    }
  });

});
