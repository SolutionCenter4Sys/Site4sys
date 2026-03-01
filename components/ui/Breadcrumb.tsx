import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
  className?: string;
}

export function Breadcrumb({ items, light = false, className }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [{ label: 'Início', href: '/' }, ...items];

  return (
    <nav
      aria-label="Navegação estrutural"
      className={cn('flex items-center gap-1 flex-wrap', className)}
    >
      <ol className="flex items-center gap-1 flex-wrap list-none p-0 m-0">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  className={cn('w-3.5 h-3.5 flex-shrink-0', light ? 'text-white/40' : 'text-gray-300')}
                  aria-hidden="true"
                />
              )}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={cn(
                    'text-label-md font-semibold',
                    light ? 'text-white/60' : 'text-gray-400',
                    isLast && (light ? 'text-white/90' : 'text-navy')
                  )}
                >
                  {index === 0 ? (
                    <span className="flex items-center gap-1">
                      <Home className="w-3 h-3" aria-hidden="true" />
                      <span className="sr-only">{item.label}</span>
                    </span>
                  ) : item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'text-label-md font-semibold transition-colors hover:text-orange',
                    light ? 'text-white/60 hover:text-white' : 'text-gray-400 hover:text-navy'
                  )}
                >
                  {index === 0 ? (
                    <span className="flex items-center gap-1">
                      <Home className="w-3 h-3" aria-hidden="true" />
                      <span className="sr-only">{item.label}</span>
                    </span>
                  ) : item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
