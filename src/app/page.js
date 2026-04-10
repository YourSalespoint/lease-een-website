'use client';

import { useState, useEffect } from 'react';

// ── LOGO COMPONENT ─────────────────────────────────────────────────────────
const LOGO_FRAMES = [
  ['#0050FF','rgba(0,80,255,0.3)','rgba(0,80,255,0.12)','rgba(0,80,255,0.08)','#0050FF','rgba(0,80,255,0.12)','rgba(0,80,255,0.28)','rgba(0,80,255,0.08)','#0050FF','rgba(0,80,255,0.08)','rgba(0,80,255,0.12)','#00C8A8','#0050FF','#0050FF','#0050FF','#00C8A8'],
  ['#0050FF','#0050FF','rgba(0,80,255,0.2)','rgba(0,80,255,0.08)','rgba(0,80,255,0.3)','#0050FF','rgba(0,80,255,0.12)','rgba(0,80,255,0.08)','#0050FF','rgba(0,80,255,0.2)','#00C8A8','rgba(0,200,168,0.3)','#0050FF','#0050FF','#00C8A8','#00C8A8'],
  ['rgba(0,80,255,0.4)','#0050FF','#0050FF','rgba(0,80,255,0.15)','#0050FF','rgba(0,80,255,0.2)','#0050FF','rgba(0,80,255,0.1)','rgba(0,80,255,0.15)','#0050FF','rgba(0,80,255,0.3)','#00C8A8','#0050FF','rgba(0,80,255,0.5)','#0050FF','#00C8A8'],
  ['#0050FF','rgba(0,80,255,0.15)','rgba(0,80,255,0.3)','rgba(0,80,255,0.08)','#0050FF','#0050FF','rgba(0,80,255,0.1)','rgba(0,80,255,0.12)','#0050FF','rgba(0,80,255,0.12)','#0050FF','#00C8A8','rgba(0,80,255,0.6)','#0050FF','#0050FF','#00C8A8'],
];

