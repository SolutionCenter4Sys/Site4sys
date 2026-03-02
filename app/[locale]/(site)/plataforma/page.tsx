'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  ArrowRight, Search, Users, LayoutList, DollarSign, BarChart2,
  FolderKanban, Leaf, Database, Shield, Calendar, CheckSquare,
  TrendingUp, CreditCard, Target, UserCheck, GitBranch,
  Activity, Package, Clock, Layers,
} from 'lucide-react';

// ── tipos ──────────────────────────────────────────────────────
type Badge = 'Mais ativado' | 'Alta performance' | 'Novo' | null;
type Level = 'Simples' | 'Intermediário' | 'Estratégico';
type Category =
  | 'Gestão de Pessoas'
  | 'Operações'
  | 'Financeiro'
  | 'Comercial'
  | 'Projetos'
  | 'ESG'
  | 'Dados & Analytics'
  | 'Governança';

interface Module {
  id: string;
  category: Category;
  title: string;
  desc: string;
  level: Level;
  badge: Badge;
  icon: React.ComponentType<{ className?: string }>;
}

interface Kit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  modules: string[];
}

// ── dados ──────────────────────────────────────────────────────
const MODULES: Module[] = [
  // Gestão de Pessoas
  { id: 'mapa-alocacao', category: 'Gestão de Pessoas', title: 'Mapa de Alocação Inteligente', desc: 'Visualize distribuição de times, capacidade e ociosidade.', level: 'Intermediário', badge: 'Mais ativado', icon: Users },
  { id: 'okr-tracker', category: 'Gestão de Pessoas', title: 'Performance & OKR Tracker', desc: 'Gestão de metas com visão executiva.', level: 'Estratégico', badge: 'Alta performance', icon: Target },
  { id: 'banco-talentos', category: 'Gestão de Pessoas', title: 'Banco de Talentos Estratégico', desc: 'Gestão estruturada de talentos internos e externos.', level: 'Intermediário', badge: 'Novo', icon: UserCheck },
  // Operações
  { id: 'demandas-sla', category: 'Operações', title: 'Controle de Demandas & SLA', desc: 'Gestão visual de demandas internas com SLA.', level: 'Simples', badge: 'Mais ativado', icon: CheckSquare },
  { id: 'workflow-processos', category: 'Operações', title: 'Workflow Personalizado de Processos', desc: 'Automação de fluxos internos personalizados.', level: 'Intermediário', badge: 'Alta performance', icon: GitBranch },
  { id: 'checkin-audiencias', category: 'Operações', title: 'Checkin de Audiências', desc: 'Controle digital de presença e gestão de audiências.', level: 'Simples', badge: 'Alta performance', icon: Calendar },
  { id: 'gestao-eventos', category: 'Operações', title: 'Gestão de Eventos', desc: 'Plataforma completa para planejamento e execução de eventos.', level: 'Intermediário', badge: null, icon: LayoutList },
  // Financeiro
  { id: 'orcamento-area', category: 'Financeiro', title: 'Gestão de Orçamento por Área', desc: 'Monitoramento de CAPEX e OPEX por área.', level: 'Intermediário', badge: 'Novo', icon: DollarSign },
  { id: 'forecast', category: 'Financeiro', title: 'Forecast Inteligente', desc: 'Projeções baseadas em dados históricos.', level: 'Estratégico', badge: null, icon: TrendingUp },
  { id: 'cartao-consignado', category: 'Financeiro', title: 'Cartão de Crédito Consignado', desc: 'Plataforma completa para gestão de cartão de crédito consignado.', level: 'Intermediário', badge: 'Mais ativado', icon: CreditCard },
  { id: 'gestao-orcamentaria', category: 'Financeiro', title: 'Gestão Orçamentária', desc: 'Controle orçamentário integrado com visão estratégica.', level: 'Intermediário', badge: null, icon: Activity },
  // Comercial
  { id: 'pipeline-comercial', category: 'Comercial', title: 'Pipeline & Performance Comercial', desc: 'Acompanhamento estratégico de vendas.', level: 'Intermediário', badge: 'Mais ativado', icon: BarChart2 },
  { id: 'comissoes', category: 'Comercial', title: 'Gestão de Comissões Automatizada', desc: 'Cálculo inteligente de remuneração variável.', level: 'Simples', badge: null, icon: Package },
  { id: 'prospeccao-pmes', category: 'Comercial', title: 'Prospecção e Retenção PMEs', desc: 'Estratégias automatizadas para captar e reter pequenas e médias empresas.', level: 'Estratégico', badge: 'Novo', icon: Target },
  { id: 'crm', category: 'Comercial', title: 'CRM', desc: 'Gestão completa do relacionamento com clientes.', level: 'Intermediário', badge: 'Mais ativado', icon: Users },
  { id: 'sdr', category: 'Comercial', title: 'SDR', desc: 'Plataforma de pré-vendas para qualificação e agendamento.', level: 'Simples', badge: null, icon: UserCheck },
  // Projetos
  { id: 'portfolio-projetos', category: 'Projetos', title: 'Gestão de Portfólio de Projetos', desc: 'Visão executiva de iniciativas estratégicas.', level: 'Estratégico', badge: 'Alta performance', icon: FolderKanban },
  // ESG
  { id: 'esg', category: 'ESG', title: 'Monitor de Indicadores ESG', desc: 'Acompanhamento de metas ambientais e sociais.', level: 'Intermediário', badge: 'Novo', icon: Leaf },
  // Dados & Analytics
  { id: 'data-hub', category: 'Dados & Analytics', title: 'Data Hub Executivo', desc: 'Consolidação de indicadores estratégicos.', level: 'Estratégico', badge: 'Alta performance', icon: Database },
  // Governança
  { id: 'guarda-compartilhada', category: 'Governança', title: 'Gestão de Guarda Compartilhada', desc: 'Plataforma para organização e acompanhamento de guarda compartilhada.', level: 'Intermediário', badge: 'Novo', icon: Shield },
];

