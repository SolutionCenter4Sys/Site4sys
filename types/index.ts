export interface Offer {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  category: 'flagship' | 'core';
  icon: string;
  color: string;
  forWhom: string;
  pain: string;
  promise: string;
  deliverables: string[];
  kpis: string[];
  timeline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  caseRef?: string;
}

export interface Case {
  id: string;
  slug: string;
  sector: string;
  company?: string;
  challenge: string;
  solution: string;
  impact: string;
  impactMetric: string;
  impactLabel: string;
  offer: string;
  offerSlug?: string;
  quote?: string;
  author?: string;
  role?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  sector: string;
  avatar?: string;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  icon: string;
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Office {
  id: string;
  city: string;
  country: string;
  address: string;
  phone?: string;
  email?: string;
  flag: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ContactFormData {
  nome: string;
  empresa: string;
  cargo: string;
  email: string;
  telefone: string;
  servico: string;
  mensagem: string;
  ofertaContexto?: string;
}
