'use strict';



// ── Translations ───────────────────────────────────────────────────────────
const translations = {
  en: {
    // Nav
    'nav-about':       'About',
    'nav-experience':  'Experience',
    'nav-projects':    'Projects',
    'nav-skills':      'Skills',
    'nav-education':   'Education',
    'nav-contact':     'Contact',

    // Hero
    'hero-eyebrow':        'Marketing Communications Manager',
    'hero-tagline':        'B2B marketer, strategic content and demand generation specialist<br>working across sustainability, tech, and creative industries.',
    'btn-view-work':       'View My Work',
    'btn-download-cv':     'Download CV',
    'stat-berlin-label':     'Years in Berlin',
    'stat-years-label':      'Years Experience',
    'stat-industries-label': 'Industries',

    // About
    'about-label':         'About',
    'about-heading':       'Connecting brands<br>to the right conversations.',
    'about-p1':            'I\'m a Berlin-based Marketing Communications Manager with 4+ years of experience in B2B demand generation, content strategy, and multi-channel campaign execution. My work sits at the intersection of strategic thinking and creative craft: whether that\'s building an 87% engagement campaign on LinkedIn, managing a 10K+ subscriber newsletter, or producing thought leadership for C-suite audiences.',
    'about-p2':            'With a background in fashion communication and sustainability, I bring an editorial sensibility to B2B marketing that goes beyond conversions. I build brand narratives that resonate and endure.',
    'about-chip-location': '📍 Berlin, Germany',
    'about-chip-lang':     '🌐 English · German',
    'about-chip-open':     '🎯 Open to opportunities',

    // Highlights
    'hl-1': 'B2B Demand Generation',
    'hl-2': 'Content Strategy &amp; Editorial',
    'hl-3': 'Multi-Channel Campaign Execution',
    'hl-4': 'Lead Generation (MQL/SQL)',
    'hl-5': 'AI-Augmented Workflows',
    'hl-6': 'Data Analytics &amp; Reporting',

    // Experience
    'exp-label':   'Experience',
    'exp-heading': 'Where I\'ve made<br>an impact.',
    'role-1': 'Marketing &amp; Communications Specialist',
    'role-2': 'Marketing Assistant',
    'role-3': 'Communications Assistant Manager',
    'role-4': 'Marketing Intern',
    'role-5': 'Campus Marketing Ambassador',
    'loc-1': 'Berlin, Germany',
    'loc-2': 'Berlin, Germany',
    'loc-3': 'Mumbai, India',
    'loc-4': 'Mumbai, India',
    'loc-5': 'Mumbai, India',

    // Creative Dock bullets
    'exp1-b1': 'Designed and executed B2B demand generation campaigns across LinkedIn, blog, CRM email, and digital channels, increasing content engagement by <strong>87%</strong>.',
    'exp1-b2': 'Managed multi-channel campaigns for strategic foresight reports targeting C-level executives, generating <strong>308 MQLs</strong>.',
    'exp1-b3': 'Developed content strategies with 17+ KOLs and industry executives, increasing website engagement by <strong>84%</strong>.',
    'exp1-b4': 'Owned and optimised the external B2B newsletter program (10K+ subscribers) with an average open rate of <strong>30%</strong>.',
    'exp1-b5': 'Supported executive thought leadership at World Economic Forum (Davos), DTIM Berlin, and Innov8rs Lisbon.',

    // Rohrbeck Heger bullets
    'exp2-b1': 'Built a centralised B2B content and sales enablement ecosystem supporting <strong>120+ client projects</strong>, producing 8+ case studies and 4+ service one-pagers.',
    'exp2-b2': 'Planned and executed content-driven marketing campaigns within a <strong>€50K annual marketing budget</strong>.',
    'exp2-b3': 'Created high-impact B2B content assets driving <strong>2K+ downloads</strong> and <strong>600+ engagements</strong>.',

    // Anita Dongre
    'exp3-b1': 'Supported seasonal campaign planning, brand storytelling, and creative asset production for <strong>3+ luxury fashion brands</strong> across cross-functional teams.',

    // Creative Co.
    'exp4-b1': 'Developed content strategies for <strong>7+ luxury brands</strong> across Instagram, Facebook, Twitter, and YouTube.',
    'exp4-b2': 'Led social media for India Design ID 2018 (130+ brands, 30+ speakers) and mentored 3+ junior team members.',

    // Wooplr
    'exp5-b1': 'Drove brand awareness through peer-to-peer marketing, generating <strong>110+ qualified leads</strong>.',

    // Projects
    'proj-label':   'Projects',
    'proj-heading': 'Work that<br>speaks for itself.',
    'proj-tag':     'Featured Campaign',
    'proj-tag2':    'Strategic Foresight',
    'btn-medium':   'Medium',
    'proj-desc':    'A multi-channel B2B campaign targeting C-level executives and senior innovation leaders, promoting strategic foresight insights on decarbonisation. Executed across LinkedIn (organic + paid), CRM email, and digital media, driving measurable lead generation and establishing brand authority in the sustainability foresight space.',
    'proj-link':    'View Case Study',
    'proj-link-gh': 'View on GitHub',
    'pm-label-1':   'MQLs Generated',
    'pm-label-2':   'Engagement Uplift',
    'pm-label-3':   'Newsletter Open Rate',

    // Portfolio project
    'proj2-tag':    'Personal Project',
    'proj2-tag2':   'Vibe Coding',
    'proj2-title':  'Building This Portfolio<br>From CV to Live Website with AI',
    'proj2-desc':   'Starting from a LaTeX CV built in Overleaf, this portfolio was designed and coded from scratch in a single afternoon using Claude and VS Code, with no prior web development experience required. A week later, Claude Code was used to iterate on the live site: connecting local and remote repositories via GitHub, adding dark mode, a tools ticker, new project cards, and refining the design in real time. The entire workflow, from first line of code to deployed site, demonstrates what becomes possible when clear intent meets the right AI tools.',
    'proj2-pm1':    'Initial Build Time',
    'proj2-pm2':    'AI-Assisted Development',

    // Instacart project
    'proj3-tag':    'Data Analysis',
    'proj3-title':  'Instacart Basket Analysis<br>Customer Segmentation with Python',
    'proj3-desc':   'Instacart\'s strong sales performance masked uneven patterns in customer purchasing behaviour. Using Python across 32.4 million transactions, I analysed buying habits by loyalty, region, age, family status, and income to identify high-value customer segments. The findings fed directly into a targeted marketing strategy, moving away from a one-size-fits-all approach toward more relevant, personalised promotions.',
    'proj3-pm1':    'Transactions Analysed',

    // IDEO project
    'proj4-tag':    'Innovation Design Research',
    'proj4-tag2':   'IDEO Collaboration',
    'proj4-title':  'Closing the Communication Loop<br>Gamifying Circularity with IDEO',
    'proj4-desc':   'A collaborative research and design project with IDEO and AMD Berlin (Hochschule Fresenius), exploring how gamification and open innovation tools can help organisations communicate and adopt circular economy principles internally. The outcome was a Circularity Playbook featuring two original game formats, The Circular Escape and Speed Dating into a Circular Future, designed to break down silos, spark cross-team collaboration, and make sustainability learning engaging and participatory.',
    'proj4-pm1':    'Team Members',
    'proj4-pm2':    'Game Formats',

    // Rockbuster project
    'proj5-title':  'Rockbuster Stealth LLC<br>Data Analysis Using SQL',
    'proj5-desc':   'Rockbuster Stealth, a global movie rental company facing disruption from streaming platforms, needed data-driven insights to launch a competitive online rental service. Using PostgreSQL, I analysed the company\'s film inventory, customer behaviour, rental activity, and payment data to answer key strategic questions, identifying top-performing titles, high-value customer segments, and regional revenue patterns to inform their launch strategy.',
    'proj5-pm1':    'PostgreSQL Queries',

    // Skills
    'skills-label':   'Skills',
    'skills-heading': 'Tools of<br>the trade.',
    'sg-1': 'Strategy',
    'sg-2': 'Creative Tools',
    'sg-3': 'Marketing Tools',
    'sg-4': 'Analytics',
    'sg-5': 'AI-Augmented Workflows',
    'sg-6': 'Languages',
    'lang-tag-1': 'English (Full Professional)',
    'lang-tag-2': 'German (B2 · TELC Certified)',

    // Education
    'edu-label':    'Education',
    'edu-heading':  'The foundation<br>of my craft.',
    'edu-badge':    'Certification',
    'edu-deg-1':    'MA Sustainability in Fashion and Creative Industries',
    'edu-school-1': 'Akademie Mode Und Design, Berlin',
    'edu-deg-2':    'BDesign Fashion Communication',
    'edu-school-2': 'National Institute of Fashion Technology, Mumbai',
    'edu-deg-3':    'Data Analytics',
    'edu-school-3': 'CareerFoundry Berlin',

    // Contact
    'contact-label':   'Contact',
    'contact-heading': 'Let\'s build<br>something together.',
    'contact-sub':     'Open to full-time B2B marketing roles and exciting collaborations.<br>Based in Berlin, available for remote and hybrid opportunities.',
    'btn-linkedin':    'LinkedIn',
    'btn-email':       'Send an Email',

    // Footer
    'footer-copy': '© 2026. All rights reserved.',
  },

  de: {
    // Nav
    'nav-about':       'Über mich',
    'nav-experience':  'Erfahrung',
    'nav-projects':    'Projekte',
    'nav-skills':      'Kenntnisse',
    'nav-education':   'Ausbildung',
    'nav-contact':     'Kontakt',

    // Hero
    'hero-eyebrow':        'Marketing Communications Manager',
    'hero-tagline':        'B2B-Marketerin, Spezialistin für strategischen Content und Demand Generation<br>mit Erfahrung in Nachhaltigkeit, Tech und Kreativbranche.',
    'btn-view-work':       'Meine Projekte',
    'btn-download-cv':     'Lebenslauf herunterladen',
    'stat-berlin-label':     'Jahre in Berlin',
    'stat-years-label':      'Jahre Erfahrung',
    'stat-industries-label': 'Branchen',

    // About
    'about-label':         'Über mich',
    'about-heading':       'Marken mit den richtigen<br>Gesprächen verbinden.',
    'about-p1':            'Ich bin eine in Berlin ansässige Marketing Communications Managerin mit über 4 Jahren Erfahrung in B2B-Demand-Generation, Content-Strategie und kanalübergreifender Kampagnenführung. Meine Arbeit vereint strategisches Denken mit kreativem Handwerk: von einer LinkedIn-Kampagne mit 87 % mehr Engagement über die Betreuung eines Newsletters mit über 10.000 Abonnenten bis hin zu Thought-Leadership-Inhalten für C-Level-Entscheider.',
    'about-p2':            'Mit einem Hintergrund in Mode-Kommunikation und Nachhaltigkeit bringe ich eine redaktionelle Sensibilität ins B2B-Marketing, die über Conversions hinausgeht. Ich entwickle Markengeschichten, die resonieren und Bestand haben.',
    'about-chip-location': '📍 Berlin, Deutschland',
    'about-chip-lang':     '🌐 Englisch · Deutsch',
    'about-chip-open':     '🎯 Offen für neue Positionen',

    // Highlights
    'hl-1': 'B2B-Demand-Generation',
    'hl-2': 'Content-Strategie &amp; Redaktion',
    'hl-3': 'Kanalübergreifende Kampagnen',
    'hl-4': 'Lead-Generierung (MQL/SQL)',
    'hl-5': 'KI-gestützte Workflows',
    'hl-6': 'Datenanalyse &amp; Reporting',

    // Experience
    'exp-label':   'Erfahrung',
    'exp-heading': 'Wo ich Wirkung<br>erzielt habe.',
    'role-1': 'Marketing- &amp; Kommunikationsspezialistin',
    'role-2': 'Marketing-Assistentin',
    'role-3': 'Kommunikationsassistentin',
    'role-4': 'Marketing-Praktikantin',
    'role-5': 'Campus-Marketing-Botschafterin',
    'loc-1': 'Berlin, Deutschland',
    'loc-2': 'Berlin, Deutschland',
    'loc-3': 'Mumbai, Indien',
    'loc-4': 'Mumbai, Indien',
    'loc-5': 'Mumbai, Indien',

    // Creative Dock bullets
    'exp1-b1': 'B2B-Demand-Generation-Kampagnen über LinkedIn, Blog, CRM-E-Mail und digitale Kanäle konzipiert und umgesetzt – Content-Engagement um <strong>87 %</strong> gesteigert.',
    'exp1-b2': 'Multi-Channel-Kampagnen für strategische Foresight-Reports an C-Level-Entscheider gemanagt – <strong>308 MQLs</strong> generiert.',
    'exp1-b3': 'Content-Strategien mit über 17 KOLs und Branchenexperten entwickelt – Website-Engagement um <strong>84 %</strong> gesteigert.',
    'exp1-b4': 'Externes B2B-Newsletter-Programm (über 10.000 Abonnenten) betreut und optimiert – durchschnittliche Öffnungsrate von <strong>30 %</strong>.',
    'exp1-b5': 'Executive-Thought-Leadership beim Weltwirtschaftsforum (Davos), DTIM Berlin und Innov8rs Lissabon unterstützt.',

    // Rohrbeck Heger bullets
    'exp2-b1': 'Zentrales B2B-Content- und Sales-Enablement-Ökosystem für <strong>über 120 Kundenprojekte</strong> aufgebaut – inkl. 8+ Case Studies und 4+ Service-Onepager.',
    'exp2-b2': 'Content-getriebene Marketingkampagnen innerhalb eines <strong>jährlichen Marketingbudgets von 50.000 €</strong> geplant und umgesetzt.',
    'exp2-b3': 'Hochwertige B2B-Content-Assets erstellt – <strong>über 2.000 Downloads</strong> und <strong>600+ Interaktionen</strong> erzielt.',

    // Anita Dongre
    'exp3-b1': 'Saisonale Kampagnenplanung, Brand Storytelling und Erstellung kreativer Assets für <strong>3+ Luxusmodemarken</strong> in cross-funktionalen Teams unterstützt.',

    // Creative Co.
    'exp4-b1': 'Content-Strategien für <strong>7+ Luxusmarken</strong> auf Instagram, Facebook, Twitter und YouTube entwickelt.',
    'exp4-b2': 'Social Media für India Design ID 2018 (130+ Marken, 30+ Speaker) geleitet und 3+ Junior-Teammitglieder betreut.',

    // Wooplr
    'exp5-b1': 'Markenbekanntheit durch Peer-to-Peer-Marketing gesteigert – <strong>über 110 qualifizierte Leads</strong> generiert.',

    // Projects
    'proj-label':   'Projekte',
    'proj-heading': 'Arbeit, die<br>für sich spricht.',
    'proj-tag':     'Ausgewählte Kampagne',
    'proj-tag2':    'Strategische Vorausschau',
    'btn-medium':   'Medium',
    'proj-desc':    'Eine Multi-Channel-B2B-Kampagne für C-Level-Entscheider und Senior Innovation Leader zur Förderung strategischer Foresight-Erkenntnisse zur Dekarbonisierung. Durchgeführt über LinkedIn (organisch + bezahlt), CRM-E-Mail und digitale Medien – mit messbarer Lead-Generierung und dem Aufbau von Marken-Autorität im Bereich Nachhaltigkeits-Foresight.',
    'proj-link':    'Fallstudie ansehen',
    'proj-link-gh': 'Auf GitHub ansehen',
    'pm-label-1':   'MQLs generiert',
    'pm-label-2':   'Engagement-Steigerung',
    'pm-label-3':   'Newsletter-Öffnungsrate',

    // Portfolio-Projekt
    'proj2-tag':    'Persönliches Projekt',
    'proj2-tag2':   'Vibe Coding',
    'proj2-title':  'Dieses Portfolio aufbauen<br>Vom Lebenslauf zur Live-Website mit KI',
    'proj2-desc':   'Ausgehend von einem in Overleaf erstellten LaTeX-Lebenslauf wurde dieses Portfolio an einem einzigen Nachmittag mit Claude und VS Code von Grund auf neu gestaltet und programmiert, ohne Vorkenntnisse in der Webentwicklung. Eine Woche später wurde Claude Code genutzt, um die Live-Website weiterzuentwickeln: lokale und remote Repositories via GitHub verbinden, Dark Mode, einen Tools-Ticker und neue Projektkarten hinzufügen sowie das Design in Echtzeit verfeinern. Der gesamte Workflow zeigt, was möglich wird, wenn klare Absicht auf die richtigen KI-Tools trifft.',
    'proj2-pm1':    'Initiale Entwicklungszeit',
    'proj2-pm2':    'KI-gestützte Entwicklung',

    // Instacart-Projekt
    'proj3-tag':    'Datenanalyse',
    'proj3-title':  'Instacart Warenkorbanalyse<br>Kundensegmentierung mit Python',
    'proj3-desc':   'Instacarts starke Vertriebsleistung verdeckte ungleichmäßige Muster im Kaufverhalten der Kunden. Mit Python analysierte ich über 32,4 Millionen Transaktionen nach Loyalität, Region, Alter, Familienstand und Einkommen, um hochwertige Kundensegmente zu identifizieren. Die Erkenntnisse flossen direkt in eine zielgerichtete Marketingstrategie ein, die einen einheitlichen Ansatz durch relevantere, personalisierte Aktionen ersetzte.',
    'proj3-pm1':    'Analysierte Transaktionen',

    // IDEO-Projekt
    'proj4-tag':    'Innovationsdesign-Forschung',
    'proj4-tag2':   'IDEO-Kooperation',
    'proj4-title':  'Den Kommunikationskreislauf schließen<br>Zirkularität spielerisch mit IDEO gestalten',
    'proj4-desc':   'Ein kollaboratives Forschungs- und Designprojekt mit IDEO und AMD Berlin (Hochschule Fresenius), das untersucht, wie Gamification und Open-Innovation-Werkzeuge Organisationen dabei helfen können, Kreislaufwirtschaftsprinzipien intern zu kommunizieren und umzusetzen. Das Ergebnis war ein Circularity Playbook mit zwei originellen Spielformaten, The Circular Escape und Speed Dating into a Circular Future, die darauf ausgelegt sind, Silos aufzubrechen, abteilungsübergreifende Zusammenarbeit zu fördern und Nachhaltigkeitslernen erlebbar zu machen.',
    'proj4-pm1':    'Teammitglieder',
    'proj4-pm2':    'Spielformate',

    // Rockbuster-Projekt
    'proj5-title':  'Rockbuster Stealth LLC<br>Datenanalyse mit SQL',
    'proj5-desc':   'Rockbuster Stealth, ein globales Filmverleihunternehmen, das durch Streaming-Plattformen unter Druck gerät, benötigte datengestützte Erkenntnisse für den Launch eines wettbewerbsfähigen Online-Verleihdienstes. Mit PostgreSQL analysierte ich das Filminventar, das Kundenverhalten, die Mietaktivitäten und Zahlungsdaten des Unternehmens, um zentrale strategische Fragen zu beantworten und Top-Titel, wertvolle Kundensegmente sowie regionale Umsatzmuster für die Launchstrategie zu identifizieren.',
    'proj5-pm1':    'PostgreSQL-Abfragen',

    // Skills
    'skills-label':   'Kenntnisse',
    'skills-heading': 'Werkzeuge<br>meines Fachs.',
    'sg-1': 'Strategie',
    'sg-2': 'Kreative Tools',
    'sg-3': 'Marketing-Tools',
    'sg-4': 'Analyse',
    'sg-5': 'KI-gestützte Workflows',
    'sg-6': 'Sprachen',
    'lang-tag-1': 'Englisch (Vollständig beruflich)',
    'lang-tag-2': 'Deutsch (B2 · TELC-zertifiziert)',

    // Education
    'edu-label':    'Ausbildung',
    'edu-heading':  'Das Fundament<br>meines Handwerks.',
    'edu-badge':    'Zertifizierung',
    'edu-deg-1':    'MA Nachhaltigkeit in Mode und Kreativindustrie',
    'edu-school-1': 'Akademie Mode Und Design, Berlin',
    'edu-deg-2':    'BDesign Fashion Communication',
    'edu-school-2': 'National Institute of Fashion Technology, Mumbai',
    'edu-deg-3':    'Datenanalyse',
    'edu-school-3': 'CareerFoundry Berlin',

    // Contact
    'contact-label':   'Kontakt',
    'contact-heading': 'Lass uns gemeinsam<br>etwas aufbauen.',
    'contact-sub':     'Offen für Vollzeit-B2B-Marketingstellen und spannende Kooperationen.<br>In Berlin ansässig, verfügbar für Remote- und hybride Positionen.',
    'btn-linkedin':    'LinkedIn',
    'btn-email':       'E-Mail senden',

    // Footer
    'footer-copy': '© 2026. Alle Rechte vorbehalten.',
  },
};

