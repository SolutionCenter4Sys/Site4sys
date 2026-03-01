import Link from 'next/link';
import { MapPin, Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';
import { FLAGSHIP_OFFERS, CORE_OFFERS } from '@/mocks/offers';
import { OFFICES } from '@/mocks/index';

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white" aria-label="Rodapé">
      <div className="container-site pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5" aria-label="Foursys">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <rect width="36" height="36" rx="8" fill="#FF5315" />
                <path d="M8 10h20v3H8zM8 17h13v3H8zM8 24h17v3H8z" fill="white" />
              </svg>
              <span className="font-extrabold text-xl text-white tracking-tight">Foursys</span>
            </Link>
            <p className="text-body-md text-white/70 leading-relaxed mb-6">
              Transformação que entrega valor em semanas — com agilidade, proximidade e resultados que você mede.
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
            <h3 className="text-label-md uppercase tracking-wider text-white/50 mb-4 font-semibold">Ofertas</h3>
            <ul className="space-y-2">
              {FLAGSHIP_OFFERS.map(offer => (
                <li key={offer.id}>
                  <Link href={`/solucoes/${offer.slug}`} className="text-body-md text-white/70 hover:text-orange transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    {offer.name}
                  </Link>
                </li>
              ))}
              {CORE_OFFERS.slice(0, 4).map(offer => (
                <li key={offer.id}>
                  <Link href={`/solucoes/${offer.slug}`} className="text-body-md text-white/70 hover:text-orange transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    {offer.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/solucoes" className="text-label-md text-orange hover:text-orange-light transition-colors font-semibold">
                  Ver todas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-label-md uppercase tracking-wider text-white/50 mb-4 font-semibold">Empresa</h3>
            <ul className="space-y-2">
              {[
                { href: '/sobre', label: 'Sobre a Foursys' },
                { href: '/sobre#fourlives', label: 'FourLives' },
                { href: '/carreiras', label: 'Carreiras' },
                { href: '/casos-de-sucesso', label: 'Casos de sucesso' },
                { href: '/contato', label: 'Contato' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-body-md text-white/70 hover:text-orange transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Escritórios */}
          <div>
            <h3 className="text-label-md uppercase tracking-wider text-white/50 mb-4 font-semibold">Escritórios</h3>
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
            <span>© 2026 Foursys. Todos os direitos reservados.</span>
            <Link href="/privacidade" className="hover:text-orange transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-orange transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
