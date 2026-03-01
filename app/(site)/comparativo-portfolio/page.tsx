import type { Metadata } from 'next';
import { CheckCircle, XCircle, AlertCircle, Trophy, Star } from 'lucide-react';
import { DarkPageHero } from '@/components/sections/DarkPageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Kicker } from '@/components/ui/Kicker';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Comparativo de Portfólio — Foursys vs. Mercado',
  description:
    'Análise estratégica comparando o portfólio de ofertas, serviços e produtos da Foursys com Accenture, IBM, TCS, Cognizant, Thoughtworks, GFT e Stefanini.',
};

/* ─────────────────────────────────────────────────────────────────────
   DADOS
───────────────────────────────────────────────────────────────────── */

type Level = 'leader' | 'full' | 'partial' | 'absent';

interface CapabilityRow {
  capability: string;
  category: string;
  foursys: Level;
  accenture: Level;
  tcs: Level;
  cognizant: Level;
  ibm: Level;
  thoughtworks: Level;
  gft: Level;
  stefanini: Level;
}

const CAPABILITY_ROWS: CapabilityRow[] = [
  {
    capability: 'Consultoria Estratégica / Inovação',
    category: 'Estratégia',
    foursys: 'full',
    accenture: 'leader',
    tcs: 'full',
    cognizant: 'full',
    ibm: 'full',
    thoughtworks: 'full',
    gft: 'partial',
    stefanini: 'partial',
  },
  {
    capability: 'Engenharia de Software / Squads',
    category: 'Engenharia',
    foursys: 'leader',
    accenture: 'full',
    tcs: 'leader',
    cognizant: 'full',
    ibm: 'partial',
    thoughtworks: 'leader',
    gft: 'full',
    stefanini: 'full',
  },
  {
    capability: 'Inteligência Artificial / ML',
    category: 'IA & Dados',
    foursys: 'full',
    accenture: 'full',
    tcs: 'full',
    cognizant: 'full',
    ibm: 'leader',
    thoughtworks: 'full',
    gft: 'full',
    stefanini: 'partial',
  },
  {
    capability: 'Cloud (migração, modernização)',
    category: 'Cloud',
    foursys: 'full',
    accenture: 'full',
    tcs: 'full',
    cognizant: 'full',
    ibm: 'leader',
    thoughtworks: 'full',
    gft: 'full',
    stefanini: 'partial',
  },
  {
    capability: 'Modernização de Legado',
    category: 'Engenharia',
    foursys: 'leader',
    accenture: 'full',
    tcs: 'full',
    cognizant: 'full',
    ibm: 'full',
    thoughtworks: 'leader',
    gft: 'full',
    stefanini: 'partial',
  },
  {
    capability: 'Cibersegurança / Zero Trust',
    category: 'Segurança',
    foursys: 'full',
    accenture: 'full',
    tcs: 'full',
    cognizant: 'full',
    ibm: 'leader',
    thoughtworks: 'partial',
    gft: 'partial',
    stefanini: 'partial',
  },
  {
    capability: 'Dados, Analytics & BI',
    category: 'IA & Dados',
    foursys: 'full',
    accenture: 'full',
    tcs: 'full',
    cognizant: 'full',
    ibm: 'leader',
    thoughtworks: 'full',
    gft: 'full',
    stefanini: 'partial',
  },
  {
    capability: 'Agilidade & DevOps',
    category: 'Engenharia',
    foursys: 'full',
    accenture: 'full',
    tcs: 'full',
    cognizant: 'full',
    ibm: 'partial',
    thoughtworks: 'leader',
    gft: 'full',
    stefanini: 'partial',
  },
  {
    capability: 'Hiperautomação & RPA',
    category: 'Automação',
    foursys: 'full',
    accenture: 'full',
    tcs: 'full',
    cognizant: 'full',
    ibm: 'full',
    thoughtworks: 'partial',
    gft: 'partial',
    stefanini: 'partial',
  },
  {
    capability: 'Qualidade & Testes com IA',
    category: 'Engenharia',
    foursys: 'full',
    accenture: 'partial',
    tcs: 'full',
    cognizant: 'full',
    ibm: 'partial',
    thoughtworks: 'leader',
    gft: 'partial',
    stefanini: 'partial',
  },
  {
    capability: 'AMS / Managed Services',
    category: 'Operações',
    foursys: 'full',
    accenture: 'leader',
    tcs: 'leader',
    cognizant: 'leader',
    ibm: 'leader',
    thoughtworks: 'absent',
    gft: 'partial',
    stefanini: 'full',
  },
  {
    capability: 'Open Finance / Fintech / APIs',
    category: 'Financeiro',
    foursys: 'full',
    accenture: 'partial',
    tcs: 'partial',
    cognizant: 'partial',
    ibm: 'partial',
    thoughtworks: 'absent',
    gft: 'leader',
    stefanini: 'absent',
  },
  {
    capability: 'Produtos Proprietários (SaaS/IP)',
    category: 'Produtos',
    foursys: 'full',
    accenture: 'partial',
    tcs: 'full',
    cognizant: 'partial',
    ibm: 'leader',
    thoughtworks: 'absent',
    gft: 'absent',
    stefanini: 'absent',
  },
  {
    capability: 'ESG / Impacto Social',
    category: 'ESG',
    foursys: 'leader',
    accenture: 'partial',
    tcs: 'partial',
    cognizant: 'partial',
    ibm: 'partial',
    thoughtworks: 'partial',
    gft: 'absent',
    stefanini: 'absent',
  },
];

