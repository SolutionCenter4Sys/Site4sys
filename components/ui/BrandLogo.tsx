import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  /** true = fundo branco/claro → logo com texto navy + ícone laranja
   *  false (default) = fundo escuro/navy → logo com texto branco + ícone laranja */
  light?: boolean;
  className?: string;
}

export function BrandLogo({ light = false, className }: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center', className)}>
      {/* Fundo escuro: logo branca */}
      <Image
        src="/logo-dark-bg.png"
        alt="Foursys"
        width={180}
        height={48}
        className={cn(
          'h-10 sm:h-11 md:h-12 w-auto object-contain',
          light ? 'hidden' : 'block'
        )}
        priority
        unoptimized
      />
      {/* Fundo claro: logo navy */}
      <Image
        src="/logo-light-bg.png"
        alt="Foursys"
        width={180}
        height={48}
        className={cn(
          'h-10 sm:h-11 md:h-12 w-auto object-contain',
          light ? 'block' : 'hidden'
        )}
        priority
        unoptimized
      />
    </span>
  );
}
