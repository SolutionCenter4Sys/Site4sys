'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const href = `/${locale}/contato`;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      aria-hidden={!visible}
      style={{
        paddingBottom: 'max(20px, env(safe-area-inset-bottom))',
        paddingLeft: 'max(16px, env(safe-area-inset-left))',
        paddingRight: 'max(16px, env(safe-area-inset-right))',
        paddingTop: '12px',
        background: 'linear-gradient(to top, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.85) 100%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <Link
        href={href}
        aria-label={t('sticky_cta')}
        className="flex items-center justify-center gap-2 w-full min-h-[56px] bg-gradient-orange text-white font-bold text-body-md rounded-2xl shadow-brand active:scale-[0.98] transition-transform"
      >
        {t('sticky_cta')}
        <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      </Link>
    </div>
  );
}
