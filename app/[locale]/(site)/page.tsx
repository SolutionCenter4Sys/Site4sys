import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { HeroHome } from '@/components/sections/HeroHome';
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { TechPartnersSection } from '@/components/sections/TechPartnersSection';
import { HighlightsCarousel } from '@/components/sections/HighlightsCarousel';
import { OfferCard } from '@/components/offers/OfferCard';
import { CaseCard } from '@/components/cases/CaseCard';
import { Button } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { FLAGSHIP_OFFERS, CORE_OFFERS } from '@/mocks/offers';
import { CASES } from '@/mocks/cases';
import { FOURLIVES_STATS, FOURLIVES_PILLARS } from '@/mocks/index';
import { Leaf } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  return {
    title: 'Foursys — Transformação Digital que Entrega Valor',
    description: t('tagline'),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const lhref = (path: string) => `/${locale}${path}`;

  const why = t.raw('why') as { kicker: string; headline: string; highlight: string; body: string; presence_title: string; presence_sub: string; presence_1: string; presence_2: string; presence_3: string; sectors_title: string; sectors: string[] };
  const offersT = t.raw('offers_section') as { kicker: string; headline: string; see_all: string; flagship_badge: string; learn_more: string };
  const casesT = t.raw('cases_section') as { kicker: string; headline: string; sub: string; see_all: string; see_case: string; sectors: string[]; experience_prefix: string };
  const painT = t.raw('pain_finder') as { kicker: string; headline: string; sub: string; pains: { label: string; offer: string; slug: string }[] };
  const fourlT = t.raw('fourlives') as { kicker: string; headline: string; body: string; cta: string; capacity_title: string; capacity_body: string; inclusion_title: string; inclusion_body: string; sustainability_title: string; sustainability_body: string };

  return (
    <>
      <HeroHome />

      {/* 2. Intro Narrativa */}
      <section className="section-padding bg-white" aria-label="Posicionamento Foursys">
        <div className="container-site max-w-4xl mx-auto text-center">
          <Kicker className="mb-4">{why.kicker}</Kicker>
          <h2 className="text-display-sm text-navy mb-6">
            {why.headline.replace('{highlight}', '')}{' '}
            <span className="text-gradient-orange">{why.highlight}</span>.
          </h2>
          <p className="text-body-xl text-gray-600 leading-relaxed">{why.body}</p>
        </div>
      </section>

      {/* 3. Trust Layer */}
      <section className="py-10 bg-gray-50 border-y border-gray-100" aria-label="Confiança e presença global">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <Kicker className="mb-3">{why.presence_title}</Kicker>
              <h2 className="text-heading-xl text-navy mb-3">{why.presence_sub}</h2>
              <ul className="space-y-2">
                {[why.presence_1, why.presence_2, why.presence_3].map(item => (
                  <li key={item} className="flex items-start gap-2 text-body-md text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-label-lg text-gray-400 uppercase tracking-widest mb-3 font-semibold">
                {why.sectors_title}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {why.sectors.map(industry => (
                  <span key={industry} className="px-3 py-1.5 rounded-pill bg-white border border-gray-200 text-body-sm font-semibold text-navy">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Flagship Offers */}
      <section className="section-padding bg-gray-50" aria-label="Ofertas Flagship">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <Kicker className="mb-3">{offersT.kicker}</Kicker>
              <h2 className="text-display-sm text-navy">{offersT.headline}</h2>
            </div>
            <Button href={lhref('/solucoes')} variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              {offersT.see_all.replace('{count}', '15')}
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLAGSHIP_OFFERS.map(offer => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Como trabalhamos */}
      <HowWeWorkSection />

      {/* 6. Core Offers Grid */}
      <section className="section-padding bg-white" aria-label="Outras ofertas">
        <div className="container-site">
          <div className="text-center mb-10">
            <Kicker className="mb-3">{offersT.kicker}</Kicker>
            <h2 className="text-display-sm text-navy">{offersT.headline}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_OFFERS.map(offer => (
              <OfferCard key={offer.id} offer={offer} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Produtos e Ecossistema */}
      <ProductsSection />

      {/* 8. Parceiros & Tecnologias */}
      <TechPartnersSection />

      {/* 8b. Encontre pela dor */}
      <section className="section-padding bg-gray-50" aria-label="Encontre a solução pelo seu desafio">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Kicker className="mb-3">{painT.kicker}</Kicker>
            <h2 className="text-display-sm text-navy">{painT.headline}</h2>
            <p className="text-body-lg text-gray-500 mt-2">{painT.sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {painT.pains.map(item => (
              <Link
                key={item.slug}
                href={lhref(`/solucoes/${item.slug}`)}
                className="flex items-start justify-between gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-orange/30 hover:bg-orange/5 hover:shadow-card transition-all duration-200 group"
              >
                <p className="text-body-md text-gray-700 group-hover:text-navy font-medium">{item.label}</p>
                <div className="flex items-center gap-1 text-label-md text-orange font-semibold whitespace-nowrap flex-shrink-0">
                  {item.offer} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Metrics + Certifications */}
      <MetricsSection />

      {/* 9b. Carrossel de destaques */}
      <HighlightsCarousel />

      {/* 10. Cases */}
      <section className="section-padding bg-gray-50" aria-label="Casos de sucesso">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <Kicker className="mb-3">{casesT.kicker}</Kicker>
              <h2 className="text-display-sm text-navy">{casesT.headline}</h2>
              <p className="text-body-lg text-gray-500 mt-2">{casesT.sub}</p>
            </div>
            <Button href={lhref('/casos-de-sucesso')} variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              {casesT.see_all}
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASES.slice(0, 3).map(c => (
              <CaseCard key={c.id} caseData={c} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-label-md text-gray-400 uppercase tracking-widest">{casesT.experience_prefix}</span>
            {casesT.sectors.map(client => (
              <span key={client} className="px-3 py-1 rounded-pill text-body-sm font-semibold bg-white border border-gray-200 text-gray-600">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FourLives */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #F0FAF8 0%, #E8F8F5 100%)' }} aria-label="FourLives">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Kicker className="mb-4">{fourlT.kicker}</Kicker>
              <h2 className="text-display-sm text-navy mb-4">{fourlT.headline}</h2>
              <p className="text-body-xl text-gray-600 leading-relaxed mb-8">{fourlT.body}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {FOURLIVES_STATS.map(stat => (
                  <div key={stat.value} className="bg-white rounded-xl p-4 shadow-card">
                    <p className="text-display-sm font-extrabold text-mint-dark mb-1">{stat.value}</p>
                    <p className="text-body-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Button href={lhref('/sobre#fourlives')} variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                {fourlT.cta}
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {FOURLIVES_PILLARS.map(pillar => (
                <div key={pillar.title} className="bg-white rounded-xl p-6 shadow-card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mint/20 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-mint-dark" />
                  </div>
                  <div>
                    <h3 className="text-heading-md text-navy mb-1">{pillar.title}</h3>
                    <p className="text-body-md text-gray-500">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Testimonials */}
      <TestimonialsSection />

      {/* 13. CTA Final */}
      <CTASection />
    </>
  );
}
