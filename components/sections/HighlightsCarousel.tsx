'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HIGHLIGHTS = [
  {
    type: 'case' as const,
    id: 'modernizacao-saude',
    title: '100 projetos desbloqueados',
    subtitle: 'Operadora de Saúde',
    metric: '100',
    label: 'projetos em 12 meses',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
    href: '/casos-de-sucesso',
  },
  {
    type: 'case' as const,
    id: 'squads-financeiro',
    title: '70% redução no lead time',
    subtitle: 'Fintech de Crédito',
    metric: '70%',
    label: 'redução no lead time',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    href: '/casos-de-sucesso',
  },
  {
    type: 'case' as const,
    id: 'ia-seguros',
    title: '85% redução no tempo de análise',
    subtitle: 'Seguradora',
    metric: '85%',
    label: 'redução com IA',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    href: '/casos-de-sucesso',
  },
  {
    type: 'award' as const,
    id: 'agilidade',
    title: 'Prêmio Agilidade Brasil',
    subtitle: '2024 e 2025',
    metric: '2x',
    label: 'premiação consecutiva',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
    href: '/sobre',
  },
  {
    type: 'award' as const,
    id: 'open-startups',
    title: '100 Open Startups',
    subtitle: '2023 e 2024',
    metric: 'TOP',
    label: 'inovação aberta',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    href: '/sobre',
  },
];

export function HighlightsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section className="py-14 bg-white border-t border-gray-100" aria-label="Destaques e resultados">
      <div className="container-site">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-label-lg text-gray-400 uppercase tracking-widest mb-2 font-semibold">
              Em destaque
            </p>
            <h2 className="text-display-sm text-navy">
              Resultados e reconhecimentos
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-2 rounded-full border border-gray-200 text-gray-500 hover:border-orange/30 hover:text-orange disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-2 rounded-full border border-gray-200 text-gray-500 hover:border-orange/30 hover:text-orange disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {HIGHLIGHTS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex-shrink-0 w-[300px] sm:w-[340px] snap-center group"
            >
              <div className="h-full rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-orange/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                {item.image && (
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="340px"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-lg">
                        {item.metric}
                      </span>
                      <p className="text-body-sm text-white/90 font-medium">{item.label}</p>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-heading-md text-navy font-bold group-hover:text-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-gray-500 mt-1">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
