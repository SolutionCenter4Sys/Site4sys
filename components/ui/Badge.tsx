import { cn } from '@/lib/utils';

type BadgeVariant = 'flagship' | 'core' | 'new' | 'sector' | 'orange';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  label: string;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  flagship: 'bg-orange/15 text-orange-dark border border-orange/30 font-semibold',
  core: 'bg-navy/10 text-navy border border-navy/20 font-semibold',
  new: 'bg-green-50 text-green-700 border border-green-200 font-semibold',
  sector: 'bg-gray-100 text-gray-700 border border-gray-200',
  orange: 'bg-orange text-white font-semibold',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2.5 py-0.5 text-label-sm',
  md: 'px-3.5 py-1 text-label-md',
};

export function Badge({ variant = 'core', size = 'md', label, className }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center rounded-pill uppercase tracking-wider', variantClasses[variant], sizeClasses[size], className)}>
      {label}
    </span>
  );
}
