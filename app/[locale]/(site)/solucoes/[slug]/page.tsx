import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Clock, Users, Target, TrendingUp } from 'lucide-react';
import { Kicker } from '@/components/ui/Kicker';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CTASection } from '@/components/sections/CTASection';
import { DarkPageHero } from '@/components/sections/DarkPageHero';
import { getOfferBySlug, OFFERS } from '@/mocks/offers';

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return OFFERS.map(offer => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) return {};
  return {
    title: `${offer.name} — Foursys`,
    description: offer.description,
  };
}

export default async function OfferDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const offer = getOfferBySlug(slug);

  if (!offer) notFound();

  const isFlagship = offer.category === 'flagship';
  const ctaPrimaryHref = `/${locale}/contato?servico=${encodeURIComponent(offer.name)}`;
  const ctaBackHref = `/${locale}/solucoes`;

  return (
    <>
      {/* Hero */}
      <DarkPageHero className="pt-32 pb-20" aria-label={`Oferta: ${offer.name}`}>
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: 'Soluções', href: `/${locale}/solucoes` },
              { label: offer.name },
            ]}
            light
            className="mb-8"
          />
        </div>
        <div className="container-site">
          <div className="flex items-center gap-3 mb-6">
            <Badge
              variant={isFlagship ? 'flagship' : 'core'}
              label={isFlagship ? 'Flagship' : 'Core'}
              size="md"
            />
          </div>
          <h1 className="text-display-md text-white mb-4 max-w-3xl">{offer.name}</h1>
          <p className="text-body-xl text-orange font-semibold mb-4 max-w-2xl">{offer.subtitle}</p>
          <p className="text-body-lg text-white/70 max-w-2xl">{offer.description}</p>

          {offer.metrics && offer.metrics.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {offer.metrics.map((m, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-orange/20 border border-orange/30 text-label-md font-semibold text-orange"
                >
                  {m}
                </span>
              ))}
            </div>
          )}
        </div>
      </DarkPageHero>

      {/* Imagem de destaque — exibida apenas quando a oferta possui heroImage */}
      {offer.heroImage && (
        <section className="bg-white section-padding" aria-label="Apresentação visual da oferta">
          <div className="container-site">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src={offer.heroImage}
                alt={`${offer.name} — Foursys AI-Augmented Squad`}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Conteúdo principal */}
      <section className="section-padding bg-white" aria-label="Detalhes da oferta">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Coluna principal */}
            <div className="lg:col-span-2 space-y-12">

              {/* Para quem */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-orange" />
                  <h2 className="text-heading-xl font-bold text-navy">Para quem</h2>
                </div>
                <p className="text-body-lg text-gray-600 leading-relaxed">{offer.forWhom}</p>
              </div>

              {/* Dor que resolve */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-orange" />
                  <h2 className="text-heading-xl font-bold text-navy">Dor que resolve</h2>
                </div>
                <p className="text-body-lg text-gray-600 leading-relaxed">{offer.pain}</p>
              </div>

              {/* O que entregamos */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-orange" />
                  <h2 className="text-heading-xl font-bold text-navy">O que entregamos</h2>
                </div>
                <p className="text-body-lg text-gray-600 leading-relaxed">{offer.promise}</p>
              </div>

              {/* Entregáveis */}
              <div>
                <h2 className="text-heading-xl font-bold text-navy mb-6">Entregáveis</h2>
                <ul className="space-y-3">
                  {offer.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                      <span className="text-body-lg text-gray-700">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* KPIs */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-heading-md font-bold text-navy mb-4">KPIs e métricas</h3>
                <ul className="space-y-2">
                  {offer.kpis.map((k, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-2" />
                      <span className="text-body-md text-gray-700">{k}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prazo */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-orange" />
                  <h3 className="text-heading-md font-bold text-navy">Prazo estimado</h3>
                </div>
                <p className="text-body-md text-gray-600">{offer.timeline}</p>
              </div>

              {/* CTA sidebar */}
              <div className="bg-navy rounded-2xl p-6 space-y-3">
                <Kicker light className="mb-2">Pronto para começar?</Kicker>
                <p className="text-body-md text-white/80">
                  Diagnóstico gratuito de 45 minutos com um especialista.
                </p>
                <Button href={ctaPrimaryHref} variant="primary" size="lg" fullWidth>
                  {offer.ctaPrimary}
                </Button>
                <Button href={ctaBackHref} variant="ghost" size="md" fullWidth className="!text-white/70 hover:!text-white">
                  {offer.ctaSecondary || 'Ver todas as soluções'}
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Link voltar */}
      <div className="bg-gray-50 py-6 border-t border-gray-100">
        <div className="container-site">
          <a
            href={ctaBackHref}
            className="inline-flex items-center gap-2 text-body-md text-gray-500 hover:text-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para soluções
          </a>
        </div>
      </div>

      <CTASection
        headline="Tem uma dúvida específica?"
        subheadline="Fale com nosso time e descubra se essa oferta é a certa para o seu momento."
      />
    </>
  );
}
