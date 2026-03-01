'use client';
import { Quote } from 'lucide-react';
import { Kicker } from '@/components/ui/Kicker';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { TESTIMONIALS } from '@/mocks/index';

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-white" aria-label="Depoimentos de clientes">
      <div className="container-site">
        <div
          ref={ref}
          className={cn(
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <Kicker className="mb-3">O que dizem nossos clientes</Kicker>
          <h2 className="text-display-sm text-navy">Parceiros que recomendam</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={cn(
                'bg-gray-50 rounded-2xl p-8 flex flex-col gap-5 border border-gray-100 hover:shadow-card transition-all duration-500 hover:-translate-y-1 relative overflow-hidden',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Big quote mark */}
              <Quote
                className="absolute top-6 right-6 w-10 h-10 text-orange/10"
                aria-hidden="true"
              />

              {/* Orange left border */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-orange rounded-r-full" aria-hidden="true" />

              <p className="text-body-lg text-gray-700 italic leading-relaxed pl-3">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-body-md font-semibold text-navy">{t.author}</p>
                  <p className="text-body-sm text-gray-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
