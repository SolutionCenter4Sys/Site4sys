import type { Metadata } from 'next';
import { Kicker } from '@/components/ui/Kicker';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CasosPageClient } from '@/components/cases/CasosPageClient';
import { InlineLeadForm } from '@/components/sections/InlineLeadForm';
import { FAQSection } from '@/components/sections/FAQSection';
import { StickyMobileCTA } from '@/components/ui/StickyMobileCTA';

export const metadata: Metadata = {
  title: 'Casos de Sucesso',
  description:
    'Veja como a Foursys transformou empresas do setor financeiro, saúde, seguros e varejo. Resultados reais: Problema → Solução → Impacto mensurável.',
};

const GLOBAL_METRICS = [
  { value: '100+', label: 'projetos desbloqueados' },
  { value: '85%',  label: 'redução de tempo médio' },
  { value: '40%',  label: 'redução de custo operacional' },
  { value: '82%',  label: 'previsibilidade de entrega' },
];

const TRUST_CERTS = ['ISO 9001', 'ISO 27001', 'ISO 27701', 'ISO 14001', 'SAFe', 'GPTW'];

export default function CasosPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-dark pt-32 pb-20" aria-label="Casos de sucesso">
        <div className="container-site">
          <Breadcrumb items={[{ label: 'Casos de Sucesso' }]} light className="mb-8" />
        </div>

        <div className="container-site text-center">
          <Kicker light className="mb-4">+100 empresas transformadas</Kicker>

          {/* Headline JTBD — orientada ao decisor enterprise */}
          <h1 className="text-4xl sm:text-display-md lg:text-display-lg font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Mostre ao seu board que{' '}
            <span className="text-gradient-orange">tecnologia entrega ROI</span>
            {' '}— em semanas
          </h1>

          <p className="text-body-xl text-white/65 max-w-2xl mx-auto">
            Cada caso segue o formato Problema → Solução → Impacto mensurável.
            Não contamos histórias — mostramos números.
          </p>
        </div>
      </section>

      {/* ── MÉTRICAS GLOBAIS ─────────────────────────────────────── */}
      <section className="bg-white py-12 border-b border-gray-100" aria-label="Impacto global">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {GLOBAL_METRICS.map(m => (
              <div key={m.label}>
                <p className="text-display-sm text-orange font-extrabold leading-none">{m.value}</p>
                <p className="text-body-sm text-gray-400 mt-1.5">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS ── FILTRO FUNCIONAL + GRID ─────────────────────── */}
      <section className="section-padding bg-gray-50" aria-label="Todos os casos">
        <div className="container-site">
          <CasosPageClient />
        </div>
      </section>

      {/* ── URGÊNCIA + CERTIFICAÇÕES ─────────────────────────────── */}
      <section className="py-12 bg-white border-y border-gray-100" aria-label="Credenciais">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Urgência autêntica */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="text-body-md text-gray-600">
                <strong className="text-navy">Diagnósticos Q2 2026</strong> — vagas abertas para os próximos 30 dias
              </p>
            </div>

            {/* Certificações */}
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-end">
              {TRUST_CERTS.map(cert => (
                <span
                  key={cert}
                  className="px-3 py-1 rounded-lg bg-gray-50 border border-gray-200 text-label-sm font-semibold text-gray-500"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ──────────────────────────────────────────── */}
      <section className="section-padding bg-navy" aria-label="Depoimentos de clientes">
        <div className="container-site">
          <div className="text-center mb-12">
            <Kicker light className="mb-3">O que dizem</Kicker>
            <h2 className="text-display-sm font-bold text-white">
              Clientes que recomendam
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'A Foursys entendeu o contexto e o risco do negócio antes de propor qualquer solução. Isso fez toda a diferença.',
                role: 'CIO',
                company: 'Operadora de Saúde',
                sector: 'Saúde',
              },
              {
                quote: 'A estabilidade e comprometimento do time Foursys surpreendeu. Virou parte do nosso squad permanente.',
                role: 'CTO',
                company: 'Fintech de Crédito',
                sector: 'Financeiro',
              },
              {
                quote: 'Saímos de 6 pilotos de IA sem resultado para um caso real com ROI calculado em 6 semanas.',
                role: 'Head de Operações',
                company: 'Seguradora',
                sector: 'Seguros',
              },
            ].map((t, i) => (
              <div key={i} className="glass rounded-2xl p-7 flex flex-col gap-5">
                <blockquote className="flex-1">
                  <p className="text-body-lg text-white/80 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-orange flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-label-md">{t.role[0]}</span>
                  </div>
                  <div>
                    <p className="text-label-md font-bold text-white">{t.role}</p>
                    <p className="text-body-sm text-white/40">{t.company} · {t.sector}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO INLINE ─────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-label="Agendar diagnóstico">
        <div className="container-site max-w-2xl">
          <InlineLeadForm />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── CTA FINAL ─────────────────────────────────────────────── */}
      <CTASection
        headline="Pronto para ser o próximo caso de sucesso?"
        subheadline="Diagnóstico gratuito · Resposta em 24h · Sem compromisso"
        ctaLabel="Agendar diagnóstico gratuito"
        ctaHref="/contato"
      />

      {/* ── STICKY MOBILE CTA ─────────────────────────────────────── */}
      <StickyMobileCTA />
    </>
  );
}
