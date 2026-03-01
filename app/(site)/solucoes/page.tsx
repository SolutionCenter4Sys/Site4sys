import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { OfferCard } from '@/components/offers/OfferCard';
import { CTASection } from '@/components/sections/CTASection';
import { Kicker } from '@/components/ui/Kicker';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FLAGSHIP_OFFERS, CORE_OFFERS } from '@/mocks/offers';
import { DarkPageHero } from '@/components/sections/DarkPageHero';

export const metadata: Metadata = {
  title: 'Ofertas e Soluções',
  description: 'Conheça as 15 ofertas da Foursys: Squads Híbridas, Modernização de Legado, IA com Impacto, Integrações API, Qualidade & Testes, Hiperautomação e mais. Cada oferta com ROI e KPIs definidos.',
};

export default function SolucoesPage() {
  return (
    <>
      <DarkPageHero className="pt-32 pb-20" aria-label="Todas as ofertas Foursys">
        <div className="container-site">
          <Breadcrumb items={[{ label: 'Ofertas' }]} light className="mb-8" />
        </div>
        <div className="container-site text-center">
          <Kicker light className="mb-4">Portfólio completo</Kicker>
          <h1 className="text-display-md text-white mb-6">
            Soluções que entregam ROI mensurável
          </h1>
          <p className="text-body-xl text-white/70 max-w-2xl mx-auto">
            Cada oferta foi desenhada com entregáveis claros, KPIs definidos e prazo estimado — porque resultado começa na proposta.
          </p>
        </div>
      </DarkPageHero>

      {/* Flagship */}
      <section className="section-padding bg-white" aria-label="Ofertas Flagship">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-8">
            <Badge variant="flagship" label="Flagship" size="md" />
            <h2 className="text-heading-xl text-navy">Nossas principais ofertas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            {FLAGSHIP_OFFERS.map(offer => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      {/* Core */}
      <section className="section-padding bg-gray-50" aria-label="Ofertas Core">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-8">
            <Badge variant="core" label="Core" size="md" />
            <h2 className="text-heading-xl text-navy">Capacidades complementares</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_OFFERS.map(offer => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      {/* Dor → Oferta */}
      <section className="section-padding bg-white" aria-label="Encontre a solução pela sua dor">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Kicker className="mb-3">Encontre pelo problema</Kicker>
            <h2 className="text-display-sm text-navy">Qual é a sua dor hoje?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { pain: 'Acelerar entrega sem aumentar headcount', offer: 'Squads Híbridas', href: '/solucoes/squads-hibridas' },
              { pain: 'Provar ROI de IA; sair de pilotos', offer: 'IA com Impacto', href: '/solucoes/ia-com-roi' },
              { pain: 'Legado trava IA, integração e velocidade', offer: 'Modernização de Legado', href: '/solucoes/modernizacao-legado' },
              { pain: 'Controlar custo cloud e IA', offer: 'FinOps & Custo de IA', href: '/solucoes/finops-custo-ia' },
              { pain: 'Reduzir fraude, phishing e risco', offer: 'Cibersegurança & Zero Trust', href: '/solucoes/ciberseguranca-zero-trust' },
              { pain: 'Escalar IA com segurança e compliance', offer: 'Governança de IA & Dados', href: '/solucoes/governanca-ia-dados' },
              { pain: 'Ver e controlar operação e IA', offer: 'Observabilidade & Resiliência', href: '/solucoes/observabilidade-resiliencia' },
              { pain: 'Adotar IA na operação com segurança', offer: 'Trabalho Humano + IA', href: '/solucoes/trabalho-humano-ia' },
            ].map(item => (
              <a
                key={item.pain}
                href={item.href}
                className="flex items-start justify-between gap-4 p-5 rounded-xl border border-gray-200 hover:border-orange/30 hover:bg-orange/5 transition-all duration-200 group"
              >
                <p className="text-body-md text-gray-700 group-hover:text-navy">{item.pain}</p>
                <div className="flex items-center gap-1 text-label-md text-orange font-semibold whitespace-nowrap flex-shrink-0">
                  {item.offer} <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Não encontrou o que procurava?" subheadline="Fale com nosso time e descubra a solução certa para seu momento." />
    </>
  );
}
