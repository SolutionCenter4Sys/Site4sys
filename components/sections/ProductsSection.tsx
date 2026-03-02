'use client';
import Link from 'next/link';
import Image from 'next/image';
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
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #050510 0%, #0A0A1F 40%, #0D0820 100%)' }}
      aria-label="FourBlox — Produtos por Assinatura"
    >
      {/* Background image — cubos laranjas */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/fourblox-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-80"
          sizes="100vw"
          unoptimized
          priority={false}
        />
        {/* Gradiente esquerdo — protege o texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050510] via-[#050510]/70 to-transparent" />
        {/* Gradiente inferior — transição suave com próxima seção */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]/40" />
      </div>

      <div className="container-site relative z-10">
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12 items-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Lado esquerdo — conteúdo */}
          <div className="lg:col-span-3">
            {/* Logo FourBlox */}
            <div className="mb-14">
              <span className="text-5xl lg:text-6xl font-black tracking-tight italic">
                <span className="text-white">Four</span>
                <span className="text-orange">Blox</span>
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-display-md lg:text-display-lg text-white font-black leading-[1.08] mb-12">
              Chega de projetos intermináveis.{' '}
              Sua solução digital pronta em{' '}
              <span className="text-orange">30 dias.</span>
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {TAGS.map(tag => (
                <span
                  key={tag}
                  className="px-6 py-3 rounded-xl border border-orange/50 text-white text-body-md font-semibold hover:border-orange transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs — mesmo estilo visual do hero (pill, font-bold, whitespace-nowrap) */}
            <div className="flex flex-row gap-4">
              <Link
                href="/solucoes/fourblox"
                className="inline-flex items-center gap-2 whitespace-nowrap text-white font-bold text-body-lg px-8 py-3.5 rounded-pill active:scale-95 transition-all shadow-brand"
                style={{ background: 'linear-gradient(135deg, #FF5315 0%, #FF7A45 100%)' }}
              >
                Marcar uma demonstração
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
              <Link
                href="/solucoes/fourblox"
                className="inline-flex items-center gap-2 whitespace-nowrap text-white font-bold text-body-lg px-8 py-3.5 rounded-pill active:scale-95 transition-all shadow-brand"
                style={{ background: 'linear-gradient(135deg, #FF5315 0%, #FF7A45 100%)' }}
              >
                Plataforma de Soluções
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
            </div>
          </div>

          {/* Lado direito — processo vertical */}
          <div
            className={cn(
              'lg:col-span-2 flex justify-center lg:justify-end transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
          >
            <div
              className="relative rounded-2xl px-10 py-10 w-full max-w-xs"
              style={{
                background: 'linear-gradient(170deg, rgba(8,25,50,0.9) 0%, rgba(5,10,30,0.95) 100%)',
                border: '1px solid rgba(56,189,248,0.15)',
                boxShadow: '0 0 80px rgba(56,189,248,0.04), inset 0 1px 0 rgba(255,255,255,0.03)',
              }}
            >
              <div className="relative z-10 flex flex-col items-center">
                {STEPS.map((step, i) => {
                  const Icon = step.icon;
                  const isLast = i === STEPS.length - 1;
                  return (
                    <div key={step.label} className="flex flex-col items-center">
                      {/* Ícone com glow */}
                      <div className="relative">
                        <div
                          className="absolute -inset-2 rounded-full"
                          style={{ background: 'radial-gradient(circle, rgba(255,83,21,0.25) 0%, transparent 70%)' }}
                        />
                        <div
                          className="relative w-14 h-14 rounded-full flex items-center justify-center"
                          style={{
                            background: 'radial-gradient(circle at 30% 30%, rgba(255,122,69,0.12) 0%, rgba(255,83,21,0.04) 100%)',
                            border: '2.5px solid #FF5315',
                            boxShadow: '0 0 12px rgba(255,83,21,0.35), 0 0 24px rgba(255,83,21,0.12), inset 0 0 10px rgba(255,83,21,0.08)',
                          }}
                        >
                          <Icon className="w-6 h-6 text-orange" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Label */}
                      <p className="text-lg text-white font-semibold mt-2 tracking-tight text-center">
                        {step.label}
                      </p>

                      {/* Linha conectora ENTRE os ícones (não atravessa) */}
                      {!isLast && (
                        <div
                          className="w-[3px] h-8 my-2 rounded-full"
                          style={{
                            background: 'linear-gradient(to bottom, #FF5315, #FF7A45)',
                            boxShadow: '0 0 8px rgba(255,83,21,0.5), 0 0 16px rgba(255,83,21,0.2)',
                          }}
                        />
                      )}
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
