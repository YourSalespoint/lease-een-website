# GTM & GA4 configuratie — Lease een Website

## Accounts

| | Waarde |
|---|---|
| GTM container | GTM-5CCGHTW9 |
| GTM account ID | 6348959932 |
| GTM container ID | 248901634 |
| GA4 Measurement ID | G-FRFSD9S60D |
| Google account GTM | yoursalespoint@gmail.com |

## GTM-triggers

| Trigger ID | Naam | Type | Event |
|---|---|---|---|
| 4 | Trigger - telefoon_klik | Custom Event | `telefoon_klik` |
| 5 | Trigger - whatsapp_klik | Custom Event | `whatsapp_klik` |
| 6 | Trigger - offerte_aanvraag | Custom Event | `offerte_aanvraag` |

## GTM-tags

| Tag ID | Naam | Type | Trigger |
|---|---|---|---|
| 7 | GA4 - telefoon_klik | GA4 Event | Trigger 4 |
| 8 | GA4 - whatsapp_klik | GA4 Event | Trigger 5 |
| 9 | GA4 - offerte_aanvraag | GA4 Event | Trigger 6 |

## Hoe de events worden getriggerd (website-code)

Alle `tel:` links en de WhatsApp-knop hebben een `onClick` handler met `window.dataLayer.push()`:

```js
// Telefoon
onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'telefoon_klik' }); }}

// WhatsApp
onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'whatsapp_klik' }); }}
```

De `offerte_aanvraag` wordt getriggerd via een `useEffect` op de `/bedankt` pagina:

```js
useEffect(() => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'offerte_aanvraag' });
}, []);
```

## Bestanden aangepast

- `src/app/page.js` — 3x telefoon + 1x WhatsApp
- `src/app/portfolio/page.js` — 2x telefoon + 1x WhatsApp
- `src/app/google-ads/page.js` — 2x telefoon
- `src/app/bedankt/page.js` — offerte_aanvraag via useEffect
