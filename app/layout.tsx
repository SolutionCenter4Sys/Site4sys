import type { Metadata, Viewport } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: 'Foursys — Soluções digitais que conectam estratégia, execução e evolução',
    template: '%s | Foursys',
  },
  description: 'Soluções digitais que conectam estratégia, execução e evolução. Parceiro estratégico com 26 anos, 3,6% turnover e GPTW.',
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
