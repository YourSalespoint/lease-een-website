'use client';

import { useState } from 'react';

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

const IconPlus = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconTrending = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// FAQ schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost Google Ads beheer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Onze management fee start vanaf €99 per maand voor het Basis pakket. Dit is exclusief het advertentiebudget dat je direct aan Google betaalt. Je bepaalt zelf hoeveel je aan advertenties uitgeeft.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel is mijn campagne live?',
      acceptedAnswer: { '@type': 'Answer', text: 'Na de intake en het doorgeven van de benodigde informatie is je campagne doorgaans binnen 1 week live. We starten direct met een strategiegesprek en zoekwoordenonderzoek.' },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen de management fee en het advertentiebudget?',
      acceptedAnswer: { '@type': 'Answer', text: 'De management fee is wat je ons betaalt voor het beheren, optimaliseren en rapporteren van je campagnes. Het advertentiebudget betaal je rechtstreeks aan Google en bepaal je zelf op basis van wat je wilt investeren.' },
    },
    {
      '@type': 'Question',
      name: 'Werkt Google Ads voor elk type bedrijf?',
      acceptedAnswer: { '@type': 'Answer', text: 'Google Ads werkt voor vrijwel elk bedrijf dat online gevonden wil worden. Het is vooral effectief voor lokale dienstverleners, webshops en bedrijven die actief op zoek zijn naar nieuwe klanten. We geven altijd eerlijk advies of Google Ads zinvol is voor jouw situatie.' },
    },
    {
      '@type': 'Question',
      name: 'Kan ik Google Ads combineren met een websitelease?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, en dat is zelfs de ideale combinatie. Je website is dan al geoptimaliseerd voor conversie en laadsnelheid, wat direct bijdraagt aan betere advertentieresultaten. Combinatieklanten ontvangen een korting op de management fee.' },
    },
    {
      '@type': 'Question',
      name: 'Ontvang ik rapportages over de resultaten?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, je ontvangt maandelijks een duidelijke rapportage met de belangrijkste cijfers: vertoningen, klikken, conversies, kosten per lead en aanbevelingen voor de volgende maand.' },
    },
  ],
};

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-icon"><IconPlus /></span>
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
}

