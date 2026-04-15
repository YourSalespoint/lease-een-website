'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../portfolio-styles.css';
import Nav, { Logo } from '../components/Nav';

// ── FILTER DATA ──────────────────────────────────────────────────────────────
const FILTERS = [
  { label: 'Alle branches', key: 'all' },
  { label: 'Zorg & Wellness', key: 'zorg' },
  { label: 'Bouw & Technisch', key: 'technisch' },
  { label: 'Lifestyle', key: 'lifestyle' },
  { label: 'Zakelijk', key: 'zakelijk' },
  { label: 'Horeca & Overig', key: 'overig' },
];

// ── MINI SITE PREVIEW COMPONENTS ─────────────────────────────────────────────

function PreviewLoodgieter() {
  return (
    <div className="ms ms-loodgieter">
      <div className="ms-nav">
        <div className="ms-logo">
          <div className="ms-logo-icon"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 8v4l3 3"/></svg></div>
          <span className="ms-logo-name">v/d Berg</span>
        </div>
        <span className="ms-btn ms-btn-cta">Bel 24/7</span>
      </div>
      <div className="ms-strip">
        <span className="ms-strip-item">✔ 24/7 Spoed</span>
        <span className="ms-strip-item">✔ Binnen 1 uur</span>
        <span className="ms-strip-item">✔ Vast tarief</span>
      </div>
      <div className="ms-hero">
        <div className="ms-badge">Spoedservice beschikbaar</div>
        <div className="ms-h1">Lekkage? <em>Wij lossen het op.</em></div>
        <div className="ms-sub">Erkend loodgietersbedrijf. Dag en nacht bereikbaar voor spoedreparaties.</div>
        <div className="ms-btns">
          <span className="ms-btn ms-btn-p">Bel direct</span>
          <span className="ms-btn ms-btn-s">Offerte aanvragen</span>
        </div>
      </div>
    </div>
  );
}

function PreviewVerloskundige() {
  return (
    <div className="ms ms-verloskundige">
      <div className="ms-nav">
        <span className="ms-logo-name">Praktijk Bloom</span>
        <span className="ms-btn ms-btn-cta">Afspraak maken</span>
      </div>
      <div className="ms-hero">
        <div>
          <div className="ms-tag">Verloskundige</div>
          <div className="ms-h1">Persoonlijke begeleiding bij jouw zwangerschap</div>
          <div className="ms-sub">Warme en deskundige zorg, van eerste consult tot na de bevalling.</div>
          <span className="ms-btn ms-btn-p">Plan een kennismaking</span>
        </div>
        <img className="ms-photo ms-verloskundige" src="https://picsum.photos/seed/bloom88/180/240" alt="" loading="lazy" style={{width:86,height:118,borderRadius:'50px 50px 40px 40px'}} />
      </div>
    </div>
  );
}

