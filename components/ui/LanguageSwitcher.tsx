'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';

interface LanguageSwitcherProps {
  light?: boolean;
}

export function LanguageSwitcher({ light = false }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const switchLocale = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;

    // Remove current locale prefix (e.g. /pt, /en, /es) to get base path
    let basePath = pathname;
    for (const loc of locales) {
      if (basePath.startsWith(`/${loc}`)) {
        basePath = basePath.slice(`/${loc}`.length) || '/';
        break;
      }
    }
    if (!basePath.startsWith('/')) basePath = `/${basePath}`;

    // All locales always have prefix: /pt/... /en/... /es/...
    const newPath = `/${next}${basePath === '/' ? '' : basePath}`;
    window.location.href = newPath;
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className={cn(
          'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-label-md font-semibold transition-colors',
          light
            ? 'text-navy hover:bg-gray-100'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Selecionar idioma"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{locale}</span>
        <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Idiomas disponíveis"
          className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-card-hover border border-gray-100 overflow-hidden z-50"
        >
          {locales.map(loc => (
            <button
              key={loc}
              role="option"
              aria-selected={loc === locale}
              onClick={() => switchLocale(loc)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5 text-body-sm font-medium transition-colors',
                loc === locale
                  ? 'bg-orange/5 text-orange font-semibold'
                  : 'text-navy hover:bg-gray-50 hover:text-orange'
              )}
            >
              <span className="text-base">{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
