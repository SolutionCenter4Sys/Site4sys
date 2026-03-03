/**
 * Traduções dos nomes e subtítulos das ofertas para EN e ES.
 * O restante dos campos (deliverables, kpis, etc.) permanece em PT por ora.
 */

type OfferTranslation = { name: string; subtitle: string; description: string };
type OfferTranslations = Record<string, OfferTranslation>;

export const OFFER_TRANSLATIONS_EN: OfferTranslations = {
  'fourblox': {
    name: 'FourBlox',
    subtitle: 'Digital products by subscription, ready to scale.',
    description: 'Digital products as a service (SaaS). Ready-made modules that accelerate time-to-market: from concept to product in production with a predictable subscription model and built-in governance.',
  },
  'quality-ia': {
    name: 'Quality AI',
    subtitle: 'QA, certification and automation with AI — fewer failures, more predictability.',
    description: 'Software quality treated as an engineering discipline with AI. AI test generator agent, shift-left, intelligent automation and certification for regulated environments.',
  },
  'squads-hibridas': {
    name: 'AI-Augmented Squad',
    subtitle: 'Value in weeks, not months. Delivery with built-in governance.',
    description: 'Multidisciplinary teams (humans + AI) delivering in short cycles, with metrics and governance. Unlike generic nearshore: quality, security and 3.6% turnover playbook.',
  },
  'modernizacao-legado': {
    name: 'Legacy Modernization',
    subtitle: 'From core to cloud, without trauma.',
    description: 'Wave-based plan (encapsulate → replatform → refactor) with pilot case and metrics. For CIO/CTO of companies with critical systems needing controlled-risk modernization.',
  },
  'ia-com-roi': {
    name: 'AI with Impact',
    subtitle: 'From pilot to measurable results in 4–6 weeks.',
    description: 'In 4–6 weeks: 2–3 prioritized cases, 1 prototype and business case with estimated ROI. For those wanting to move beyond AI experiments and prove real value.',
  },
  'estrategia-inovacao': {
    name: 'Strategy & Innovation',
    subtitle: 'Innovation that becomes roadmap and results.',
    description: 'Open Innovation, Innovation Labs, Business Design. We turn ideas into initiatives with measurable impact.',
  },
  'agilidade-org-design': {
    name: 'Agility & Org Design',
    subtitle: 'Organization that delivers in cycles.',
    description: 'Agile Methodologies and High-Performance Agility Programs. SAFe certifications, agile coaching and Org Design for delivering teams.',
  },
  'ciberseguranca-zero-trust': {
    name: 'Cybersecurity & Zero Trust',
    subtitle: 'Resilience and identity at the center of protection.',
    description: 'Identity and access assessment, staged Zero Trust plan, anti-fraud controls and resilience runbooks for regulated sectors.',
  },
  'observabilidade-resiliencia': {
    name: 'Observability & Resilience',
    subtitle: 'Visibility that becomes control.',
    description: 'Observability strategy (traces, logs, metrics), SLOs and alerts, AI telemetry. Applications, data and AI under control.',
  },
  'finops-custo-ia': {
    name: 'FinOps & AI Cost',
    subtitle: 'Predictability and cost control in cloud and AI.',
    description: 'Cost model (showback/chargeback), unit cost per capability, alerts and cloud and AI optimization recommendations.',
  },
  'governanca-ia-dados': {
    name: 'AI & Data Governance',
    subtitle: 'Scale AI with control and compliance.',
    description: 'Data classification, usage policies, access controls, guardrails and audit trails to scale AI safely.',
  },
  'trabalho-humano-ia': {
    name: 'Human Work + AI',
    subtitle: 'Safe adoption and productivity with AI.',
    description: 'Function and opportunity map, AI fluency tracks, AI usage policies and rituals, area pilots with goals.',
  },
  'produtos-plataformas': {
    name: 'Products & Digital Platforms',
    subtitle: 'From concept to product in production.',
    description: 'Product and digital platform engineering. From conception to functional MVP, with specialized squads in product, data and engineering.',
  },
  'ams': {
    name: 'AMS — Application Management',
    subtitle: 'Continuous operations with excellence.',
    description: 'Application Management Services with defined SLAs, NOC, incident management and continuous evolution of production applications.',
  },
  'dados-inteligencia': {
    name: 'Data & Intelligence',
    subtitle: 'Data as the basis for decision and AI.',
    description: 'BI, Analytics, Data Platform and Data Engineering. We turn data into actionable insights and AI foundation.',
  },
  'integracoes-api-open-finance': {
    name: 'API Integrations & Open Finance',
    subtitle: 'Connectivity, scalability and new business models.',
    description: 'Connect systems, partners and ecosystems with security, scalability and governance.',
  },
  'qualidade-testes-ia': {
    name: 'Quality & Testing with AI',
    subtitle: 'Fewer failures, more predictability.',
    description: 'Increase software quality without sacrificing speed. AI test generator agent, shift-left and intelligent automation.',
  },
  'hiperautomacao-rpa': {
    name: 'Hyperautomation & RPA',
    subtitle: 'Operational efficiency at scale.',
    description: 'Automate end-to-end processes for real efficiency gains. Combination of RPA, integrations and AI with governance from the design.',
  },
};