function PreviewAannemer() {
  return (
    <div className="ms ms-aannemer" style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className="ms-nav">
        <div className="ms-logo"><div className="ms-logo-box" /><span className="ms-logo-name">Dekker Bouw</span></div>
        <span className="ms-btn ms-btn-cta">Offerte</span>
      </div>
      <div className="ms-fullbg" style={{flex:1}}>
        <div className="ms-fullbg-img" style={{backgroundImage:"url('https://picsum.photos/seed/construct77/400/200')"}} />
        <div className="ms-fullbg-overlay" />
        <div className="ms-fullbg-content">
          <div className="ms-kader"><div className="ms-h1">Wij bouwen <em>wat jij</em> voor ogen hebt</div></div>
          <div className="ms-sub">Aannemer regio Rotterdam. Van renovatie tot nieuwbouw.</div>
          <div className="ms-btns">
            <span className="ms-btn ms-btn-p">Gratis offerte</span>
            <span className="ms-btn ms-btn-s">Bekijk projecten</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewTandarts() {
  return (
    <div className="ms ms-tandarts">
      <div className="ms-nav">
        <div className="ms-logo"><div className="ms-logo-circle" /><span className="ms-logo-name">Tandarts Smit</span></div>
        <span className="ms-btn ms-btn-cta">Afspraak</span>
      </div>
      <div className="ms-hero">
        <div>
          <div className="ms-score"><span className="ms-score-num">9,2</span><span className="ms-score-txt">patiënttevredenheid</span></div>
          <div className="ms-h1">Een gezond gebit begint bij <em>Tandarts Smit</em></div>
          <div className="ms-sub">Moderne tandartspraktijk. Nieuwe patiënten welkom.</div>
          <span className="ms-btn ms-btn-p">Maak een afspraak</span>
        </div>
        <img className="ms-photo" src="https://picsum.photos/seed/dental44/150/200" alt="" loading="lazy" style={{width:74,height:100,borderRadius:12}} />
      </div>
    </div>
  );
}

function PreviewKapsalon() {
  return (
    <div className="ms ms-kapsalon" style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className="ms-nav">
        <span className="ms-logo-name">Rosa</span>
        <span className="ms-btn ms-btn-cta">Reserveren</span>
      </div>
      <div className="ms-fullbg" style={{flex:1}}>
        <div className="ms-fullbg-img" style={{backgroundImage:"url('https://picsum.photos/seed/salon55/400/220')"}} />
        <div className="ms-fullbg-overlay" />
        <div className="ms-fullbg-bottom">
          <div className="ms-divider"><div className="ms-divider-line"/><span className="ms-divider-txt">Haarmode & Styling</span><div className="ms-divider-line"/></div>
          <div className="ms-h1">Waar stijl ontmoet vakmanschap</div>
          <div className="ms-row">
            <span className="ms-btn ms-btn-p">Boek behandeling</span>
            <div className="ms-price-item"><span>Knippen</span><strong>v.a. €45</strong></div>
            <div className="ms-price-item"><span>Kleuren</span><strong>v.a. €80</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewFysio() {
  return (
    <div className="ms ms-fysio">
      <div className="ms-nav">
        <div className="ms-logo">
          <div className="ms-logo-cross"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg></div>
          <span className="ms-logo-name">FysioPlus</span>
        </div>
        <span className="ms-btn ms-btn-cta">Afspraak</span>
      </div>
      <div className="ms-hero">
        <div>
          <div className="ms-pill"><div className="ms-pill-dot"/><span className="ms-pill-txt">Direct terecht</span></div>
          <div className="ms-h1">Beweeg beter, <em>voel je beter</em></div>
          <div className="ms-sub">Fysiotherapie. Sportblessures, rug- en nekklachten.</div>
          <div className="ms-btns">
            <span className="ms-btn ms-btn-p">Plan afspraak</span>
            <span className="ms-btn ms-btn-s">Meer info</span>
          </div>
        </div>
        <img className="ms-photo" src="https://picsum.photos/seed/physio33/150/200" alt="" loading="lazy" style={{width:74,height:100,borderRadius:'40px 40px 30px 30px'}} />
      </div>
    </div>
  );
}

function PreviewHovenier() {
  return (
    <div className="ms ms-hovenier" style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className="ms-nav">
        <div className="ms-logo"><div className="ms-logo-leaf"/><span className="ms-logo-name">Groen Hoveniers</span></div>
        <span className="ms-btn ms-btn-cta">Offerte</span>
      </div>
      <div className="ms-fullbg" style={{flex:1}}>
        <div className="ms-fullbg-img" style={{backgroundImage:"url('https://picsum.photos/seed/garden22/400/200')"}} />
        <div className="ms-fullbg-overlay" />
        <div className="ms-fullbg-content">
          <div className="ms-season">Voorjaarssnoei — nu inplannen</div>
          <div className="ms-h1">Jouw tuin in <em>perfecte staat</em></div>
          <div className="ms-sub">Vakkundige hoveniers. Ontwerp, aanleg en onderhoud.</div>
          <div className="ms-btns">
            <span className="ms-btn ms-btn-p">Gratis offerte</span>
            <span className="ms-btn ms-btn-s">Tuinontwerp</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewBeauty() {
  return (
    <div className="ms ms-beauty">
      <div className="ms-nav">
        <span className="ms-logo-name">Noor<span className="ms-logo-dot"/></span>
        <span className="ms-btn ms-btn-cta">Boeken</span>
      </div>
      <div className="ms-hero">
        <div className="ms-label">Beauty Studio · Amsterdam</div>
        <div className="ms-h1">Jouw schoonheid, <em>onze passie</em></div>
        <div className="ms-sub">Gezichtsbehandelingen, lashes en meer. Op afspraak.</div>
        <span className="ms-btn ms-btn-p">Behandeling boeken</span>
        <div className="ms-treats">
          {['Gezicht','Lashes','Waxen','Nagels'].map(t => (
            <div key={t} className="ms-treat"><div className="ms-treat-icon"/><div className="ms-treat-name">{t}</div></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewAdvocaat() {
  return (
    <div className="ms ms-advocaat" style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className="ms-topbar">
        <span className="ms-topbar-txt">AMSTERDAM — ROTTERDAM — DEN HAAG</span>
        <span className="ms-topbar-num">020 - 555 12 34</span>
      </div>
      <div className="ms-nav">
        <div className="ms-logo-wrap"><span className="ms-logo-name">Van Dijk & Partners</span><span className="ms-logo-sub">Advocaten & Notarissen</span></div>
        <span className="ms-btn ms-btn-cta">Adviesgesprek</span>
      </div>
      <div className="ms-body">
        <div className="ms-left">
          <div className="ms-eyebrow">Juridisch advies op maat</div>
          <div className="ms-h1">Uw belangen, vakkundig verdedigd</div>
          <div className="ms-rule"/>
          <div className="ms-exp-label">Expertisegebieden</div>
          <ul className="ms-exp-list">
            <li>Arbeidsrecht</li>
            <li>Ondernemingsrecht</li>
            <li>Familierecht</li>
            <li>Vastgoed & Huur</li>
          </ul>
        </div>
        <div className="ms-right">
          <div className="ms-stat"><span className="ms-stat-num">28</span><span className="ms-stat-lbl">jaar ervaring</span></div>
          <div className="ms-stat-div"/>
          <div className="ms-stat"><span className="ms-stat-num">94%</span><span className="ms-stat-lbl">succesvol</span></div>
          <div className="ms-stat-div"/>
          <div className="ms-stat"><span className="ms-stat-num">1.2k</span><span className="ms-stat-lbl">zaken</span></div>
        </div>
      </div>
    </div>
  );
}

function PreviewRestaurant() {
  return (
    <div className="ms ms-restaurant" style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className="ms-nav">
        <span className="ms-logo-name">Osteria <span className="ms-logo-dot">•</span> Bella</span>
        <div className="ms-nav-links">
          <span className="ms-nav-link active">Menu</span>
          <span className="ms-nav-link">Reserveren</span>
        </div>
      </div>
      <div className="ms-fullbg" style={{flex:1}}>
        <div className="ms-fullbg-img" style={{backgroundImage:"url('https://picsum.photos/seed/food66/400/220')"}} />
        <div className="ms-fullbg-overlay" />
        <div className="ms-fullbg-bottom">
          <div className="ms-open"><div className="ms-open-dot"/><span className="ms-open-txt">Nu open · sluit 22:00</span></div>
          <div className="ms-h1">Italiaanse keuken, bereid met liefde</div>
          <div className="ms-menu-row">
            <div className="ms-dish"><div className="ms-dish-name">Tagliatelle al tartufo</div><div className="ms-dish-price">€ 18,50</div></div>
            <div className="ms-dish"><div className="ms-dish-name">Branzino alla griglia</div><div className="ms-dish-price">€ 24,00</div></div>
            <div className="ms-dish"><div className="ms-dish-name">Tiramisù della casa</div><div className="ms-dish-price">€ 7,50</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewGarage() {
  return (
    <div className="ms ms-garage" style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className="ms-nav">
        <div className="ms-logo"><div className="ms-logo-plate">NL</div><span className="ms-logo-name">Garage Visser</span></div>
        <span className="ms-btn ms-btn-cta">Afspraak</span>
      </div>
      <div className="ms-content">
        <div className="ms-diag"/><div className="ms-diag2"/>
        <div className="ms-badge">APK-station erkend</div>
        <div className="ms-h1">Jouw auto in vakkundige handen</div>
        <div className="ms-services">
          {[['01','APK-keuring','€ 59'],['02','Grote beurt','v.a. € 149'],['03','Banden wisselen','€ 15/st'],['04','Airco service','€ 79']].map(([n,nm,p]) => (
            <div key={n} className="ms-svc-row"><span className="ms-svc-num">{n}</span><span className="ms-svc-name">{nm}</span><div className="ms-svc-bar"/><span className="ms-svc-price">{p}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewMakelaar() {
  return (
    <div className="ms ms-makelaar">
      <div className="ms-nav">
        <div className="ms-logo"><div className="ms-logo-sq"/><span className="ms-logo-name">Hoekstra Makelaars</span></div>
        <span className="ms-btn ms-btn-cta">Waardebepaling</span>
      </div>
      <div className="ms-hero">
        <div className="ms-h1">Vind jouw droomwoning in Utrecht</div>
        <div className="ms-search">
          <svg className="ms-search-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span className="ms-search-txt">Stad, wijk of postcode...</span>
          <span className="ms-search-btn">Zoeken</span>
        </div>
      </div>
      <div className="ms-props">
        <div className="ms-prop">
          <div className="ms-prop-img" style={{backgroundImage:"url('https://picsum.photos/seed/house11/200/80')"}}><span className="ms-prop-price">€ 425.000</span></div>
          <div className="ms-prop-info"><div className="ms-prop-name">Meidoornstraat 14</div><div className="ms-prop-sub">Utrecht · 98m² · 4 kamers</div></div>
        </div>
        <div className="ms-prop">
          <div className="ms-prop-img" style={{backgroundImage:"url('https://picsum.photos/seed/house22/200/80')"}}><span className="ms-prop-price">€ 319.500</span></div>
          <div className="ms-prop-info"><div className="ms-prop-name">Eikenlaan 7B</div><div className="ms-prop-sub">Nieuwegein · 74m²</div></div>
        </div>
      </div>
    </div>
  );
}

function PreviewKDV() {
  return (
    <div className="ms ms-kdv">
      <div className="ms-nav">
        <div className="ms-logo">
          <div className="ms-logo-blocks">
            {['#FF6B35','#FFD600','#4CAF50','#2196F3'].map(c => <div key={c} className="ms-block" style={{background:c}}/>)}
          </div>
          <span className="ms-logo-name">Speelzonnetje</span>
        </div>
        <span className="ms-btn ms-btn-cta">Rondleiding</span>
      </div>
      <div className="ms-hero">
        <div className="ms-circle" style={{width:60,height:60,top:-20,right:-15}}/>
        <div className="ms-circle" style={{width:30,height:30,bottom:5,right:40}}/>
        <div className="ms-h1">Een veilige plek om te groeien</div>
        <div className="ms-sub">KDV & BSO voor kinderen van 0 tot 12 jaar. Warme begeleiding.</div>
        <span className="ms-btn" style={{background:'white',color:'#FF6B35',fontSize:'0.55rem',fontWeight:800,padding:'4px 12px',borderRadius:99,display:'inline-block',position:'relative',zIndex:1}}>Plan een rondleiding</span>
      </div>
      <div className="ms-badges">
        {[['#FFF3CC','#B8860B','0–4 jaar'],['#E8F5E9','#2E7D32','BSO'],['#E3F2FD','#1565C0','GGD ✔'],['#FCE4EC','#C62828','5-sterren']].map(([bg,c,l]) => (
          <span key={l} className="ms-badge-item" style={{background:bg,color:c}}>{l}</span>
        ))}
      </div>
    </div>
  );
}

function PreviewElektricien() {
  return (
    <div className="ms ms-elektricien">
      <div className="ms-grid-lines"/><div className="ms-glow"/>
      <div className="ms-nav">
        <div className="ms-logo"><div className="ms-logo-bolt"/><span className="ms-logo-name">Volt & Zo</span></div>
        <span className="ms-btn ms-btn-cta">Offerte</span>
      </div>
      <div className="ms-hero">
        <div className="ms-tag"><div className="ms-tag-line"/><span className="ms-tag-txt">Erkend installateur</span></div>
        <div className="ms-h1">Slimme installaties,<br/><em>direct vakkundig</em></div>
        <div className="ms-svc-grid">
          {['Groepenkast','Zonnepanelen','Laadpaal','Domotica'].map(s => (
            <div key={s} className="ms-svc"><div className="ms-svc-dot"/><span className="ms-svc-name">{s}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewTrainer() {
  return (
    <div className="ms ms-trainer" style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className="ms-nav">
        <div className="ms-logo"><span className="ms-logo-name">PEAK<span className="ms-logo-slash">/</span>FIT</span></div>
        <span className="ms-btn ms-btn-cta">Gratis intake</span>
      </div>
      <div className="ms-body">
        <div className="ms-left">
          <div className="ms-h1">Train harder.<br/><em>Word sterker.</em></div>
          <div className="ms-sub">Personal training. Resultaat gegarandeerd in 12 weken.</div>
          <div className="ms-stats">
            {[['Kracht','85%'],['Conditie','72%'],['Voeding','60%']].map(([l,w]) => (
              <div key={l} className="ms-stat-row"><span className="ms-stat-lbl">{l}</span><div className="ms-bar-wrap"><div className="ms-bar-fill" style={{width:w}}/></div></div>
            ))}
          </div>
        </div>
        <div className="ms-right">
          <div><div className="ms-big-num">340+</div><div className="ms-big-lbl">Klanten</div></div>
          <div className="ms-divider-h"/>
          <div><div className="ms-big-num">12w</div><div className="ms-big-lbl">Resultaat</div></div>
          <div className="ms-divider-h"/>
          <div><div className="ms-big-num">4,9★</div><div className="ms-big-lbl">Score</div></div>
        </div>
      </div>
    </div>
  );
}

function PreviewDierenarts() {
  return (
    <div className="ms ms-dierenarts">
      <div className="ms-nav">
        <div className="ms-logo"><div className="ms-logo-paw">🐾</div><span className="ms-logo-name">Dierenkliniek Puur</span></div>
        <span className="ms-btn ms-btn-cta">Afspraak</span>
      </div>
      <div className="ms-hero">
        <div>
          <div className="ms-open"><div className="ms-open-dot"/><span className="ms-open-txt">Nu open — spoedlijn 24/7</span></div>
          <div className="ms-h1">Liefdevolle zorg voor <em>jouw huisdier</em></div>
          <div className="ms-sub">Dierenartspraktijk voor honden, katten en kleine dieren.</div>
          <span className="ms-btn-p">Maak een afspraak</span>
        </div>
        <img className="ms-photo" src="https://picsum.photos/seed/pets99/170/210" alt="" loading="lazy" style={{width:84,height:104,borderRadius:'50px 50px 16px 16px',objectFit:'cover',objectPosition:'center top'}} />
      </div>
      <div className="ms-pets">
        {['🐕 Honden','🐈 Katten','🐇 Kleine dieren'].map(p => <span key={p} className="ms-pet-pill">{p}</span>)}
      </div>
    </div>
  );
}

// ── CARD DATA ─────────────────────────────────────────────────────────────────
const CARDS = [
  { id: 1,  branch: 'Loodgieter',        category: 'technisch', tag: 'Business',  desc: 'Contactformulier, WhatsApp-knop, Google Ads koppeling en 24/7 spoedmelding.',         Preview: PreviewLoodgieter },
  { id: 2,  branch: 'Verloskundige',     category: 'zorg',      tag: 'Starter',   desc: 'Online afsprakenkalender, patiëntinformatie en kennismakingsformulier.',               Preview: PreviewVerloskundige },
  { id: 3,  branch: 'Aannemer',          category: 'technisch', tag: 'Pro',       desc: 'Projectfoto portfolio, klantreferenties en offerteformulier.',                         Preview: PreviewAannemer },
  { id: 4,  branch: 'Tandarts',          category: 'zorg',      tag: 'Business',  desc: 'Online afspraakplanner, behandelinformatie en patiënttevredenheid score.',             Preview: PreviewTandarts },
  { id: 5,  branch: 'Kapsalon',          category: 'lifestyle', tag: 'Starter',   desc: 'Dienstenoverzicht met prijzen, sfeervolle uitstraling en online reserveringsknop.',    Preview: PreviewKapsalon },
  { id: 6,  branch: 'Fysiotherapeut',    category: 'zorg',      tag: 'Business',  desc: 'Behandelaanbod, vergoedingsinformatie en online afspraakformulier.',                   Preview: PreviewFysio },
  { id: 7,  branch: 'Hovenier',          category: 'technisch', tag: 'Business',  desc: 'Tuinontwerp portfolio, seizoensaanbod en gratis offerteformulier.',                    Preview: PreviewHovenier },
  { id: 8,  branch: 'Schoonheidssalon', category: 'lifestyle', tag: 'Starter',   desc: 'Behandelmenu met prijzen, luxe uitstraling en online boekingsformulier.',              Preview: PreviewBeauty },
  { id: 9,  branch: 'Advocatenkantoor', category: 'zakelijk',  tag: 'Pro',       desc: 'Expertisepagina\'s per rechtsgebied, intakeaanvraag en meerdere vestigingen.',         Preview: PreviewAdvocaat },
  { id: 10, branch: 'Restaurant',        category: 'overig',    tag: 'Business',  desc: 'Digitaal menu, online tafelreservering en koppeling met Google reviews.',             Preview: PreviewRestaurant },
  { id: 11, branch: 'Autogarage',        category: 'technisch', tag: 'Starter',   desc: 'Tariefoverzicht per dienst, online afsprakenplanner en Google reviews.',               Preview: PreviewGarage },
  { id: 12, branch: 'Makelaar',          category: 'zakelijk',  tag: 'Pro',       desc: 'Woningaanbod met zoekfunctie, gratis waardebepaling aanvragen en buurtinformatie.',   Preview: PreviewMakelaar },
  { id: 13, branch: 'Kinderopvang & BSO', category: 'zorg',    tag: 'Starter',   desc: 'Groepsinfo, dagprogramma, rondleidingsaanvraag en koppeling ouderportaal.',            Preview: PreviewKDV },
  { id: 14, branch: 'Elektricien',       category: 'technisch', tag: 'Business',  desc: 'Dienstenoverzicht, gratis offerteformulier en Google reviews koppeling.',             Preview: PreviewElektricien },
  { id: 15, branch: 'Personal Trainer',  category: 'lifestyle', tag: 'Starter',   desc: 'Programma-informatie, voor & na resultaten en gratis intake aanvraag.',               Preview: PreviewTrainer },
  { id: 16, branch: 'Dierenarts',        category: 'zorg',      tag: 'Business',  desc: 'Behandelinformatie, 24/7 spoedlijn en online afspraakformulier.',                     Preview: PreviewDierenarts },
];

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = activeFilter === 'all' ? CARDS : CARDS.filter(c => c.category === activeFilter);

  return (
    <>
      {/* ── NAV ── */}
      <Nav />

      <main>
        {/* ── HERO ── */}
        <section className="port-hero" aria-labelledby="portfolio-heading">
          <div className="port-label">Inspiratie</div>
          <h1 id="portfolio-heading" className="port-h1">
            Websites die <span className="gradient-text">écht werken</span>
          </h1>
          <p className="port-sub">
            Bekijk voorbeelden van websites die wij bouwen voor ondernemers door heel Nederland. Elk ontwerp is afgestemd op de branche en doelgroep.
          </p>
          <div className="port-stats">
            <div className="port-stat"><strong>55+</strong><span>Websites live</span></div>
            <div className="port-stat"><strong>26</strong><span>Branches</span></div>
            <div className="port-stat"><strong>4,9 ★</strong><span>Gemiddelde beoordeling</span></div>
          </div>
        </section>

        {/* ── FILTERS ── */}
        <div className="port-filters" role="group" aria-label="Filter op branche">
          {FILTERS.map(f => (
            <button key={f.key} className={`port-filter-btn${activeFilter === f.key ? ' active' : ''}`} onClick={() => setActiveFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>

        {/* ── GRID ── */}
        <div className="port-grid">
          {filtered.map(card => {
            const { Preview } = card;
            return (
              <div key={card.id} className="port-card">
                <div className="port-browser">
                  <div className="port-browser-bar">
                    <div className="port-browser-dots">
                      <div className="port-browser-dot" />
                      <div className="port-browser-dot" />
                      <div className="port-browser-dot" />
                    </div>
                    <div className="port-browser-url">
                      lease-een-website.nl › <strong>{card.branch}</strong>
                    </div>
                  </div>
                </div>
                <div className="port-preview">
                  <Preview />
                </div>
                <div className="port-meta">
                  <div className="port-tags">
                    <span className="port-tag port-tag-branch">{card.branch}</span>
                    <span className="port-tag port-tag-pakket">{card.tag}</span>
                  </div>
                  <div className="port-card-name">{card.branch}</div>
                  <div className="port-card-desc">{card.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <section className="cta-section" aria-labelledby="portfolio-cta-heading">
          <div className="cta-inner">
            <div className="cta-glow cta-glow--blue" />
            <div className="cta-glow cta-glow--teal" />
            <div className="cta-content">
              <h2 id="portfolio-cta-heading" className="cta-title">
                Jouw bedrijf als<br />
                <span className="gradient-text">volgende in de rij?</span>
              </h2>
              <p className="cta-sub">
                Van loodgieter tot advocatenkantoor — wij bouwen een website die past bij jouw branche, doelgroep en budget.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'center' }}>
                <a href="/#contact" className="btn-primary">
                  Start je aanvraag
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="tel:0850806338" className="btn-secondary" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'telefoon_klik' }); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 5.68 5.68l1.06-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg>
                  085-080 63 38
                </a>
              </div>
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
              <p>Wij bouwen, hosten en onderhouden jouw professionele website. Altijd online, altijd up-to-date — voor een vast maandbedrag.</p>
            </div>
            <div className="footer-links">
              <div>
                <p className="footer-col-title">Navigatie</p>
                <ul className="footer-col-list" role="list">
                  <li><a href="/#hoe-het-werkt">Hoe het werkt</a></li>
                  <li><a href="/#wat-je-krijgt">Wat je krijgt</a></li>
                  <li><a href="/#prijzen">Prijzen</a></li>
                  <li><a href="/portfolio">Inspiratie</a></li>
                  <li><a href="/#contact">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="footer-col-title">Diensten</p>
                <ul className="footer-col-list" role="list">
                  <li><a href="/#prijzen">Starter pakket</a></li>
                  <li><a href="/#prijzen">Business pakket</a></li>
                  <li><a href="/#prijzen">Pro pakket</a></li>
                  <li><a href="/google-ads">Google Ads beheer</a></li>
                </ul>
              </div>
              <div>
                <p className="footer-col-title">Contact</p>
                <ul className="footer-col-list" role="list">
                  <li><a href="tel:0850806338" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'telefoon_klik' }); }}>085-080 63 38</a></li>
                  <li><a href="mailto:info@lease-een-website.nl" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'mail_klik' }); }}>info@lease-een-website.nl</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">&copy; {new Date().getFullYear()} Lease een Website. Alle rechten voorbehouden.</p>
            <nav className="footer-legal" aria-label="Juridisch">
              <a href="/privacy">Privacybeleid</a>
              <a href="/algemene-voorwaarden">Algemene voorwaarden</a>
            </nav>
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/31850806338" className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="App via WhatsApp" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'whatsapp_klik' }); }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
