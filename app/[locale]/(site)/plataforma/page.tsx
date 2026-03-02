import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Package, CheckCircle, Zap, Shield, BarChart2, Cpu, RefreshCw, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Plataforma FourBlox',
  description: 'Produtos digitais prontos por assinatura. Módulos configuráveis, entrega em 30 dias, sem projetos intermináveis.',
};

const MODULES = [
  {
    icon: Zap,
    title: 'Deploy Rápido',
    desc: 'Sua solução em produção em até 30 dias. Do diagnóstico ao Go Live com método e governança.',
    color: '#FF5315',
  },
  {
    icon: Package,
    title: 'Módulos por Assinatura',
    desc: 'Ative apenas o que precisa. Escale conforme o negócio cresce, sem custo de retrabalho.',
    color: '#0891B2',
  },
  {
    icon: RefreshCw,
    title: 'Evolução Contínua',
    desc: 'Novos módulos e funcionalidades entregues continuamente no modelo SaaS.',
    color: '#7C3AED',
  },
  {
    icon: Shield,
    title: 'Segurança e Compliance',
    desc: 'Arquitetura segura por design. Conformidade com LGPD, ISO 27001 e padrões regulatórios.',
    color: '#DC2626',
  },
  {
    icon: BarChart2,
    title: 'Analytics e Observabilidade',
    desc: 'Dashboards em tempo real, métricas de negócio e alertas configuráveis.',
    color: '#059669',
  },
  {
    icon: Users,
    title: 'Integração com Seu Time',
    desc: 'API-first. Integra com seus sistemas existentes via conectores e webhooks.',
    color: '#D97706',
  },
];

const PLANS = [
  {
    name: 'Starter',
    price: 'Sob consulta',
    description: 'Para empresas que querem lançar rápido com o essencial.',
    features: [
      'Até 3 módulos ativos',
      'Deploy em 30 dias',
      'Suporte via e-mail',
      'SLA 99% uptime',
      '1 ambiente de produção',
    ],
    cta: 'Começar agora',
    highlighted: false,
  },
  {
    name: 'Business',
    price: 'Sob consulta',
    description: 'Para operações em crescimento que precisam de escala e integrações.',
    features: [
      'Módulos ilimitados',
      'Deploy em 30 dias',
      'Suporte dedicado',
      'SLA 99,9% uptime',
      'Ambientes dev + prod',
      'Integrações via API',
      'Analytics avançado',
    ],
    cta: 'Falar com especialista',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    description: 'Para grandes organizações com requisitos de compliance e escala global.',
    features: [
      'Tudo do Business',
      'Infraestrutura dedicada',
      'SLA customizado',
      'Compliance e auditoria',
      'Treinamento de times',
      'Gerente de conta exclusivo',
    ],
    cta: 'Falar com o time',
    highlighted: false,
  },
];

const PROCESS = [
  { step: '01', title: 'Diagnóstico', desc: 'Mapeamos suas necessidades, integrações e objetivos em uma sessão estruturada.' },
  { step: '02', title: 'Arquitetura', desc: 'Definimos os módulos, integrações e a arquitetura da solução personalizada.' },
  { step: '03', title: 'Configuração', desc: 'Configuramos e personalizamos a plataforma conforme seu contexto de negócio.' },
  { step: '04', title: 'Go Live', desc: 'Lançamos em produção com acompanhamento, treinamento e suporte dedicado.' },
];

