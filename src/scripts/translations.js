'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const languageDropdowns = document.querySelectorAll('.language-dropdown');

  const translations = {
    en: {
      header_title: 'OKSANA YAREMCHUK',
      header_subtitle: 'Travel business owner',
      join_the_team: 'JOIN THE TEAM',
      about: 'About',
      benefits: 'Benefits',
      contact: 'Contact',
      book_a_trip: 'BOOK A TRIP',
      contact_me: 'CONTACT ME',
      hello_message: `Hello! I’m Oksana, a partner with PlanNet Marketing.
        If you’re looking to build your own business in the travel industry,
        achieve financial freedom, and work from anywhere, I’m here to help
        you make that dream a reality. PlanNet Marketing offers not only
        earning opportunities but also support for personal growth and
        leadership development
`,
      passion_message: `Join our team, and you’ll have the chance not
        only to travel the world but also to create an income by helping
        others plan their ideal vacations. Ready to take the first step
        toward your own travel business? Now is the perfect time to start!`,
      about_marketing: 'ABOUT MARKETING',
      line_content: `book your vocation/ start your own travel business/
        no boss/ no limit/`,
      embark_adventure: 'Embark on an Unforgettable Adventure!',
      book_with_me: `Book your trip with me and experience the journey of a
        lifetime! Whether you're dreaming of sun-drenched beaches or
        cruising through breathtaking landscapes, I am here to make
        your travel dreams a reality.`,
      travel_adventure_belief: 'I believe travel should be an',
      adventure: 'adventure ',
      chore: 'chore.',
      not_a: 'not a',
      ready_to_plan: 'Ready to start planning your dream adventure?',
      ready_to_contact: `Contact me today to discuss your travel aspirations
        and let me help you create an unforgettable trip.`,
      benefits_travel_business: 'Benefits of Owning a Travel Business',
      work_from_home_title: 'Work from home',
      work_from_home_description: `Operating a travel business provides the
        opportunity to work from the comfort of your own home, offering both
        flexibility and convenience.`,
      flexible_hours_title: 'FLEXIBLE HOURS',
      flexible_hours_description: `As a travel business owner, you can
        determine your own work schedule, enabling you to manage your time
        effectively and work according to your availability.`,
      cost_savings_title: 'COST SAVINGS FOR CLIENTS',
      cost_savings_description: `By assisting clients in finding the best
        travel deals and discounts, you not only save them money but also earn
        commissions on their bookings.`,
      travel_perks_title: 'TRAVEL PERKS',
      travel_perks_description: `Owning a travel business often comes with
        personal benefits, such as discounts on your own travel arrangements,
        allowing you to discover new destinations at a reduced price.`,
      pursue_passion_title: 'PURSUE YOUR PASSION',
      pursue_passion_description: `Launching a travel business can transform
        your love for travel into an exciting new hobby, all while generating
        an income.`,
      networking_opportunities_title: `NETWORKING OPPORTUNITIES`,
      networking_opportunities_description: `Running a travel business connects
       you with a diverse network of professionals in the travel industry,
       including suppliers, clients, and fellow entrepreneurs, creating
       valuable collaboration and growth opportunities.`,
      read_more_benefits: 'read more about benefits',
      ready_to_explore: 'Ready to explore?',
      curious_about_joining: 'Or curious about joining us?',
      happy_to_answer: 'I am happy to answer your questions!',
      fill_out_form: `Fill out this form and I'll be in touch as soon
        as possible.`,
      form_name: 'Name',
      form_phone: 'Phone',
      form_email: 'Email',
      form_send: 'Send',
      footer_title: 'Okasana Yaremchuk',
      footer_subtitle: `Ready to explore the world? Book your next trip today
       and join our team and help others discover amazing adventures!`,
      footer_rights: 'All rights reserved',
      error_phone: 'Please enter a valid phone number.',
    },
    uk: {
      header_title: 'Оксана Яремчук',
      header_subtitle: 'Власниця туристичного бізнесу',
      join_the_team: 'ПРИЄДНАТИСЯ ДО КОМАНДИ',
      about: 'Про бізнес',
      benefits: 'Переваги',
      contact: 'Контакти',
      book_a_trip: 'ЗАБРОНЮВАТИ ПОДОРОЖ',
      contact_me: 'дізнатися більше',
      hello_message: `Привіт! Я Оксана, партнерка PlanNet Marketing.
        Якщо ви хочете побудувати власний бізнес у туристичній галузі,
        досягти фінансової свободи та працювати з будь-якої точки світу,
        я тут, щоб допомогти вам здійснити цю мрію.
        PlanNet Marketing пропонує не лише можливості
        для заробітку, але й підтримку в особистому зростанні та
        розвитку лідерських якостей.`,
      passion_message: `Приєднуйтесь до нашої команди, і ви отримаєте
        можливість не лише подорожувати світом, але й створювати дохід,
        допомагаючи іншим планувати їхні ідеальні відпустки.
        Готові зробити перший крок до власного туристичного бізнесу?
        Зараз — найкращий час, щоб почати!`,
      about_marketing: 'ПРО МАРКЕТИНГ',
      line_content: `забронюйте подорож/ розпочніть власний туристичний
        бізнес/ з підтримкою/ без обмежень/`,
      embark_adventure: `Вирушайте у незабутню пригоду!`,
      book_with_me: `Забронюйте свою подорож зі мною та насолоджуйтесь пригодою,
       яка запам'ятається на все життя! Незалежно від того, чи мрієте ви про
       залиті сонцем пляжі, чи про круїз через захопливі пейзажі, я тут,
       щоб зробити ваші мрії про подорож реальністю.`,
      travel_adventure_belief: `Я вважаю, що подорож має бути`,
      adventure: 'у задоволення, ',
      chore: 'хаосом.',
      not_a: 'а не',
      ready_to_plan: 'Готові розпочати планування своєї подорожі мрії?',
      ready_to_contact: `Зв'яжіться зі мною сьогодні, щоб обговорити ваші
       туристичні бажання і я допоможу створити незабутню подорож.`,
      benefits_travel_business: 'Переваги туристичного бізнесу',
      work_from_home_title: 'РОБОТА З ДОМУ',
      work_from_home_description: `Ведення туристичного бізнесу надає
        можливість працювати в комфортних умовах власного дому, забезпечуючи
         гнучкість і зручність.`,
      flexible_hours_title: 'ГНУЧКИЙ ГРАФІК',
      flexible_hours_description: `Як власник туристичного бізнесу, ви можете
        самостійно визначати свій робочий графік, ефективно керувати своїм
        часом і працювати за власним розкладом.`,
      cost_savings_title: 'ЕКОНОМІЯ ДЛЯ КЛІЄНТІВ',
      cost_savings_description: `Допомагаючи клієнтам знаходити найкращі
        туристичні пропозиції та знижки, ви не лише заощаджуєте їхні кошти,
         але й заробляєте комісійні з кожного бронювання.`,
      travel_perks_title: 'ТУРИСТИЧНІ ПЕРЕВАГИ',
      travel_perks_description: `Ведення туристичного бізнесу часто приносить
       особисті бонуси, такі як знижки на ваші власні подорожі, що дозволяє
        відкривати нові напрямки за зниженою ціною.`,
      pursue_passion_title: 'ЗАЙМАЙТЕСЯ ТИМ, ЩО ЛЮБИТЕ',
      pursue_passion_description: `Запуск туристичного бізнесу може перетворити
       вашу любов до подорожей на захоплююче нове хобі, яке приносить дохід.`,
      networking_opportunities_title: `МОЖЛИВОСТІ НАЛАГОДЖЕННЯ ЗВ'ЯЗКІВ`,
      networking_opportunities_description: `Ведення туристичного бізнесу
        об’єднує вас з різноманітною мережею професіоналів у туристичній
        галузі, включаючи постачальників, клієнтів і підприємців,
        створюючи цінні можливості для співпраці та зростання.`,
      read_more_benefits: 'Дізнатися більше про переваги',
      ready_to_explore: 'Готові до нових відкриттів?',
      curious_about_joining: 'Або цікавитесь приєднанням до нашої команди?',
      happy_to_answer: 'Я із задоволенням відповім на ваші запитання!',
      fill_out_form: `Заповніть форму і я зв'яжуся з вами.`,
      form_name: 'Імʼя',
      form_phone: 'Телефон',
      form_email: 'Email',
      form_send: 'Надіслати',
      footer_title: 'Оксана Яремчук',
      footer_subtitle: `Готові досліджувати світ? Забронюйте свою наступну
        подорож вже сьогодні та приєднуйтеся до нашої команди, щоб допомагати
        іншим відкривати захопливі пригоди!`,
      footer_rights: 'Всі права захищені',
      error_phone: 'Будь ласка, введіть дійсний номер телефону.',
    },
  };

  // eslint-disable-next-line no-undef
  const savedLanguage = localStorage.getItem('language') || 'en';

  languageDropdowns.forEach((dropdown) => {
    const languageToggle = dropdown.querySelector('.language-toggle');
    const languageOptions = dropdown.querySelector('.language-options');
    const selectedLanguage = dropdown.querySelector('.selected-language');

    selectedLanguage.textContent = savedLanguage === 'en' ? '🇺🇸 EN' : '🇺🇦 UA';
    updateLanguageOptions(languageOptions, savedLanguage);
    switchLanguage(savedLanguage);

    languageToggle.addEventListener('click', () => {
      dropdown.classList.toggle('open');
    });

    languageOptions.addEventListener('click', (event) => {
      const target = event.target.closest('li');

      if (target) {
        const language = target.getAttribute('data-lang');

        selectedLanguage.textContent = language === 'en' ? '🇺🇸 EN' : '🇺🇦 UA';

        // eslint-disable-next-line no-undef
        localStorage.setItem('language', language);

        switchLanguage(language);

        languageDropdowns.forEach((otherDropdown) => {
          const otherSelectedLanguage
              = otherDropdown.querySelector('.selected-language');

          otherSelectedLanguage.textContent
              = language === 'en' ? '🇺🇸 EN' : '🇺🇦 UA';

          updateLanguageOptions(
            otherDropdown.querySelector('.language-options'), language);
        });

        dropdown.classList.remove('open');
      }
    });

    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  function switchLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-key]');

    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute('data-key');

      // Check if the element is an input
      if (element.tagName.toLowerCase() === 'input') {
        // Update the placeholder if the key exists in translations
        if (translations[language][key]) {
          element.setAttribute('placeholder', translations[language][key]);
        }
      } else {
        // Update text content for other elements
        if (translations[language][key]) {
          element.textContent = translations[language][key];
        }
      }
    });
  }

  function updateLanguageOptions(languageOptions, currentLanguage) {
    languageOptions.innerHTML = '';

    const alternativeLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    const alternativeLanguageText
       = alternativeLanguage === 'en' ? '🇺🇸 EN' : '🇺🇦 UA';

    const li = document.createElement('li');

    li.setAttribute('data-lang', alternativeLanguage);
    li.textContent = alternativeLanguageText;
    languageOptions.appendChild(li);
  }
});
