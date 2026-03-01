'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-4 right-4 z-40 md:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <Link
        href="/contato"
        className="flex items-center justify-center gap-2 w-full bg-gradient-orange text-white font-bold text-body-md py-4 rounded-2xl shadow-brand"
      >
        Agendar diagnóstico gratuito
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
