import Link from 'next/link';
import { Quote, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import type { Case } from '@/types';

interface CaseCardProps {
  caseData: Case;
  variant?: 'default' | 'dark';
  className?: string;
}

export function CaseCard({ caseData, variant = 'default', className }: CaseCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1',
        isDark
          ? 'bg-navy text-white hover:shadow-navy'
          : 'bg-white border border-gray-100 hover:shadow-card-hover hover:border-orange/20',
        className,
      )}
    >
      {/* Sector + Offer */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <Badge variant="sector" label={caseData.sector} />
        <span className={cn('text-label-sm font-semibold', isDark ? 'text-orange-light' : 'text-orange')}>
          {caseData.offer}
        </span>
      </div>

      {/* Impact metric — hero number */}
      <div>
        <span className="text-display-sm font-extrabold text-orange">{caseData.impactMetric}</span>
        <span className={cn('text-body-md ml-2 font-medium', isDark ? 'text-white/70' : 'text-gray-500')}>
          {caseData.impactLabel}
        </span>
      </div>

      {/* Challenge → Solution → Impact */}
      <div className={cn('space-y-3 text-body-md flex-1', isDark ? 'text-white/80' : 'text-gray-600')}>
        <div>
          <span className={cn('font-semibold', isDark ? 'text-white' : 'text-navy')}>Desafio: </span>
          {caseData.challenge}
        </div>
        <div>
          <span className={cn('font-semibold', isDark ? 'text-white' : 'text-navy')}>Solução: </span>
          {caseData.solution}
        </div>
      </div>

      {/* Quote */}
      {caseData.quote && (
        <div className={cn('border-t pt-4', isDark ? 'border-white/10' : 'border-gray-100')}>
          <div className="flex gap-3">
            <Quote className={cn('w-5 h-5 flex-shrink-0 mt-0.5', isDark ? 'text-orange/60' : 'text-orange/40')} />
            <div>
              <p className={cn('text-body-sm italic leading-relaxed', isDark ? 'text-white/60' : 'text-gray-500')}>
                &ldquo;{caseData.quote}&rdquo;
              </p>
              {caseData.role && (
                <p className={cn('text-label-sm mt-1 font-semibold', isDark ? 'text-white/40' : 'text-gray-400')}>
                  — {caseData.role}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Link */}
      <Link
        href={`/casos-de-sucesso`}
        className={cn(
          'inline-flex items-center gap-1 text-label-md font-semibold transition-colors group/link',
          isDark ? 'text-orange hover:text-orange-light' : 'text-orange hover:text-orange-dark',
        )}
      >
        Ver caso completo
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
}
