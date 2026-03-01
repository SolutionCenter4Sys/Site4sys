import type { Metadata } from 'next';
import { Kicker } from '@/components/ui/Kicker';
import { CaseCard } from '@/components/cases/CaseCard';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ArrowRight } from 'lucide-react';
import { CASES } from '@/mocks/cases';

export const metadata: Metadata = {
  title: 'Casos de Sucesso',
  description: 'Veja como a Foursys transformou empresas do setor financeiro, saúde, seguros e varejo. Resultados reais: Problema → Solução → Impacto mensurável.',
};

const SECTORS = ['Todos', ...Array.from(new Set(CASES.map(c => c.sector)))];

export default function CasosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark pt-32 pb-20" aria-label="Casos de sucesso">
        <div className="container-site">
          <Breadcrumb items={[{ label: 'Casos de Sucesso' }]} light className="mb-8" />
        </div>
        <div className="container-site text-center">
          <Kicker light className="mb-4">Resultados reais</Kicker>
          <h1 className="text-display-md text-white mb-6">Casos de sucesso</h1>
          <p className="text-body-xl text-white/70 max-w-2xl mx-auto">
            Cada caso segue o formato: Problema → Solução → Impacto mensurável. Não contamos histórias — mostramos números.
          </p>
        </div>
      </section>

      {/* Destaque — métricas globais */}
      <section className="bg-white py-12 border-b border-gray-100" aria-label="Impacto global">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100+', label: 'projetos desbloqueados' },
              { value: '85%', label: 'redução de tempo médio' },
              { value: '40%', label: 'redução de custo operacional' },
              { value: '82%', label: 'previsibilidade de entrega' },
            ].map(m => (
              <div key={m.label}>
                <p className="text-display-sm text-orange font-extrabold">{m.value}</p>
                <p className="text-body-sm text-gray-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="section-padding bg-gray-50" aria-label="Todos os casos">
        <div className="container-site">
          {/* Filter pills (visual apenas — filtro real seria com JS client) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {SECTORS.map(sector => (
              <span
                key={sector}
                className={`px-4 py-1.5 rounded-pill text-label-md cursor-pointer transition-colors ${
                  sector === 'Todos'
                    ? 'bg-navy text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-orange hover:text-orange'
                }`}
              >
                {sector}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map(c => (
              <CaseCard key={c.id} caseData={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos em destaque */}
      <section className="section-padding bg-navy" aria-label="Depoimentos">
        <div className="container-site">
          <div className="text-center mb-10">
            <Kicker light className="mb-3">O que dizem</Kicker>
            <h2 className="text-display-sm text-white">Clientes que recomendam</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASES.filter(c => c.quote).slice(0, 3).map(c => (
              <div key={c.id} className="glass rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-body-lg text-white/80 italic leading-relaxed">&ldquo;{c.quote}&rdquo;</p>
                <div>
                  <p className="text-label-md font-semibold text-orange">{c.role}</p>
                  <p className="text-body-sm text-white/40">{c.sector}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Quer um resultado parecido?" subheadline="Conte-nos seu desafio e agende um diagnóstico com nosso time." ctaLabel="Falar com especialista" ctaHref="/contato" />
    </>
  );
}
