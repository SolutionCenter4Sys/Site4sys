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
              className="rounded-2xl p-8 lg:p-10 border border-orange/20"
              style={{ background: 'linear-gradient(135deg, rgba(255,83,21,0.08) 0%, rgba(15,10,30,0.6) 100%)', backdropFilter: 'blur(12px)' }}
            >
              <div className="space-y-0">
                {STEPS.map((step, i) => {
                  const Icon = step.icon;
                  const isLast = i === STEPS.length - 1;
                  return (
                    <div key={step.label} className="flex items-start gap-5">
                      {/* Ícone + linha conectora */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center bg-orange/10">
                          <Icon className="w-5 h-5 text-orange" />
                        </div>
                        {!isLast && (
                          <div className="w-px h-10 bg-orange/30 my-1" />
                        )}
                      </div>
                      {/* Label */}
                      <div className={cn('pt-3', !isLast && 'pb-10')}>
                        <p className="text-heading-md text-white font-semibold">{step.label}</p>
                      </div>
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