const COMPANIES = [
  { key: 'foursys', name: 'Foursys', tag: 'Nacional · Squad-First', color: '#FF5315' },
  { key: 'accenture', name: 'Accenture', tag: 'Global · $230B', color: '#A100FF' },
  { key: 'tcs', name: 'TCS', tag: 'Global · $170B', color: '#EC1C24' },
  { key: 'cognizant', name: 'Cognizant', tag: 'Global · $38B', color: '#0033A1' },
  { key: 'ibm', name: 'IBM', tag: '112 anos · $200B', color: '#006699' },
  { key: 'thoughtworks', name: 'Thoughtworks', tag: 'Tech Radar · 50+ países', color: '#E43935' },
  { key: 'gft', name: 'GFT', tag: 'Fintech · IA', color: '#E5173C' },
  { key: 'stefanini', name: 'Stefanini', tag: 'Nacional · 40+ países', color: '#004B8D' },
] as const;

type CompanyKey = 'foursys' | 'accenture' | 'tcs' | 'cognizant' | 'ibm' | 'thoughtworks' | 'gft' | 'stefanini';

interface CompanyProfile {
  key: CompanyKey;
  name: string;
  tagline: string;
  positioning: string;
  siteScore: string;
  sitePos: string;
  highlights: string[];
  proprietaryProducts: string[];
  differentiator: string;
  color: string;
}

