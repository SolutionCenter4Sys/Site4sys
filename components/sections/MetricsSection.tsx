'use client';
import { TrendingUp, Users, Clock, Calendar, CheckCircle, FolderCheck, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { CERTIFICATIONS, AWARDS } from '@/mocks/index';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar, Users, Clock, TrendingUp, CheckCircle, FolderCheck, Award,
};

const METRICS = [
  { value: '25', suffix: ' anos', label: 'de história e entrega', icon: 'Calendar' },
  { value: '3,6', suffix: '%', label: 'turnover — Great Place to Work', icon: 'Users' },
  { value: '500K', suffix: '+', label: 'projetos entregues', icon: 'FolderCheck' },
  { value: '2K', suffix: '+', label: 'colaboradores', icon: 'Users' },
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pb-14 border-b border-white/10 mb-14"
        >
          {METRICS.map((m, i) => {
            const Icon = ICON_MAP[m.icon];
            return (
              <div
                key={m.label}
                className={cn(
                  'flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange/30 hover:scale-[1.02] transition-all duration-300 group',
                  metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {Icon && <Icon className="w-6 h-6 text-orange flex-shrink-0 group-hover:scale-110 transition-transform" />}
                  <span className="text-3xl sm:text-4xl lg:text-display-sm text-white font-extrabold group-hover:text-orange-light transition-colors">
                    {m.value}<span className="text-orange">{m.suffix}</span>
                  </span>
                </div>
                <p className="text-body-md text-white/70 font-medium leading-snug">{m.label}</p>
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

          {/* Premiações (PDF institucional) */}
          <div className="mt-12">
            <p
              className={cn(
                'text-label-md text-white/40 uppercase tracking-widest mb-6 text-center transition-all duration-700',
                certsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              Premiações
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {AWARDS.map((award, i) => (
                <div
                  key={award.name}
                  className={cn(
                    'flex flex-col items-center gap-0.5 px-4 py-2 rounded-pill bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange/30 transition-all duration-700',
                    certsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  )}
                  style={{ transitionDelay: `${(CERTIFICATIONS.length + i) * 60}ms` }}
                >
                  <span className="text-label-md text-white/80 font-semibold">{award.name}</span>
                  <span className="text-label-sm text-white/50">{award.years}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