const KITS: Kit[] = [
  {
    icon: Layers,
    title: 'Kit Eficiência Operacional',
    desc: 'Demandas, workflows e dados integrados para máxima eficiência.',
    modules: ['Controle de Demandas & SLA', 'Workflow Personalizado de Processos', 'Data Hub Executivo'],
  },
  {
    icon: Users,
    title: 'Kit Gestão de Pessoas 360°',
    desc: 'Alocação, performance e talentos em uma visão completa.',
    modules: ['Mapa de Alocação Inteligente', 'Performance & OKR Tracker', 'Banco de Talentos Estratégico'],
  },
  {
    icon: BarChart2,
    title: 'Kit Performance Comercial',
    desc: 'Pipeline, comissões e forecast para receita previsível.',
    modules: ['Forecast Inteligente', 'Pipeline & Performance Comercial', 'Gestão de Comissões Automatizada'],
  },
  {
    icon: Shield,
    title: 'Kit Governança Executiva',
    desc: 'Portfólio, ESG e dados para governança de alto nível.',
    modules: ['Gestão de Portfólio de Projetos', 'Monitor de Indicadores ESG', 'Data Hub Executivo'],
  },
];

const CATEGORIES: Category[] = [
  'Gestão de Pessoas', 'Operações', 'Financeiro', 'Comercial',
  'Projetos', 'ESG', 'Dados & Analytics', 'Governança',
];

const BADGE_STYLES: Record<NonNullable<Badge>, string> = {
  'Mais ativado': 'bg-orange text-white',
  'Alta performance': 'bg-green-500 text-white',
  'Novo': 'bg-cyan-500 text-white',
};

const LEVEL_STYLES: Record<Level, string> = {
  'Simples': 'bg-white/10 text-white/70',
  'Intermediário': 'bg-orange/20 text-orange',
  'Estratégico': 'bg-purple-500/20 text-purple-300',
};

