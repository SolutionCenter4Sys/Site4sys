import Image from 'next/image';
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
    <span className={cn('inline-flex items-center', className)}>
      <Image
        src="/foursys-logo.png"
        alt="Foursys"
        width={180}
        height={48}
        className={cn(
          'h-10 sm:h-11 md:h-12 w-auto object-contain min-w-[120px]',
          !light && 'invert', // Em fundo escuro: inverte para texto claro
          iconClassName,
          textClassName
        )}
        priority
        unoptimized
      />
    </span>
  );
}
