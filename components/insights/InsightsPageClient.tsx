'use client';

import { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InsightCard } from './InsightCard';
import {
  INSIGHTS,
  INSIGHT_TOPICS,
  INSIGHT_INDUSTRIES,
  INSIGHT_CONTENT_TYPES,
  type InsightTopic,
  type InsightIndustry,
  type InsightContentType,
} from '@/mocks/insights';

export function InsightsPageClient() {
  const [search, setSearch] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<InsightTopic[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<InsightIndustry[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<InsightContentType[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const featuredInsights = INSIGHTS.filter(i => i.featured);
  const remainingInsights = INSIGHTS.filter(i => !i.featured);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return remainingInsights.filter(insight => {
      const matchSearch =
        !q ||
        insight.title.toLowerCase().includes(q) ||
        insight.excerpt.toLowerCase().includes(q) ||
        insight.topic.toLowerCase().includes(q);

      const matchTopic =
        selectedTopics.length === 0 || selectedTopics.includes(insight.topic);

      const matchIndustry =
        selectedIndustries.length === 0 ||
        (insight.industry && selectedIndustries.includes(insight.industry));

      const matchType =
        selectedTypes.length === 0 || selectedTypes.includes(insight.contentType);

      return matchSearch && matchTopic && matchIndustry && matchType;
    });
  }, [search, selectedTopics, selectedIndustries, selectedTypes, remainingInsights]);

  const hasActiveFilters =
    selectedTopics.length > 0 || selectedIndustries.length > 0 || selectedTypes.length > 0 || search;

  function toggleTopic(t: InsightTopic) {
    setSelectedTopics(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  }

  function toggleIndustry(i: InsightIndustry) {
    setSelectedIndustries(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    );
  }

  function toggleType(t: InsightContentType) {
    setSelectedTypes(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  }

  function clearAll() {
    setSearch('');
    setSelectedTopics([]);
    setSelectedIndustries([]);
    setSelectedTypes([]);
  }

  return (
    <div>
      {/* ─── FILTER BAR ────────────────────────────────────────────── */}
      <section className="sticky top-[72px] z-30 bg-white border-b border-gray-200 shadow-sm" aria-label="Filtros de conteúdo">
        <div className="container-site py-4">
          {/* Top row: search + toggle filters */}
          <div className="flex items-center gap-3 mb-0">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar insights..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 text-[16px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors"
                aria-label="Buscar insights"
              />
            </div>

            {/* Toggle filters button */}
            <button
              onClick={() => setFiltersOpen(v => !v)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-lg border text-body-sm font-semibold transition-colors',
                filtersOpen
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-navy border-gray-200 hover:border-navy/30'
              )}
              aria-expanded={filtersOpen}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
              )}
            </button>

            {/* Clear all */}
            {hasActiveFilters && (
              <button
                onClick={clearAll}
                className="flex items-center gap-1.5 text-body-sm text-gray-500 hover:text-orange transition-colors"
              >
                <X className="w-4 h-4" />
                Limpar
              </button>
            )}
          </div>

          {/* Expandable filters */}
          {filtersOpen && (
            <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tópicos */}
              <div>
                <p className="text-label-md text-gray-500 uppercase tracking-wider font-semibold mb-3">Tópico</p>
                <div className="flex flex-wrap gap-2">
                  {INSIGHT_TOPICS.map(topic => (
                    <button
                      key={topic}
                      onClick={() => toggleTopic(topic)}
                      className={cn(
                        'px-3 py-1.5 rounded-lg text-body-sm font-medium border transition-all',
                        selectedTopics.includes(topic)
                          ? 'bg-orange text-white border-orange'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-orange/50 hover:text-orange'
                      )}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Indústria */}
              <div>
                <p className="text-label-md text-gray-500 uppercase tracking-wider font-semibold mb-3">Indústria</p>
                <div className="flex flex-wrap gap-2">
                  {INSIGHT_INDUSTRIES.map(ind => (
                    <button
                      key={ind}
                      onClick={() => toggleIndustry(ind)}
                      className={cn(
                        'px-3 py-1.5 rounded-lg text-body-sm font-medium border transition-all',
                        selectedIndustries.includes(ind)
                          ? 'bg-navy text-white border-navy'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-navy/50 hover:text-navy'
                      )}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tipo de conteúdo */}
              <div>
                <p className="text-label-md text-gray-500 uppercase tracking-wider font-semibold mb-3">Tipo de conteúdo</p>
                <div className="flex flex-wrap gap-2">
                  {INSIGHT_CONTENT_TYPES.map(type => (
                    <button
                      key={type}
                      onClick={() => toggleType(type)}
                      className={cn(
                        'px-3 py-1.5 rounded-lg text-body-sm font-medium border transition-all',
                        selectedTypes.includes(type)
                          ? 'bg-orange text-white border-orange'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-orange/50 hover:text-orange'
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── FEATURED ──────────────────────────────────────────────── */}
      {featuredInsights.length > 0 && (
        <section className="section-padding bg-gray-50 border-b border-gray-100" aria-label="Destaques editoriais">
          <div className="container-site">
            <div className="flex items-end justify-between mb-8 gap-4">
              <div>
                <p className="text-label-lg text-orange uppercase tracking-widest font-semibold mb-1">Em destaque</p>
                <h2 className="text-display-sm text-navy">Leituras recomendadas</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {featuredInsights.map(insight => (
                <InsightCard key={insight.id} insight={insight} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── GRID ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Todos os insights">
        <div className="container-site">
          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-body-md text-gray-500">
              {hasActiveFilters
                ? `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`
                : `${remainingInsights.length} publicações`}
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(insight => (
                <InsightCard key={insight.id} insight={insight} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-heading-lg text-navy mb-2">Nenhum resultado encontrado</h3>
              <p className="text-body-lg text-gray-500 mb-6">
                Tente ajustar os filtros ou a busca para encontrar o que procura.
              </p>
              <button
                onClick={clearAll}
                className="px-6 py-3 bg-orange text-white rounded-xl font-semibold hover:bg-orange-dark transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── NEWSLETTER CTA ────────────────────────────────────────── */}
      <section className="bg-gradient-dark py-20" aria-label="Assinar newsletter">
        <div className="container-site text-center">
          <p className="text-label-lg text-orange uppercase tracking-widest font-semibold mb-3">Newsletter Foursys</p>
          <h2 className="text-display-sm text-white mb-4 max-w-2xl mx-auto">
            Receba os melhores insights direto no seu e-mail
          </h2>
          <p className="text-body-xl text-white/70 mb-8 max-w-lg mx-auto">
            Publicações quinzenais sobre IA, transformação digital, liderança tech e casos reais — sem spam.
          </p>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            aria-label="Formulário de newsletter"
          >
            <input
              type="email"
              placeholder="seu@empresa.com.br"
              required
              autoComplete="email"
              inputMode="email"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-[16px] focus:outline-none focus:border-orange focus:bg-white/15 transition-colors"
              aria-label="E-mail corporativo"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-orange text-white font-bold rounded-xl hover:bg-orange-dark active:scale-95 transition-all whitespace-nowrap"
            >
              Quero receber
            </button>
          </form>
          <p className="text-body-sm text-white/40 mt-4">
            Sem spam. Cancele a qualquer momento. LGPD compliant.
          </p>
        </div>
      </section>
    </div>
  );
}
