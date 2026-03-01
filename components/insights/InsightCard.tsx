import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight, Mic, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Insight } from '@/mocks/insights';

interface InsightCardProps {
  insight: Insight;
  variant?: 'default' | 'featured' | 'horizontal';
}

const CONTENT_TYPE_COLORS: Record<Insight['contentType'], string> = {
  'Artigo': 'bg-blue-50 text-blue-700 border-blue-100',
  'Pesquisa': 'bg-purple-50 text-purple-700 border-purple-100',
  'Podcast': 'bg-green-50 text-green-700 border-green-100',
  'Caso de Sucesso': 'bg-orange-50 text-orange-700 border-orange-100',
  'Relatório': 'bg-navy-50 text-navy border-navy-100',
  'Webinar': 'bg-red-50 text-red-700 border-red-100',
};

const CONTENT_TYPE_ICON: Partial<Record<Insight['contentType'], React.ReactNode>> = {
  'Podcast': <Mic className="w-3 h-3" />,
  'Webinar': <Play className="w-3 h-3" />,
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

function readTimeLabel(minutes: number, type: Insight['contentType']): string {
  if (type === 'Podcast' || type === 'Webinar') return `${minutes} min`;
  return `${minutes} min de leitura`;
}

export function InsightCard({ insight, variant = 'default' }: InsightCardProps) {
  const href = `/insights/${insight.slug}`;
  const typeColor = CONTENT_TYPE_COLORS[insight.contentType];
  const typeIcon = CONTENT_TYPE_ICON[insight.contentType];

  if (variant === 'featured') {
    return (
      <Link
        href={href}
        className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-orange/20 hover:shadow-card-hover transition-all duration-300"
        aria-label={insight.title}
      >
        {/* Image — takes 55% width on desktop */}
        <div className="relative w-full lg:w-[55%] h-64 lg:h-auto overflow-hidden flex-shrink-0">
          <Image
            src={insight.image}
            alt={insight.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 55vw"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 lg:to-black/20" />
          {insight.tag && (
            <span className="absolute top-4 left-4 bg-orange text-white text-label-sm font-bold px-3 py-1 rounded-pill">
              {insight.tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 lg:p-10">
          {/* Type + Topic */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={cn('inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-label-sm font-semibold border', typeColor)}>
              {typeIcon}{insight.contentType}
            </span>
            <span className="text-label-sm text-orange font-semibold">{insight.topic}</span>
          </div>

          <h2 className="text-heading-xl font-bold text-navy leading-snug mb-4 group-hover:text-orange transition-colors">
            {insight.title}
          </h2>
          <p className="text-body-lg text-gray-500 leading-relaxed mb-6 line-clamp-3">
            {insight.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-body-sm text-gray-400 mb-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {readTimeLabel(insight.readTime, insight.contentType)}
            </span>
            <span>{formatDate(insight.publishedAt)}</span>
          </div>

          {/* Author + CTA */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-body-sm font-semibold text-navy">{insight.author.name}</p>
              <p className="text-body-sm text-gray-400">{insight.author.role}</p>
            </div>
            <span className="flex items-center gap-1.5 text-orange font-semibold text-body-sm group-hover:gap-2.5 transition-all">
              Ler mais <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link
        href={href}
        className="group flex gap-5 p-5 rounded-xl border border-gray-100 bg-white hover:border-orange/20 hover:shadow-card transition-all duration-300"
        aria-label={insight.title}
      >
        <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={insight.image}
            alt={insight.imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="112px"
            unoptimized
          />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-semibold border', typeColor)}>
              {insight.contentType}
            </span>
          </div>
          <h3 className="text-body-lg font-bold text-navy leading-snug line-clamp-2 group-hover:text-orange transition-colors mb-1">
            {insight.title}
          </h3>
          <span className="text-label-md text-gray-400 flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            {readTimeLabel(insight.readTime, insight.contentType)}
          </span>
        </div>
      </Link>
    );
  }

  // default — estilo Accenture: retrato, imagem de fundo, painel deslizante no hover
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-navy-dark aspect-[3/4] cursor-pointer"
      aria-label={insight.title}
    >
      {/* Imagem de fundo ocupa o card inteiro */}
      <Image
        src={insight.image}
        alt={insight.imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        unoptimized
        loading="lazy"
      />

      {/* Gradiente escuro permanente no topo (para o label) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Gradiente extra que aparece no hover para o painel */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Label de tipo — topo esquerdo, sempre visível */}
      <div className="relative z-10 p-5">
        <span className="text-label-sm font-bold text-white/80 uppercase tracking-widest">
          {insight.contentType}
        </span>
        {insight.tag && (
          <span className="ml-3 bg-orange text-white text-label-sm font-bold px-2.5 py-0.5 rounded-pill">
            {insight.tag}
          </span>
        )}
      </div>

      {/* Conteúdo — bottom do card */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Painel base: título sempre visível */}
        <div className="p-5 pb-4 transition-transform duration-400 ease-out group-hover:-translate-y-[88px]">
          <p className="text-label-sm text-orange font-semibold uppercase tracking-wider mb-2">
            {insight.topic}
          </p>
          <h3 className="text-heading-md font-bold text-white leading-snug line-clamp-3">
            {insight.title}
          </h3>
        </div>

        {/* Painel revelado no hover — desliza para cima */}
        <div className="px-5 pb-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <p className="text-body-sm text-white/80 leading-relaxed line-clamp-3 mb-4">
            {insight.excerpt}
          </p>
          <span className="inline-flex items-center gap-2 text-body-sm font-bold text-white border-b border-white pb-0.5 group-hover:gap-3 transition-all">
            Ler mais <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