// ── componente ─────────────────────────────────────────────────
export default function PlataformaPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');

  const filtered = MODULES.filter(m => {
    const matchCat = activeCategory === 'Todos' || m.category === activeCategory;
    const matchSearch = !search || m.title.toLowerCase().includes(search.toLowerCase()) || m.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(160deg, #050510 0%, #0A0A1F 50%, #0D0820 100%)' }}
    >
      {/* ── Top bar ── */}
      <div
        className="sticky top-[72px] z-30 border-b border-white/10"
        style={{ background: 'rgba(5,5,16,0.95)', backdropFilter: 'blur(12px)' }}
      >
        <div className="container-site py-4 flex items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="search"
              placeholder="Buscar soluções..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder:text-white/30 text-[16px] focus:outline-none focus:border-orange/50 transition-colors"
            />
          </div>
          {/* Button */}
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-orange/50 text-orange font-semibold text-body-sm hover:bg-orange/10 transition-colors whitespace-nowrap"
          >
            Minhas Soluções
          </Link>
        </div>
      </div>

      <div className="container-site py-14">
        {/* ── Hero text ── */}
        <div className="mb-12">
          <h1 className="text-display-sm lg:text-display-md text-white font-black leading-tight mb-3">
            Explore soluções prontas para ativar{' '}
            <span className="text-orange">em até 30 dias</span>
          </h1>
          <p className="text-body-xl text-white/50">
            Biblioteca de soluções modulares. Escolha, personalize e coloque em produção.
          </p>
        </div>

        {/* ── Category filters ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('Todos')}
            className={`px-4 py-2 rounded-lg text-body-sm font-semibold transition-colors ${
              activeCategory === 'Todos'
                ? 'bg-orange text-white'
                : 'bg-white/8 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Todos
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-body-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-orange text-white'
                  : 'bg-white/8 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Módulos grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {filtered.map(mod => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="relative flex flex-col rounded-2xl p-6 border border-white/10 hover:border-orange/30 transition-all duration-300 group"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                {/* Badge */}
                {mod.badge && (
                  <span className={`absolute top-4 right-4 text-label-sm font-bold px-2.5 py-1 rounded-pill ${BADGE_STYLES[mod.badge]}`}>
                    {mod.badge}
                  </span>
                )}

                {/* Category */}
                <p className="text-label-sm text-white/40 uppercase tracking-widest font-bold mb-4">
                  {mod.category}
                </p>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(255,83,21,0.12)', border: '1px solid rgba(255,83,21,0.2)' }}
                >
                  <Icon className="w-5 h-5 text-orange" />
                </div>

                {/* Title & desc */}
                <h3 className="text-heading-md text-white font-bold mb-2 group-hover:text-orange transition-colors">
                  {mod.title}
                </h3>
                <p className="text-body-md text-white/50 leading-relaxed flex-1 mb-6">
                  {mod.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <span className={`text-label-sm font-semibold px-3 py-1 rounded-lg ${LEVEL_STYLES[mod.level]}`}>
                    {mod.level}
                  </span>
                  <Link
                    href="/contato"
                    className="text-label-md text-orange font-semibold hover:text-orange-light transition-colors flex items-center gap-1"
                  >
                    Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-16 text-white/30">
              <Search className="w-10 h-10 mx-auto mb-3" />
              <p className="text-body-lg">Nenhum módulo encontrado para "{search}"</p>
            </div>
          )}
        </div>

        {/* ── Combinações Estratégicas ── */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-display-sm text-white font-black mb-2">Combinações Estratégicas</h2>
            <p className="text-body-lg text-white/40">Kits pré-configurados para resultados acelerados.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {KITS.map(kit => {
              const Icon = kit.icon;
              return (
                <div
                  key={kit.title}
                  className="rounded-2xl p-7 border border-white/10 hover:border-orange/30 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,83,21,0.12)', border: '1px solid rgba(255,83,21,0.2)' }}
                    >
                      <Icon className="w-5 h-5 text-orange" />
                    </div>
                    <h3 className="text-heading-md text-white font-bold">{kit.title}</h3>
                  </div>
                  <p className="text-body-md text-white/50 mb-5">{kit.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {kit.modules.map(m => (
                      <span
                        key={m}
                        className="text-label-sm text-white/60 bg-white/8 px-3 py-1.5 rounded-lg border border-white/10"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-1.5 text-orange font-semibold text-body-md hover:text-orange-light transition-colors"
                  >
                    Explorar kit <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(255,83,21,0.15) 0%, rgba(124,58,237,0.1) 100%)', border: '1px solid rgba(255,83,21,0.2)' }}
        >
          <h2 className="text-display-sm text-white font-black mb-3">
            Pronto para ativar sua solução?
          </h2>
          <p className="text-body-xl text-white/60 mb-8 max-w-xl mx-auto">
            Fale com nosso time e coloque em produção em até 30 dias.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 text-white font-bold text-body-lg px-10 py-4 rounded-pill active:scale-95 transition-all shadow-brand"
            style={{ background: 'linear-gradient(135deg, #FF5315 0%, #FF7A45 100%)' }}
          >
            Marcar uma demonstração
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
