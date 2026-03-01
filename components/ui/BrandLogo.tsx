import { cn } from '@/lib/utils';

interface BrandLogoProps {
  light?: boolean;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function BrandLogo({
  light = false,
  className,
  iconClassName,
  textClassName,
}: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'w-9 h-9 rounded-xl bg-gradient-orange shadow-brand flex items-center justify-center',
          iconClassName
        )}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M2 4.5h14v2H2zM2 8.5h9.5v2H2zM2 12.5h12v2H2z"
            fill="white"
          />
        </svg>
      </span>
      <span
        className={cn(
          'font-extrabold text-xl tracking-tight',
          light ? 'text-white' : 'text-navy',
          textClassName
        )}
      >
        Foursys
      </span>
    </span>
  );
}
