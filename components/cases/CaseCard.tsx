'use client';

import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import type { Case } from '@/types';

interface CaseCardProps {
  caseData: Case;
  variant?: 'default' | 'dark';
  className?: string;
  onOpenModal?: (caseData: Case) => void;
}

export function CaseCard({ caseData, variant = 'default', className, onOpenModal }: CaseCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'rounded-2xl flex flex-col gap-0 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden',
        isDark
          ? 'bg-navy text-white hover:shadow-navy'
          : 'bg-white border border-gray-100 hover:shadow-card-hover hover:border-orange/20',
        className,
      )}
    >
      {/* Accent bar topo */}
      {!isDark && (
        <div className="h-0.5 bg-gradient-orange" aria-hidden="true" />
      )}

      <div className="p-7 flex flex-col gap-5 flex-1">
        {/* Sector + Offer */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Badge variant="sector" label={caseData.sector} />
          <span className={cn('text-label-sm font-semibold uppercase tracking-wider', isDark ? 'text-orange-light' : 'text-orange/80')}>
            {caseData.offer}
          </span>
        </div>

        {/* Impact metric */}
        <div className="flex items-baseline gap-2">
          <span className="text-display-sm font-extrabold text-orange leading-none">{caseData.impactMetric}</span>
          <span className={cn('text-body-md font-medium leading-snug', isDark ? 'text-white/60' : 'text-gray-400')}>
            {caseData.impactLabel}
          </span>
        </div>

        {/* Desafio + Solução */}
        <div className={cn('space-y-2.5 text-body-md flex-1', isDark ? 'text-white/80' : 'text-gray-600')}>
          <p>
            <span className={cn('font-semibold', isDark ? 'text-white' : 'text-navy')}>Desafio: </span>
            {caseData.challenge}
          </p>
          <p>
            <span className={cn('font-semibold', isDark ? 'text-white' : 'text-navy')}>Solução: </span>
            {caseData.solution}
          </p>
        </div>

        {/* Depoimento — border-left elegante, sem ícone */}
        {caseData.quote && (
          <blockquote
            className={cn(
              'pl-4 border-l-2 mt-1',
              isDark ? 'border-orange/40' : 'border-orange/25',
            )}
          >
            <p className={cn('text-body-sm italic leading-relaxed', isDark ? 'text-white/55' : 'text-gray-500')}>
              &ldquo;{caseData.quote}&rdquo;
            </p>
            {caseData.role && (
              <cite className={cn('not-italic text-label-sm mt-1.5 block font-semibold', isDark ? 'text-orange/70' : 'text-gray-400')}>
                — {caseData.role}
              </cite>
            )}
          </blockquote>
        )}
      </div>

      {/* Footer do card */}
      <div className={cn('px-7 py-4 border-t', isDark ? 'border-white/10' : 'border-gray-100')}>
        {onOpenModal ? (
          <button
            onClick={() => onOpenModal(caseData)}
            className={cn(
              'inline-flex items-center gap-1.5 text-label-md font-semibold transition-all group/link',
              isDark ? 'text-orange hover:text-orange-light' : 'text-orange hover:text-orange-dark',
            )}
            aria-label={`Ver caso completo — ${caseData.sector}: ${caseData.impactLabel}`}
          >
            Tenho um desafio parecido
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </button>
        ) : (
          <span className={cn('inline-flex items-center gap-1.5 text-label-md font-semibold text-gray-400')}>
            Ver caso completo
            <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </div>
    </div>
  );
}
