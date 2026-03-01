import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, Leaf, Heart, BookOpen } from 'lucide-react';
import { Kicker } from '@/components/ui/Kicker';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CERTIFICATIONS, FOURLIVES_STATS, FOURLIVES_PILLARS } from '@/mocks/index';

export const metadata: Metadata = {
  title: 'Sobre a Foursys',
  description: '25 anos de transformação digital. Parceiro estratégico com turnover de 3,6%, GPTW e certificações ISO. Conheça nossa história e propósito.',
};

const TIMELINE = [
  { year: '2000', event: 'Fundação em São Paulo. Primeiros contratos de desenvolvimento e consultoria.' },
  { year: '2005', event: 'Expansão para setores financeiro e saúde. Primeiras certificações ISO.' },
  { year: '2010', event: 'Adoção de metodologias ágeis. Certificação SAFe e programa de qualidade.' },
  { year: '2015', event: 'Lançamento do FourLives. Internacionalização com abertura de escritório nos EUA.' },
  { year: '2018', event: 'Primeiro GPTW. Expansão para Portugal. Consolidação em IA e dados.' },
  { year: '2022', event: 'Lançamento das Squads Híbridas (humanos + IA). Crescimento de +20%.' },
  { year: '2025', event: '25 anos. +3M horas entregues/ano. 3,6% turnover. Referência em transformação digital.' },
];

const VALUES = [
  { icon: '🎯', title: 'Resultados com propósito', desc: 'Entregamos valor mensurável, não apenas horas.' },
  { icon: '🤝', title: 'Parceria de longo prazo', desc: 'Construímos relações duradouras com nossos clientes.' },
  { icon: '⚡', title: 'Agilidade responsável', desc: 'Velocidade com governança, qualidade e segurança.' },
  { icon: '🌱', title: 'Impacto além do negócio', desc: 'Tecnologia como ferramenta de transformação social.' },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-dark pt-32 pb-20" aria-label="Sobre a Foursys">
        <div className="container-site">
          <Breadcrumb items={[{ label: 'Sobre' }]} light className="mb-8" />
        </div>
        <div className="container-site text-center">
          <Kicker light className="mb-4">Sobre a Foursys</Kicker>
          <h1 className="text-display-md text-white mb-6">
            25 anos entregando transformação digital com resultado
          </h1>
          <p className="text-body-xl text-white/70 max-w-2xl mx-auto">
            Fundada em 2000, a Foursys é um parceiro estratégico de tecnologia com presença no Brasil, EUA e Portugal — combinando agilidade de uma empresa próxima com capacidade global.
          </p>
        </div>
      </section>

      {/* Métricas rápidas */}
      <section className="bg-white py-12 border-b border-gray-100" aria-label="Números Foursys">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '25', label: 'anos de história', icon: '🗓️' },
              { value: '3,6%', label: 'turnover — GPTW', icon: '⭐' },
              { value: '3M+', label: 'horas/ano entregues', icon: '⚡' },
              { value: '3', label: 'países de atuação', icon: '🌍' },
            ].map(m => (
              <div key={m.label} className="text-center">
                <div className="text-3xl mb-2">{m.icon}</div>
                <p className="text-display-sm text-navy font-extrabold">{m.value}</p>
                <p className="text-body-sm text-gray-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="section-padding bg-gray-50" aria-label="Missão, visão e valores">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '🎯',
                title: 'Missão',
                text: 'Empoderar organizações com tecnologia de alta qualidade, entregando projetos que transformam negócios e geram impacto mensurável.',
              },
              {
                icon: '🔭',
                title: 'Visão',
                text: 'Ser o parceiro estratégico de tecnologia mais confiável da América Latina, reconhecido pela qualidade, agilidade e impacto dos seus resultados.',
              },
              {
                icon: '💡',
                title: 'Propósito',
                text: 'Usar tecnologia como ferramenta de transformação real — no negócio dos nossos clientes e na vida das pessoas.',
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h2 className="text-heading-lg text-navy mb-3">{item.title}</h2>
                <p className="text-body-lg text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Valores */}
          <div>
            <div className="text-center mb-8">
              <Kicker className="mb-3">Cultura Foursys</Kicker>
              <h2 className="text-display-sm text-navy">Nossos valores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {VALUES.map(v => (
                <div key={v.title} className="bg-white rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                  <div className="text-4xl mb-3">{v.icon}</div>
                  <h3 className="text-heading-md text-navy mb-2">{v.title}</h3>
                  <p className="text-body-md text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white" aria-label="Nossa história">
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Kicker className="mb-3">Nossa história</Kicker>
            <h2 className="text-display-sm text-navy">25 anos de evolução</h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true" />
            <div className="space-y-8">
              {TIMELINE.map(item => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="w-12 text-right flex-shrink-0">
                    <span className="text-label-md font-bold text-orange">{item.year}</span>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-orange border-4 border-white shadow-sm z-10 relative" />
                  </div>
                  <p className="text-body-lg text-gray-600 leading-relaxed pt-0.5">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="section-padding bg-gray-50" aria-label="Certificações e premiações">
        <div className="container-site">
          <div className="text-center mb-10">
            <Kicker className="mb-3">Credenciais</Kicker>
            <h2 className="text-display-sm text-navy">Certificações e reconhecimentos</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CERTIFICATIONS.map(cert => (
              <div key={cert.id} className="bg-white rounded-xl p-5 shadow-card text-center hover:shadow-card-hover transition-shadow">
                <CheckCircle className="w-8 h-8 text-orange mx-auto mb-3" />
                <p className="text-heading-sm text-navy font-bold mb-1">{cert.name}</p>
                <p className="text-body-sm text-gray-500">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FourLives */}
      <section id="fourlives" className="section-padding" style={{ background: 'linear-gradient(135deg, #F0FAF8, #E8F8F5)' }} aria-label="FourLives">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Kicker className="mb-4">ESG e Impacto Social</Kicker>
              <h2 className="text-display-sm text-navy mb-4">FourLives</h2>
              <p className="text-body-xl text-gray-600 mb-6 leading-relaxed">
                O FourLives é nossa iniciativa de impacto que nasceu da crença de que empresas de tecnologia têm responsabilidade sobre o ecossistema onde atuam. Plantamos uma árvore por profissional a cada ano e investimos em capacitação e inclusão.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {FOURLIVES_STATS.map(s => (
                  <div key={s.value} className="bg-white rounded-xl p-4 shadow-card">
                    <p className="text-display-sm font-extrabold text-mint-dark">{s.value}</p>
                    <p className="text-body-sm text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {FOURLIVES_PILLARS.map(p => (
                <div key={p.title} className="bg-white rounded-xl p-6 shadow-card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mint/20 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-mint-dark" />
                  </div>
                  <div>
                    <h3 className="text-heading-md text-navy mb-1">{p.title}</h3>
                    <p className="text-body-md text-gray-500">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Quer conhecer mais sobre a Foursys?" subheadline="Agende uma conversa com nosso time." ctaLabel="Fale conosco" ctaHref="/contato" ctaSecondaryLabel="Ver vagas abertas" ctaSecondaryHref="/carreiras" />
    </>
  );
}
