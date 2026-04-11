'use client';

import Link from 'next/link';

export default function BedanktPage() {
  return (
    <>
      <style>{`
        .bedankt-wrap {
          min-height: 100vh;
          background: var(--bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          text-align: center;
        }

        .bedankt-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: var(--bg-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          border: 2px solid rgba(107, 63, 255, 0.2);
        }

        .bedankt-title {
          font-family: var(--font-head);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          color: var(--text);
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .bedankt-title span {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bedankt-sub {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 520px;
          margin: 0 auto 48px;
          line-height: 1.65;
        }

        .bedankt-steps {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 36px 40px;
          max-width: 560px;
          width: 100%;
          margin: 0 auto 48px;
          text-align: left;
        }

        .bedankt-steps-title {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          opacity: 0.6;
        }

        .bedankt-step {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .bedankt-step:last-child {
          margin-bottom: 0;
        }

        .bedankt-step-num {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1.5px solid rgba(107, 63, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-head);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--blue);
        }

        .bedankt-step-text strong {
          display: block;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 2px;
          font-size: 0.95rem;
        }

        .bedankt-step-text span {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .bedankt-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (max-width: 600px) {
          .bedankt-steps {
            padding: 28px 24px;
          }

          .bedankt-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .bedankt-actions .btn-primary,
          .bedankt-actions .btn-secondary {
            justify-content: center;
          }
        }
      `}</style>

      <div className="bedankt-wrap">
        <div className="bedankt-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--blue)' }} aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        <h1 className="bedankt-title">
          Bedankt voor<br /><span>je aanvraag!</span>
        </h1>

        <p className="bedankt-sub">
          We hebben je bericht ontvangen en nemen binnen 1 werkdag contact met je op om de mogelijkheden te bespreken.
        </p>

        <div className="bedankt-steps">
          <p className="bedankt-steps-title">Wat gebeurt er nu?</p>

          <div className="bedankt-step">
            <div className="bedankt-step-num">1</div>
            <div className="bedankt-step-text">
              <strong>Wij beoordelen je aanvraag</strong>
              <span>We bekijken je wensen en denken alvast na over de beste aanpak voor jouw situatie.</span>
            </div>
          </div>

          <div className="bedankt-step">
            <div className="bedankt-step-num">2</div>
            <div className="bedankt-step-text">
              <strong>Je hoort binnen 1 werkdag van ons</strong>
              <span>We nemen telefonisch of per e-mail contact op voor een vrijblijvend kennismakingsgesprek.</span>
            </div>
          </div>

          <div className="bedankt-step">
            <div className="bedankt-step-num">3</div>
            <div className="bedankt-step-text">
              <strong>Jouw website binnen 5 dagen live</strong>
              <span>Na akkoord op het voorstel gaan we direct aan de slag. Geen verrassingen, vaste prijs.</span>
            </div>
          </div>
        </div>

        <div className="bedankt-actions">
          <Link href="/" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Terug naar home
          </Link>
          <a href="tel:0850806338" className="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 5.68 5.68l1.06-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
            </svg>
            085-080 63 38
          </a>
        </div>
      </div>
    </>
  );
}
