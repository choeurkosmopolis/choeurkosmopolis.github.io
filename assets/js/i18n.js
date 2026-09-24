/* ============================================
   KOSMOPOLIS - Internationalisation (FR / EN / NL)
   ============================================ */

window.KosmopolisI18n = (function () {
  'use strict';

  var SUPPORTED = ['fr', 'en', 'nl'];
  var STORAGE_KEY = 'kosmopolis-lang';

  var LANGUAGES = {
    fr: { name: 'FR', full: 'Français', flag: '🇫🇷' },
    en: { name: 'EN', full: 'English', flag: '🇬🇧' },
    nl: { name: 'NL', full: 'Nederlands', flag: '🇳🇱' }
  };

  var translations = {
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.medias': 'Médias',
      'nav.agenda': 'Agenda',
      'nav.contact': 'Contact',
      'header.tagline': 'Choeur de chambre mixte basé à Bruxelles.',
      'footer.copyright': '© 2026 - Choeur Kosmopolis',
      'index.title': 'Kosmopolis',
      'index.welcome': 'Bienvenue au Choeur Kosmopolis !',
      'index.intro': ' Ensemble vocal Kosmopolite au coeur de Bruxelles ! ',
      'index.events': 'Voir nos événements',
      'about.title': 'À propos - Kosmopolis',
      'about.heading': 'À propos du Choeur Kosmopolis',
      'about.p1': 'Le Choeur Kosmopolis est un choeur de chambre mixte d\'adultes basé à Bruxelles. Créé en 2017 par Bertrand Duby, il ambitionne de défendre un répertoire a cappella allant des polyphonies de la Renaissance à des pièces des XXème et XXIème siècles.',
      'about.p2': 'Le Choeur Kosmopolis tire son nom de par la multiplicité des cultures et nationalités des membres qui le composent et de par son répertoire éclectique qui, à sa création, était axé sur les traditions chorales venues d\'Europe et du monde entier.',
      'about.conductor': 'Le Chef',
      'about.conductor.p1': 'Après des études d\'ingénieur, Bertrand Duby intègre le Conservatoire de Bordeaux en classes d\'Art Lyrique et de direction de choeur. Il continue ensuite à perfectionner sa voix de basse en intégrant en 2014 la classe d\'Art Lyrique à la Chapelle Musicale Reine Elisabeth à Waterloo où il suit durant quatre ans les enseignements de José Van Dam. Passionné de chant choral, il fonde le Choeur Kosmopolis dans un désir d\'apporter une esthétique de transparence dans le paysage choral contemporain.',
      'about.conductor.p2': 'En tant que chanteur, il se produira régulièrement comme soliste sur les grandes scènes européennes (La Monnaie, Opéra de Varsovie, Opéra de Metz etc...) et comme choriste des choeurs d\'opéra prestigieux (Opéra de Paris, Festival de Bayreuth...) et dans des ensembles vocaux renommés (La Tempête, InChorus...)',
      'about.conductor.p3': 'Il est par ailleurs régulièrement invité comme coach vocal et/ou chef invité par divers ensembles.',
      'about.programme': 'Le Programme Musical',
      'about.credit': 'Crédit image\u00a0: © Marc Chagall - «\u00a0Bouquet aux Amoureux Volants\u00a0»',
      'about.programme.p1': 'Le programme de la saison 2026-27 s\'articule autour du cycle Bird Raptures de Lucy Walker, jeune compositrice anglaise, d\'après le poème éponyme de Christina Rossetti, poétesse anglaise du XIXe siècle.',
      'about.programme.p2': 'C\'est en réalisant que les oiseaux offraient leurs plus beaux chants au crépuscule et à l\'aube que nous avons eu envie d\'explorer ces moments charnières entre le jour et la nuit, et d\'articuler tout le programme de la saison autour de ce poème, avec les mille couleurs et évocations qu\'il sous-tend.',
      'about.programme.composers': 'Oeuvres de STANFORD, SHAW, POULENC, RAVEL, MARKOR, KODALY...',
      'about.programme.detail': 'Programme détaillé',
      'about.modal.subtitle': 'Programme',
      'agenda.title': 'Événements - Kosmopolis',
      'agenda.stage': 'Stage choral - Septembre 2026',
      'agenda.stage.date': 'Date\u00a0:',
      'agenda.stage.datevalue': '19 & 20 septembre 2026 de 10h à 17h30 (avec mini concert le dimanche à 17h)',
      'agenda.stage.place': 'Lieu\u00a0:',
      'agenda.stage.placevalue': 'La Maison Qui Chante, Rue du Viaduc 122, 1050 Ixelles',
      'agenda.stage.p1': 'Le choeur Kosmopolis vous propose lors d\'un weekend exceptionnel une immersion avec les choristes dans un travail axé sur le répertoire contemporain à 8 voix. En s\'appuyant sur trois magnifiques pièces contemporaines, nous explorerons le rapport du chanteur à sa partition, à son geste vocal et à l\'écoute harmonique du choeur. Des outils de technique vocale spécifiques vous seront également proposés pour augmenter votre confort dans votre pratique chorale et individuelle.',
      'agenda.stage.repertoire': 'Le répertoire\u00a0: (à confirmer en fonction du nombre d\'inscrits)',
      'agenda.stage.register': 'Je m\'inscris',
      'agenda.rehearsals': 'Répétitions hebdomadaires',
      'agenda.rehearsals.when': 'Quand\u00a0:',
      'agenda.rehearsals.whenvalue': 'Tous les lundis à 19h',
      'agenda.rehearsals.p1': 'Nos répétitions sont ouvertes à toute personne souhaitant chanter avec nous.<br>Nous répétons tous les <strong>lundis de 19h à 21h30</strong> à La Maison Qui Chante à Ixelles.',
      'agenda.rehearsals.join': 'Nous rejoindre',
      'agenda.concert': 'Concert de fin de saison 2025-26',
      'agenda.concert.date': 'Date\u00a0:',
      'agenda.concert.datevalue': '20 juin 2026 à 20h',
      'agenda.concert.place': 'Lieu\u00a0:',
      'agenda.concert.placevalue': 'Église Sainte-Anne, Auderghem',
      'agenda.concert.p1': 'Venez nous écouter pour notre concert de fin d\'année\u00a0! Un programme varié mêlant chansons d\'Europe et du monde.',
      'agenda.concert.book': 'Réserver une place',
      'medias.title': 'Vidéos - Kosmopolis',
      'medias.heading': 'Nos vidéos',
      'medias.intro': 'Découvrez le Choeur Kosmopolis en spectacle. Bon visionnage\u00a0!',
      'medias.date': '(18 avril 2026 - Carlsbourg)',
      'contact.title': 'Contact - Kosmopolis',
      'contact.join': 'Rejoignez-nous',
      'contact.join.intro': 'Nous recherchons pour tous les pupitres, des chanteurs...',
      'contact.join.li1': 'Ayant une solide expérience de chant choral, autonomes dans le travail de préparation des partitions et chantant juste.',
      'contact.join.li2': 'Ayant envie de s\'investir dans un ensemble où chaque voix compte.',
      'contact.join.li3': 'Motivés par un travail exigeant du son du choeur.',
      'contact.join.li4': 'Motivés par l\'idée de chanter dans des langues étrangères et occasionnellement par coeur.',
      'contact.join.li5': 'Sympas et pas contre l\'idée de boire des verres ensemble après les répés...! :)',
      'contact.join.when': 'Nous répétons tous les <strong>lundis de 19h à 21h30</strong> à La Maison Qui Chante à Ixelles.',
      'contact.audition': 'Passer une audition',
      'contact.heading': 'Contactez-nous',
      'contact.intro': 'Une question, une envie de travailler avec le choeur, une proposition de participer à un événement ? Écrivez-nous, nous vous répondrons avec plaisir.',
      'contact.name': 'Nom\u00a0:',
      'contact.email': 'Email\u00a0:',
      'contact.message': 'Message\u00a0:',
      'contact.send': 'Envoyer',
      'modal.close': 'Fermer'
    },

    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.medias': 'Media',
      'nav.agenda': 'Agenda',
      'nav.contact': 'Contact',
      'header.tagline': 'Mixed chamber choir based in Brussels.',
      'footer.copyright': '© 2026 - Kosmopolis Choir',
      'index.title': 'Kosmopolis',
      'index.welcome': 'Welcome to the Kosmopolis Choir!',
      'index.intro': 'A cosmopolitan vocal ensemble in the heart of Brussels!',
      'index.events': 'See our events',
      'about.title': 'About - Kosmopolis',
      'about.heading': 'About the Kosmopolis Choir',
      'about.p1': 'The Kosmopolis Choir is a mixed adult chamber choir based in Brussels. Founded in 2017 by Bertrand Duby, it aims to perform an a cappella repertoire ranging from Renaissance polyphony to works of the 20th and 21st centuries.',
      'about.p2': 'The Kosmopolis Choir takes its name from the many cultures and nationalities of its members and from its eclectic repertoire, which at its founding focused on choral traditions from Europe and around the world.',
      'about.conductor': 'The Conductor',
      'about.conductor.p1': 'After studying engineering, Bertrand Duby entered the Bordeaux Conservatory in the Opera and Choral Conducting classes. He then continued to develop his bass voice, joining the Opera class at the Queen Elisabeth Music Chapel in Waterloo in 2014, where he studied with José van Dam for four years. Passionate about choral singing, he founded the Kosmopolis Choir with the desire to bring an aesthetic of transparency to the contemporary choral landscape.',
      'about.conductor.p2': 'As a singer, he performs regularly as a soloist on major European stages (La Monnaie, Warsaw Opera, Metz Opera, etc.) and as a member of prestigious opera choruses (Paris Opera, Bayreuth Festival...) and renowned vocal ensembles (La Tempête, InChorus...).',
      'about.conductor.p3': 'He is also regularly invited as a vocal coach and/or guest conductor by various ensembles.',
      'about.programme': 'The Musical Programme',
      'about.credit': 'Image credit: © Marc Chagall - "Bouquet aux Amoureux Volants"',
      'about.programme.p1': 'The 2026-27 season programme revolves around Lucy Walker\'s cycle Bird Raptures, a young English composer, after the eponymous poem by Christina Rossetti, a 19th-century English poet.',
      'about.programme.p2': 'Realising that birds offer their finest songs at dusk and dawn, we wanted to explore these pivotal moments between day and night, and to build the entire season programme around this poem, with the thousand colours and evocations it carries.',
      'about.programme.composers': 'Works by STANFORD, SHAW, POULENC, RAVEL, MARKOR, KODALY...',
      'about.programme.detail': 'Full programme',
      'about.modal.subtitle': 'Programme',
      'agenda.title': 'Events - Kosmopolis',
      'agenda.stage': 'Choral Workshop - September 2026',
      'agenda.stage.date': 'Date:',
      'agenda.stage.datevalue': '19 & 20 September 2026, 10am to 5.30pm (with a mini concert on Sunday at 5pm)',
      'agenda.stage.place': 'Venue:',
      'agenda.stage.placevalue': 'La Maison Qui Chante, Rue du Viaduc 122, 1050 Ixelles',
      'agenda.stage.p1': 'For one exceptional weekend, the Kosmopolis Choir invites you to immerse yourself alongside the singers in work focused on the 8-voice contemporary repertoire. Building on three magnificent contemporary pieces, we will explore the singer\'s relationship with the score, their vocal gesture and the choir\'s harmonic listening. Specific vocal technique tools will also be offered to improve your comfort in both choral and individual practice.',
      'agenda.stage.repertoire': 'The repertoire: (to be confirmed depending on the number of participants)',
      'agenda.stage.register': 'Sign up',
      'agenda.rehearsals': 'Weekly Rehearsals',
      'agenda.rehearsals.when': 'When:',
      'agenda.rehearsals.whenvalue': 'Every Monday at 7pm',
      'agenda.rehearsals.p1': 'Our rehearsals are open to anyone who would like to sing with us.<br>We rehearse every <strong>Monday from 7pm to 9.30pm</strong> at La Maison Qui Chante in Ixelles.',
      'agenda.rehearsals.join': 'Join us',
      'agenda.concert': 'End-of-Season Concert 2025-26',
      'agenda.concert.date': 'Date:',
      'agenda.concert.datevalue': '20th June 2026 at 8pm',
      'agenda.concert.place': 'Venue:',
      'agenda.concert.placevalue': 'Saint Anne\'s Church, Auderghem',
      'agenda.concert.p1': 'Come and listen to our end-of-year concert! A varied programme blending songs from Europe and around the world.',
      'agenda.concert.book': 'Book a ticket',
      'medias.title': 'Videos - Kosmopolis',
      'medias.heading': 'Our videos',
      'medias.intro': 'Discover the Kosmopolis Choir in performance. Enjoy!',
      'medias.date': '(18 April 2026 - Carlsbourg)',
      'contact.title': 'Contact - Kosmopolis',
      'contact.join': 'Join us',
      'contact.join.intro': 'For all voice parts, we are looking for singers...',
      'contact.join.li1': 'With solid experience in choral singing, able to prepare their scores independently and sing in tune.',
      'contact.join.li2': 'Eager to commit to an ensemble where every voice counts.',
      'contact.join.li3': 'Motivated by demanding work on the choir\'s sound.',
      'contact.join.li4': 'Excited by the idea of singing in foreign languages and occasionally by heart.',
      'contact.join.li5': 'Friendly and not against the idea of having drinks together after rehearsals...! :)',
      'contact.join.when': 'We rehearse every <strong>Monday from 7pm to 9.30pm</strong> at La Maison Qui Chante in Ixelles.',
      'contact.audition': 'Book an audition',
      'contact.heading': 'Get in touch',
      'contact.intro': 'A question, a desire to work with the choir, a proposal to take part in an event? Write to us, we will gladly reply.',
      'contact.name': 'Name:',
      'contact.email': 'Email:',
      'contact.message': 'Message:',
      'contact.send': 'Send',
      'modal.close': 'Close'
    },

    nl: {
      'nav.home': 'Home',
      'nav.about': 'Over ons',
      'nav.medias': 'Media',
      'nav.agenda': 'Agenda',
      'nav.contact': 'Contact',
      'header.tagline': 'Gemengd kamerkoor uit Brussel.',
      'footer.copyright': '© 2026 - Koor Kosmopolis',
      'index.title': 'Kosmopolis',
      'index.welcome': 'Welkom bij het Koor Kosmopolis!',
      'index.intro': 'Een kosmopolitisch vocaal ensemble in het hart van Brussel!',
      'index.events': 'Bekijk onze evenementen',
      'about.title': 'Over ons - Kosmopolis',
      'about.heading': 'Over het Koor Kosmopolis',
      'about.p1': 'Het Koor Kosmopolis is een gemengd kamerkoor voor volwassenen, gevestigd in Brussel. Opgericht in 2017 door Bertrand Duby, wil het een a capella-repertoire verdedigen dat loopt van renaissancepolyfonie tot muziek uit de 20e en 21e eeuw.',
      'about.p2': 'Het Koor Kosmopolis dankt zijn naam aan de verscheidenheid aan culturen en nationaliteiten van zijn leden, en aan zijn eclectische repertoire dat bij de oprichting gestoeld was op koorzangtradities uit Europa en de hele wereld.',
      'about.conductor': 'De dirigent',
      'about.conductor.p1': 'Na een ingenieursstudie trad Bertrand Duby toe tot het Conservatorium van Bordeaux, in de klassen Lyrische Zang en koordirectie. Nadien bleef hij zijn basstem vervolmaken: in 2014 trad hij toe tot de klas Lyrische Zang van de Koningin Elisabeth Muziekkapel in Waterloo, waar hij vier jaar lang les kreeg van José van Dam. Gedreven door passie voor koorzang richtte hij het Koor Kosmopolis op, met de wens een esthetiek van transparantie te brengen in het hedendaagse koorlandschap.',
      'about.conductor.p2': 'Als zanger treedt hij geregeld op als solist op grote Europese podia (De Munt, Opera van Warschau, Opera van Metz, enz.) en als koorlid van gerenommeerde operakoren (Opera van Parijs, Bayreuther Festspiele...) en van vermaarde vocale ensembles (La Tempête, InChorus...).',
      'about.conductor.p3': 'Daarnaast wordt hij geregeld uitgenodigd als zangcoach en/of gastdirigent door diverse ensembles.',
      'about.programme': 'Het muzikale programma',
      'about.credit': 'Beeldcredit: © Marc Chagall - "Bouquet aux Amoureux Volants"',
      'about.programme.p1': 'Het programma van het seizoen 2026-27 draait rond de cyclus Bird Raptures van Lucy Walker, een jonge Engelse componiste, naar het gelijknamige gedicht van Christina Rossetti, een Engelse dichteres uit de 19e eeuw.',
      'about.programme.p2': 'Toen we beseften dat vogels hun mooiste zang laten horen in de schemering, bij zonsondergang en zonsopgang, wilden we die kantelmomenten tussen dag en nacht verkennen en het hele seizoensprogramma rond dit gedicht opbouwen, met de duizend kleuren en stemmingen die erin doorklinken.',
      'about.programme.composers': 'Werken van STANFORD, SHAW, POULENC, RAVEL, MARKOR, KODALY...',
      'about.programme.detail': 'Volledig programma',
      'about.modal.subtitle': 'Programma',
      'agenda.title': 'Evenementen - Kosmopolis',
      'agenda.stage': 'Koorstage - september 2026',
      'agenda.stage.date': 'Datum:',
      'agenda.stage.datevalue': '19 & 20 september 2026 van 10u tot 17u30 (met een miniconcert op zondag om 17u)',
      'agenda.stage.place': 'Locatie:',
      'agenda.stage.placevalue': 'La Maison Qui Chante, Rue du Viaduc 122, 1050 Elsene',
      'agenda.stage.p1': 'Tijdens één uitzonderlijk weekend nodigt het Koor Kosmopolis u uit om samen met de zangers onder te duiken in werk rond het hedendaagse repertoire voor 8 stemmen. Vertrekkend van drie prachtige hedendaagse stukken verkennen we de relatie van de zanger met de partituur, het vocale gebaar en de harmonische luistering van het koor. Er worden ook specifieke zangtechnieken aangeboden om uw comfort in koor- en individuele praktijk te vergroten.',
      'agenda.stage.repertoire': 'Het repertoire: (te bevestigen afhankelijk van het aantal inschrijvingen)',
      'agenda.stage.register': 'Ik schrijf me in',
      'agenda.rehearsals': 'Wekelijkse repetities',
      'agenda.rehearsals.when': 'Wanneer:',
      'agenda.rehearsals.whenvalue': 'Elke maandag om 19u',
      'agenda.rehearsals.p1': 'Onze repetities staan open voor iedereen die met ons wil meezingen.<br>We repeteren elke <strong>maandag van 19u tot 21u30</strong> in La Maison Qui Chante in Elsene.',
      'agenda.rehearsals.join': 'Word lid',
      'agenda.concert': 'Eindconcert van het seizoen 2025-26',
      'agenda.concert.date': 'Datum:',
      'agenda.concert.datevalue': '20 juni 2026 om 20u',
      'agenda.concert.place': 'Locatie:',
      'agenda.concert.placevalue': 'Sint-Annakerk, Oudergem',
      'agenda.concert.p1': 'Kom luisteren naar ons eindconcert van het jaar! Een gevarieerd programma met liederen uit Europa en de hele wereld.',
      'agenda.concert.book': 'Reserveer een plaats',
      'medias.title': "Video's - Kosmopolis",
      'medias.heading': 'Onze video\'s',
      'medias.intro': 'Ontdek het Koor Kosmopolis in optreden. Veel kijkplezier!',
      'medias.date': '(18 april 2026 - Carlsbourg)',
      'contact.title': 'Contact - Kosmopolis',
      'contact.join': 'Word lid van ons',
      'contact.join.intro': 'Voor alle stemgroepen zoeken we zangers...',
      'contact.join.li1': 'Met een solide ervaring in koorzang, zelfstandig in het voorbereiden van de partituren en zuiver zingend.',
      'contact.join.li2': 'Met de wil om zich in te zetten voor een ensemble waar elke stem telt.',
      'contact.join.li3': 'Gemotiveerd voor veeleisend werk aan het klankbeeld van het koor.',
      'contact.join.li4': 'Geënthousiasterd door het idee om in vreemde talen te zingen en af en toe uit het hoofd.',
      'contact.join.li5': 'Sympathiek en niet tegen het idee om samen iets te drinken na de repetities...! :)',
      'contact.join.when': 'We repeteren elke <strong>maandag van 19u tot 21u30</strong> in La Maison Qui Chante in Elsene.',
      'contact.audition': 'Auditie aanvragen',
      'contact.heading': 'Neem contact op',
      'contact.intro': 'Een vraag, wil je met het koor samenwerken, of heb je een voorstel om aan een evenement deel te nemen? Schrijf ons, we antwoorden graag.',
      'contact.name': 'Naam:',
      'contact.email': 'E-mail:',
      'contact.message': 'Bericht:',
      'contact.send': 'Versturen',
      'modal.close': 'Sluiten'
    }
  };

  function t(lang, key) {
    var dict = translations[lang];
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    return translations.fr[key] || key;
  }

  function isSupported(lang) {
    return SUPPORTED.indexOf(lang) !== -1;
  }

  function getInitialLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (isSupported(stored)) return stored;
      var nav = (navigator.language || '').toLowerCase();
      if (isSupported(nav)) return nav;
      for (var i = 0; i < SUPPORTED.length; i++) {
        if (nav.indexOf(SUPPORTED[i]) === 0) return SUPPORTED[i];
      }
    } catch (e) {}
    return 'fr';
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = t(lang, key);
      if (el.tagName === 'TITLE') {
        el.textContent = value;
      } else if (el.hasAttribute('data-i18n-attr')) {
        el.setAttribute(el.getAttribute('data-i18n-attr'), value);
      } else {
        el.innerHTML = value;
      }
    });
    var active = document.querySelector('.lang-switch [data-lang="' + lang + '"]');
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.classList.toggle('active', btn === active);
      btn.setAttribute('aria-pressed', btn === active ? 'true' : 'false');
    });
  }

  function setLanguage(lang) {
    if (!isSupported(lang)) lang = 'fr';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLanguage(lang);
  }

  function init() {
    var switcher = document.querySelector('.lang-switch');
    if (!switcher) return;
    switcher.querySelectorAll('button[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(this.getAttribute('data-lang'));
      });
    });
    setLanguage(getInitialLang());
  }

  return {
    init: init,
    setLanguage: setLanguage,
    t: t,
    languages: LANGUAGES
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  window.KosmopolisI18n.init();
});
