'use client';
import Link from 'next/link';
import { ArrowRight, Search, Brain, Settings, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const STEPS = [
  { icon: Search, label: 'Diagnóstico' },
  { icon: Brain, label: 'Arquitetura' },
  { icon: Settings, label: 'Configuração' },
  { icon: Rocket, label: 'Go Live' },
];

const TAGS = ['Personalizado', 'Por Assinatura', 'Modular'];

export function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ background: 'linear-gradient(135deg, #0A0A1A 0%, #111128 60%, #1A0D2E 100%)' }}
      aria-label="FourBlox — Produtos por Assinatura"
    >
      <div className="container-site">
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Lado esquerdo — conteúdo */}
          <div>
            {/* Logo FourBlox */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-white font-black text-2xl tracking-tight">
                Four<span className="text-orange">Blox</span>
              </span>
            </div>

            {/* Kicker */}
            <p className="text-label-md text-orange font-bold uppercase tracking-widest mb-4">
              FOURBLOX
            </p>

            {/* Headline */}
            <h2 className="text-display-sm lg:text-display-md text-white font-black leading-tight mb-6">
              Chega de projetos<br />
              intermináveis. Sua solução<br />
              digital pronta em{' '}
              <span className="text-orange">30 dias.</span>
            </h2>

            {/* Divisor */}
            <div className="w-16 h-px bg-white/20 mb-8" />

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {TAGS.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-orange/60 text-white text-body-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/solucoes/fourblox"
              className="inline-flex items-center gap-2 bg-orange text-white font-bold text-body-md px-6 py-3.5 rounded-xl hover:bg-orange-dark active:scale-95 transition-all"
            >
              Agendar Diagnóstico
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Lado direito — processo em 4 etapas */}
          <div
            className={cn(
              'transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
          >
            <div
              className="relative rounded-2xl p-10 lg:p-12 border border-cyan-500/20"
              style={{
                background: 'linear-gradient(160deg, rgba(6,30,50,0.95) 0%, rgba(10,15,35,0.98) 100%)',
                boxShadow: '0 0 60px rgba(6,182,212,0.06), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Linha vertical contínua */}
              <div
                className="absolute left-[3.25rem] lg:left-[3.75rem] top-[4.5rem] bottom-[4.5rem] w-[3px] rounded-full"
                style={{ background: 'linear-gradient(to bottom, #FF5315 0%, #FF7A45 50%, #FF5315 100%)' }}
              />

              <div className="relative z-10 flex flex-col gap-10">
                {STEPS.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="flex items-center gap-6 group">
                      {/* Ícone com glow */}
                      <div
                        className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,83,21,0.15) 0%, rgba(255,83,21,0.05) 100%)',
                          border: '2.5px solid #FF5315',
                          boxShadow: '0 0 20px rgba(255,83,21,0.25), 0 0 40px rgba(255,83,21,0.1)',
                        }}
                      >
                        <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-orange" strokeWidth={1.5} />
                      </div>
                      {/* Label */}
                      <p className="text-xl lg:text-2xl text-white font-semibold tracking-tight group-hover:text-orange transition-colors">
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
