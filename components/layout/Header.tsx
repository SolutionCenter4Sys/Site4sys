'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { cn } from '@/lib/utils';
import { FLAGSHIP_OFFERS, CORE_OFFERS } from '@/mocks/offers';

interface HeaderProps {
  variant?: 'transparent' | 'white';
}

export function Header({ variant = 'transparent' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ofertasOpen, setOfertasOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isLight = variant === 'white' || scrolled;

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isLight
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-18 py-0" style={{ height: '72px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Foursys - Página inicial">
            <BrandLogo
              light={isLight}
              className="h-10 sm:h-11 md:h-12"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
            {/* Ofertas com mega menu */}
            <div className="relative group" onMouseEnter={() => setOfertasOpen(true)} onMouseLeave={() => setOfertasOpen(false)}>
              <button
                className={cn(
                  'flex items-center gap-1 text-label-lg font-semibold transition-colors hover:text-orange',
                  isLight ? 'text-navy' : 'text-white/90',
                  isActive('/solucoes') && 'text-orange'
                )}
                aria-expanded={ofertasOpen}
                aria-haspopup="menu"
              >
                Ofertas
                <ChevronDown className={cn('w-4 h-4 transition-transform', ofertasOpen && 'rotate-180')} />
              </button>

              {/* Mega Menu */}
              <div className={cn(
                'absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transition-all duration-200',
                ofertasOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              )}>
                <div className="grid grid-cols-2 gap-6">
                  {/* Flagship */}
                  <div>
                    <p className="text-label-sm text-orange uppercase tracking-widest mb-3 font-bold">Flagship</p>
                    <div className="space-y-1">
                      {FLAGSHIP_OFFERS.map(offer => (
                        <Link
                          key={offer.id}
                          href={`/solucoes/${offer.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group/item"
                        >
                          <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${offer.color}18` }}>
                            <span className="w-4 h-4" style={{ color: offer.color }}>●</span>
                          </span>
                          <div>
                            <p className="text-body-md font-semibold text-navy group-hover/item:text-orange transition-colors">{offer.name}</p>
                            <p className="text-body-sm text-gray-500 leading-relaxed">{offer.subtitle}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Core */}
                  <div>
                    <p className="text-label-sm text-navy uppercase tracking-widest mb-3 font-bold">Core</p>
                    <div className="space-y-0.5">
                      {CORE_OFFERS.slice(0, 6).map(offer => (
                        <Link
                          key={offer.id}
                          href={`/solucoes/${offer.slug}`}
                          className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                          <span className="text-body-md text-gray-700 hover:text-orange transition-colors">{offer.name}</span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/solucoes"
                      className="inline-flex items-center gap-1 mt-3 text-label-md text-orange font-semibold hover:underline"
                    >
                      Ver todas as ofertas →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {[
              { href: '/sobre', label: 'Sobre' },
              { href: '/casos-de-sucesso', label: 'Casos' },
              { href: '/insights', label: 'Insights' },
              { href: '/carreiras', label: 'Carreiras' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'relative text-label-lg font-semibold transition-colors hover:text-orange',
                  isLight ? 'text-navy' : 'text-white/90',
                  isActive(item.href) && 'text-orange',
                  'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-orange after:rounded-full after:transition-transform after:duration-200',
                  isActive(item.href) ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/contato" variant={isLight ? 'primary' : 'primary'} size="md">
              Fale conosco
            </Button>
          </div>

          {/* Mobile menu button
              Anderson (Android): min-h/w 48px = 48dp touch target (Material Design 3)
              Igor (iOS): min-h/w 44pt = Apple HIG minimum touch target */}
          <button
            className={cn(
              'lg:hidden flex items-center justify-center min-h-[48px] min-w-[48px] rounded-xl transition-colors',
              isLight ? 'text-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu
          Anderson (Android): cada item tem min-h-[48px] para touch target de 48dp.
          Igor (iOS): id="mobile-nav" conecta com aria-controls do botão.
          Artista: separador visual entre Flagship e links principais para evitar
          confusão entre sub-itens e itens principais. */}
      <nav
        id="mobile-nav"
        aria-label="Navegação mobile"
        aria-hidden={!mobileOpen}
        className={cn(
          'lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container-site py-3 space-y-0.5">
          {/* Ofertas — link para página completa */}
          <Link
            href="/solucoes"
            aria-current={isActive('/solucoes') ? 'page' : undefined}
            className={cn(
              'flex items-center min-h-[48px] px-3 py-2 text-body-lg font-semibold rounded-xl hover:bg-gray-50',
              isActive('/solucoes') ? 'text-orange bg-orange/5' : 'text-navy hover:text-orange'
            )}
          >
            Ofertas
          </Link>

          {/* Flagship — sub-nível com indentação e separador visual */}
          <div className="ml-3 border-l-2 border-orange/20 pl-3 space-y-0.5 pb-1">
            <p className="text-label-sm text-orange/70 uppercase tracking-widest font-bold px-2 pt-1 pb-0.5">
              Flagship
            </p>
            {FLAGSHIP_OFFERS.map(offer => (
              <Link
                key={offer.id}
                href={`/solucoes/${offer.slug}`}
                aria-current={pathname === `/solucoes/${offer.slug}` ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-2 min-h-[44px] px-2 py-1.5 text-body-md rounded-lg hover:bg-gray-50',
                  pathname === `/solucoes/${offer.slug}` ? 'text-orange' : 'text-gray-600 hover:text-orange'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" aria-hidden="true" />
                {offer.name}
              </Link>
            ))}
          </div>

          <div className="h-px bg-gray-100 my-1 mx-3" aria-hidden="true" />

          {/* Navegação principal */}
          {[
            { href: '/sobre', label: 'Sobre' },
            { href: '/casos-de-sucesso', label: 'Casos' },
            { href: '/insights', label: 'Insights' },
            { href: '/carreiras', label: 'Carreiras' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'flex items-center min-h-[48px] px-3 py-2 text-body-lg font-semibold rounded-xl hover:bg-gray-50',
                isActive(item.href) ? 'text-orange bg-orange/5' : 'text-navy hover:text-orange'
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA final com espaço extra para o StickyMobileCTA não sobrepor */}
          <div className="pt-3 pb-safe">
            <Button href="/contato" variant="primary" size="lg" fullWidth>
              Fale conosco
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
