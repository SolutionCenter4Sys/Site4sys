import type { Testimonial, Metric, Certification, Office } from '@/types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'A Foursys entende o contexto de negócio antes de propor solução. Em 12 meses, desbloqueamos 100 projetos de integração que estavam parados há anos.',
    author: 'Carlos Mendes',
    role: 'CIO',
    company: 'Operadora de Saúde',
    sector: 'Saúde',
  },
  {
    id: '2',
    quote: 'Saímos de 6 pilotos de IA sem resultado para um caso real com ROI calculado em 6 semanas. A metodologia IA com Impacto foi um divisor de águas.',
    author: 'Ana Paula Rocha',
    role: 'Head de Operações',
    company: 'Seguradora',
    sector: 'Seguros',
  },
  {
    id: '3',
    quote: 'A estabilidade do time Foursys é o que mais impressiona. Turnover de 3,6% é real — os mesmos profissionais que iniciaram ainda estão conosco dois anos depois.',
    author: 'Rodrigo Silva',
    role: 'CTO',
    company: 'Fintech',
    sector: 'Financeiro',
  },
];

export const METRICS: Metric[] = [
  { id: '1', value: '26', label: 'anos de história', sublabel: 'Fundada em 2000', icon: 'Calendar' },
  { id: '2', value: '3,6%', label: 'turnover', sublabel: 'Great Place to Work', icon: 'Users' },
  { id: '3', value: '500K+', label: 'projetos entregues', sublabel: 'em projetos de impacto', icon: 'FolderCheck' },
  { id: '4', value: '2K+', label: 'colaboradores', sublabel: 'em 3 continentes', icon: 'Users' },
  { id: '5', value: '3M+', label: 'horas entregues/ano', sublabel: 'em projetos de impacto', icon: 'Clock' },
  { id: '6', value: '+20%', label: 'crescimento anual', sublabel: 'consistente', icon: 'TrendingUp' },
];

export const CERTIFICATIONS: Certification[] = [
  { id: '1', name: 'ISO 9001', description: 'Gestão da Qualidade', icon: 'CheckCircle' },
  { id: '2', name: 'ISO 27001', description: 'Segurança da Informação', icon: 'Shield' },
  { id: '3', name: 'ISO 27701', description: 'Privacidade e LGPD', icon: 'Lock' },
  { id: '4', name: 'ISO 14001', description: 'Gestão Ambiental', icon: 'Leaf' },
  { id: '5', name: 'SAFe', description: 'Agilidade em Escala', icon: 'GitBranch' },
  { id: '6', name: 'GPTW', description: 'Great Place to Work', icon: 'Award' },
  { id: '7', name: 'Agilidade Brasil', description: 'Premiação Nacional', icon: 'Trophy' },
  { id: '8', name: '100 Open Startups', description: 'Inovação Aberta', icon: 'Star' },
];

/** Escritórios alinhados ao material institucional 2026 V9.01 */
export const OFFICES: Office[] = [
  { id: 'barueri', city: 'Barueri', country: 'Brasil', address: 'Av. Tamboré, 267 – Torre Norte, 9º andar', phone: '(11) 4134-2222', email: 'contato@foursys.com.br', flag: '🇧🇷' },
  { id: 'paulista', city: 'São Paulo', country: 'Brasil', address: 'Av. Paulista, 1912 – Consolação, 15º andar', phone: '(11) 4861-8560', email: 'contato@foursys.com.br', flag: '🇧🇷' },
  { id: 'curitiba', city: 'Curitiba', country: 'Brasil', address: 'R. Comendador Araújo, 499 – Batel, 10º andar', phone: '(41) 2106-6709', email: 'contato@foursys.com.br', flag: '🇧🇷' },
  { id: 'inovabra', city: 'São Paulo', country: 'Brasil', address: 'Av. Angélica, 2529 – Bela Vista (Inovabra Habitat)', phone: '(11) 3062-1823', email: 'contato@foursys.com.br', flag: '🇧🇷' },
  { id: 'rio', city: 'Rio de Janeiro', country: 'Brasil', address: 'Av. Pres. Vargas, 3131 – Cidade Nova, Sala 604', email: 'contato@foursys.com.br', flag: '🇧🇷' },
  { id: 'lisboa', city: 'Lisboa', country: 'Portugal', address: 'Av. da Liberdade, 110 – 1269-046', email: 'contato@foursys.com.br', flag: '🇵🇹' },
  { id: 'florida', city: 'Boca Raton', country: 'EUA', address: '980 N. Federal Highway #110, Florida 33432', email: 'contact@foursys.com', flag: '🇺🇸' },
];

/** Premiações (material institucional PDF) */
export const AWARDS = [
  { name: 'Prêmio Colaborar para Inovar', years: '2020, 2022, 2023 e 2024' },
  { name: 'Prêmio Agilidade Brasil', years: '2024 e 2025' },
  { name: 'Ranking 100 Open Startups', years: '2023 e 2024' },
  { name: 'Destaque Saúde Emocional Jungle', years: '2022' },
];

export const SERVICES_LIST = [
  'AI-Augmented Squad',
  'Modernização de Legado',
  'IA First',
  'Estratégia & Inovação',
  'Agilidade & Org Design',
  'Cibersegurança & Zero Trust',
  'Observabilidade & Resiliência',
  'FinOps & Custo de IA',
  'Governança de IA & Dados',
  'Trabalho Humano + IA',
  'Produtos & Plataformas Digitais',
  'AMS — Application Management',
  'Dados & Inteligência',
  'Integrações via API & Open Finance',
  'Qualidade & Testes com IA',
  'Hiperautomação & RPA',
  'Outro',
];

export const FOURLIVES_STATS = [
  { value: '3.000+', label: 'vidas impactadas', icon: 'Heart' },
  { value: '1', label: 'árvore plantada por profissional/ano', icon: 'Leaf' },
  { value: '3', label: 'frentes de impacto social', icon: 'Globe' },
  { value: '26', label: 'anos de responsabilidade ESG', icon: 'Award' },
];

export const FOURLIVES_PILLARS = [
  {
    icon: 'BookOpen',
    title: 'Capacitação',
    description: 'Programas de educação tecnológica para comunidades de baixa renda, formando profissionais para o mercado de TI.',
  },
  {
    icon: 'Users',
    title: 'Inclusão',
    description: 'Iniciativas de diversidade e inclusão para ampliar oportunidades de grupos subrepresentados na tecnologia.',
  },
  {
    icon: 'Leaf',
    title: 'Sustentabilidade',
    description: 'Plantio de uma árvore por profissional a cada ano e metas de redução de pegada de carbono nas operações.',
  },
];
