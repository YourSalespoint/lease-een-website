import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';

export const metadata = {
  title: 'Lease een Website | Professionele Website Huren Vanaf €49/maand',
  description:
    'Lease een professionele website voor jouw bedrijf. Geen hoge bouwkosten, geen technisch gedoe. Inclusief hosting, domeinnaam en zakelijke e-mail. Al vanaf €49 per maand.',
  keywords:
    'lease een website, website leasen, website huren, website abonnement, professionele website, website per maand',
  openGraph: {
    title: 'Lease een Website | Professionele Website Huren Vanaf €49/maand',
    description:
      'Geen bouwkosten. Geen technisch gedoe. Lease een professionele website inclusief hosting en e-mail. Al vanaf €49/maand.',
    url: 'https://lease-een-website.nl',
    siteName: 'Lease een Website',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://lease-een-website.nl' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <GoogleTagManager gtmId="GTM-5CCGHTW9" />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
