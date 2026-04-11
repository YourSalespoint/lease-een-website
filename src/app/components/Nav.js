'use client';

import { useState, useEffect } from 'react';

// ── LOGO ───────────────────────────────────────────────────────────────────
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
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(4, ${cellSize}px)`,
      gridTemplateRows: `repeat(4, ${cellSize}px)`,
      gap: `${gap}px`,
      flexShrink: 0,
    }}>
      {LOGO_FRAMES[frame].map((color, i) => (
        <div key={i} style={{
          background: color,
          borderRadius: `${radius}px`,
          width: cellSize,
          height: cellSize,
          transition: 'background 0.6s ease',
        }} />
      ))}
    </div>
  );
}

function Logo() {
  return (
    <a href="/" className="logo-wrap" aria-label="Lease een Website – naar homepage">
      <LogoMark />
      <div className="logo-text-wrap">
        <span className="logo-top">Lease een</span>
        <span className="logo-main">Website</span>
        <div className="logo-underline" />
      </div>
    </a>
  );
}

// ── NAV ITEMS ──────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Hoe het werkt', href: '/#hoe-het-werkt' },
  { label: 'Wat je krijgt', href: '/#wat-je-krijgt' },
  { label: 'Prijzen',       href: '/#prijzen' },
  { label: 'Portfolio',     href: '/portfolio' },
  { label: 'Google Ads',   href: '/google-ads' },
  { label: 'FAQ',           href: '/#faq' },
];

// ── NAV COMPONENT ──────────────────────────────────────────────────────────
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Hoofdnavigatie">
        <div className="container">
          <div className="nav-inner">
            <Logo />
            <ul className="nav-links" role="list">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="/#contact" className="nav-cta">Start je aanvraag</a>
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

      <nav className={`nav-drawer${mobileOpen ? ' open' : ''}`} aria-label="Mobiel menu">
        <button
          style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', fontSize: '1.5rem' }}
          onClick={() => setMobileOpen(false)}
          aria-label="Menu sluiten"
        >
          ✕
        </button>
        {NAV_ITEMS.map(item => (
          <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>
        ))}
        <a href="/#contact" onClick={() => setMobileOpen(false)} style={{ color: 'var(--blue-light)', fontWeight: 700 }}>
          Start je aanvraag →
        </a>
      </nav>
    </>
  );
}