export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main style={{ paddingTop: 100 }}>

        {/* ── HERO ── */}
        <section className="hero" style={{ paddingTop: 80 }} aria-labelledby="ga-heading">
          <div className="hero-bg">
            <div className="hero-bg-blob hero-bg-blob--blue" />
            <div className="hero-bg-blob hero-bg-blob--teal" />
          </div>
          <div className="container">
            <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
              <div className="hero-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
                <span className="hero-badge-dot" />
                Google Ads campagnebeheer door specialisten
              </div>
              <h1 id="ga-heading" style={{ marginBottom: 24 }}>
                Meer klanten via<br />
                <span className="gradient-text">Google Ads</span>
              </h1>
              <p className="hero-sub" style={{ maxWidth: 580, margin: '0 auto 40px' }}>
                Wij beheren jouw Google Ads campagnes van A tot Z. Geen klikken verspillen, maar rendement maximaliseren. Betaalbare management fee, jij bepaalt je advertentiebudget.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'center' }}>
                <a href="/#contact" className="btn-primary">
                  Vraag gratis advies aan <IconArrow />
                </a>
                <a href="tel:0850806338" className="btn-secondary">
                  <IconPhone />
                  085-080 63 38
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WAAROM GOOGLE ADS ── */}
        <section aria-labelledby="waarom-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Waarom Google Ads</span>
              <h2 id="waarom-heading" className="section-title">
                Direct bovenaan Google,<br />
                <span className="gradient-text">direct meer aanvragen</span>
              </h2>
              <p className="section-sub">
                SEO kost maanden. Google Ads levert resultaat binnen dagen. Ideaal als je snel wilt groeien of direct meer klanten wilt bereiken.
              </p>
            </div>
            <div className="voordelen-grid">
              {[
                {
                  icon: <IconZap />,
                  title: 'Direct zichtbaar',
                  text: 'Terwijl concurrenten wachten op organische posities, sta jij al bovenaan. Campagne live binnen 1 week na intake.',
                },
                {
                  icon: <IconTarget />,
                  title: 'Precies de juiste doelgroep',
                  text: 'Adverteer op specifieke zoekwoorden, locaties en tijdstippen. Jouw advertentie verschijnt alleen voor mensen die nu op zoek zijn naar wat jij aanbiedt.',
                },
                {
                  icon: <IconTrending />,
                  title: 'Meetbaar rendement',
                  text: 'Elke euro die je investeert is traceerbaar. We meten kosten per klik, kosten per lead en optimaliseren continu op wat werkt.',
                },
                {
                  icon: <IconChart />,
                  title: 'Maandelijkse optimalisatie',
                  text: 'Google Ads is geen eenmalige instelling. Wij analyseren elke maand de resultaten en sturen bij om steeds beter te presteren.',
                },
                {
                  icon: <IconShield />,
                  title: 'Geen budget verspild',
                  text: 'Slechte zoekwoorden en irrelevante klikken kosten geld. Wij zorgen voor negatieve zoekwoordenlijsten en gerichte campagnestructuren.',
                },
                {
                  icon: <IconUsers />,
                  title: 'Persoonlijk beheer',
                  text: 'Geen accountmanager die je doorverbindt. Je werkt direct samen met de specialist die jouw campagne beheert en kent.',
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

        {/* ── PAKKETTEN ── */}
        <section id="pakketten" aria-labelledby="pakketten-heading" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Pakketten</span>
              <h2 id="pakketten-heading" className="section-title">
                Transparante tarieven,<br />
                <span className="gradient-text">geen verborgen kosten</span>
              </h2>
              <p className="section-sub">
                Alleen management fee — het advertentiebudget betaal je rechtstreeks aan Google. Jij houdt altijd volledige controle over je uitgaven.
              </p>
            </div>
            <div className="pricing-grid">

              {/* Basis */}
              <div className="pricing-card">
                <p className="pricing-plan-name">Basis</p>
                <div className="pricing-price">
                  <span className="pricing-price-currency">€</span>
                  <span className="pricing-price-amount">99</span>
                  <span className="pricing-price-period">/maand</span>
                </div>
                <p className="pricing-tagline">Voor starters en lokale ondernemers die willen groeien met een beperkt budget.</p>
                <div className="pricing-divider" />
                <ul className="pricing-features" aria-label="Functies Basis">
                  {[
                    '1 campagne',
                    'Tot 3 advertentiegroepen',
                    'Zoekwoordenonderzoek',
                    'Max. advertentiebudget €250/mnd',
                    'Maandelijkse rapportage',
                    'Conversietracking instellen',
                    'Negatieve zoekwoorden',
                  ].map(f => (
                    <li key={f} className="pricing-feature"><IconCheck />{f}</li>
                  ))}
                </ul>
                <a href="/#contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Kies Basis
                </a>
              </div>

              {/* Plus — featured */}
              <div className="pricing-card pricing-card--featured">
                <div className="pricing-badge">Meest gekozen</div>
                <p className="pricing-plan-name">Plus</p>
                <div className="pricing-price">
                  <span className="pricing-price-currency">€</span>
                  <span className="pricing-price-amount">149</span>
                  <span className="pricing-price-period">/maand</span>
                </div>
                <p className="pricing-tagline">Voor groeiende bedrijven die meerdere campagnes willen inzetten.</p>
                <div className="pricing-divider" />
                <ul className="pricing-features" aria-label="Functies Plus">
                  {[
                    'Alles uit Basis',
                    '2 campagnes',
                    'Tot 6 advertentiegroepen',
                    'Max. advertentiebudget €500/mnd',
                    'A/B-testen van advertenties',
                    'Remarketingcampagne',
                    'Landingspagina advies',
                  ].map(f => (
                    <li key={f} className="pricing-feature"><IconCheck />{f}</li>
                  ))}
                </ul>
                <a href="/#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Kies Plus <IconArrow />
                </a>
              </div>

              {/* Pro */}
              <div className="pricing-card">
                <p className="pricing-plan-name">Pro</p>
                <div className="pricing-price">
                  <span className="pricing-price-currency">€</span>
                  <span className="pricing-price-amount">199</span>
                  <span className="pricing-price-period">/maand</span>
                </div>
                <p className="pricing-tagline">Voor bedrijven die maximale online zichtbaarheid willen via Search, Display en Shopping.</p>
                <div className="pricing-divider" />
                <ul className="pricing-features" aria-label="Functies Pro">
                  {[
                    'Alles uit Plus',
                    '4 campagnes',
                    'Tot 12 advertentiegroepen',
                    'Max. advertentiebudget €1.000/mnd',
                    'Shopping & Display campagnes',
                    'Performance Max campagne',
                    'Maandelijks strategiegesprek',
                  ].map(f => (
                    <li key={f} className="pricing-feature"><IconCheck />{f}</li>
                  ))}
                </ul>
                <a href="/#contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Kies Pro
                </a>
              </div>

            </div>
            <p className="pricing-note">
              Alle bedragen excl. BTW. Het advertentiebudget betaal je direct aan Google — dit staat los van onze fee.{' '}
              Groter budget nodig? <a href="/#contact">Vraag een maatwerkofferte aan.</a>
            </p>
          </div>
        </section>

        {/* ── COMBINATIE KORTING ── */}
        <section aria-labelledby="combi-heading">
          <div className="container">
            <div className="cta-inner" style={{ textAlign: 'center' }}>
              <span className="section-tag" style={{ display: 'inline-block', marginBottom: 16 }}>Combinatievoordeel</span>
              <h2 id="combi-heading" style={{ marginBottom: 16 }}>
                Website leasen <span className="gradient-text">+ Google Ads</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
                Combineer een websitelease met Google Ads beheer en ontvang een korting op je management fee. Jouw website is al geoptimaliseerd voor snelheid en conversie — de perfecte basis voor succesvolle advertenties.
              </p>
              <div className="cta-actions" style={{ justifyContent: 'center' }}>
                <a href="/#contact" className="btn-primary">
                  Vraag combinatieofferte aan <IconArrow />
                </a>
                <a href="/" className="btn-secondary">
                  Bekijk websitepakketten
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq-section" id="faq" aria-labelledby="faq-heading" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <div className="faq-grid">
              <div className="faq-sidebar">
                <span className="section-tag">FAQ</span>
                <h2 id="faq-heading">
                  Veelgestelde<br />
                  <span className="gradient-text">vragen</span>
                </h2>
                <p>
                  Staat jouw vraag er niet bij? Neem gerust contact op — we geven altijd eerlijk antwoord.
                </p>
                <a href="/#contact" className="btn-primary">
                  Stel je vraag <IconArrow />
                </a>
              </div>
              <div className="faq-list">
                {faqSchema.mainEntity.map((item) => (
                  <FaqItem key={item.name} question={item.name} answer={item.acceptedAnswer.text} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-banner" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-inner">
              <h2 id="cta-heading">Klaar om meer klanten te bereiken?</h2>
              <p>
                Vraag vandaag een gratis adviesgesprek aan. We analyseren jouw situatie en geven eerlijk advies over wat Google Ads voor jouw bedrijf kan opleveren.
              </p>
              <div className="cta-actions">
                <a href="/#contact" className="btn-primary">
                  Gratis adviesgesprek aanvragen <IconArrow />
                </a>
                <a href="tel:0850806338" className="btn-secondary">
                  <IconPhone />
                  085-080 63 38
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom" style={{ justifyContent: 'center' }}>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Lease een Website &mdash;{' '}
              <a href="/" style={{ color: 'var(--blue-light)' }}>Terug naar home</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
