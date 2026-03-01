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
      {/* Fundo escuro: logo branca — dimensões base */}
      <Image
        src="/logo-dark-bg.png"
        alt="Foursys"
        width={572}
        height={195}
        className={cn(
          'h-10 sm:h-11 md:h-12 w-auto object-contain',
          light ? 'hidden' : 'block'
        )}
        priority
        unoptimized
      />
      {/* Fundo claro: logo navy — mesma altura que a escura para consistência visual */}
      <Image
        src="/logo-light-bg.png"
        alt="Foursys"
        width={325}
        height={133}
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