const COMPANY_PROFILES: CompanyProfile[] = [
  {
    key: 'foursys',
    name: 'Foursys',
    tagline: 'Squads que entregam valor em semanas, não em meses.',
    positioning: 'Parceiro enterprise-grade com agilidade de squad. 26 anos · 3,6% turnover · setores regulados · Brasil, EUA e Portugal.',
    siteScore: '8,15',
    sitePos: '4º',
    highlights: ['Squads Híbridas (humanos + IA)', 'IA com Impacto (ROI em 4–6 semanas)', 'Modernização de Legado', 'Open Finance & APIs', 'Qualidade & Testes com IA'],
    proprietaryProducts: ['Fourmakers', 'Token4you', 'Fourgoals', 'FourLeads', '4AI', 'Moxe', 'Loome', 'Concilia', 'FourLives'],
    differentiator: '3,6% turnover publicado · 9 produtos próprios · FourLives (ESG) · Único com método squad+IA+ROI para setores regulados no Brasil',
    color: '#FF5315',
  },
  {
    key: 'accenture',
    name: 'Accenture',
    tagline: 'Juntos, nós reinventamos.',
    positioning: 'Consultoria global #1. Reinvenção completa de negócios: technology, strategy, operations, song (marketing). 774K funcionários.',
    siteScore: '8,23',
    sitePos: '3º',
    highlights: ['Accenture Technology (Cloud, IA, Security)', 'Accenture Strategy & Consulting', 'Accenture Song (Marketing & CX)', 'Accenture Operations (BPO global)', 'Industry X (manufatura 4.0)'],
    proprietaryProducts: ['myWizard (automação)', 'SynOps (operações inteligentes)', 'Accenture Cloud Platform', 'LearnVantage'],
    differentiator: 'Única empresa capaz de reinventar C-level strategy + tecnologia + marketing + operações globalmente. Ethisphere 14 anos consecutivos.',
    color: '#A100FF',
  },
  {
    key: 'tcs',
    name: 'TCS',
    tagline: 'Building on Belief.',
    positioning: '"Perpetually Adaptive Enterprise". 600K+ funcionários. Liderança em cloud, IA, modernização e produtos para financeiro/telecom.',
    siteScore: '8,43',
    sitePos: '2º',
    highlights: ['TCS AI.Cloud (GenAI, ML)', 'TCS BaNCS (bancário)', 'TCS Quartz (blockchain)', 'TCS Modernization', 'ignio™ (automação cognitiva)'],
    proprietaryProducts: ['TCS BaNCS', 'TCS HOBS', 'TCS Optumera', 'TCS iON', 'ignio™'],
    differentiator: 'Marca Tata como garantia institucional. TCS BaNCS é líder mundial em core banking. Portfólio de produtos proprietários por vertical.',
    color: '#EC1C24',
  },
  {
    key: 'cognizant',
    name: 'Cognizant',
    tagline: 'Intuition engineered.',
    positioning: 'Consultoria de tecnologia. Forte em AI, Healthcare, Insurance. 340K+ funcionários. Design de produto premiado.',
    siteScore: '8,10',
    sitePos: '5º',
    highlights: ['Cognizant AI (GenAI, MLOps)', 'Cognizant Digital Business (CX)', 'Cognizant Digital Operations (BPO, RPA)', 'Neuro® IT Operations (AIOps)', 'Quality Engineering'],
    proprietaryProducts: ['Neuro® IT Operations', 'Cognizant Skygrade™', 'FlexForce™'],
    differentiator: 'Design visual superior (nota 9 em 13 sites). Forte em Healthcare e Insurance. Neuro® para AIOps.',
    color: '#0033A1',
  },
  {
    key: 'ibm',
    name: 'IBM',
    tagline: "Let's create.",
    positioning: '112 anos. Hardware (mainframes, quantum), software (watsonx, Red Hat), serviços (Consulting, Cloud) e pesquisa (9 Prêmios Nobel). Portfólio mais amplo dentre todas as empresas avaliadas.',
    siteScore: '7,77',
    sitePos: '8º',
    highlights: ['IBM watsonx (IA generativa)', 'Red Hat (OpenShift, Ansible)', 'IBM Security QRadar', 'IBM Quantum Computing', 'IBM Research'],
    proprietaryProducts: ['IBM watsonx', 'Red Hat OpenShift', 'IBM QRadar', 'IBM Guardium', 'IBM Db2', 'IBM SPSS', 'IBM Aspera'],
    differentiator: 'Confiança 10/10 — única nota máxima. Único com Quantum Computing e IBM Research. Portfólio incomparável em amplitude.',
    color: '#006699',
  },
  {
    key: 'thoughtworks',
    name: 'Thoughtworks',
    tagline: 'Extraordinary impact on humans and technology.',
    positioning: 'Referência mundial em engenharia de software. Tech Radar semestral. Livros publicados por Martin Fowler. 50+ países. 11K consultores.',
    siteScore: '7,89',
    sitePos: '7º',
    highlights: ['Software Craftsmanship & Engineering', 'Agile & DevOps (referência histórica)', 'AI & Data (Responsible AI, Data Mesh)', 'Cloud-native & Kubernetes', 'Quality Engineering'],
    proprietaryProducts: ['Tech Radar (IP intelectual)', 'XConf (evento global)'],
    differentiator: 'Tech Radar como ativo de autoridade global único. Engajamento 9/10 — maior nota no ranking. Livros de Martin Fowler como IP.',
    color: '#E43935',
  },
  {
    key: 'gft',
    name: 'GFT Technologies',
    tagline: 'Others create hype. We create impact.',
    positioning: 'Parceiro tecnológico focado em IA e setor financeiro. "Nós não criamos hype, criamos impacto." Foco em Open Finance, banking e seguros.',
    siteScore: '7,75',
    sitePos: '9º',
    highlights: ['Core Banking & Open Finance', 'GenAI & ML aplicado ao financeiro', 'Cloud (AWS, Azure, GCP)', 'DevOps & Quality Engineering', 'Digital Products (mobile banking)'],
    proprietaryProducts: [],
    differentiator: 'Headline mais impactante do ranking. Maior especialização em Open Finance. Foco bancário profundo que nenhuma outra empresa possui.',
    color: '#E5173C',
  },
  {
    key: 'stefanini',
    name: 'Stefanini',
    tagline: 'Cocriando soluções para um futuro melhor.',
    positioning: 'Consultoria de TI nacional/global. 31K funcionários, 40+ países. Foco em outsourcing, BPO e transformação digital.',
    siteScore: '6,42',
    sitePos: '11º',
    highlights: ['Desenvolvimento de software', 'BPO & Outsourcing', 'Cibersegurança', 'Analytics & Cloud', 'SophieX (assistente virtual)'],
    proprietaryProducts: ['SophieX (assistente virtual)'],
    differentiator: 'Escala de outsourcing e BPO no mercado nacional. SophieX como assistente virtual própria.',
    color: '#004B8D',
  },
];