export const OFFER_TRANSLATIONS_ES: OfferTranslations = {
  'fourblox': {
    name: 'FourBlox',
    subtitle: 'Productos digitales por suscripción, listos para escalar.',
    description: 'Plataforma de productos digitales como servicio (SaaS). Módulos listos que aceleran el time-to-market con modelo de suscripción predecible y gobernanza integrada.',
  },
  'quality-ia': {
    name: 'Quality IA',
    subtitle: 'QA, certificación y automatización con IA — menos fallos, más previsibilidad.',
    description: 'Calidad de software tratada como disciplina de ingeniería con IA. Agente generador de pruebas, shift-left, automatización inteligente y certificación para entornos regulados.',
  },
  'squads-hibridas': {
    name: 'AI-Augmented Squad',
    subtitle: 'Valor en semanas, no en meses. Entrega con gobernanza integrada.',
    description: 'Equipos multidisciplinarios (humanos + IA) que entregan en ciclos cortos, con métricas y gobernanza.',
  },
  'modernizacao-legado': {
    name: 'Modernización de Legado',
    subtitle: 'Del core al cloud, sin trauma.',
    description: 'Plan por olas (encapsular → replatform → refactorizar) con caso piloto y métricas.',
  },
  'ia-com-roi': {
    name: 'IA con Impacto',
    subtitle: 'Del piloto al resultado medible en 4–6 semanas.',
    description: 'En 4–6 semanas: 2–3 casos priorizados, 1 prototipo y business case con ROI estimado.',
  },
  'estrategia-inovacao': {
    name: 'Estrategia & Innovación',
    subtitle: 'Innovación que se convierte en roadmap y resultado.',
    description: 'Open Innovation, Laboratorios de Innovación, Diseño de Negocios.',
  },
  'agilidade-org-design': {
    name: 'Agilidad & Org Design',
    subtitle: 'Organización que entrega en ciclos.',
    description: 'Metodologías Ágiles y Programas de Agilidad de Alto Rendimiento.',
  },
  'ciberseguranca-zero-trust': {
    name: 'Ciberseguridad & Zero Trust',
    subtitle: 'Resiliencia e identidad en el centro de la protección.',
    description: 'Evaluación de identidad y accesos, plan Zero Trust por etapas, controles anti-fraude.',
  },
  'observabilidade-resiliencia': {
    name: 'Observabilidad & Resiliencia',
    subtitle: 'Visibilidad que se convierte en control.',
    description: 'Estrategia de observabilidad (trazas, logs, métricas), SLOs y alertas, telemetría de IA.',
  },
  'finops-custo-ia': {
    name: 'FinOps & Costo de IA',
    subtitle: 'Previsibilidad y control de costos en cloud e IA.',
    description: 'Modelo de costos (showback/chargeback), costo unitario por capacidad, alertas y recomendaciones de optimización.',
  },
  'governanca-ia-dados': {
    name: 'Gobernanza de IA & Datos',
    subtitle: 'Escale IA con control y compliance.',
    description: 'Clasificación de datos, políticas de uso, controles de acceso, guardrails y trazas de auditoría.',
  },
  'trabalho-humano-ia': {
    name: 'Trabajo Humano + IA',
    subtitle: 'Adopción segura y productividad con IA.',
    description: 'Mapa de funciones y oportunidades, rutas de AI fluency, políticas y rituales de uso de IA.',
  },
  'produtos-plataformas': {
    name: 'Productos & Plataformas Digitales',
    subtitle: 'Del concepto al producto en producción.',
    description: 'Ingeniería de producto y plataformas digitales. Del concepto al MVP funcional.',
  },
  'ams': {
    name: 'AMS — Application Management',
    subtitle: 'Operación continua con excelencia.',
    description: 'Application Management Services con SLAs definidos, NOC, gestión de incidentes y evolución continua.',
  },
  'dados-inteligencia': {
    name: 'Datos & Inteligencia',
    subtitle: 'Datos como base de decisión e IA.',
    description: 'BI, Analytics, Data Platform e Ingeniería de Datos.',
  },
  'integracoes-api-open-finance': {
    name: 'Integraciones API & Open Finance',
    subtitle: 'Conectividad, escalabilidad y nuevos modelos de negocio.',
    description: 'Conectar sistemas, socios y ecosistemas con seguridad, escalabilidad y gobernanza.',
  },
  'qualidade-testes-ia': {
    name: 'Calidad & Pruebas con IA',
    subtitle: 'Menos fallas, más previsibilidad.',
    description: 'Aumentar la calidad del software sin sacrificar velocidad.',
  },
  'hiperautomacao-rpa': {
    name: 'Hiperautomación & RPA',
    subtitle: 'Eficiencia operacional a escala.',
    description: 'Automatizar procesos de punta a punta para ganancias reales de eficiencia.',
  },
};

export function getOfferTranslation(slug: string, locale: string): OfferTranslation | null {
  if (locale === 'en') return OFFER_TRANSLATIONS_EN[slug] ?? null;
  if (locale === 'es') return OFFER_TRANSLATIONS_ES[slug] ?? null;
  return null;
}
