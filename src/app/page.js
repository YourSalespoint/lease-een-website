'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Nav from './components/Nav';

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
  const router = useRouter();
  const [form, setForm] = useState({ naam: '', bedrijf: '', email: '', telefoon: '', pakket: '', bericht: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | error
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
      router.push('/bedankt');
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ── NAV ── */}
      <Nav />

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

        {/* ── PORTFOLIO TEASER ── */}
        <section className="port-teaser" aria-labelledby="portfolio-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Portfolio</span>
              <h2 id="portfolio-heading" className="section-title">
                Websites voor elke <span className="highlight">branche</span>
              </h2>
              <p className="section-sub">
                Van loodgieter tot tandarts — wij bouwen voor elke branche een professionele website die werkt en converteert.
              </p>
            </div>
            <div className="port-teaser-grid">

              {/* Loodgieter */}
              <div className="pt-card">
                <div className="pt-browser">
                  <div className="pt-browser-dots"><span/><span/><span/></div>
                  <div className="pt-browser-bar">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    lease-een-website.nl › Loodgieter
                  </div>
                </div>
                <div className="pt-preview" style={{ background: '#1e3a5f' }}>
                  <div style={{ background: '#1e3a5f', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <div style={{ width: 22, height: 22, borderRadius: 4, background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                      </div>
                      <span style={{ color: 'white', fontSize: 11, fontWeight: 700 }}>De Loodgieter</span>
                    </div>
                    <div style={{ background: '#3b82f6', borderRadius: 4, padding: '3px 8px', fontSize: 9, color: 'white', fontWeight: 600 }}>Bel ons</div>
                  </div>
                  <div style={{ flex: 1, padding: '16px 14px', background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ color: '#93c5fd', fontSize: 9, fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>Lekkage? Direct hulp</div>
                    <div style={{ color: 'white', fontSize: 15, fontWeight: 800, lineHeight: 1.2, marginBottom: 8 }}>24/7 loodgieter<br/>in uw regio</div>
                    <div style={{ background: '#3b82f6', borderRadius: 5, padding: '5px 12px', fontSize: 9, color: 'white', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4, width: 'fit-content' }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      Direct bellen
                    </div>
                  </div>
                </div>
                <div className="pt-meta">
                  <div className="pt-meta-branch">Loodgieter</div>
                  <div className="pt-meta-desc">Professioneel, 24/7 uitstraling</div>
                </div>
              </div>

              {/* Restaurant */}
              <div className="pt-card">
                <div className="pt-browser">
                  <div className="pt-browser-dots"><span/><span/><span/></div>
                  <div className="pt-browser-bar">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    lease-een-website.nl › Restaurant
                  </div>
                </div>
                <div className="pt-preview" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://picsum.photos/seed/restaurant-food/400/220)', backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.7) 100%)' }}/>
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    <span style={{ color: 'white', fontSize: 11, fontWeight: 700, letterSpacing: 1, fontStyle: 'italic' }}>La Cucina</span>
                    <div style={{ background: '#d97706', borderRadius: 4, padding: '3px 8px', fontSize: 9, color: 'white', fontWeight: 600 }}>Reserveer</div>
                  </div>
                  <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '14px' }}>
                    <div style={{ color: '#fcd34d', fontSize: 9, fontWeight: 600, marginBottom: 4, letterSpacing: 1, textTransform: 'uppercase' }}>Italiaans restaurant</div>
                    <div style={{ color: 'white', fontSize: 14, fontWeight: 800, lineHeight: 1.2, marginBottom: 8 }}>Authentieke smaken,<br/>elke avond open</div>
                    <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', borderRadius: 5, padding: '4px 10px', fontSize: 9, color: 'white', fontWeight: 600, display: 'inline-flex', gap: 4, width: 'fit-content', border: '1px solid rgba(255,255,255,0.3)' }}>
                      Bekijk menu
                    </div>
                  </div>
                </div>
                <div className="pt-meta">
                  <div className="pt-meta-branch">Restaurant</div>
                  <div className="pt-meta-desc">Sfeervolle uitstraling met foto-achtergrond</div>
                </div>
              </div>

              {/* Kapsalon */}
              <div className="pt-card">
                <div className="pt-browser">
                  <div className="pt-browser-dots"><span/><span/><span/></div>
                  <div className="pt-browser-bar">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    lease-een-website.nl › Kapsalon
                  </div>
                </div>
                <div className="pt-preview" style={{ background: '#fdf2f8' }}>
                  <div style={{ background: '#fff', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #fce7f3' }}>
                    <span style={{ color: '#9d174d', fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' }}>Studio Rose</span>
                    <div style={{ background: '#ec4899', borderRadius: 4, padding: '3px 8px', fontSize: 9, color: 'white', fontWeight: 600 }}>Boek nu</div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1, overflow: 'hidden' }}>
                    <div style={{ backgroundImage: 'url(https://picsum.photos/seed/kapsalon-hair/200/160)', backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                    <div style={{ padding: '14px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff' }}>
                      <div style={{ color: '#ec4899', fontSize: 9, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>Kapsalon</div>
                      <div style={{ color: '#1f2937', fontSize: 12, fontWeight: 800, lineHeight: 1.3, marginBottom: 8 }}>Jouw haar,<br/>onze passie</div>
                      <div style={{ color: '#6b7280', fontSize: 9, marginBottom: 8, lineHeight: 1.4 }}>Knippen · Kleuren<br/>Treatments</div>
                      <div style={{ background: '#fce7f3', borderRadius: 4, padding: '4px 8px', fontSize: 9, color: '#9d174d', fontWeight: 700, display: 'inline-flex', width: 'fit-content' }}>
                        Afspraak
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-meta">
                  <div className="pt-meta-branch">Kapsalon</div>
                  <div className="pt-meta-desc">Elegant met split-layout en foto</div>
                </div>
              </div>

            </div>
            <div className="port-teaser-cta">
              <a href="/portfolio" className="btn-primary">
                Bekijk alle 16 voorbeelden
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
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
                  <li><a href="/portfolio">Portfolio</a></li>
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
                  <li><a href="/portfolio">Voorbeelden bekijken</a></li>
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

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/31850806338"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="App via WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
