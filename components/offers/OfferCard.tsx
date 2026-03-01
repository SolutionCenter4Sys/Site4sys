import Link from 'next/link';
import {
  Users, RefreshCw, Brain, Lightbulb, GitBranch, Shield,
  Activity, DollarSign, Database, Bot, Cpu, Headphones, BarChart2, ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import type { Offer } from '@/types';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Users, RefreshCw, Brain, Lightbulb, GitBranch, Shield,
  Activity, DollarSign, Database, Bot, Cpu, Headphones, BarChart2,
};

interface OfferCardProps {
  offer: Offer;
  variant?: 'default' | 'compact';
  className?: string;
}

export function OfferCard({ offer, variant = 'default', className }: OfferCardProps) {
  const Icon = ICON_MAP[offer.icon] || Brain;

  return (
    <Link
      href={`/solucoes/${offer.slug}`}
      className={cn(
        'relative overflow-hidden group flex flex-col bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-orange/20',
        variant === 'default' ? 'p-8' : 'p-6',
        className,
      )}
      aria-label={`Ver oferta: ${offer.name}`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: offer.color }} aria-hidden="true" />

      <div>
        {/* Icon + Badge */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${offer.color}18` }}
          >
            <Icon className="w-6 h-6" style={{ color: offer.color }} />
          </div>
          <Badge
            variant={offer.category === 'flagship' ? 'flagship' : 'core'}
            label={offer.category === 'flagship' ? 'Flagship' : 'Core'}
            size="sm"
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
          <p className="text-body-md text-gray-500 leading-relaxed mb-6">
            {offer.description}
          </p>
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