const CATEGORIES = ['Estratégia', 'Engenharia', 'IA & Dados', 'Cloud', 'Segurança', 'Automação', 'Operações', 'Financeiro', 'Produtos', 'ESG'];

/* ─────────────────────────────────────────────────────────────────────
   COMPONENTES AUXILIARES
───────────────────────────────────────────────────────────────────── */

function LevelIcon({ level }: { level: Level }) {
  if (level === 'leader')
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-orange/15 text-orange" title="Liderança de mercado">
        <Trophy className="w-4 h-4" />
      </span>
    );
  if (level === 'full')
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-green-50 text-green-600" title="Capacidade completa">
        <CheckCircle className="w-4 h-4" />
      </span>
    );
  if (level === 'partial')
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-500" title="Capacidade parcial">
        <AlertCircle className="w-4 h-4" />
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-300" title="Ausente">
      <XCircle className="w-4 h-4" />
    </span>
  );
}

function ScorePill({ score, pos }: { score: string; pos: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-navy/10 border border-navy/20">
      <Star className="w-3.5 h-3.5 text-orange" />
      <span className="text-label-md font-bold text-navy">{score}</span>
      <span className="text-label-sm text-gray-500">· {pos} lugar</span>
    </div>
  );
}

const CATEGORY_COLORS: Record<string, string> = {
  Estratégia: 'bg-purple-50 text-purple-700 border-purple-200',
  Engenharia: 'bg-blue-50 text-blue-700 border-blue-200',
  'IA & Dados': 'bg-violet-50 text-violet-700 border-violet-200',
  Cloud: 'bg-sky-50 text-sky-700 border-sky-200',
  Segurança: 'bg-red-50 text-red-700 border-red-200',
  Automação: 'bg-amber-50 text-amber-700 border-amber-200',
  Operações: 'bg-teal-50 text-teal-700 border-teal-200',
  Financeiro: 'bg-green-50 text-green-700 border-green-200',
  Produtos: 'bg-orange-50 text-orange-700 border-orange-200',
  ESG: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

/* ─────────────────────────────────────────────────────────────────────
   PÁGINA
───────────────────────────────────────────────────────────────────── */

export default function ComparativoPortfolioPage() {
  return (
    <>
      {/* Hero */}
      <DarkPageHero className="pt-32 pb-20" aria-label="Comparativo de portfólio">
        <div className="container-site">
          <Breadcrumb items={[{ label: 'Comparativo de Portfólio' }]} light className="mb-8" />
        </div>
        <div className="container-site text-center">
          <Kicker light className="mb-4">Análise Estratégica</Kicker>
          <h1 className="text-display-md text-white mb-6">
            Foursys vs. Mercado —{' '}
            <span className="text-orange-light">Comparativo de Portfólio</span>
          </h1>
          <p className="text-body-xl text-white/70 max-w-2xl mx-auto">
            Onde a Foursys compete, onde diferencia e onde há espaço em branco — comparando ofertas,
            serviços e produtos de 8 empresas líderes.
          </p>

          {/* Legenda */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            {[
              { icon: <Trophy className="w-4 h-4" />, label: 'Liderança de mercado', bg: 'bg-orange/20 text-orange-light' },
              { icon: <CheckCircle className="w-4 h-4" />, label: 'Capacidade completa', bg: 'bg-green-500/20 text-green-300' },
              { icon: <AlertCircle className="w-4 h-4" />, label: 'Capacidade parcial', bg: 'bg-amber-400/20 text-amber-300' },
              { icon: <XCircle className="w-4 h-4" />, label: 'Ausente', bg: 'bg-white/10 text-white/40' },
            ].map(item => (
              <div key={item.label} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-pill ${item.bg} border border-white/10`}>
                {item.icon}
                <span className="text-label-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </DarkPageHero>

      {/* ── Matriz de Capacidades ── */}
      <section className="section-padding bg-white" aria-label="Matriz comparativa de capacidades">
        <div className="container-site">
          <div className="text-center mb-10">
            <Kicker className="mb-3">Matriz de Portfólio</Kicker>
            <h2 className="text-display-sm text-navy">14 Capacidades × 8 Empresas</h2>
            <p className="text-body-lg text-gray-500 mt-2 max-w-2xl mx-auto">
              Avaliação independente baseada em portfólios públicos, sites oficiais e benchmark de mercado — Março 2026.
            </p>
          </div>

          {/* Scroll horizontal para mobile */}
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 text-body-sm font-semibold text-gray-500 w-52">Capacidade</th>
                  {COMPANIES.map(c => (
                    <th key={c.key} className="py-3 px-2 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: c.color }}
                        />
                        <span className="text-label-sm font-bold text-navy whitespace-nowrap">{c.name}</span>
                        <span className="text-label-sm text-gray-400 whitespace-nowrap">{c.tag}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map(category => {
                  const rows = CAPABILITY_ROWS.filter(r => r.category === category);
                  return rows.map((row, idx) => (
                    <tr
                      key={row.capability}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx === 0 ? 'border-t-2 border-t-gray-200' : ''}`}
                    >
                      <td className="py-3 pr-4">
                        <div className="flex items-start gap-2">
                          {idx === 0 && (
                            <span className={`shrink-0 mt-0.5 px-2 py-0.5 rounded text-label-sm border ${CATEGORY_COLORS[category]}`}>
                              {category}
                            </span>
                          )}
                          <span className={`text-body-sm text-gray-700 leading-snug ${idx !== 0 ? 'ml-0' : ''}`}>
                            {row.capability}
                          </span>
                        </div>
                      </td>
                      {COMPANIES.map(c => (
                        <td key={c.key} className="py-3 px-2 text-center">
                          <div className="flex justify-center">
                            <LevelIcon level={row[c.key as CompanyKey]} />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Score de Site ── */}
      <section className="section-padding bg-gray-50" aria-label="Ranking de qualidade dos sites">
        <div className="container-site">
          <div className="text-center mb-10">
            <Kicker className="mb-3">Benchmark de Sites</Kicker>
            <h2 className="text-display-sm text-navy">Qualidade dos Sites — Ranking v4.0</h2>
            <p className="text-body-lg text-gray-500 mt-2 max-w-2xl mx-auto">
              Score ponderado por 8 critérios: Proposta de Valor, CRO, Confiança, Estrutura, Copy, Visual, Engajamento e Harmonia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { pos: '🥇 1º', name: 'Conversion', score: '8,80', tag: 'Referência global em CRO', color: '#F59E0B' },
              { pos: '🥈 2º', name: 'TCS', score: '8,43', tag: 'Enterprise premium + vídeo', color: '#9CA3AF' },
              { pos: '🥉 3º', name: 'Accenture', score: '8,23', tag: 'Mega-menu + identidade forte', color: '#CD7F32' },
              { pos: '4º', name: 'Foursys (Novo)', score: '8,15', tag: 'Squad-first · estrutura 9/10', color: '#FF5315', highlight: true },
              { pos: '5º', name: 'Cognizant', score: '8,10', tag: '"Intuition engineered"', color: '#6B7280' },
              { pos: '6º', name: 'Flat 101', score: '7,90', tag: 'BXOp · CRO especializado', color: '#6B7280' },
              { pos: '7º', name: 'Thoughtworks', score: '7,89', tag: 'Engajamento 9/10 (Tech Radar)', color: '#6B7280' },
              { pos: '8º', name: 'IBM', score: '7,77', tag: 'Confiança 10/10 · 112 anos', color: '#6B7280' },
              { pos: '9º', name: 'GFT', score: '7,75', tag: '"Others create hype"', color: '#6B7280' },
              { pos: '10º', name: 'Product Hackers', score: '7,54', tag: 'SOLID Growth', color: '#6B7280' },
              { pos: '11º', name: 'Stefanini', score: '6,42', tag: 'Genérico · menos estruturado', color: '#6B7280' },
              { pos: '12º', name: 'Foursys (Antigo)', score: '4,70', tag: 'Baseline histórico', color: '#9CA3AF' },
            ].map(item => (
              <div
                key={item.name}
                className={`bg-white rounded-xl p-5 shadow-card border transition-all ${item.highlight ? 'border-orange ring-2 ring-orange/20 shadow-card-hover' : 'border-gray-100 hover:shadow-card-hover'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-label-md font-bold text-gray-500">{item.pos}</span>
                  {item.highlight && (
                    <span className="px-2 py-0.5 rounded-pill bg-orange/10 text-orange text-label-sm font-semibold border border-orange/20">
                      Foursys
                    </span>
                  )}
                </div>
                <p className="text-heading-md text-navy font-bold mb-1">{item.name}</p>
                <p className="text-display-sm font-extrabold mb-2" style={{ color: item.color }}>
                  {item.score}
                </p>
                <p className="text-body-sm text-gray-500">{item.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perfis das Empresas ── */}
      <section className="section-padding bg-white" aria-label="Perfis detalhados das empresas">
        <div className="container-site">
          <div className="text-center mb-10">
            <Kicker className="mb-3">Perfis de Portfólio</Kicker>
            <h2 className="text-display-sm text-navy">Detalhamento por Empresa</h2>
            <p className="text-body-lg text-gray-500 mt-2 max-w-2xl mx-auto">
              Posicionamento, principais ofertas, produtos proprietários e diferencial competitivo de cada empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {COMPANY_PROFILES.map(company => (
              <div
                key={company.key}
                className={`bg-white rounded-2xl border p-6 shadow-card hover:shadow-card-hover transition-all ${company.key === 'foursys' ? 'border-orange/40 ring-1 ring-orange/20 lg:col-span-2' : 'border-gray-100'}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ background: company.color }}
                      />
                      <h3 className="text-heading-lg text-navy font-bold">{company.name}</h3>
                      {company.key === 'foursys' && (
                        <span className="px-2.5 py-0.5 rounded-pill bg-orange text-white text-label-sm font-semibold">
                          Nossa empresa
                        </span>
                      )}
                    </div>
                    <p className="text-body-lg text-gray-600 italic">"{company.tagline}"</p>
                  </div>
                  <ScorePill score={company.siteScore} pos={company.sitePos} />
                </div>

                <p className="text-body-md text-gray-600 mb-5 leading-relaxed">{company.positioning}</p>

                <div className={`grid gap-5 ${company.key === 'foursys' ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                  {/* Destaques */}
                  <div>
                    <p className="text-label-md text-gray-400 uppercase tracking-wider font-semibold mb-2">Principais ofertas</p>
                    <ul className="space-y-1.5">
                      {company.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2 text-body-sm text-gray-700">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: company.color }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Produtos proprietários */}
                  <div>
                    <p className="text-label-md text-gray-400 uppercase tracking-wider font-semibold mb-2">Produtos proprietários</p>
                    {company.proprietaryProducts.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5">
                        {company.proprietaryProducts.map(p => (
                          <span
                            key={p}
                            className="px-2.5 py-1 rounded-lg text-label-sm font-semibold border"
                            style={{
                              background: `${company.color}12`,
                              borderColor: `${company.color}30`,
                              color: company.color,
                            }}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-body-sm text-gray-400 italic">Sem produtos proprietários</p>
                    )}
                  </div>

                  {/* Diferencial */}
                  <div className={company.key === 'foursys' ? '' : 'md:col-span-2'}>
                    <p className="text-label-md text-gray-400 uppercase tracking-wider font-semibold mb-2">Diferencial competitivo</p>
                    <p className="text-body-sm text-gray-600 leading-relaxed">{company.differentiator}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Análise Estratégica ── */}
      <section className="section-padding bg-gray-50" aria-label="Análise estratégica">
        <div className="container-site">
          <div className="text-center mb-10">
            <Kicker className="mb-3">Insight Estratégico</Kicker>
            <h2 className="text-display-sm text-navy">Onde a Foursys se Posiciona</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'vs. Gigantes Globais',
                subtitle: 'IBM · Accenture · TCS',
                icon: '🌍',
                points: [
                  'Menor escala, mas maior proximidade de mercado local',
                  'Squad ágil vs. processos enterprise lentos',
                  '3,6% turnover publicado — dado que nenhum gigante divulga',
                  'Setores regulados brasileiros: vantagem de contexto',
                ],
                advantage: 'Agilidade + Proximidade',
                color: '#7C3AED',
              },
              {
                title: 'vs. Pares Tecnológicos',
                subtitle: 'Cognizant · GFT · Thoughtworks',
                icon: '⚖️',
                points: [
                  '9 produtos proprietários vs. 0–3 dos pares',
                  'FourLives (ESG) como diferencial de propósito único',
                  'Open Finance: equivalente ao GFT (foco bancário)',
                  'Thought leadership: gap vs. Thoughtworks (Tech Radar)',
                ],
                advantage: 'Produtos + ESG',
                color: '#FF5315',
              },
              {
                title: 'vs. Nacionais',
                subtitle: 'Stefanini',
                icon: '🇧🇷',
                points: [
                  'Proposta de valor mais específica e mensurável',
                  'Site com score 8,15 vs. 6,42 da Stefanini',
                  'Squad + IA + ROI vs. outsourcing genérico',
                  'Certificações de qualidade equivalentes',
                ],
                advantage: 'Proposta + Site',
                color: '#059669',
              },
            ].map(col => (
              <div key={col.title} className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
                <div className="text-4xl mb-3">{col.icon}</div>
                <h3 className="text-heading-lg text-navy font-bold mb-1">{col.title}</h3>
                <p className="text-body-sm text-gray-400 mb-4">{col.subtitle}</p>
                <ul className="space-y-2 mb-5">
                  {col.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-body-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: col.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill text-label-md font-semibold border"
                  style={{ background: `${col.color}12`, borderColor: `${col.color}30`, color: col.color }}
                >
                  <Star className="w-3.5 h-3.5" />
                  Vantagem: {col.advantage}
                </div>
              </div>
            ))}
          </div>

          {/* Espaços em Branco */}
          <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-orange" />
              </div>
              <div>
                <h3 className="text-heading-lg text-navy font-bold">Oportunidades de Portfólio — White Spaces</h3>
                <p className="text-body-sm text-gray-500">O que criar ou nomear para ampliar a diferenciação da Foursys</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  opportunity: 'Metodologia Proprietária Nomeada',
                  who: 'Flat 101 (BXOp) · TCS (PAE) · Product Hackers (SOLID)',
                  gap: 'A Foursys tem o método, mas não tem o nome. Ex: "Squad-First Method" ou "Método 4S"',
                  difficulty: 'Baixa',
                  impact: 'Alto',
                },
                {
                  opportunity: 'Tech Radar / Índice Próprio',
                  who: 'Thoughtworks (referência global)',
                  gap: 'Uma publicação semestral "Radar de Transformação Digital Brasil" posicionaria a Foursys como autoridade de mercado',
                  difficulty: 'Média',
                  impact: 'Alto',
                },
                {
                  opportunity: 'Calculadora de ROI Digital',
                  who: 'Accenture (parcial)',
                  gap: 'Ferramenta pública: "Quanto você economiza com IA em 6 semanas?" — geração de leads qualificados',
                  difficulty: 'Baixa',
                  impact: 'Alto',
                },
                {
                  opportunity: 'Produto de AIOps / Observabilidade',
                  who: 'IBM (Neuro) · Cognizant (Skygrade)',
                  gap: 'Produto proprietário de observabilidade aproveitaria a oferta de Observabilidade & Resiliência já existente',
                  difficulty: 'Alta',
                  impact: 'Médio',
                },
                {
                  opportunity: 'Comunidade de Clientes',
                  who: 'TCS (eventos) · IBM (IBM Developer)',
                  gap: 'Programa de advocacia e comunidade: "Foursys Champions" ou evento anual de transformação digital',
                  difficulty: 'Média',
                  impact: 'Médio',
                },
                {
                  opportunity: 'Whitepaper / Relatório Anual',
                  who: 'IBM (IBV) · Thoughtworks (Tech Radar)',
                  gap: '"Estado da Transformação Digital no Brasil" — autoridade de thought leadership anual com dados primários',
                  difficulty: 'Média',
                  impact: 'Alto',
                },
              ].map(item => (
                <div key={item.opportunity} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h4 className="text-heading-sm text-navy font-bold mb-2">{item.opportunity}</h4>
                  <p className="text-body-sm text-gray-400 mb-2">
                    <span className="font-semibold">Quem faz:</span> {item.who}
                  </p>
                  <p className="text-body-sm text-gray-600 mb-3 leading-relaxed">{item.gap}</p>
                  <div className="flex gap-2">
                    <span className={`px-2 py-0.5 rounded text-label-sm font-semibold ${item.difficulty === 'Baixa' ? 'bg-green-50 text-green-700' : item.difficulty === 'Média' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'}`}>
                      Esforço: {item.difficulty}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-label-sm font-semibold ${item.impact === 'Alto' ? 'bg-orange/10 text-orange-dark' : 'bg-gray-100 text-gray-600'}`}>
                      Impacto: {item.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Posição Única ── */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
        aria-label="Posicionamento único da Foursys"
      >
        <div className="container-site max-w-4xl mx-auto text-center">
          <Kicker light className="mb-4">Conclusão Estratégica</Kicker>
          <h2 className="text-display-sm text-white mb-6">
            A posição que{' '}
            <span className="text-orange-light">nenhum concorrente ocupa</span>
          </h2>
          <blockquote className="text-body-xl text-white/80 leading-relaxed mb-8 italic">
            "Parceiro enterprise-grade com agilidade de squad, 26 anos de entrega em setores regulados,
            portfólio de 9 produtos proprietários, turnover de 3,6% e programa ESG com impacto mensurável
            — no Brasil, EUA e Portugal."
          </blockquote>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
            Essa posição não é replicável pelos gigantes (escala excessiva, distância de mercado),
            pelos pares (sem produtos proprietários ou sem foco em setores regulados brasileiros)
            ou pelas empresas nacionais (proposta genérica, sem metodologia clara de squad+IA+ROI).
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { label: 'Escala', foursys: '2K+ colaboradores', competitor: 'TCS: 600K' },
              { label: 'Turnover', foursys: '3,6%', competitor: 'Mercado: 25%+' },
              { label: 'Produtos', foursys: '9 próprios', competitor: 'GFT: 0' },
              { label: 'Site Score', foursys: '8,15 (4º)', competitor: 'Stefanini: 6,42' },
            ].map(stat => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 min-w-[160px]">
                <p className="text-label-sm text-white/50 uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="text-heading-md text-orange-light font-bold">{stat.foursys}</p>
                <p className="text-label-sm text-white/40 mt-1">{stat.competitor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Quer entender como a Foursys resolve o seu problema?"
        subheadline="Diagnóstico gratuito • Resposta em 24h • Sem compromisso"
      />
    </>
  );
}