function LogoMark({ size = 'md' }) {
  const cellSize = size === 'sm' ? 8 : size === 'lg' ? 14 : 10;
  const gap = size === 'sm' ? 2 : size === 'lg' ? 3 : 2;
  const radius = size === 'sm' ? 2 : 3;
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame(f => (f + 1) % LOGO_FRAMES.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(4, ${cellSize}px)`,
        gridTemplateRows: `repeat(4, ${cellSize}px)`,
        gap: `${gap}px`,
        flexShrink: 0,
      }}
    >
      {LOGO_FRAMES[frame].map((color, i) => (
        <div
          key={i}
          style={{
            background: color,
            borderRadius: `${radius}px`,
            width: cellSize,
            height: cellSize,
            transition: 'background 0.6s ease',
          }}
        />
      ))}
    </div>
  );
}

function Logo({ scrolled }) {
  return (
    <a href="#" className="logo-wrap" aria-label="Lease een Website – naar homepage">
      <LogoMark />
      <div className="logo-text-wrap">
        <span className="logo-top">Lease een</span>
        <span className="logo-main">Website</span>
        <div className="logo-underline" />
      </div>
    </a>
  );
}

// ── SVG ICONS ──────────────────────────────────────────────────────────────
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l.95-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const IconPlus = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconRocket = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconRefresh = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const IconLayout = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconSupport = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
  </svg>
);

const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const IconChat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// ── FAQ ITEM ───────────────────────────────────────────────────────────────
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-icon">
          <IconPlus />
        </span>
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
}

// ── CONTACT FORM ───────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ naam: '', bedrijf: '', email: '', telefoon: '', pakket: '', bericht: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Versturen mislukt');
      setStatus('success');
      setForm({ naam: '', bedrijf: '', email: '', telefoon: '', pakket: '', bericht: '' });
    } catch {
      setStatus('error');
      setError('Er ging iets mis. Probeer het opnieuw of mail ons direct.');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        Bedankt! We nemen binnen 1 werkdag contact met je op.
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="naam">Naam</label>
          <input id="naam" name="naam" type="text" placeholder="Jan de Vries" value={form.naam} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="bedrijf">Bedrijfsnaam</label>
          <input id="bedrijf" name="bedrijf" type="text" placeholder="Jouw Bedrijf BV" value={form.bedrijf} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">E-mailadres</label>
          <input id="email" name="email" type="email" placeholder="jan@bedrijf.nl" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefoon">Telefoonnummer</label>
          <input id="telefoon" name="telefoon" type="tel" placeholder="06-12345678" value={form.telefoon} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="pakket">Pakket interesse</label>
        <select id="pakket" name="pakket" value={form.pakket} onChange={handleChange}>
          <option value="">Selecteer een pakket…</option>
          <option value="starter">Starter — €49/maand</option>
          <option value="business">Business — €79/maand</option>
          <option value="pro">Pro — €119/maand</option>
          <option value="weet-nog-niet">Weet ik nog niet</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="bericht">Vertel ons over jouw bedrijf</label>
        <textarea id="bericht" name="bericht" placeholder="Wat doet jouw bedrijf? Heb je al een website? Wat verwacht je van een nieuwe site?" value={form.bericht} onChange={handleChange} rows={4} />
      </div>
      {status === 'error' && <div className="form-error">{error}</div>}
      <button type="submit" className="btn-primary" disabled={status === 'loading'} style={{ width: '100%', justifyContent: 'center' }}>
        {status === 'loading' ? 'Versturen…' : <>Verstuur aanvraag <IconArrow /></>}
      </button>
    </form>
  );
}

// ── STEPPER SECTION ────────────────────────────────────────────────────────
const STEPS = [
  {
    n: '01',
    icon: <IconChat />,
    title: 'Kennismaking',
    text: 'We leren jouw bedrijf kennen via een kort gesprek of intake. Wat doe je, voor wie, en wat moet de website uitstralen? Dat is alles wat we nodig hebben om direct aan de slag te gaan.',
  },
  {
    n: '02',
    icon: <IconRocket />,
    title: 'Wij bouwen',
    text: 'Onze designers en developers bouwen een snelle, moderne website op maat. Professionele copy, strak design, technisch geoptimaliseerd voor Google. Alles op basis van jouw input.',
  },
  {
    n: '03',
    icon: <IconStar />,
    title: 'Jij keurt goed',
    text: 'Je bekijkt de live preview en geeft feedback. We passen aan tot jij 100% tevreden bent. Pas daarna gaat de website online — jij hebt het laatste woord.',
  },
  {
    n: '04',
    icon: <IconGlobe />,
    title: 'Live & zorgeloos',
    text: 'Je website staat online. Wij regelen hosting, updates, beveiliging en technisch onderhoud. Jij richt je op je bedrijf, wij houden de website draaiende.',
  },
  {
    n: '05',
    icon: <IconRefresh />,
    title: 'Doorlopend ontzorgd',
    text: 'Na de livegang blijven wij op de achtergrond actief. Updates, backups, aanpassingen en vragen — je hoeft nooit zelf bij te houden of alles nog werkt.',
  },
];

function StepperSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const fillPct = (active / (STEPS.length - 1)) * 100;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive(a => (a + 1) % STEPS.length);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const handleClick = (i) => {
    setActive(i);
    setPaused(true);
    // hervat auto-advance na 8 seconden stilstand
    setTimeout(() => setPaused(false), 8000);
  };

  return (
    <section className="steps" id="hoe-het-werkt" aria-labelledby="steps-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Werkwijze</span>
          <h2 id="steps-heading" className="section-title">
            Van aanvraag tot live in <span className="gradient-text">5 stappen</span>
          </h2>
          <p className="section-sub">
            Wij ontzorgen je volledig. Jij hoeft alleen maar te zeggen wat je bedrijf doet — de rest regelen wij.
          </p>
        </div>

        {/* Track */}
        <div className="stepper-track" role="tablist" aria-label="Werkwijze stappen">
          <div className="stepper-line-bg" />
          <div className="stepper-line-fill" style={{ width: `${fillPct}%` }} />
          {STEPS.map((step, i) => (
            <button
              key={step.n}
              className={`stepper-btn${active === i ? ' active' : ''}`}
              onClick={() => handleClick(i)}
              role="tab"
              aria-selected={active === i}
              aria-controls="stepper-panel"
            >
              <div className="stepper-circle">
                {step.icon}
              </div>
              <span className="stepper-label">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="stepper-panel" id="stepper-panel" role="tabpanel">
          <div className="stepper-panel-num">{STEPS[active].n}</div>
          <div className="stepper-panel-content">
            <h3>{STEPS[active].title}</h3>
            <p>{STEPS[active].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ SCHEMA ─────────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat betekent "een website leasen" precies?',
      acceptedAnswer: { '@type': 'Answer', text: 'Leasen betekent dat jij een professionele website gebruikt tegen een vast maandtarief, zonder hoge eenmalige bouwkosten. Wij blijven eigenaar van de technische infrastructuur en zorgen voor hosting, onderhoud en updates. Jij profiteert van een toppresterende website zonder kapitaal vast te zetten.' },
    },
    {
      '@type': 'Question',
      name: 'Kan ik op elk moment opzeggen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Na de minimale looptijd van 3 maanden kun je maandelijks opzeggen. Er zijn geen langlopende contracten of verborgen opzegkosten. Als je stopt, nemen we de website offline — maar je kunt de content altijd meenemen.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel staat mijn website online?',
      acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen is jouw website binnen 3 tot 5 werkdagen live. We starten direct na je akkoord op de ontwerp- en copyrichting.' },
    },
    {
      '@type': 'Question',
      name: 'Kan ik zelf teksten of afbeeldingen aanpassen?',
      acceptedAnswer: { '@type': 'Answer', text: 'In het Starter-pakket nemen wij kleine wijzigingen voor je door. In Business en Pro zijn periodieke contentupdates inbegrepen. Grotere aanpassingen of nieuwe pagina\'s kunnen we altijd in overleg plannen.' },
    },
    {
      '@type': 'Question',
      name: 'Wat als ik al een domeinnaam heb?',
      acceptedAnswer: { '@type': 'Answer', text: 'Geen probleem. Wij koppelen je bestaande domein aan de nieuwe website. Je hoeft zelf niets in te stellen — we regelen de DNS-wijzigingen voor je.' },
    },
    {
      '@type': 'Question',
      name: 'Is een website leasen duurder dan kopen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Op de lange termijn vergelijkbaar, maar zonder het risico en zonder het kapitaalbeslag. Een traditionele website kost €2.000 – €8.000 eenmalig, plus hosting en onderhoud. Bij ons is alles inbegrepen voor één vast maandbedrag.' },
    },
    {
      '@type': 'Question',
      name: 'Wat als ik de website later wil kopen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dat is mogelijk. Na 12 maanden lease bieden we een koopoptie aan tegen een gereduceerde prijs. Neem contact op voor de actuele voorwaarden.' },
    },
  ],
};

// ── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Hoe het werkt', href: '#hoe-het-werkt' },
    { label: 'Wat je krijgt', href: '#wat-je-krijgt' },
    { label: 'Prijzen', href: '#prijzen' },
    { label: 'Google Ads', href: '/google-ads' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Hoofdnavigatie">
        <div className="container">
          <div className="nav-inner">
            <Logo scrolled={scrolled} />
            <ul className="nav-links" role="list">
              {navItems.map(item => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="#contact" className="nav-cta">Start je aanvraag</a>
              </li>
            </ul>
            <button
              className="nav-hamburger"
              aria-label="Menu openen"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <nav className={`nav-drawer${mobileOpen ? ' open' : ''}`} aria-label="Mobiel menu">
        <button
          style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', fontSize: '1.5rem' }}
          onClick={() => setMobileOpen(false)}
          aria-label="Menu sluiten"
        >
          ✕
        </button>
        {navItems.map(item => (
          <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>
        ))}
        <a href="#contact" onClick={() => setMobileOpen(false)} style={{ color: 'var(--blue-light)', fontWeight: 700 }}>Start je aanvraag →</a>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-bg">
            <div className="hero-bg-blob hero-bg-blob--blue" />
            <div className="hero-bg-blob hero-bg-blob--teal" />
          </div>
          <div className="container">
            <div className="hero-inner">
              <div className="hero-content">
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  Geen opstartkosten. Altijd opzegbaar.
                </div>
                <h1 id="hero-heading">
                  Lease een<br />
                  <span className="gradient-text">professionele</span><br />
                  website.
                </h1>
                <p className="hero-sub">
                  Jouw bedrijf verdient een website die werkt. Wij bouwen, hosten en onderhouden — jij betaalt een vast maandtarief. Geen verrassingen, geen technisch gedoe.
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="btn-primary">
                    Gratis offerte aanvragen <IconArrow />
                  </a>
                  <a href="#hoe-het-werkt" className="btn-secondary">
                    Hoe werkt het?
                  </a>
                </div>
                <div className="hero-social-proof">
                  <div className="hero-avatars">
                    {['JV', 'MK', 'AS', 'RB'].map((initials, i) => (
                      <div key={i} className="hero-avatar" aria-hidden="true">{initials}</div>
                    ))}
                  </div>
                  <p className="hero-social-text">
                    <strong>Al vanaf €49/maand</strong> — inclusief domeinnaam, hosting &amp; e-mail
                  </p>
                </div>
              </div>

              {/* Hero visual — browser mockup */}
              <div className="hero-visual" aria-hidden="true">
                <div className="hero-float-tag hero-float-tag--1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C8A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Binnen 5 werkdagen live
                </div>
                <div className="hero-card">
                  <div className="hero-card-header">
                    <div className="hero-card-dot" />
                    <div className="hero-card-dot" />
                    <div className="hero-card-dot" />
                    <div className="hero-card-url">jouwnaam.nl</div>
                  </div>
                  <div className="hero-score-grid">
                    <div className="hero-score-item">
                      <div className="hero-score-value" style={{ color: '#00C8A8' }}>98</div>
                      <div className="hero-score-label">PageSpeed</div>
                    </div>
                    <div className="hero-score-item">
                      <div className="hero-score-value" style={{ color: '#6B3FFF' }}>100</div>
                      <div className="hero-score-label">SEO Score</div>
                    </div>
                    <div className="hero-score-item">
                      <div className="hero-score-value" style={{ color: '#00C8A8' }}>A+</div>
                      <div className="hero-score-label">SSL</div>
                    </div>
                    <div className="hero-score-item">
                      <div className="hero-score-value" style={{ color: '#6B3FFF' }}>99.9%</div>
                      <div className="hero-score-label">Uptime</div>
                    </div>
                  </div>
                  <div className="hero-speed-bar">
                    <span className="hero-speed-label">Laadtijd</span>
                    <div className="hero-speed-bar-track">
                      <div className="hero-speed-bar-fill" />
                    </div>
                    <span className="hero-speed-value">0.8s</span>
                  </div>
                </div>
                <div className="hero-float-tag hero-float-tag--2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0050FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  Google PageSpeed 98+
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOE HET WERKT ── */}
        <StepperSection />

        {/* ── WAT JE KRIJGT / VOORDELEN ── */}
        <section id="wat-je-krijgt" aria-labelledby="voordelen-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Voordelen</span>
              <h2 id="voordelen-heading" className="section-title">
                Waarom <span className="gradient-text">leasen</span> slimmer is
              </h2>
              <p className="section-sub">
                Een website leasen in plaats van kopen heeft grote voordelen voor ondernemers. Geen kapitaal vastzetten, altijd up-to-date, altijd ondersteund.
              </p>
            </div>
            <div className="voordelen-grid">
              {[
                {
                  icon: <IconZap />,
                  title: 'Nul euro opstartkosten',
                  text: 'Geen investering van duizenden euro\'s vooraf. Je betaalt een vast maandbedrag en bent direct online. Cashflow-vriendelijk voor elke ondernemer.',
                },
                {
                  icon: <IconClock />,
                  title: 'Binnen 5 werkdagen live',
                  text: 'Van aanvraag naar een volwaardige, professionele website in minder dan een week. Sneller dan welke traditionele bouwer ook.',
                },
                {
                  icon: <IconShield />,
                  title: 'Altijd veilig & actueel',
                  text: 'SSL-certificaat, automatische updates, dagelijkse backups en 99.9% uptime-garantie. Wij bewaken jouw online aanwezigheid 24/7.',
                },
                {
                  icon: <IconRefresh />,
                  title: 'Flexibel & aanpasbaar',
                  text: 'Bedrijfsnaam veranderd? Nieuw product? Wij passen de website aan. Kleine wijzigingen zijn altijd inbegrepen in je maandtarief.',
                },
                {
                  icon: <IconChart />,
                  title: 'Gebouwd voor Google',
                  text: 'Elke website wordt geoptimaliseerd voor zoekmachines. Snelle laadtijden, correcte metadata, Google Search Console en Analytics al ingericht.',
                },
                {
                  icon: <IconSupport />,
                  title: 'Persoonlijke support',
                  text: 'Geen chatbot, geen ticketsysteem. Je hebt direct contact met de mensen die jouw website gebouwd hebben. Bereikbaar per telefoon en e-mail.',
                },
              ].map((v) => (
                <div key={v.title} className="voordeel-card">
                  <div className="voordeel-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INCLUSIEF ── */}
        <section className="inclusief" aria-labelledby="inclusief-heading">
          <div className="container">
            <div className="inclusief-inner">
              <div>
                <span className="section-tag">Altijd inclusief</span>
                <h2 id="inclusief-heading" className="section-title" style={{ marginBottom: 16 }}>
                  Alles inbegrepen,<br />
                  <span className="gradient-text">geen verrassingen</span>
                </h2>
                <p className="section-sub" style={{ textAlign: 'left', margin: '0 0 36px' }}>
                  Bij het leasen van een website via ons krijg je een compleet pakket. Van domeinnaam tot zakelijke e-mail — elk detail is geregeld.
                </p>
                <ul className="inclusief-list" aria-label="Altijd inbegrepen">
                  {[
                    { title: 'Professioneel webdesign op maat', text: 'Geen templates. Een uniek ontwerp dat past bij jouw merk en doelgroep.' },
                    { title: 'Razendsnelle hosting', text: 'Edge-netwerk met servers wereldwijd. Laadtijd onder de 1 seconde.' },
                    { title: 'Domeinnaam naar keuze', text: 'Wij registreren en beheren jouw .nl-domein. Geen gedoe met DNS of nameservers.' },
                    { title: 'Zakelijke e-mailadressen', text: 'info@jouwnaam.nl en zoveel adressen als je nodig hebt, kant-en-klaar ingesteld.' },
                    { title: 'Google Analytics 4 & Search Console', text: 'Direct inzicht in wie jouw website bezoekt en hoe je scoort in Google.' },
                    { title: 'Cookiebanner & privacybeleid', text: 'AVG-compliant ingericht. Juridisch correct, geen gedoe voor jou.' },
                  ].map((item) => (
                    <li key={item.title} className="inclusief-item">
                      <span className="inclusief-check"><IconCheck /></span>
                      <div className="inclusief-item-text">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="inclusief-visual">
                <div className="inclusief-big-stat">
                  <div className="big-stat-number">€0</div>
                  <p className="big-stat-label">opstartkosten</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Terwijl traditionele webdesigners <strong style={{ color: 'var(--text)' }}>€2.000 – €8.000</strong> vragen voor een website, betaal jij gewoon een vast maandtarief en ben je direct online.
                  </p>
                  <div className="stat-row">
                    <div className="stat-item">
                      <div className="stat-val">98+</div>
                      <div className="stat-lbl">PageSpeed</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-val">&lt;1s</div>
                      <div className="stat-lbl">Laadtijd</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-val">99.9%</div>
                      <div className="stat-lbl">Uptime</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-val">100%</div>
                      <div className="stat-lbl">Mobiel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="prijzen" aria-labelledby="pricing-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Tarieven</span>
              <h2 id="pricing-heading" className="section-title">
                Eerlijk geprijsd,<br />
                <span className="gradient-text">altijd transparant</span>
              </h2>
              <p className="section-sub">
                Geen verborgen kosten. Geen lange contracten. Kies het pakket dat bij jouw bedrijf past en schaal op wanneer je wilt.
              </p>
            </div>
            <div className="pricing-grid">
              {/* Starter */}
              <div className="pricing-card">
                <p className="pricing-plan-name">Starter</p>
                <div className="pricing-price">
                  <span className="pricing-price-currency">€</span>
                  <span className="pricing-price-amount">49</span>
                  <span className="pricing-price-period">/maand</span>
                </div>
                <p className="pricing-tagline">Perfect voor zelfstandigen en starters die online professioneel willen overkomen.</p>
                <div className="pricing-divider" />
                <ul className="pricing-features" aria-label="Functies Starter">
                  {[
                    'Professionele website (t/m 10 pagina\'s)',
                    'Razendsnelle hosting inbegrepen',
                    'Domeinnaam .nl inbegrepen',
                    'Tot 5 zakelijke e-mailadressen',
                    'SSL-certificaat',
                    'Mobiel-responsive design',
                    'Google Analytics 4',
                    'Cookiebanner & privacybeleid',
                    'Kleine wijzigingen inbegrepen',
                  ].map(f => (
                    <li key={f} className="pricing-feature">
                      <IconCheck />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Kies Starter
                </a>
              </div>

              {/* Business — featured */}
              <div className="pricing-card pricing-card--featured">
                <div className="pricing-badge">Meest gekozen</div>
                <p className="pricing-plan-name">Business</p>
                <div className="pricing-price">
                  <span className="pricing-price-currency">€</span>
                  <span className="pricing-price-amount">79</span>
                  <span className="pricing-price-period">/maand</span>
                </div>
                <p className="pricing-tagline">Voor groeiende bedrijven die meer uit hun website willen halen.</p>
                <div className="pricing-divider" />
                <ul className="pricing-features" aria-label="Functies Business">
                  {[
                    'Alles uit Starter',
                    'Tot 20 pagina\'s',
                    'Tot 25 zakelijke e-mailadressen',
                    'Contactformulier met e-mailkoppeling',
                    'Google Search Console',
                    'On-page SEO-optimalisatie',
                    'Google Maps integratie',
                    'Snelle contentupdates (4x/jaar)',
                    'Prioriteit support',
                  ].map(f => (
                    <li key={f} className="pricing-feature">
                      <IconCheck />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Kies Business <IconArrow />
                </a>
              </div>

              {/* Pro */}
              <div className="pricing-card">
                <p className="pricing-plan-name">Pro</p>
                <div className="pricing-price">
                  <span className="pricing-price-currency">€</span>
                  <span className="pricing-price-amount">119</span>
                  <span className="pricing-price-period">/maand</span>
                </div>
                <p className="pricing-tagline">Maximale online aanwezigheid met blog, portfolio en uitgebreide SEO.</p>
                <div className="pricing-divider" />
                <ul className="pricing-features" aria-label="Functies Pro">
                  {[
                    'Alles uit Business',
                    'Onbeperkt pagina\'s',
                    'Blog of portfolio sectie',
                    'Tot 100 zakelijke e-mailadressen',
                    'Uitgebreide SEO-strategie',
                    'Maandelijkse contentupdate',
                    'Google Ads landing page',
                    'Conversie-optimalisatie',
                    'Directe lijn — 24u reactietijd',
                  ].map(f => (
                    <li key={f} className="pricing-feature">
                      <IconCheck />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Kies Pro
                </a>
              </div>
            </div>
            <p className="pricing-note">
              Alle bedragen zijn excl. BTW. Minimale looptijd 3 maanden, daarna maandelijks opzegbaar.{' '}
              <a href="#faq">Veelgestelde vragen over de voorwaarden.</a>
            </p>
          </div>
        </section>

        {/* ── GOOGLE ADS ADD-ON ── */}
        <section className="addon-section" aria-labelledby="addon-heading">
          <div className="container">
            <div className="addon-inner">
              <div className="addon-content">
                <span className="section-tag">Add-on</span>
                <h2 id="addon-heading" className="section-title" style={{ marginBottom: 16 }}>
                  Meer klanten via<br />
                  <span className="gradient-text">Google Ads</span>
                </h2>
                <p className="section-sub" style={{ textAlign: 'left', margin: '0 0 28px' }}>
                  Een professionele website is de basis — Google Ads zorgt dat mensen je ook echt vinden. Combineer je websitelease met professioneel campagnebeheer en haal direct meer aanvragen binnen.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                  {[
                    'Campagnebeheer door gecertificeerde Google Ads specialist',
                    'Campagne live binnen 1 week na intake',
                    'Maandelijkse rapportage & optimalisatie',
                    'Gericht op rendement, niet op klikken',
                    'Combinatiekorting bij websitelease',
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--teal)', marginTop: 2, flexShrink: 0 }}><IconCheck /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/google-ads" className="btn-primary">
                  Meer over Google Ads <IconArrow />
                </a>
              </div>
              <div className="addon-pricing">
                <div className="addon-price-card">
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 8 }}>Vanaf</p>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
                    <span style={{ fontFamily: 'var(--font-head)', fontSize: '3rem', fontWeight: 800, lineHeight: 1, color: 'var(--text)' }}>€99</span>
                    <span style={{ color: 'var(--text-muted)', marginBottom: 6 }}>/maand</span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 20 }}>
                    Management fee — excl. advertentiebudget
                  </p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      { label: 'Basis', price: '€99/mnd', sub: '1 campagne, t/m €250 budget' },
                      { label: 'Plus', price: '€149/mnd', sub: '2 campagnes, t/m €500 budget' },
                      { label: 'Pro', price: '€199/mnd', sub: '4 campagnes, t/m €1.000 budget' },
                    ].map(tier => (
                      <div key={tier.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                        <div>
                          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>{tier.label}</span>
                          <span style={{ display: 'block', fontSize: '0.77rem', color: 'var(--text-muted)' }}>{tier.sub}</span>
                        </div>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--blue-light)', whiteSpace: 'nowrap' }}>{tier.price}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/google-ads" className="btn-secondary" style={{ marginTop: 24, width: '100%', justifyContent: 'center', display: 'flex' }}>
                    Bekijk alle pakketten
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq-section" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <div className="faq-grid">
              <div className="faq-sidebar">
                <span className="section-tag">FAQ</span>
                <h2 id="faq-heading">
                  Veelgestelde<br />
                  <span className="gradient-text">vragen</span>
                </h2>
                <p>
                  Heb je nog andere vragen? Neem gerust contact op. We denken graag met je mee.
                </p>
                <a href="#contact" className="btn-primary">
                  Stel je vraag <IconArrow />
                </a>
              </div>
              <div className="faq-list">
                {[
                  {
                    question: 'Wat betekent "een website leasen" precies?',
                    answer: 'Leasen betekent dat jij een professionele website gebruikt tegen een vast maandtarief, zonder hoge eenmalige bouwkosten. Wij blijven eigenaar van de technische infrastructuur en zorgen voor hosting, onderhoud en updates. Jij profiteert van een toppresterende website zonder kapitaal vast te zetten.',
                  },
                  {
                    question: 'Kan ik op elk moment opzeggen?',
                    answer: 'Na de minimale looptijd van 3 maanden kun je maandelijks opzeggen. Er zijn geen langlopende contracten of verborgen opzegkosten. Als je stopt, nemen we de website offline — maar je kunt de content altijd meenemen.',
                  },
                  {
                    question: 'Hoe snel staat mijn website online?',
                    answer: 'In de meeste gevallen is jouw website binnen 3 tot 5 werkdagen live. We starten direct na je akkoord op de ontwerp- en copyrichting. Spoed nodig? Neem contact op, dan kijken we wat mogelijk is.',
                  },
                  {
                    question: 'Kan ik zelf teksten of afbeeldingen aanpassen?',
                    answer: 'In het Starter-pakket nemen wij kleine wijzigingen voor je door. In Business en Pro zijn periodicke contentupdates inbegrepen. Grotere aanpassingen of nieuwe pagina\'s kunnen we altijd in overleg plannen.',
                  },
                  {
                    question: 'Wat als ik al een domeinnaam heb?',
                    answer: 'Geen probleem. Wij koppelen je bestaande domein aan de nieuwe website. Je hoeft zelf niets in te stellen — we regelen de DNS-wijzigingen voor je.',
                  },
                  {
                    question: 'Is een website leasen duurder dan kopen?',
                    answer: 'Op de lange termijn vergelijkbaar, maar zonder het risico en zonder het kapitaalbeslag. Een traditionele website kost €2.000 – €8.000 eenmalig, plus €50 – €200/jaar voor hosting, en je bent zelf verantwoordelijk voor updates en beveiliging. Bij ons is alles inbegrepen voor één vast maandbedrag.',
                  },
                  {
                    question: 'Wat als ik de website later wil kopen?',
                    answer: 'Dat is mogelijk. Na 12 maanden lease bieden we een koopoptie aan tegen een gereduceerde prijs. Neem contact op voor de actuele voorwaarden.',
                  },
                ].map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="cta-banner" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-inner">
              <h2 id="cta-heading">
                Klaar om online te gaan?
              </h2>
              <p>
                Vraag vandaag gratis en vrijblijvend een offerte aan. Wij nemen binnen 1 werkdag contact met je op en geven je een eerlijk beeld van wat we voor jouw bedrijf kunnen doen.
              </p>
              <div className="cta-actions">
                <a href="#contact" className="btn-primary">
                  Gratis offerte aanvragen <IconArrow />
                </a>
                <a href="tel:0850806338" className="btn-secondary">
                  <IconPhone />
                  Bel ons direct
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <span className="section-tag">Contact</span>
                <h2 id="contact-heading">
                  Laten we kennismaken
                </h2>
                <p>
                  Vertel ons over jouw bedrijf en wij laten je zien wat er mogelijk is. Geen verkooppraatje — gewoon een eerlijk gesprek over wat jij nodig hebt.
                </p>
                <div className="contact-methods">
                  <a href="tel:0850806338" className="contact-method">
                    <div className="contact-method-icon"><IconPhone /></div>
                    <div>
                      <div className="contact-method-label">Telefoon</div>
                      <div className="contact-method-value">085-080 63 38</div>
                    </div>
                  </a>
                  <a href="mailto:info@lease-een-website.nl" className="contact-method">
                    <div className="contact-method-icon"><IconMail /></div>
                    <div>
                      <div className="contact-method-label">E-mail</div>
                      <div className="contact-method-value">info@lease-een-website.nl</div>
                    </div>
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <Logo />
              <p>
                Wij bouwen, hosten en onderhouden jouw professionele website. Altijd online, altijd up-to-date — voor een vast maandbedrag.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <p className="footer-col-title">Navigatie</p>
                <ul className="footer-col-list" role="list">
                  <li><a href="#hoe-het-werkt">Hoe het werkt</a></li>
                  <li><a href="#wat-je-krijgt">Wat je krijgt</a></li>
                  <li><a href="#prijzen">Prijzen</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="footer-col-title">Diensten</p>
                <ul className="footer-col-list" role="list">
                  <li><a href="#prijzen">Starter pakket</a></li>
                  <li><a href="#prijzen">Business pakket</a></li>
                  <li><a href="#prijzen">Pro pakket</a></li>
                  <li><a href="/google-ads">Google Ads beheer</a></li>
                </ul>
              </div>
              <div>
                <p className="footer-col-title">Contact</p>
                <ul className="footer-col-list" role="list">
                  <li><a href="tel:0850806338">085-080 63 38</a></li>
                  <li><a href="mailto:info@lease-een-website.nl">info@lease-een-website.nl</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Lease een Website. Alle rechten voorbehouden.
            </p>
            <nav className="footer-legal" aria-label="Juridisch">
              <a href="/privacy">Privacybeleid</a>
              <a href="/algemene-voorwaarden">Algemene voorwaarden</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
