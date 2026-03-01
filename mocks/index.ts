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
    quote: 'Saímos de 6 pilotos de IA sem resultado para um caso real com ROI calculado em 6 semanas. A metodologia IA com ROI foi um divisor de águas.',
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
  { id: '1', value: '25', label: 'anos de história', sublabel: 'Fundada em 2000', icon: 'Calendar' },
  { id: '2', value: '3,6%', label: 'turnover', sublabel: 'Great Place to Work', icon: 'Users' },
  { id: '3', value: '3M+', label: 'horas entregues/ano', sublabel: 'em projetos de impacto', icon: 'Clock' },
  { id: '4', value: '+20%', label: 'crescimento anual', sublabel: 'consistente', icon: 'TrendingUp' },
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

export const OFFICES: Office[] = [
  {
    id: 'sao-paulo',
    city: 'São Paulo',
    country: 'Brasil',
    address: 'Rua Augusta, 1836 – 7º Andar, Consolação, São Paulo – SP',
    phone: '+55 11 3062-1823',
    email: 'contato@foursys.com.br',
    flag: '🇧🇷',
  },
  {
    id: 'usa',
    city: 'Boston',
    country: 'EUA',
    address: 'One Financial Center, Boston – MA 02111',
    email: 'contact@foursys.com',
    flag: '🇺🇸',
  },
  {
    id: 'portugal',
    city: 'Lisboa',
    country: 'Portugal',
    address: 'Av. da Liberdade, 110, Lisboa',
    email: 'contato@foursys.com.br',
    flag: '🇵🇹',
  },
];

export const SERVICES_LIST = [
  'Squads Híbridas',
  'Modernização de Legado',
  'IA com ROI',
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
  'Outro',
];

export const FOURLIVES_STATS = [
  { value: '3.000+', label: 'vidas impactadas', icon: 'Heart' },
  { value: '1', label: 'árvore plantada por profissional/ano', icon: 'Leaf' },
  { value: '3', label: 'frentes de impacto social', icon: 'Globe' },
  { value: '25', label: 'anos de responsabilidade ESG', icon: 'Award' },
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
