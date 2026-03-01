import Link from 'next/link';
import {
  Users, RefreshCw, Brain, Lightbulb, GitBranch, Shield,
  Activity, DollarSign, Database, Bot, Cpu, Headphones, BarChart2, ArrowRight,
  Link2, FlaskConical, Zap
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import type { Offer } from '@/types';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Users, RefreshCw, Brain, Lightbulb, GitBranch, Shield,
  Activity, DollarSign, Database, Bot, Cpu, Headphones, BarChart2,
  Link2, FlaskConical, Zap,
};

interface OfferCardProps {
  offer: Offer;
  variant?: 'default' | 'compact';
  className?: string;
}

export function OfferCard({ offer, variant = 'default', className }: OfferCardProps) {
  const Icon = ICON_MAP[offer.icon] || Brain;

  const isFlagship = offer.category === 'flagship';

  return (
    <Link
      href={`/solucoes/${offer.slug}`}
      className={cn(
        'relative overflow-hidden group flex flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:scale-[1.01]',
        isFlagship
          ? 'bg-white border-2 border-orange/30 hover:border-orange/50 shadow-card'
          : 'bg-white border border-gray-100 hover:border-orange/20',
        variant === 'default' ? 'p-8' : 'p-6',
        className,
      )}
      aria-label={`Ver oferta: ${offer.name}`}
    >
      {/* Top accent line — Flagship: sempre visível e mais grossa */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 transition-opacity duration-300',
          isFlagship ? 'h-1.5 opacity-100' : 'h-1 opacity-0 group-hover:opacity-100',
        )}
        style={{ background: offer.color }}
        aria-hidden="true"
      />

      <div>
        {/* Icon + Badge — Flagship com ícone maior */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={cn(
              'rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
              isFlagship ? 'w-14 h-14' : 'w-12 h-12',
            )}
            style={{ background: isFlagship ? `${offer.color}25` : `${offer.color}18` }}
          >
            <Icon className={cn(isFlagship ? 'w-7 h-7' : 'w-6 h-6')} style={{ color: offer.color }} />
          </div>
          <Badge
            variant={offer.category === 'flagship' ? 'flagship' : 'core'}
            label={offer.category === 'flagship' ? 'Flagship' : 'Core'}
            size={isFlagship ? 'md' : 'sm'}
          />
        </div>

        {/* Title */}
        <h3 className={cn('font-bold text-navy group-hover:text-orange transition-colors duration-200 mb-2', variant === 'default' ? 'text-heading-lg' : 'text-heading-md')}>
          {offer.name}
        </h3>

        {/* Subtitle */}
        <p className="text-body-sm text-orange font-semibold mb-3 leading-relaxed">
          {offer.subtitle}
        </p>

        {/* Description */}
        {variant === 'default' && (
          <p className="text-body-md text-gray-500 leading-relaxed mb-4">
            {offer.description}
          </p>
        )}

        {/* Métricas do PDF (proof points CRO) */}
        {offer.metrics && offer.metrics.length > 0 && variant === 'default' && (
          <div className="flex flex-wrap gap-2 mb-6">
            {offer.metrics.slice(0, 3).map((m, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-orange/10 text-body-sm font-semibold text-orange">
                {m}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-1 text-label-md font-semibold text-navy group-hover:text-orange transition-colors duration-200 mt-auto">
          Saiba mais
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
