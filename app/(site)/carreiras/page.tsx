import type { Metadata } from 'next';
import { Award, Users, TrendingUp, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { Kicker } from '@/components/ui/Kicker';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Carreiras',
  description: 'Trabalhe no coração da transformação digital. Great Place to Work, 3,6% turnover, crescimento contínuo. Veja as vagas da Foursys.',
};

const BENEFITS = [
  { icon: '🏆', title: 'Great Place to Work', desc: '5 anos consecutivos de reconhecimento.' },
  { icon: '📈', title: 'Crescimento real', desc: 'Plano de carreira estruturado e mentoria.' },
  { icon: '🌍', title: 'Projetos globais', desc: 'Atuação no Brasil, EUA e Portugal.' },
  { icon: '🤖', title: 'IA no dia a dia', desc: 'Ferramentas de IA para ser mais produtivo.' },
  { icon: '🎓', title: 'Aprendizado contínuo', desc: 'Budget para certificações e cursos.' },
  { icon: '💚', title: 'FourLives', desc: 'Impacto social e ambiental real.' },
];

const MOCK_JOBS = [
  { id: '1', title: 'Engenheiro(a) de Software Sênior', area: 'Engenharia', location: 'São Paulo / Remoto', type: 'CLT', offer: 'Squads Híbridas' },
  { id: '2', title: 'Tech Lead Full Stack', area: 'Engenharia', location: 'São Paulo / Remoto', type: 'CLT', offer: 'Squads Híbridas' },
  { id: '3', title: 'Especialista em IA Generativa', area: 'IA & Dados', location: 'São Paulo / Remoto', type: 'CLT', offer: 'IA com ROI' },
  { id: '4', title: 'Arquiteto(a) de Solução Cloud', area: 'Arquitetura', location: 'Híbrido', type: 'CLT', offer: 'Modernização de Legado' },
  { id: '5', title: 'Analista de Cibersegurança', area: 'Segurança', location: 'São Paulo', type: 'CLT', offer: 'Cibersegurança & Zero Trust' },
  { id: '6', title: 'Product Manager', area: 'Produto', location: 'São Paulo / Remoto', type: 'CLT', offer: 'Produtos & Plataformas' },
  { id: '7', title: 'Engenheiro(a) de Dados Sênior', area: 'IA & Dados', location: 'Remoto', type: 'CLT', offer: 'Dados & Inteligência' },
  { id: '8', title: 'Scrum Master / Agile Coach', area: 'Agilidade', location: 'São Paulo / Híbrido', type: 'CLT', offer: 'Agilidade & Org Design' },
];

export default function CarreirasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark pt-32 pb-20" aria-label="Carreiras Foursys">
        <div className="container-site">
          <Breadcrumb items={[{ label: 'Carreiras' }]} light className="mb-8" />
        </div>
        <div className="container-site text-center">
          <Kicker light className="mb-4">Trabalhe conosco</Kicker>
          <h1 className="text-display-md text-white mb-6">
            Trabalhe no coração da transformação digital
          </h1>
          <p className="text-body-xl text-white/70 max-w-2xl mx-auto mb-8">
            Equipe estável (3,6% turnover), GPTW, projetos de impacto real. Se você quer crescer junto com os clientes — a Foursys é o lugar certo.
          </p>
          <Button href="#vagas" variant="primary" size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
            Ver vagas abertas
          </Button>
        </div>
      </section>

      {/* Por que Foursys */}
      <section className="section-padding bg-white" aria-label="Por que trabalhar na Foursys">
        <div className="container-site">
          <div className="text-center mb-10">
            <Kicker className="mb-3">Por que a Foursys</Kicker>
            <h2 className="text-display-sm text-navy">Benefícios e cultura</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {BENEFITS.map(b => (
              <div key={b.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-card transition-shadow">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="text-heading-sm text-navy mb-1">{b.title}</h3>
                <p className="text-body-md text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section-padding bg-navy" aria-label="Números de cultura">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '3,6%', label: 'turnover', sub: 'vs. ~20% do mercado' },
              { value: '5×', label: 'GPTW', sub: 'consecutivos' },
              { value: '90%', label: 'de promoções', sub: 'internas' },
              { value: 'NPS +72', label: 'satisfação equipe', sub: 'pesquisa interna 2025' },
            ].map(m => (
              <div key={m.label}>
                <p className="text-display-sm text-orange font-extrabold">{m.value}</p>
                <p className="text-body-md text-white font-semibold">{m.label}</p>
                <p className="text-body-sm text-white/40">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vagas */}
      <section id="vagas" className="section-padding bg-gray-50" aria-label="Vagas abertas">
        <div className="container-site">
          <div className="text-center mb-10">
            <Kicker className="mb-3">Oportunidades</Kicker>
            <h2 className="text-display-sm text-navy">Vagas abertas</h2>
            <p className="text-body-lg text-gray-500 mt-2">{MOCK_JOBS.length} vagas disponíveis</p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {MOCK_JOBS.map(job => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-orange/30 hover:shadow-card transition-all duration-200 flex items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <p className="text-heading-sm text-navy">{job.title}</p>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    <span className="text-body-sm text-gray-400">{job.area}</span>
                    <span className="text-gray-200">·</span>
                    <span className="text-body-sm text-gray-400">{job.location}</span>
                    <span className="text-gray-200">·</span>
                    <span className="text-body-sm text-gray-400">{job.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-label-sm text-orange font-semibold hidden md:block">{job.offer}</span>
                  <Button href="/contato" variant="outline" size="sm">
                    Aplicar
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-body-md text-gray-500 mb-3">Não encontrou a vaga certa?</p>
            <Button href="/contato" variant="secondary" size="md">
              Envie seu currículo
            </Button>
          </div>
        </div>
      </section>

      <CTASection headline="Faça parte da Foursys" subheadline="Trabalhe em projetos de impacto real, com uma equipe que valoriza crescimento e resultado." ctaLabel="Enviar currículo" ctaHref="/contato" ctaSecondaryLabel="Conheça nossa cultura" ctaSecondaryHref="/sobre" />
    </>
  );
}
