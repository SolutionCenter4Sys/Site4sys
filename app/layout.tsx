import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Foursys — Transformação Digital que Entrega Valor',
    template: '%s | Foursys',
  },
  description: 'Parceiro estratégico de transformação digital. Squads Híbridas, Modernização de Legado, IA com ROI e muito mais. 25 anos. 3,6% turnover. GPTW.',
  keywords: ['transformação digital', 'squads híbridas', 'modernização de legado', 'IA com ROI', 'Foursys', 'consultoria tecnologia'],
  authors: [{ name: 'Foursys', url: 'https://foursys.com.br' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://foursys.com.br',
    siteName: 'Foursys',
    title: 'Foursys — Transformação Digital que Entrega Valor',
    description: 'Parceiro estratégico de transformação digital com agilidade, proximidade e resultados mensuráveis.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Foursys' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foursys — Transformação Digital que Entrega Valor',
    description: 'Parceiro estratégico de transformação digital.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://foursys.com.br'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
