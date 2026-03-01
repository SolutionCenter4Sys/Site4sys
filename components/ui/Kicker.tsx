import { cn } from '@/lib/utils';

interface KickerProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function Kicker({ children, light, className }: KickerProps) {
  return (
    <p className={cn(
      'text-label-md uppercase tracking-[0.1em] font-semibold',
      light ? 'text-orange-light' : 'text-orange',
      className
    )}>
      {children}
    </p>
  );
}
