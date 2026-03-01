import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle, Clock, Users, Target } from 'lucide-react';
import {
  Brain, RefreshCw, Shield, DollarSign, Database,
  Bot, Cpu, Headphones, BarChart2, GitBranch, Lightbulb, Activity
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CaseCard } from '@/components/cases/CaseCard';
import { CTASection } from '@/components/sections/CTASection';
import { OFFERS, getOfferBySlug } from '@/mocks/offers';
import { getCasesByOffer } from '@/mocks/cases';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Users, Brain, RefreshCw, Shield, DollarSign, Database,
  Bot, Cpu, Headphones, BarChart2, GitBranch, Lightbulb, Activity,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) return { title: 'Oferta não encontrada' };
  return {
    title: offer.name,
    description: offer.description,
  };
}

export async function generateStaticParams() {
  return OFFERS.map(o => ({ slug: o.slug }));
}

export default async function OfferPage({ params }: Props) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) notFound();

  const Icon = ICON_MAP[offer.icon] || Brain;
  const relatedCases = getCasesByOffer(offer.slug);

  return (
    <>
      {/* Hero da oferta */}
      <section className="bg-gradient-dark pt-32 pb-20 relative overflow-hidden" aria-label={`Oferta: ${offer.name}`}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: `${offer.color}15` }} />
        </div>
        <div className="container-site relative z-10">
          <Breadcrumb
            items={[
              { label: 'Ofertas', href: '/solucoes' },
              { label: offer.name },
            ]}
            light
            className="mb-6"
          />
          <div className="flex items-center gap-3 mb-6">
            <Badge variant={offer.category === 'flagship' ? 'flagship' : 'core'} label={offer.category === 'flagship' ? 'Flagship' : 'Core'} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: `${offer.color}20` }}>
                  <Icon className="w-7 h-7" style={{ color: offer.color }} />
                </div>
              </div>
              <h1 className="text-display-md text-white mb-4">{offer.name}</h1>
              <p className="text-heading-md font-semibold mb-4" style={{ color: offer.color }}>{offer.subtitle}</p>
              <p className="text-body-xl text-white/70 leading-relaxed mb-8">{offer.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={`/contato?servico=${encodeURIComponent(offer.name)}`} variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {offer.ctaPrimary}
                </Button>
                {relatedCases.length > 0 && (
                  <Button href="#casos" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                    {offer.ctaSecondary}
                  </Button>
                )}
              </div>
            </div>

            {/* Quick info card */}
            <div className="glass rounded-2xl p-8">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-label-md text-white/50 uppercase tracking-wider mb-1">Para quem é</p>
                    <p className="text-body-md text-white/80">{offer.forWhom}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-label-md text-white/50 uppercase tracking-wider mb-1">Dor que resolve</p>
                    <p className="text-body-md text-white/80">{offer.pain}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-label-md text-white/50 uppercase tracking-wider mb-1">Prazo estimado</p>
                    <p className="text-body-md text-white/80">{offer.timeline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promessa */}
      <section className="section-padding bg-white" aria-label="Nossa promessa">
        <div className="container-site max-w-3xl mx-auto text-center">
          <Kicker className="mb-4">Nossa promessa</Kicker>
          <h2 className="text-display-sm text-navy mb-6">{offer.promise}</h2>
        </div>
      </section>

      {/* Entregáveis + KPIs */}
      <section className="section-padding bg-gray-50" aria-label="Entregáveis e KPIs">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Entregáveis */}
            <div>
              <Kicker className="mb-4">O que você recebe</Kicker>
              <h2 className="text-heading-xl text-navy mb-6">Entregáveis</h2>
              <ul className="space-y-3" aria-label="Lista de entregáveis">
                {offer.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-body-lg text-gray-700">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* KPIs */}
            <div>
              <Kicker className="mb-4">Como medimos o sucesso</Kicker>
              <h2 className="text-heading-xl text-navy mb-6">KPIs de resultado</h2>
              <div className="grid grid-cols-1 gap-3">
                {offer.kpis.map((kpi, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-card">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: offer.color }} />
                    <span className="text-body-md text-gray-700 font-medium">{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos relacionados */}
      {relatedCases.length > 0 && (
        <section id="casos" className="section-padding bg-white" aria-label="Casos relacionados">
          <div className="container-site">
            <div className="text-center mb-10">
              <Kicker className="mb-3">Prova real</Kicker>
              <h2 className="text-display-sm text-navy">Casos de sucesso em {offer.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedCases.map(c => (
                <CaseCard key={c.id} caseData={c} variant="dark" />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        headline={`Pronto para começar com ${offer.name}?`}
        subheadline="Agende um diagnóstico gratuito com nosso time."
        ctaLabel={offer.ctaPrimary}
        ctaHref={`/contato?servico=${encodeURIComponent(offer.name)}`}
      />
    </>
  );
}