export default function PlataformaPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden pt-28 pb-20"
        style={{ background: 'linear-gradient(160deg, #050510 0%, #0A0A1F 50%, #0D0820 100%)' }}
        aria-label="FourBlox Plataforma"
      >
        {/* Background image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/fourblox-bg.png" alt="" fill className="object-cover opacity-25" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050510] via-[#050510]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]/50" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            {/* Logo */}
            <div className="mb-8">
              <span className="text-5xl lg:text-6xl font-black tracking-tight italic">
                <span className="text-white">Four</span>
                <span className="text-orange">Blox</span>
              </span>
            </div>

            <p className="text-label-lg text-orange font-bold uppercase tracking-widest mb-6">
              Plataforma de Soluções
            </p>

            <h1 className="text-display-md lg:text-display-lg text-white font-black leading-[1.05] mb-8">
              Produtos digitais prontos.{' '}
              <span className="text-orange">Sem projetos intermináveis.</span>
            </h1>

            <p className="text-body-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              Módulos configuráveis e prontos para produção em até 30 dias. Personalizados para o seu negócio, entregues com método e evoluindo continuamente por assinatura.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 whitespace-nowrap text-white font-bold text-body-lg px-8 py-4 rounded-pill active:scale-95 transition-all shadow-brand"
                style={{ background: 'linear-gradient(135deg, #FF5315 0%, #FF7A45 100%)' }}
              >
                Marcar uma demonstração
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
              <Link
                href="#modulos"
                className="inline-flex items-center gap-2 whitespace-nowrap text-white/80 font-semibold text-body-lg px-8 py-4 rounded-pill border border-white/20 hover:border-orange/50 hover:text-white transition-all"
              >
                Ver módulos
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
              {[
                { icon: Clock, text: 'Go Live em 30 dias' },
                { icon: CheckCircle, text: 'SLA garantido' },
                { icon: Cpu, text: 'API-first' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/50 text-body-sm">
                  <Icon className="w-4 h-4 text-orange flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section id="modulos" className="section-padding bg-gray-50" aria-label="Módulos da plataforma">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-label-lg text-orange font-bold uppercase tracking-widest mb-3">Capacidades</p>
            <h2 className="text-display-sm text-navy mb-4">O que a plataforma entrega</h2>
            <p className="text-body-xl text-gray-500 max-w-2xl mx-auto">
              Módulos pré-construídos e configuráveis. Ative o que precisa, integre com seus sistemas e evolua continuamente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.title}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange/20 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ background: `${mod.color}18` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: mod.color }} />
                  </div>
                  <h3 className="text-heading-md text-navy font-bold mb-2">{mod.title}</h3>
                  <p className="text-body-md text-gray-500 leading-relaxed">{mod.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(160deg, #0A0A1F 0%, #050510 100%)' }}
        aria-label="Processo de implementação"
      >
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-label-lg text-orange font-bold uppercase tracking-widest mb-3">Processo</p>
            <h2 className="text-display-sm text-white mb-4">Do diagnóstico ao Go Live</h2>
            <p className="text-body-xl text-white/60 max-w-xl mx-auto">
              Método estruturado em 4 etapas que garante entrega em 30 dias com risco controlado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <div key={step.step} className="relative">
                {/* Linha conectora */}
                {i < PROCESS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full w-full h-[2px] z-0"
                    style={{
                      background: 'linear-gradient(to right, #FF5315, transparent)',
                      width: 'calc(100% - 2rem)',
                      left: 'calc(100% - 1rem)',
                    }}
                  />
                )}
                <div
                  className="relative z-10 rounded-2xl p-7 border border-white/10 hover:border-orange/30 transition-all"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div
                    className="text-4xl font-black mb-4 leading-none"
                    style={{ color: '#FF5315', textShadow: '0 0 20px rgba(255,83,21,0.3)' }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-heading-md text-white font-bold mb-3">{step.title}</h3>
                  <p className="text-body-md text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="section-padding bg-white" aria-label="Planos e preços">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-label-lg text-orange font-bold uppercase tracking-widest mb-3">Planos</p>
            <h2 className="text-display-sm text-navy mb-4">Escolha o modelo certo</h2>
            <p className="text-body-xl text-gray-500 max-w-xl mx-auto">
              Assinatura mensal previsível. Escale conforme a demanda sem surpresas de orçamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-orange shadow-brand scale-105'
                    : 'border-gray-100 hover:border-orange/30 hover:shadow-card'
                }`}
                style={plan.highlighted ? { background: 'linear-gradient(135deg, #1A1A2E 0%, #222239 100%)' } : {}}
              >
                {plan.highlighted && (
                  <span className="inline-block text-label-sm text-white font-bold bg-orange px-3 py-1 rounded-pill mb-4">
                    Mais popular
                  </span>
                )}
                <h3 className={`text-heading-xl font-black mb-1 ${plan.highlighted ? 'text-white' : 'text-navy'}`}>
                  {plan.name}
                </h3>
                <p className={`text-display-sm font-black mb-2 ${plan.highlighted ? 'text-orange' : 'text-navy'}`}>
                  {plan.price}
                </p>
                <p className={`text-body-md mb-7 ${plan.highlighted ? 'text-white/60' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-start gap-2.5 text-body-md ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                      <CheckCircle className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contato"
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="lg"
                  fullWidth
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #222239 0%, #2D2D54 50%, #FF5315 100%)' }}
        aria-label="Chamada para ação"
      >
        <div className="container-site text-center">
          <h2 className="text-display-sm text-white font-black mb-4">
            Pronto para lançar em 30 dias?
          </h2>
          <p className="text-body-xl text-white/70 mb-10 max-w-xl mx-auto">
            Fale com nosso time e receba um diagnóstico gratuito de como o FourBlox pode acelerar sua operação digital.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-white text-navy font-bold text-body-lg px-8 py-4 rounded-pill hover:bg-gray-50 active:scale-95 transition-all"
            >
              Marcar uma demonstração
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/solucoes/fourblox"
              className="inline-flex items-center gap-2 text-white font-semibold text-body-lg px-8 py-4 rounded-pill border border-white/30 hover:border-white/60 transition-all"
            >
              Ver oferta FourBlox
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