// ── Language switching ─────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

// Apply on load
setLang(currentLang);

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ── Nav scroll ─────────────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Hamburger menu ─────────────────────────────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

// ── Scroll-triggered fade-in animations ───────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => {
  const siblings = Array.from(el.parentElement.querySelectorAll('.fade-in'));
  el.style.transitionDelay = `${siblings.indexOf(el) * 0.08}s`;
  observer.observe(el);
});

// ── Dark Mode Toggle ───────────────────────────────────────────────────────
const darkBtn = document.getElementById('darkModeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setDark(on) {
  document.body.classList.toggle('dark', on);
  darkBtn.querySelector('.icon-moon').style.display = on  ? 'none' : '';
  darkBtn.querySelector('.icon-sun').style.display  = on  ? ''     : 'none';
  localStorage.setItem('darkMode', on ? '1' : '0');
}

// Load saved preference, fall back to system preference
const saved = localStorage.getItem('darkMode');
setDark(saved !== null ? saved === '1' : prefersDark.matches);

darkBtn.addEventListener('click', () => setDark(!document.body.classList.contains('dark')));

// ── Project Tabs ───────────────────────────────────────────────────────────
const projTabs   = document.querySelectorAll('.proj-tab');
const projPanels = document.querySelectorAll('.proj-panel');

projTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const idx = tab.dataset.tab;
    projTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    projPanels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    document.querySelector(`.proj-panel[data-panel="${idx}"]`).classList.add('active');
  });
});
