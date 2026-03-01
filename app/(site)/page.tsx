import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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

export const metadata: Metadata = {
  title: 'Foursys — Transformação Digital que Entrega Valor',
  description: 'Squads que entregam valor em semanas, não em meses. Parceiro estratégico com 26 anos, 3,6% turnover e GPTW.',
};

const TRUST_PILLARS = [
  'Atuação em Brasil, EUA e Portugal',
  'Projetos em setores regulados e de missão crítica',
  'Governança com métricas de entrega e risco',
];

const INDUSTRIES = [
  'Financeiro',
  'Saúde',
  'Seguros',
  'Varejo',
  'Manufatura',
  'Energia',
];

const CLIENT_GROUPS = [
  'Bancos e Fintechs',
  'Operadoras de Saúde',
  'Seguradoras',
  'Varejo Omnichannel',
  'Indústria 4.0',
];


export default function HomePage() {
  return (
    <>
      {/* Skip to main content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange text-white px-4 py-2 rounded-lg z-50">
        Ir ao conteúdo principal
      </a>

      {/* 1. Hero */}
      <HeroHome />

      {/* 2. Intro Narrativa */}
      <section className="section-padding bg-white" aria-label="Posicionamento Foursys">
        <div className="container-site max-w-4xl mx-auto text-center">
          <Kicker className="mb-4">Por que a Foursys</Kicker>
          <h2 className="text-display-sm text-navy mb-6">
            Mais do que serviços de TI —{' '}
            <span className="text-gradient-orange">resultado que você mede.</span>
          </h2>
          <p className="text-body-xl text-gray-600 leading-relaxed">
            Em um mercado de promessas genéricas, a Foursys entrega com método, métricas e governança.
            Cada engajamento começa com o diagnóstico correto e termina com impacto mensurável —
            seja em lead time, custo operacional ou ROI de IA.
          </p>
        </div>
      </section>

      {/* 3. Trust Layer */}
      <section className="py-10 bg-gray-50 border-y border-gray-100" aria-label="Confiança e presença global">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <Kicker className="mb-3">Presença Global</Kicker>
              <h2 className="text-heading-xl text-navy mb-3">
                Entrega enterprise com proximidade de squad.
              </h2>
              <ul className="space-y-2">
                {TRUST_PILLARS.map(item => (
                  <li key={item} className="flex items-start gap-2 text-body-md text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-label-lg text-gray-400 uppercase tracking-widest mb-3 font-semibold">
                Setores com experiência comprovada
              </p>
              <div className="flex flex-wrap gap-2.5">
                {INDUSTRIES.map(industry => (
                  <span
                    key={industry}
                    className="px-3 py-1.5 rounded-pill bg-white border border-gray-200 text-body-sm font-semibold text-navy"
                  >
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
              <Kicker className="mb-3">Nossas principais ofertas</Kicker>
              <h2 className="text-display-sm text-navy">Três ofertas, impacto comprovado</h2>
            </div>
            <Button href="/solucoes" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Ver todas as 15 ofertas
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
            <Kicker className="mb-3">Portfólio completo</Kicker>
            <h2 className="text-display-sm text-navy">Mais capacidades para sua transformação</h2>
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

      {/* 8b. Encontre pela dor — Qual seu desafio? */}
      <section className="section-padding bg-gray-50" aria-label="Encontre a solução pelo seu desafio">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Kicker className="mb-3">Encontre pelo problema</Kicker>
            <h2 className="text-display-sm text-navy">Qual é a sua dor hoje?</h2>
            <p className="text-body-lg text-gray-500 mt-2">Conecte seu desafio à solução certa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { pain: 'Acelerar entrega sem aumentar headcount', offer: 'Squads Híbridas', href: '/solucoes/squads-hibridas' },
              { pain: 'Provar ROI de IA; sair de pilotos', offer: 'IA com Impacto', href: '/solucoes/ia-com-roi' },
              { pain: 'Legado trava IA, integração e velocidade', offer: 'Modernização de Legado', href: '/solucoes/modernizacao-legado' },
              { pain: 'Controlar custo cloud e IA', offer: 'FinOps & Custo de IA', href: '/solucoes/finops-custo-ia' },
              { pain: 'Reduzir fraude, phishing e risco', offer: 'Cibersegurança & Zero Trust', href: '/solucoes/ciberseguranca-zero-trust' },
              { pain: 'Escalar IA com segurança e compliance', offer: 'Governança de IA & Dados', href: '/solucoes/governanca-ia-dados' },
            ].map(item => (
              <Link
                key={item.pain}
                href={item.href}
                className="flex items-start justify-between gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-orange/30 hover:bg-orange/5 hover:shadow-card transition-all duration-200 group"
              >
                <p className="text-body-md text-gray-700 group-hover:text-navy font-medium">{item.pain}</p>
                <div className="flex items-center gap-1 text-label-md text-orange font-semibold whitespace-nowrap flex-shrink-0">
                  {item.offer} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Metrics + Certifications + Premiações */}
      <MetricsSection />

      {/* 9b. Carrossel de destaques */}
      <HighlightsCarousel />

      {/* 10. Cases */}
      <section className="section-padding bg-gray-50" aria-label="Casos de sucesso">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <Kicker className="mb-3">Resultados reais</Kicker>
              <h2 className="text-display-sm text-navy">Casos de sucesso</h2>
              <p className="text-body-lg text-gray-500 mt-2">Problema → Solução → Impacto mensurável.</p>
            </div>
            <Button href="/casos-de-sucesso" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Ver todos os casos
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASES.slice(0, 3).map(c => (
              <CaseCard key={c.id} caseData={c} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-label-md text-gray-400 uppercase tracking-widest">Experiência em</span>
            {CLIENT_GROUPS.map(client => (
              <span
                key={client}
                className="px-3 py-1 rounded-pill text-body-sm font-semibold bg-white border border-gray-200 text-gray-600"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FourLives */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #F0FAF8 0%, #E8F8F5 100%)' }} aria-label="FourLives — Impacto social">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Kicker className="mb-4">Propósito e ESG</Kicker>
              <h2 className="text-display-sm text-navy mb-4">FourLives — Tecnologia que transforma vidas</h2>
              <p className="text-body-xl text-gray-600 leading-relaxed mb-8">
                Para a Foursys, tecnologia é meio, não fim. O FourLives é nosso programa de impacto social que conecta capacitação, inclusão e sustentabilidade — porque escolher um parceiro de tecnologia também é escolher um parceiro de propósito.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {FOURLIVES_STATS.map(stat => (
                  <div key={stat.value} className="bg-white rounded-xl p-4 shadow-card">
                    <p className="text-display-sm font-extrabold text-mint-dark mb-1">{stat.value}</p>
                    <p className="text-body-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Button href="/sobre#fourlives" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Conheça o FourLives
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
