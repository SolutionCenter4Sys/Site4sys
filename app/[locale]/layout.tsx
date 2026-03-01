import type { Metadata, Viewport } from 'next';
import { Nunito } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

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

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  const ogLocale = locale === 'pt' ? 'pt_BR' : locale === 'en' ? 'en_US' : 'es_ES';
  return {
    title: {
      default: 'Foursys — Transformação Digital que Entrega Valor',
      template: '%s | Foursys',
    },
    description: t('tagline'),
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: 'https://foursys.com.br',
      siteName: 'Foursys',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Foursys' }],
    },
    twitter: { card: 'summary_large_image' },
    robots: { index: true, follow: true },
    metadataBase: new URL('https://foursys.com.br'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'pt' | 'en' | 'es')) {
    notFound();
  }

  const messages = await getMessages();

  const htmlLang = locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es' : 'en';

  return (
    <html lang={htmlLang} className={nunito.variable}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
