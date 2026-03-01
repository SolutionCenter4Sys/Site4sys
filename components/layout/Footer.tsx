import Link from 'next/link';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { FLAGSHIP_OFFERS, CORE_OFFERS } from '@/mocks/offers';
import { OFFICES } from '@/mocks/index';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const lhref = (path: string) => locale === 'pt' ? path : `/${locale}${path}`;

  return (
    <footer className="bg-navy-dark text-white" aria-label="Rodapé">
      <div className="container-site pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={lhref('/')} className="flex items-center gap-2 mb-5" aria-label="Foursys">
              <BrandLogo className="h-10 sm:h-11" />
            </Link>
            <p className="text-body-md text-white/70 leading-relaxed mb-6">
              {t('tagline')}
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://linkedin.com/company/foursys', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://instagram.com/foursys', icon: Instagram, label: 'Instagram' },
                { href: 'https://youtube.com/@foursys', icon: Youtube, label: 'YouTube' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Ofertas */}
          <div>
            <h3 className="text-label-md uppercase tracking-wider text-white/50 mb-4 font-semibold">{t('offers_title')}</h3>
            <ul className="space-y-2">
              {FLAGSHIP_OFFERS.map(offer => (
                <li key={offer.id}>
                  <Link href={lhref(`/solucoes/${offer.slug}`)} className="text-body-md text-white/70 hover:text-orange transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    {offer.name}
                  </Link>
                </li>
              ))}
              {CORE_OFFERS.slice(0, 4).map(offer => (
                <li key={offer.id}>
                  <Link href={lhref(`/solucoes/${offer.slug}`)} className="text-body-md text-white/70 hover:text-orange transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    {offer.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={lhref('/solucoes')} className="text-label-md text-orange hover:text-orange-light transition-colors font-semibold">
                  {t('see_all')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-label-md uppercase tracking-wider text-white/50 mb-4 font-semibold">{t('company_title')}</h3>
            <ul className="space-y-2">
              {[
                { href: '/sobre', label: t('about') },
                { href: '/sobre#fourlives', label: t('fourlives') },
                { href: '/insights', label: t('news_insights') },
                { href: '/carreiras', label: t('careers') },
                { href: '/casos-de-sucesso', label: t('cases') },
                { href: '/contato', label: t('contact') },
              ].map(item => (
                <li key={item.href}>
                  <Link href={lhref(item.href)} className="text-body-md text-white/70 hover:text-orange transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Escritórios */}
          <div>
            <h3 className="text-label-md uppercase tracking-wider text-white/50 mb-4 font-semibold">{t('offices_title')}</h3>
            <div className="space-y-4">
              {OFFICES.map(office => (
                <div key={office.id} className="flex items-start gap-2">
                  <span className="text-lg leading-none mt-0.5">{office.flag}</span>
                  <div>
                    <p className="text-body-md font-semibold text-white">{office.city}, {office.country}</p>
                    <p className="text-body-sm text-white/50 leading-relaxed">{office.address}</p>
                    {office.email && (
                      <a href={`mailto:${office.email}`} className="text-body-sm text-orange hover:text-orange-light transition-colors">
                        {office.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-3 items-center">
            {['ISO 9001', 'ISO 27001', 'ISO 27701', 'ISO 14001', 'SAFe', 'GPTW'].map(cert => (
              <span key={cert} className="text-label-sm text-white/40 bg-white/5 px-2 py-0.5 rounded">{cert}</span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-body-sm text-white/40">
            <span>{t('copyright')}</span>
            <Link href={lhref('/privacidade')} className="hover:text-orange transition-colors">{t('privacy')}</Link>
            <Link href={lhref('/termos')} className="hover:text-orange transition-colors">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
