'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { METRICS } from '@/mocks/index';

export function HeroHome() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero"
      aria-label="Hero — Foursys"
    >
      {/* Geometric background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-light/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/3 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/3 rounded-full" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-site relative z-10 pt-28 pb-16 flex flex-col items-start">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-orange/15 border border-orange/30 mb-8 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse-slow" />
          <span className="text-label-md text-orange font-semibold tracking-wide">25 anos transformando negócios com tecnologia</span>
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-display-xl text-white max-w-4xl leading-[1.05] mb-6 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Squads que entregam{' '}
          <span className="text-gradient-orange">valor em semanas,</span>
          {' '}não em meses.
        </h1>

        {/* Subheadline */}
        <p
          className={`text-body-lg sm:text-body-xl text-white/70 max-w-2xl leading-relaxed mb-10 transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Parceiro estratégico de transformação digital com agilidade, proximidade e resultados mensuráveis. 3,6% turnover. GPTW. 25 anos de história.
        </p>

        {/* Enterprise trust strip */}
        <div
          className={`glass rounded-2xl px-5 py-4 mb-10 w-full max-w-3xl transition-all duration-700 delay-[250ms] ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-2 text-body-sm text-white/85 font-semibold">
              <ShieldCheck className="w-4 h-4 text-orange" />
              Governança enterprise desde a primeira sprint
            </span>
            <span className="text-body-sm text-white/60">Brasil • EUA • Portugal</span>
            <span className="text-body-sm text-white/60">Setores regulados e missão crítica</span>
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Button href="/contato" variant="primary" size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
            Fale com um especialista
          </Button>
          <Button href="/casos-de-sucesso" variant="outline" size="xl">
            Ver casos de sucesso
          </Button>
        </div>

        {/* Metrics bar */}
        <div
          className={`w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {METRICS.map((metric) => (
            <div key={metric.id} className="glass rounded-xl p-4 flex flex-col gap-1">
              <span className="text-display-sm text-white font-extrabold leading-none">{metric.value}</span>
              <p className="text-body-md text-white/80 font-medium mt-1">{metric.label}</p>
              {metric.sublabel && <p className="text-body-sm text-white/40">{metric.sublabel}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}
