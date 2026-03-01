import type { Metadata } from 'next';
import { DarkPageHero } from '@/components/sections/DarkPageHero';
import { Kicker } from '@/components/ui/Kicker';
import { InsightsPageClient } from '@/components/insights/InsightsPageClient';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Pesquisas, artigos, podcasts e casos reais sobre IA, transformação digital, squads, segurança e cloud. O que pensamos e o que vemos acontecer no mercado de tecnologia enterprise.',
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <DarkPageHero className="pt-32 pb-16" aria-label="Insights Foursys">
        <div className="container-site">
          <div className="max-w-3xl">
            <Kicker light className="mb-4">Foursys Insights</Kicker>
            <h1 className="text-display-md text-white mb-6 leading-tight">
              O que pensamos.<br />
              <span className="text-orange">O que vemos acontecer.</span>
            </h1>
            <p className="text-body-xl text-white/70 leading-relaxed max-w-2xl">
              Pesquisas, artigos, podcasts e casos reais sobre IA, transformação digital, squads,
              cibersegurança e cloud — escritos por quem implementa, não por quem apenas teoriza.
            </p>

            {/* Quick topic pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                'Inteligência Artificial',
                'Squads & Agilidade',
                'Modernização de Legado',
                'Cibersegurança',
                'Cloud & FinOps',
              ].map(topic => (
                <span
                  key={topic}
                  className="px-4 py-1.5 rounded-pill bg-white/10 border border-white/20 text-label-md text-white/80 font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DarkPageHero>

      {/* Main content — client component with filters + grid */}
      <InsightsPageClient />
    </>
  );
}
