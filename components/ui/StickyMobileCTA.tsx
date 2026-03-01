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
    // Igor (iOS): bottom-0 + padding-bottom com env(safe-area-inset-bottom)
    // garante que o CTA não sobreponha o Home Indicator ou a barra de gestos.
    // Anderson (Android): left-0/right-0 com padding lateral protege arestas de
    // dispositivos com gesture nav que conflita com toque na borda.
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
      {/* Artista: min-h-[56px] garante thumb zone confortável (> 48dp recomendado) */}
      <Link
        href="/contato"
        aria-label="Agendar diagnóstico gratuito com a Foursys"
        className="flex items-center justify-center gap-2 w-full min-h-[56px] bg-gradient-orange text-white font-bold text-body-md rounded-2xl shadow-brand active:scale-[0.98] transition-transform"
      >
        Agendar diagnóstico gratuito
        <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      </Link>
    </div>
  );
}
