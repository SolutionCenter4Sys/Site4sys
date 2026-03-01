'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { METRICS, CERTIFICATIONS } from '@/mocks/index';

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
        {/* Badge — 25 anos */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-orange/15 border border-orange/30 mb-8 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse-slow" />
          <span className="text-label-md text-orange font-semibold tracking-wide">25 anos transformando negócios com tecnologia</span>
        </div>

        {/* Headline — mais direto ao benefício (inspiração Conversion.com) */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-display-xl text-white max-w-4xl leading-[1.05] mb-5 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Squads que entregam{' '}
          <span className="text-gradient-orange">valor em semanas,</span>
          {' '}não em meses.
        </h1>

        {/* Tagline institucional + proof points (material 2026 V9.01) */}
        <p
          className={`text-body-lg sm:text-body-xl text-white/90 max-w-2xl leading-relaxed mb-3 transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Soluções digitais que conectam estratégia, execução e evolução.
        </p>
        <p
          className={`text-body-md text-white/60 max-w-xl mb-8 transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Governança enterprise. 3,6% turnover. 25 anos de entrega.
        </p>

        {/* Trust badges — chips separados (menos densidade) */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-[250ms] ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-body-sm text-white/90 font-medium">
            <ShieldCheck className="w-4 h-4 text-orange flex-shrink-0" />
            Governança desde a sprint 1
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-body-sm text-white/80">
            <MapPin className="w-4 h-4 text-orange/80 flex-shrink-0" />
            Brasil • EUA • Portugal
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-body-sm text-white/80">
            <Building2 className="w-4 h-4 text-orange/80 flex-shrink-0" />
            Setores regulados e missão crítica
          </span>
        </div>

        {/* CTA primário único em destaque + link secundário (CRO) */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center gap-4 mb-4 transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Button href="/contato" variant="primary" size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
            Agendar diagnóstico gratuito
          </Button>
          <Link
            href="/casos-de-sucesso"
            className="text-body-lg text-white/70 hover:text-white underline underline-offset-4 transition-colors sm:ml-2"
          >
            Ver casos de sucesso
          </Link>
        </div>
        <p className="text-body-sm text-white/50 mb-12">Diagnóstico gratuito • Resposta em 24h • Sem compromisso</p>

        {/* Metrics bar — 6 métricas (PDF institucional) */}
        <div
          className={`w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {METRICS.map((metric) => (
            <div key={metric.id} className="glass rounded-xl p-4 flex flex-col gap-1">
              <span className="text-display-sm text-white font-extrabold leading-none">{metric.value}</span>
              <p className="text-body-md text-white/80 font-medium mt-1">{metric.label}</p>
              {metric.sublabel && <p className="text-body-sm text-white/40">{metric.sublabel}</p>}
            </div>
          ))}
        </div>

        {/* Trust badges — certificações above the fold (CRO) */}
        <div
          className={`flex flex-wrap justify-start gap-2 mt-6 transition-all duration-700 delay-[600ms] ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {CERTIFICATIONS.slice(0, 6).map((cert) => (
            <span
              key={cert.id}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-body-sm text-white/80 font-medium"
            >
              <span className="w-4 h-4 rounded-full bg-orange/20 text-orange text-[10px] font-bold flex items-center justify-center flex-shrink-0">✓</span>
              {cert.name}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}
