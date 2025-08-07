document.addEventListener("DOMContentLoaded", function () {
  // Определяем язык до первого использования
  let lang = localStorage.getItem("selectedLang") || "en";
  // Языковой переключатель и перевод
  const translations = {
    en: {
      // Sticky Banner
      "sticky-btn-text": "Get started –",
      "sticky-btn-price-old": "$127",
      "sticky-btn-price-new": "$27",
      "support-btn": "support",

      // Hero Section
      "hero-title-1": "AI Influencer 3.0",
      "hero-title-2": "ALREADY EASY.",
      "hero-subtitle":
        'BUILD A LOYAL FANBASE ON INSTAGRAM<br>Master AI in days — unleash <span class="text-purple-300 font-semibold">MAGIC</span> today!',
      "main-btn-text": "Get started –",
      "main-btn-price-old": "$127",
      "main-btn-price-new": "$27",
      "live-viewers-text": "people currently viewing this page",
      "join-text": "Join",
      "members-text": "creators inside",
      "rating-text": "4.9 (300+ reviews)",

      // Pain Section
      "pain-title": "Tired of",
      "pain-title-gradient": "Plastic AI faces?",
      "pain-desc":
        "See another models - imagine what you'll create with AI in your hands!",
      
      // Pain Cards
      "pain-card1-title": "Edutainment",
      "pain-card1-desc": "Learn & Enjoy — education meets entertainment.",
      "pain-card1-point1": "Daily creative boost",
      "pain-card1-point2": "Fast & simple",
      "pain-card1-point3": "Inspires masterpiece thinking",
      
      "pain-card2-title": "Hyper-Realism",
      "pain-card2-desc": "Look Real. Feel Real.",
      "pain-card2-point1": "Emotion-rich, photo-grade quality",
      "pain-card2-point2": "No AI-fake look",
      "pain-card2-point3": "Fast, affordable, on-brand",
      
      "pain-card3-title": "Studio Quality",
      "pain-card3-desc": "Shoot Without a Studio",
      "pain-card3-point1": "Fashion-level realism",
      "pain-card3-point2": "Perfect skin, tone & light",
      "pain-card3-point3": "Built for ads, stores, socials",

      // Benefits Section
      "benefits-title-inverse": "AI Models",
      "benefits-title-middle": "Are Your Creative",
      "benefits-title-gradient": "Superpower",
      "benefits-desc":
        "Build a strong visual identity for content on social media to enhance your digital presence.",
      "benefits-card-1-title": "Feeling Like an Artist",
      "benefits-card-1-desc-1":
        "After this course you'll be a architect, digital designer, creative producer and AI-influencer — all rolled into one.",
      "benefits-card-1-desc-1-2":
        "Unlock the secrets of building your own AI influencer — and turn it into a business.",
      "benefits-card-1-desc-2": 'standing out in a sea of "plastic" AI faces.',
      "benefits-card-1-why-title": "Why It's Different",
      "benefits-card-1-feature-1": "Build studio-level visuals with no gear",
      "benefits-card-1-feature-2":
        "Create content with personality, not filters",
      "benefits-card-1-feature-3":
        "No need to show your face or speak on camera",
      "benefits-card-1-feature-4":
        "Make images that feel emotional, alive, real",
      "benefits-card-1-feature-5": "Learn a mindset, not just tools",
      "benefits-card-2-title-mobile": "Studio Quality",
      "benefits-card-2-desc-1-mobile":
        "Shoot Without a Studio. Fashion-level realism, perfect skin, tone & light. Built for ads, stores, socials.",

      // Price Section
      "price-title-start": "Ambition &",
      "price-title-gradient": "AI Tools",
      "price-title-middle": "› Successful ",
      "price-title-end": "AI Influencer",
      "price-subtitle":
        "No studio, no makeup, no crew, no shooting — all for the price of a T-shirt. ",
      "price-course-title": "AI Influencer 3.0 Course",
      "price-current": "$27",
      "price-regular": "Regular Price: $127",
      "price-discount": "79% OFF — Limited Time",
      "price-feature-1": "Instant access after payment",
      "price-feature-2": "Watch anytime, at your own pace",
      "price-feature-3": "2.5h of step-by-step video lessons",
      "price-feature-5": "No-code AI model training",
      "price-feature-6": "Ready-made visual framework",
      "price-feature-7": "Face-swapping explained",
      "price-btn-text": "Get started –",
      "price-btn-text-mobile": "Get Now",
      "price-btn-text-desktop": "Get started –",
      "price-btn-price-old": "$127",
      "price-btn-price-new": "$27",
      "price-btn-now": "NOW",
      "bonuses-title": "🎁 Bonuses",
      "bonus-1": "Big Realism Prompt Pack",
      "bonus-2": "Lifetime Access Anytime",
      "bonus-3": "Waitlisted to Secret Platform",
      "bonus-4": "No Bots Email Support",
      "learnmap-title": "Learn Map",
      "learnmap-1": "Character setup with pose & style",
      "learnmap-2": "Realism + image prep for cool angles",
      "learnmap-3": "AI training with no code needed",
      "learnmap-4": "Visual control for emotion & outfit",
      "learnmap-5": "Final touch to merge & publish",

      // Reviews Section
      "reviews-title": "What Our",
      "reviews-title-gradient": "Students Say",
      "testimonial-subtitle":
        "Why do our AI model-makers keep sharing the course with friends?",
      "review-text-1": "❝ AI is finally simple and accessible. The ready-made tools are a joy to use—I'm glad I just decided to try! ❞",
              "review-name-1": "<span class=\"text-purple-400/50\">28 yo</span><br>Mark R.",
        "review-role-1": "AI Creator & Startup SMM",
      "review-text-2": "❝ My wife and I needed a \"face\" for a new line with a zero budget. We trained an AI model with flawless yet natural skin. Followers think she's a real top model—and foundation sales jumped 17 % in the first week. ❞",
              "review-name-2": "<span class=\"text-purple-400/50\">33 yo</span><br>David K.",
        "review-role-2": "Brand Manager",
      "review-text-3": "❝ I used to worry about my looks. Now I have an upgraded AI version of myself—editorial-quality shots, growing audience, no paid ads. I stay off-camera while the good-looking persona racks up likes. ❞",
              "review-name-3": "<span class=\"text-purple-400/50\">26 yo</span><br>Tony Jr.",
        "review-role-3": "Travel Blogger",
      "review-text-4": "❝ I feared nothing would work, but now I run an Instagram page for an influencer I built from scratch. Followers can't believe it's AI. ❞",
              "review-name-4": "<span class=\"text-purple-400/50\">21 yo</span><br>Huata A.",
        "review-role-4": "Media-Studies Student",
      "review-text-5": "❝ Thank you, Leo! Your explanations are crystal-clear. Halfway through the course I launched my first AI project—and it's already getting results. You're one of my favorite instructors. ❞",
              "review-name-5": "<span class=\"text-purple-400/50\">29 yo</span><br>Elif S.",
        "review-role-5": "Motion Designer",
      "review-text-6": "❝ Always wanted an IG feed for the shop but feared photo quality. AI built a portrait mascot that looks real—customers snap selfies with him more than with the mirror! ❞",
              "review-name-6": "<span class=\"text-purple-400/50\">31 yo</span><br>Murat K.",
      "review-role-6": "Barbershop Owner",
      "review-text-7": "❝ I thought I'd be the oldest student, but the course breaks everything into bite-size steps. By lesson three I had a studio-grade shot with ultra-detailed skin. Fantastic experience, Leo! ❞",
              "review-name-7": "<span class=\"text-purple-400/50\">50 yo</span><br>Pav Williams L.",
      "review-role-7": "Entrepreneur",
      "review-text-8": "❝ I tested the course skeptically, sure AI couldn't replace real lighting. It didn't—it helped. Now I generate skin-realistic references, show couples, and they get the vision instantly. Shoots run faster, images feel more emotional. ❞",
              "review-name-8": "<span class=\"text-purple-400/50\">42 yo</span><br>Denis T.",
      "review-role-8": "Wedding Photographer",

      // About Section
      "about-title-text": "Meet Your",
      "about-title-gradient": "Mentor",
      "about-name": "Leo Lewaro",
      "about-role": "AI Creator & Media Innovator",
      "about-desc-p1": "Former Dubai Future Labs AI researcher turned content-creation strategist. Together with his wife, Leo built AI Influencer 3.0, a flagship system that has helped 2,130-plus creators launch AI-powered brands and triple their reach—without studio-level budgets.",
      "about-desc-p2": "Leo turns raw ideas into revenue: his mastery of Midjourney, Omnisphere, and custom face-lock workflows cuts production costs and speeds content-to-market 3×.",
      "about-exp-pill": "2,130+ Students",
      "about-fact-1-title": "100+ client projects",
      "about-fact-1-desc": "Hyper-real AI characters delivered for global brands",
      "about-fact-2-title": "Certified instructor",
      "about-fact-2-desc": "Teaches AI tools & digital-identity pipelines",
      "about-fact-3-title": "500 k + followers",
      "about-fact-3-desc": "Learners from 20 + countries use his methods",
      "about-fact-4-title": "Featured in",
      "about-fact-4-desc": "Forbes, TechCrunch",

      // FAQ Section
      "faq-title": "Frequently Asked",
      "faq-title-gradient": "Questions",
      "faq-desc": "Build parasocial bonds — let fans feel truly connected.",
      "faq-q1": "<span class=\"italic text-sm text-white/50\">Max asked…</span> <span class=\"text-white\">How long does it take to see results?</span>",
      "faq-a1": "First photo-real shots on the very first evening; a full feed in 4-7 days with 1–2 h of daily practice.",
      "faq-q2": "<span class=\"italic text-sm text-white/50\">Isabelle asked…</span> <span class=\"text-white\">Can I do this alongside my job or school?</span>",
      "faq-a2": "Yes. Lessons are under 20 min and on-demand 24/7 — watch in the evenings or on weekends.",
      "faq-q3": "<span class=\"italic text-sm text-white/50\">Anika asked…</span> <span class=\"text-white\">How much time do I need to dedicate to this business?</span>",
      "faq-a3": "1–2 h per day is enough to launch content and scale the project.",
      "faq-q4": "<span class=\"italic text-sm text-white/50\">Hassan asked…</span> <span class=\"text-white\">What tools will I need to purchase?</span>",
      "faq-a4": "Just Midjourney — Basic $10/mo to start or Standard $30/mo for speed. Other services are cheap pay-as-you-go — pennies versus one pro shoot.",
      "faq-q5": "<span class=\"italic text-sm text-white/50\">Sara asked…</span> <span class=\"text-white\">How do you keep every shot consistent?</span>",
      "faq-a5": "The course includes a Face-Lock Consistency System — ready prompts & settings that lock facial features so every frame feels from the same shoot.",
      "faq-q6": "<span class=\"italic text-sm text-white/50\">Sophie asked…</span> <span class=\"text-white\">Will people know my model is AI, and do I have to show my face?</span>",
      "faq-a6": "With our workflow images look like real photos. Showing your own face is optional — use a fictional persona or an upgraded you.",
      "faq-q7": "<span class=\"italic text-sm text-white/50\">Alex asked…</span> <span class=\"text-white\">Can I use my character for private or personal projects?</span>",
      "faq-a7": "Absolutely. Your trained model is yours — use it in blogs, ads or closed content with no restrictions.",
      "faq-q8": "<span class=\"italic text-sm text-white/50\">Bella asked…</span> <span class=\"text-white\">What makes this course different, and can I learn at my own pace?</span>",
      "faq-a8": "2.5 h of distilled step-by-step video, ready templates, check-lists and support. Learn at your own speed; lifetime access and updates.",

      // Final CTA Section
      "final-cta-title":
        'AI Models Will Be a<span class="gradient-text-inverse"> $2.5B Industry</span> by 2030',
      "final-cta-subtitle":
        "The AI-influencer hype feels like Bitcoin’s 2012 gold rush.",
      "final-cta-form-title": "Join The Waitlist Now",
      "final-cta-spots": "Only 250 spots remaining",
      "final-cta-legal":
        'By joining, you agree to our <a href="#" class="underline" id="final-cta-privacy-link">Privacy Policy</a> and <a href="#" class="underline" id="final-cta-terms-link">Terms</a>. We will not spam or sell your data.',
      "footer-title": "AI Influencer 3.0",
      "footer-desc":
        "Build hyper-realistic AI models and generate next-gen content. Transform your visuals and launch your creator journey.",
      "footer-email": "support@aiinfluencer.site",
      "footer-copyright": "© 2025 AI Influencer 3.0. All rights reserved.",
      "footer-legal":
        "This course is for educational purposes only. Results are not guaranteed. By using this site, you accept our terms and assume full responsibility for your decisions and actions. No refunds on digital content.",
    },
    ru: {
      // Sticky Banner
      "sticky-btn-text": "Начать –",
      "sticky-btn-price-old": "$127",
      "sticky-btn-price-new": "$27",
      "support-btn": "поддержка",

      // Hero Section
      "hero-title-1": "AI Influencer 3.0",
      "hero-title-2": "Это будущее?",
      "hero-subtitle":
        "Присоединяйтесь к листу ожидания, чтобы помочь проверить рынок AI-арта. Ранние подписчики получат доступ и скидки.",
      "main-btn-text": "Начать –",
      "main-btn-price-old": "$127",
      "main-btn-price-new": "$27",
      "live-viewers-text": "человек сейчас просматривают эту страницу",
      "join-text": "Присоединились",
      "members-text": "креаторов уже внутри",
      "rating-text": "4.9 (300+ отзывов)",

      // Pain Section
      "pain-title": "Устали от",
      "pain-title-gradient": "пластиковых AI лиц?",
      "pain-desc":
        "Вы видите, какие модели они делают, и знаете, что можете сделать лучше<br>когда технология попадёт в ваши руки?",
      "pain-card1-title": "Обучение-Развлечение",
      "pain-card1-desc": "Учитесь и получайте удовольствие — образование встречается с развлечением.",
      "pain-card1-point1": "Ежедневный творческий заряд",
      "pain-card1-point2": "Быстро и просто",
      "pain-card1-point3": "Вдохновляет на шедевральное мышление",
      "pain-card2-title": "Гипер-Реализм",
      "pain-card2-desc": "Выглядит реально. Ощущается реально.",
      "pain-card2-point1": "Эмоционально насыщенное, фото-качество",
      "pain-card2-point2": "Никакого AI-подделочного вида",
      "pain-card2-point3": "Быстро, доступно, в стиле бренда",
      "pain-card3-title": "Студийное Качество",
      "pain-card3-desc": "Снимайте без студии",
      "pain-card3-point1": "Реализм модного уровня",
      "pain-card3-point2": "Идеальная кожа, тон и свет",
      "pain-card3-point3": "Создано для рекламы, магазинов, соцсетей",

      // Benefits Section
      "benefits-title-inverse": "AI Модели",
      "benefits-title-middle": "Ваша Творческая",
      "benefits-title-gradient": "Суперсила",
      "benefits-desc":
        "AI Персонажи создают парасоциальные отношения — где подписчики чувствуют настоящую эмоциональную связь с вашей медиа-личностью.",
      "benefits-card-1-title": "Начните Чувствовать Себя Креатором",
      "benefits-card-1-desc-1":
        "После этого курса вы почувствуете себя визуальным архитектором, цифровым дизайнером, креативным продюсером и AI-инфлюенсером — всё в одном.",
      "benefits-card-1-desc-2":
        'Это о владении уникальной идентичностью, построении доверия через реализм и выделении из моря "пластиковых" AI лиц.',
      "benefits-card-1-why-title": "Почему Это По-Другому",
      "benefits-card-1-feature-1":
        "Создавайте студийные визуалы без оборудования",
      "benefits-card-1-feature-2":
        "Создавайте контент с личностью, а не фильтрами",
      "benefits-card-1-feature-3":
        "Не нужно показывать лицо или говорить в камеру",
      "benefits-card-1-feature-4":
        "Создавайте изображения, которые чувствуются эмоциональными, живыми, реальными",
      "benefits-card-1-feature-5": "Изучите мышление, а не просто инструменты",
      "benefits-card-2-title-mobile": "Студийное Качество",
      "benefits-card-2-desc-1-mobile":
        "Снимайте Без Студии. Модный реализм, идеальная кожа, тон и свет. Создано для рекламы, магазинов, соцсетей.",

      // Price Section
      "price-title-start": "Амбиции и",
      "price-title-gradient": "AI Инструменты",
      "price-title-middle": "= Успешный",
      "price-title-end": "AI Инфлюенсер",
      "price-subtitle":
        "Никакой студии, макияжа, команды, съёмок — всё по цене футболки.",
      "price-course-title": "Курс AI Influencer 3.0",
      "price-current": "$27",
      "price-regular": "Обычная цена: $127",
      "price-discount": "79% СКИДКА — Ограниченное время",
      "price-feature-1": "Мгновенный доступ после оплаты",
      "price-feature-2": "Смотрите в любое время, в своём темпе",
      "price-feature-3": "2.5ч пошаговых видеоуроков",
      "price-feature-4": "Только необходимые AI инструменты",
      "price-feature-5": "Обучение AI модели без кода",
      "price-feature-6": "Готовая визуальная структура",
      "price-feature-7": "Объяснение замены лиц",
      "price-btn-text": "Начать –",
      "price-btn-text-mobile": "Купить сейчас",
      "price-btn-text-desktop": "Начать –",
      "price-btn-price-old": "$127",
      "price-btn-price-new": "$27",
      "price-btn-now": "СЕЙЧАС",
      "bonuses-title": "🎁 Бонусы",
      "bonus-1": "Большой пакет промптов для реализма",
      "bonus-2": "Пожизненный доступ в любое время",
      "bonus-3": "В листе ожидания секретной платформы",
      "bonus-4": "Поддержка по email без ботов",
      "learnmap-title": "Карта Обучения",
      "learnmap-1": "Настройка персонажа с позой и стилем",
      "learnmap-2":
        "Реализм + подготовка изображений для чистых углов и деталей",
      "learnmap-3": "AI обучение без необходимости в коде",
      "learnmap-4": "Визуальный контроль эмоций и нарядов",
      "learnmap-5": "Финальные штрихи для объединения и публикации",

      // Reviews Section
      "testimonial-title": "Что",
      "reviews-title-gradient": "Говорят Люди",
      "testimonial-subtitle":
        "Не верьте нам на слово.<br>Вот что думают ранние последователи об AI-генерированном искусстве.",
      "review-text-1": "❝ AI наконец-то стал простым и доступным. Готовые инструменты — удовольствие в использовании, рад что просто решил попробовать! ❞",
              "review-name-1": "<span class=\"text-purple-400/50\">28 лет</span><br>Марк Р.",
              "review-role-1": "AI Creator & Startup SMM",
      "review-text-2": "❝ Мы с женой нуждались в \"лице\" для новой линейки с нулевым бюджетом. Мы обучили AI модель с безупречной, но естественной кожей. Подписчики думают, что она настоящая топ-модель — и продажи тонального крема выросли на 17% в первую неделю. ❞",
              "review-name-2": "<span class=\"text-purple-400/50\">33 года</span><br>Дэвид К.",
              "review-role-2": "Brand Manager, Cosmetic Products",
      "review-text-3": "❝ Раньше я беспокоился о своей внешности. Теперь у меня есть улучшенная AI версия себя — снимки редакционного качества, растущая аудитория, без платной рекламы. Я остаюсь за кадром, пока привлекательная персона набирает лайки. ❞",
              "review-name-3": "<span class=\"text-purple-400/50\">26 лет</span><br>Тони мл.",
              "review-role-3": "Travel Blogger",
      "review-text-4": "❝ Я боялся, что ничего не сработает, но теперь я веду Instagram страницу для инфлюенсера, которого создал с нуля. Подписчики не верят, что это AI. На занятии я запустил Face-Lock и создал полную съемку за 30 минут — мой профессор спросил, какую студию я забронировал! ❞",
              "review-name-4": "<span class=\"text-purple-400/50\">21 год</span><br>Хуата А.",
              "review-role-4": "Media-Studies Student",
      "review-text-5": "❝ Спасибо, Лео! Твои объяснения кристально ясны. На полпути курса я запустил свой первый AI проект — и он уже дает результаты. Ты один из моих любимых инструкторов. ❞",
              "review-name-5": "<span class=\"text-purple-400/50\">29 лет</span><br>Элиф С.",
              "review-role-5": "Motion Designer",
      "review-text-6": "❝ Я всегда хотел Instagram ленту для салона, но беспокоился о качестве фото. Оказывается, AI может создать портретный талисман, почти неотличимый от реального человека. Один вечер работы, и теперь персонаж приветствует клиентов на наших экранах — люди делают селфи с ним чаще, чем с зеркалом! ❞",
              "review-name-6": "<span class=\"text-purple-400/50\">31 год</span><br>Мурат К.",
              "review-role-6": "Barbershop Owner",
      "review-text-7": "❝ Я думал, что буду самым старым студентом, но курс разбивает все на простые шаги. К третьему уроку у меня был снимок студийного качества с ультра-детальной кожей — без камеры или осветительного оборудования. Четкий темп, увлекательный контент — фантастический опыт, Лео! ❞",
              "review-name-7": "<span class=\"text-purple-400/50\">50 лет</span><br>Pav Williams L.",
              "review-role-7": "Entrepreneur",
      "review-text-8": "❝ Я тестировал курс скептически, уверенный, что AI не может заменить настоящее освещение. Он не заменил — он помог. Теперь я генерирую реалистичные референсы кожи, показываю парам, и они мгновенно понимают видение. Съемки проходят быстрее, изображения кажутся более эмоциональными, не как обычное AI искусство. ❞",
              "review-name-8": "<span class=\"text-purple-400/50\">42 года</span><br>Denis T.",
              "review-role-8": "Wedding Photographer",

      // About Section
      "about-title-text": "Познакомьтесь с Вашим",
      "about-title-gradient": "Инструктором",
      "about-name": "Лео Лаваро",
      "about-role": "AI Визуальный Креатор и Медиа-Новатор",
      "about-desc-p1": "Лео имеет опыт в исследованиях AI и создании контента. Он соавтор AI Influencer 3.0, помогая создателям контента и брендам создавать реалистичных виртуальных персонажей.",
      "about-desc-p2": "Его подход сочетает технические знания с творческим видением, что делает сложные AI-инструменты доступными для всех.",
      "about-desc-p3": "Лео — эксперт в Midjourney, Omnisphere и рабочих процессах face-lock, обучая студентов создавать фотореалистичные изображения, которые выглядят профессионально и аутентично.",
      "about-exp-pill": "6 лет опыта",
      "about-fact-1-title": "100+ клиентских проектов",
      "about-fact-1-desc": "Гипер-реалистичные AI-персонажи для глобальных брендов",
      "about-fact-2-title": "Сертифицированный инструктор",
      "about-fact-2-desc": "Обучает AI-инструментам и цифровым пайплайнам",
      "about-fact-3-title": "500 тыс+ подписчиков",
      "about-fact-3-desc": "Ученики из 20+ стран используют его методы",
      "about-fact-4-title": "Упоминания в",
      "about-fact-4-desc": "Forbes, TechCrunch",

      // FAQ Section
      "faq-title": "Часто Задаваемые",
      "faq-title-gradient": "Вопросы",
      "faq-desc":
        "Результаты зависят от ваших усилий и использования рекомендуемых инструментов.",
      "faq-q1": "Что если я новичок в AI?",
      "faq-a1":
        "Абсолютно! Наш Стартовый Набор разработан для учащихся всех уровней, включая начинающих. Мы охватываем фундаментальные концепции в AI и Компьютерном Зрении, предоставляя идеальную отправную точку для тех, кто новичок в этой области. По мере продвижения наши курсы помогут вам развить навыки и знания.</p><p>Всё, что вам нужно — базовые навыки программирования на Python.",
      "faq-q2":
        "Сколько времени мне нужно инвестировать в курсы, чтобы увидеть результаты?",
      "faq-a2":
        "Наши курсы разработаны быть гибкими, позволяя вам учиться в своём темпе. Необходимые временные инвестиции будут зависеть от вашей индивидуальной скорости обучения и целей. Однако мы рекомендуем выделять регулярное время каждую неделю для работы с материалами курса и выполнения практических упражнений. Постоянство — ключ к результатам и освоению концепций.",
      "faq-q3":
        "Получу ли я поддержку или руководство во время прохождения курсов?",
      "faq-a3":
        "Да! Мы гордимся тем, что предлагаем поддерживающее обучающее сообщество, где вы можете сотрудничать с другими учащимися и задавать вопросы. Наша команда экспертов также доступна для предоставления руководства и ответов на любые вопросы по материалам курса.</p><p>У нас также есть группа в WhatsApp с более чем 400+ AI-CV разработчиками.",
      "faq-q4":
        "Что делает ваши курсы отличными от других AI курсов, доступных онлайн?",
      "faq-a4":
        "Наши курсы выделяются благодаря экспертному контенту, актуальной программе, практическому подходу к обучению и поддерживающему обучающему сообществу. Мы фокусируемся на предоставлении практических, реальных примеров и проектов, которые помогают вам применять знания и получать ценный опыт.</p><p>Кроме того, наша приверженность актуальности последним трендам AI и Компьютерного Зрения обеспечивает получение передового образования, которое держит вас конкурентоспособным в индустрии.</p><p>Вместе с VIP технической поддержкой и сообществом вы обеспечите оптимальное обучение.",
      "faq-q5": "Нужен ли предварительный опыт программирования?",
      "faq-a5":
        "Предварительный опыт программирования не требуется для наших начальных курсов. Мы начинаем с основ и постепенно развиваем ваши навыки. Для продвинутых курсов некоторое знакомство с Python полезно, но не обязательно.",
      "faq-q6": "Самостоятельные ли курсы?",
      "faq-a6":
        "Да, все наши курсы самостоятельные. Вы можете начать в любое время и прогрессировать в своём темпе. Нет строгих дедлайнов, так что вы можете вписать обучение в свой график.",
      "faq-q7": "Получу ли я сертификат после завершения курса?",
      "faq-a7":
        "Да, при успешном завершении курса и всех требуемых заданий вы получите сертификат, которым можете поделиться с работодателями или в своём профиле LinkedIn.",
      "faq-q8": "Что если у меня есть вопросы во время курса?",
      "faq-a8":
        "Вы можете задавать вопросы в нашем форуме сообщества или обращаться к нашей команде поддержки в любое время. Мы здесь, чтобы помочь вам добиться успеха!",
      "faq-q9":
        "Могу ли я получить доступ к материалам курса после завершения?",
      "faq-a9":
        "Да, у вас будет пожизненный доступ ко всем материалам курса, включая обновления и новый контент, добавленный в будущем.",
      "faq-q10": "Есть ли политика возврата?",
      "faq-a10":
        "Пожалуйста, обратитесь к странице нашей политики возврата для деталей. Если вы не удовлетворены курсом, свяжитесь с нами в течение указанного периода для возможного возврата.",

      // Final CTA Section
      "final-cta-title":
        'AI-модели станут<span class="gradient-text"> индустрией на $1 млрд</span> к 2030 году',
      "final-cta-subtitle":
        "Воспользуйся этим золотым шансом, пока он есть... Или смотри, как другие зарабатывают, пока ты ждёшь...",
      "final-cta-form-title": "Запишись в лист ожидания",
      "final-cta-spots": "Осталось только 250 мест",
      "final-cta-legal":
        'Регистрируясь, вы соглашаетесь с <a href="#" class="underline" id="final-cta-privacy-link">Политикой конфиденциальности</a> и <a href="#" class="underline" id="final-cta-terms-link">Условиями</a>. Мы не спамим и не продаём ваши данные.',
      "footer-title": "AI Character Studio",
      "footer-desc":
        "Создавайте гиперреалистичные AI-модели и генерируйте контент нового поколения. Преобразите свои визуалы и начните путь креатора.",
      "footer-email": "support@aiinfluencer.site",
      "footer-copyright": "© 2025 Лео Лаваро. Все права защищены.",
      "footer-legal":
        "Этот курс предназначен только для образовательных целей. Результаты не гарантируются. Используя этот сайт, вы принимаете наши условия и берёте на себя полную ответственность за свои решения и действия. Возвратов за цифровой контент нет.",
    },
  };
  function changeLanguage(lang) {
    document.documentElement.lang = lang;
    Object.entries(translations[lang]).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) {
        if (el.placeholder !== undefined) el.placeholder = val;
        else if (id === "hero-subtitle" || id === "final-cta-title" || id.startsWith("review-name-"))
          el.innerHTML = val;
        else el.textContent = val;
      }
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
      btn.style.background = btn.classList.contains("active")
        ? "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)"
        : "";
      btn.style.color = btn.classList.contains("active") ? "#fff" : "";
      btn.style.border = btn.classList.contains("active")
        ? "none"
        : "1px solid #fff";
    });
    localStorage.setItem("selectedLang", lang);
    // About title special case
    const aboutTitle = translations[lang]["about-title"];
    const aboutTitleText = document.getElementById("about-title-text");
    const aboutTitleTextMobile = document.getElementById(
      "about-title-text-mobile"
    );
    if (aboutTitleText && aboutTitle) {
      aboutTitleText.innerHTML = aboutTitle;
    }
    if (aboutTitleTextMobile && aboutTitle) {
      aboutTitleTextMobile.innerHTML = aboutTitle;
    }
  }
  document.getElementById("language-selector").onclick = (e) => {
    if (e.target.classList.contains("lang-btn"))
      changeLanguage(e.target.dataset.lang);
  };
  changeLanguage(localStorage.getItem("selectedLang") || "en");

  // Слайдер изображений (HERO)
  const sliderImages = [
    "media/av01.png",
    "media/av02.png",
    "media/av03.png",
    "media/av04.png",
    "media/av05.png",
    "media/av06.png",
    "media/av07.png",
  ];
  let sliderIndex = 0;
  const sliderImg = document.querySelector('img[alt="AI Art Example"]');
  if (sliderImg)
    setInterval(
      () => (sliderImg.src = sliderImages[++sliderIndex % sliderImages.length]),
      4000
    );

  // Sticky banner
  const mainBtn = document.getElementById("main-btn");
  const stickyBanner = document.getElementById("sticky-banner");
  const stickyGlow = document.querySelector(".sticky-glow");
  const stickyGlowLine = document.querySelector(".sticky-glow-line");
  let bannerForceHidden = false,
    heroVisible = false;
  function toggleBanner() {
    if (!mainBtn || !stickyBanner) return;
    const show =
      !(bannerForceHidden || heroVisible) &&
      mainBtn.getBoundingClientRect().top < 28;
    console.log("toggleBanner called", {
      show,
      bannerForceHidden,
      heroVisible,
      mainBtnTop: mainBtn.getBoundingClientRect().top,
    });
    stickyBanner.style.opacity = show ? "1" : "0";
    stickyBanner.style.transform = show ? "translateY(0)" : "translateY(-32px)";
    stickyBanner.style.pointerEvents = show ? "auto" : "none";
    if (stickyGlow) stickyGlow.style.opacity = show ? "0.95" : "0";
    if (stickyGlowLine) stickyGlowLine.style.opacity = show ? "1" : "0";
  }
  [
    [document.getElementById("final-cta"), 0.7, (v) => (bannerForceHidden = v)],
    [document.getElementById("hero-section"), 0.1, (v) => (heroVisible = v)],
  ].forEach(([el, th, set]) => {
    if (el)
      new IntersectionObserver(
        (e) => {
          set(e[0].isIntersecting);
          toggleBanner();
        },
        { threshold: th }
      ).observe(el);
  });
  window.addEventListener("scroll", toggleBanner);
  window.addEventListener("resize", toggleBanner);
  toggleBanner();

  // Live viewers анимация
  const countEls = [
    document.getElementById("live-viewers-count"),
    document.getElementById("live-viewers-count-price"),
  ].filter(Boolean);
  if (countEls.length)
    setInterval(() => {
      const val = Math.floor(Math.random() * 16) + 17;
      countEls.forEach((el) => (el.textContent = val));
    }, 1800);

  // FAQ аккордеон
  // Инициализация - убеждаемся, что все закрытые элементы имеют скругленные углы
  document.querySelectorAll(".faq-item").forEach((item) => {
    const answer = item.querySelector(".faq-answer");
    if (answer.classList.contains("hidden")) {
      item.classList.add("rounded-2xl");
      item.classList.remove("rounded-t-2xl");
      answer.classList.remove("rounded-b-2xl");
    }
  });

  document.querySelectorAll(".faq-toggle").forEach((btn, idx) => {
    btn.addEventListener("click", function () {
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isOpen = answer.classList.contains("open");

      // Закрыть все
      document.querySelectorAll(".faq-answer").forEach((a, i) => {
        a.classList.remove("open");
        a.classList.add("hidden");
        const faqItem = a.closest(".faq-item");
        faqItem.classList.add("rounded-2xl");
        faqItem.classList.remove("rounded-t-2xl");
        // Убираем скругление с ответа при закрытии
        a.classList.remove("rounded-b-2xl");
      });
      document
        .querySelectorAll(".faq-toggle")
        .forEach((b) => b.classList.remove("open"));

      // Открыть выбранный
      if (!isOpen) {
        answer.classList.add("open");
        answer.classList.remove("hidden");
        btn.classList.add("open");
        item.classList.remove("rounded-2xl");
        item.classList.add("rounded-t-2xl");
        // Добавляем скругление к ответу при открытии
        answer.classList.add("rounded-b-2xl");
      }
    });
  });

  // Анимации появления
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(
        (entry) =>
          entry.isIntersecting &&
          entry.target.classList.add("animate__animated", "animate__fadeInUp")
      );
    },
    { threshold: 0.1 }
  );
  document
    .querySelectorAll(".art-card, .flex.items-start")
    .forEach((el) => observer.observe(el));

  // Динамический рендер карточек преимуществ
  const artCards = [
    {
      img: "media/av01.png",
      title: "Edutainment",
      titleClass: "text-pink-400",
      desc: "Learn & Enjoy — education meets entertainment.",
      features: [
        "Daily creative boost",
        "Fast & simple",
        "Inspires masterpiece thinking",
      ],
    },
    {
      img: "media/av01.png",
      title: "Hyper-Realism",
      titleClass: "text-yellow-300",
      desc: "Look Real. Feel Real.",
      features: [
        "Emotion-rich, photo-grade quality",
        "No AI-fake look",
        "Fast, affordable, on-brand",
      ],
    },
    {
      img: "media/av01.png",
      title: "Studio Quality",
      titleClass: "text-purple-400",
      desc: "Shoot Without a Studio",
      features: [
        "Fashion-level realism",
        "Perfect skin, tone & light",
        "Built for ads, stores, socials",
      ],
    },
  ];
  const artCardsRow = document.getElementById("art-cards-row");
  if (artCardsRow)
    artCardsRow.innerHTML = artCards
      .map(
        (card) => `
      <div class="flex-shrink-0 w-[80vw] max-w-xs snap-center md:w-auto md:max-w-none md:flex-shrink md:snap-none art-card bg-white/5 rounded-xl overflow-hidden border border-white/10">
        <div class="h-64 overflow-hidden"><img src="${
          card.img
        }" alt="AI Art" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"></div>
        <div class="p-6"><h3 class="text-xl font-semibold mb-2 ${
          card.titleClass
        }">${card.title}</h3><div class="text-gray-200 text-sm mb-2">${
          card.desc
        }</div><ul class="list-disc list-inside text-gray-300 text-sm space-y-1">${card.features
          .map((f) => `<li>${f}</li>`)
          .join("")}</ul></div>
      </div>`
      )
      .join("");

  const countElPrice = document.getElementById("live-viewers-count-price");
  if (countElPrice)
    setInterval(() => {
      countElPrice.textContent = Math.floor(Math.random() * 16) + 17;
    }, 1800);

  // Найти место, где устанавливается final-cta-title
  const finalCtaTitle = document.getElementById("final-cta-title");
  if (finalCtaTitle)
    finalCtaTitle.innerHTML = translations[lang]["final-cta-title"];

  // Счётчик продаж курса - от 3 утром до 48 вечером
  const courseSalesCounterEl = document.getElementById("course-sales-counter");
  if (courseSalesCounterEl) {
    function updateSalesCounter() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Начинаем с 3 в 00:00, доходим до 48 в 23:59
      // 45 продаж за 24 часа = 1.875 продажи в час
      const totalMinutes = hours * 60 + minutes;
      const salesToday = Math.floor(3 + (totalMinutes * 45) / 1440); // 1440 минут в сутках

      courseSalesCounterEl.innerHTML = `<span class="text-green-300">${Math.min(salesToday, 48)}</span>`;
    }

    // Обновляем каждую минуту
    updateSalesCounter();
    setInterval(updateSalesCounter, 60000); // 1 минута
  }

  // --- Отзывы: простая логика перелистывания ---
  // --- Reviews: simple slider logic (fixed for robustness and clarity) ---
  const reviewItems = Array.from(
    document.querySelectorAll("#review-slide .review-item")
  );
  const dotsWrap = document.getElementById("reviews-dots");
  let reviewIdx = 0;

  // Явная инициализация классов отзывов
  reviewItems.forEach((el, i) => {
    if (i === 0) {
      el.classList.add("block", "fade-in");
      el.classList.remove("hidden", "fade-out");
    } else {
      el.classList.add("hidden");
      el.classList.remove("block", "fade-in", "fade-out");
    }
  });

  function showReview(idxToShow) {
    // Скрываем все отзывы
    reviewItems.forEach((el, i) => {
      if (i !== idxToShow) {
        el.classList.add("hidden");
        el.classList.remove("block");
      }
    });

    // Показываем нужный отзыв
    const targetReview = reviewItems[idxToShow];
    if (targetReview) {
      targetReview.classList.remove("hidden");
      targetReview.classList.add("block");
    }

    // Обновляем точки
    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      reviewItems.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className =
          "w-3 h-3 rounded-full mx-1 " +
          (i === idxToShow ? "bg-purple-400" : "bg-white/20") +
          " transition";
        dot.setAttribute("aria-label", "Show review " + (i + 1));
        dot.onclick = () => {
          reviewIdx = i;
          showReview(reviewIdx);
        };
        dotsWrap.appendChild(dot);
      });
      // Показываем точки даже если отзыв один
      dotsWrap.style.display = reviewItems.length > 1 ? "flex" : "block";
    }
  }

  // Ensure at least one review exists
  if (reviewItems.length > 0) {
    showReview(reviewIdx);

    // Автоперелистывание
    setInterval(() => {
      reviewIdx = (reviewIdx + 1) % reviewItems.length;
      showReview(reviewIdx);
    }, 7000);
  }

  // --- Таймер обратного отсчета ---
  function startTimer() {
    // Устанавливаем время окончания (3 часа от текущего времени)
    const now = new Date();
    const endTime = new Date(now.getTime() + (3 * 60 * 60 * 1000)); // 3 часа
    
    function updateTimer() {
      const currentTime = new Date();
      const timeLeft = endTime - currentTime;
      
      if (timeLeft <= 0) {
        // Таймер истек, перезапускаем на 3 часа
        endTime.setTime(endTime.getTime() + (3 * 60 * 60 * 1000));
        return;
      }
      
      // Вычисляем часы, минуты, секунды
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      // Обновляем все таймеры на странице
      const timerValues = document.querySelectorAll('.timer-value');
      timerValues.forEach((el, index) => {
        if (index % 3 === 0) {
          el.textContent = hours.toString().padStart(2, '0');
        } else if (index % 3 === 1) {
          el.textContent = minutes.toString().padStart(2, '0');
        } else if (index % 3 === 2) {
          el.textContent = seconds.toString().padStart(2, '0');
        }
      });
      
      // Добавляем отладочную информацию
      console.log(`Timer: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }
    
    // Обновляем таймер каждую секунду
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    
    // Сохраняем интервал для возможной остановки
    window.timerInterval = timerInterval;
  }
  
  // Запускаем таймер
  startTimer();
});
