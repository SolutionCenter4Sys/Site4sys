'use client';
import { TrendingUp, Users, Clock, Calendar, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { CERTIFICATIONS } from '@/mocks/index';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar, Users, Clock, TrendingUp, CheckCircle,
};

const METRICS = [
  { value: '25', suffix: ' anos', label: 'de história e entrega', icon: 'Calendar' },
  { value: '3,6', suffix: '%', label: 'turnover — Great Place to Work', icon: 'Users' },
  { value: '3M', suffix: '+', label: 'horas entregues por ano', icon: 'Clock' },
  { value: '+20', suffix: '%', label: 'crescimento anual consistente', icon: 'TrendingUp' },
];

export function MetricsSection() {
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="bg-gradient-dark py-20" aria-label="Números e credenciais">
      <div className="container-site">
        {/* Metrics */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-14 border-b border-white/10 mb-14"
        >
          {METRICS.map((m, i) => {
            const Icon = ICON_MAP[m.icon];
            return (
              <div
                key={m.label}
                className={cn(
                  'flex flex-col gap-2 transition-all duration-700',
                  metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {Icon && <Icon className="w-5 h-5 text-orange flex-shrink-0" />}
                  <span className="text-display-sm text-white font-extrabold">
                    {m.value}<span className="text-orange">{m.suffix}</span>
                  </span>
                </div>
                <p className="text-body-md text-white/60 leading-snug">{m.label}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div ref={certsRef}>
          <p
            className={cn(
              'text-label-md text-white/40 uppercase tracking-widest mb-6 text-center transition-all duration-700',
              certsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Certificações e Reconhecimentos
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={cert.id}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-pill bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange/30 transition-all duration-700',
                  certsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                )}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <CheckCircle className="w-3.5 h-3.5 text-orange" />
                <span className="text-label-md text-white/80 font-semibold">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
