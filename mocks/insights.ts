export type InsightTopic =
  | 'Inteligência Artificial'
  | 'Squads & Agilidade'
  | 'Modernização de Legado'
  | 'Cibersegurança'
  | 'Cloud & FinOps'
  | 'Dados & Analytics'
  | 'Transformação Digital'
  | 'Liderança Tech';

export type InsightIndustry =
  | 'Financeiro'
  | 'Saúde'
  | 'Seguros'
  | 'Varejo'
  | 'Indústria'
  | 'Tecnologia';

export type InsightContentType =
  | 'Artigo'
  | 'Pesquisa'
  | 'Podcast'
  | 'Caso de Sucesso'
  | 'Relatório'
  | 'Webinar';

export interface Insight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  topic: InsightTopic;
  industry?: InsightIndustry;
  contentType: InsightContentType;
  readTime: number;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  featured?: boolean;
  tag?: string;
}

export const INSIGHTS: Insight[] = [
  // ──────── FEATURED ────────
  {
    id: '1',
    slug: 'ia-com-impacto-do-piloto-ao-roi-em-6-semanas',
    title: 'IA First: como sair do piloto para ROI mensurável em 6 semanas',
    excerpt:
      'A maioria das empresas brasileiras tem 3 a 6 projetos de IA parados em piloto eterno. Descubra o método que a Foursys usa para transformar experimentos em resultados reais com business case validado.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    imageAlt: 'Visualização de inteligência artificial e dados',
    topic: 'Inteligência Artificial',
    industry: 'Financeiro',
    contentType: 'Pesquisa',
    readTime: 8,
    publishedAt: '2026-02-15',
    author: { name: 'Rafael Moura', role: 'Principal Architect, IA & Data' },
    featured: true,
    tag: 'Novo',
  },
  {
    id: '2',
    slug: 'modernizacao-legado-sem-big-bang',
    title: 'Modernização sem big bang: a estratégia por ondas que salva o core system sem paralisar o negócio',
    excerpt:
      'CTOs enfrentam um dilema clássico: o sistema legado trava a inovação, mas uma substituição total arriscaria parada crítica. A abordagem por ondas resolve esse impasse com piloto de 12 semanas e risco controlado.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
    imageAlt: 'Infraestrutura de tecnologia e servidores',
    topic: 'Modernização de Legado',
    industry: 'Saúde',
    contentType: 'Artigo',
    readTime: 6,
    publishedAt: '2026-02-08',
    author: { name: 'Camila Ferreira', role: 'Lead Architect, Modernização' },
    featured: true,
    tag: 'Em destaque',
  },
  // ──────── SQUADS & AGILIDADE ────────
  {
    id: '3',
    slug: 'squads-hibridas-turnover-36',
    title: 'Por que nosso turnover de 3,6% muda a entrega do seu produto digital',
    excerpt:
      'O turnover médio da indústria de TI é de 22%. Nosso squad mantém os mesmos profissionais por anos. Entenda como isso impacta diretamente a velocidade, qualidade e custo do seu backlog.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80',
    imageAlt: 'Time de tecnologia colaborando',
    topic: 'Squads & Agilidade',
    contentType: 'Artigo',
    readTime: 5,
    publishedAt: '2026-01-28',
    author: { name: 'Ana Beatriz Lima', role: 'Head of Talent & Culture' },
  },
  {
    id: '4',
    slug: 'reducao-lead-time-70-squads',
    title: '70% de redução no lead time: o que acontece quando um squad bem calibrado entra no seu fluxo',
    excerpt:
      'Uma fintech de crédito com backlog de 8 meses viu seu lead time cair 70% em 60 dias. Não foi magia: foi processo, governança e times certos. Veja o detalhamento da implementação.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    imageAlt: 'Gráfico de métricas e crescimento',
    topic: 'Squads & Agilidade',
    industry: 'Financeiro',
    contentType: 'Caso de Sucesso',
    readTime: 7,
    publishedAt: '2026-01-20',
    author: { name: 'Lucas Andrade', role: 'Engineering Manager' },
    tag: 'Caso Real',
  },
  // ──────── IA ────────
  {
    id: '5',
    slug: 'governanca-ia-2026-regulamentacao-brasil',
    title: 'Governança de IA em 2026: o que muda com a regulamentação brasileira e como se preparar',
    excerpt:
      'O marco regulatório de IA do Brasil avança. Empresas que não estruturarem governança agora vão enfrentar retrabalho caro e exposição regulatória. Este guia prático traz os 5 passos essenciais.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80',
    imageAlt: 'Código e governança digital',
    topic: 'Inteligência Artificial',
    contentType: 'Relatório',
    readTime: 12,
    publishedAt: '2026-02-01',
    author: { name: 'Mariana Costa', role: 'AI Governance Lead' },
    tag: 'Relatório 2026',
  },
  {
    id: '6',
    slug: 'agentes-ia-producao-casos-reais',
    title: 'Agentes de IA em produção: o que realmente funciona (e o que ainda falha) em ambientes enterprise',
    excerpt:
      'Testamos agentes autônomos em 12 ambientes enterprise no Brasil. Os resultados revelam onde a tecnologia já entrega valor real e onde as expectativas ainda superam a realidade.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80',
    imageAlt: 'Robótica e automação inteligente',
    topic: 'Inteligência Artificial',
    contentType: 'Pesquisa',
    readTime: 10,
    publishedAt: '2026-01-15',
    author: { name: 'Roberto Tavares', role: 'Principal AI Engineer' },
  },
  // ──────── CIBERSEGURANÇA ────────
  {
    id: '7',
    slug: 'zero-trust-setores-regulados',
    title: 'Zero Trust em setores regulados: por que bancos e operadoras de saúde não podem mais esperar',
    excerpt:
      'Ataques a infraestrutura crítica cresceram 340% no Brasil em 2025. Organizações de saúde e financeiro são os alvos mais frequentes. A arquitetura Zero Trust deixou de ser diferencial e virou obrigação.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80',
    imageAlt: 'Cibersegurança e proteção digital',
    topic: 'Cibersegurança',
    industry: 'Financeiro',
    contentType: 'Artigo',
    readTime: 8,
    publishedAt: '2026-01-10',
    author: { name: 'Felipe Santos', role: 'CISO Advisor' },
    tag: 'Urgente',
  },
  {
    id: '8',
    slug: 'segurança-dados-lgpd-2026',
    title: 'LGPD 2026: as multas chegaram e as empresas ainda não estão prontas',
    excerpt:
      'A ANPD aplicou R$ 180M em multas no segundo semestre de 2025. O perfil das empresas autuadas revela um padrão claro — e como evitá-lo com um programa de privacidade estruturado.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&q=80',
    imageAlt: 'Proteção de dados e privacidade',
    topic: 'Cibersegurança',
    contentType: 'Relatório',
    readTime: 9,
    publishedAt: '2025-12-20',
    author: { name: 'Juliana Ramos', role: 'Data Privacy Specialist' },
  },
  // ──────── CLOUD & FINOPS ────────
  {
    id: '9',
    slug: 'finops-custo-cloud-ia',
    title: 'FinOps para IA: como controlar o custo de inferência antes que ele destrua o ROI do seu projeto',
    excerpt:
      'Empresas que adotam IA em escala descobrem, tarde demais, que o custo de inferência pode superar o budget inicial em 4x. Veja o framework FinOps que implementamos com 8 clientes em 2025.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80',
    imageAlt: 'Dashboard financeiro e cloud',
    topic: 'Cloud & FinOps',
    contentType: 'Artigo',
    readTime: 7,
    publishedAt: '2025-12-10',
    author: { name: 'Thiago Martins', role: 'Cloud Architecture Lead' },
    tag: 'FinOps',
  },
  {
    id: '10',
    slug: 'multicloud-estrategia-riscos',
    title: 'Multicloud: quando a estratégia de não depender de um vendor vira pesadelo operacional',
    excerpt:
      'Multicloud é a resposta certa para muitas empresas, mas a implementação errada gera complexidade exponencial. Saiba como estruturar uma estratégia multicloud que realmente funciona.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80',
    imageAlt: 'Infraestrutura cloud e computação',
    topic: 'Cloud & FinOps',
    contentType: 'Artigo',
    readTime: 6,
    publishedAt: '2025-12-05',
    author: { name: 'Patricia Oliveira', role: 'Cloud Strategy Director' },
  },
  // ──────── DADOS ────────
  {
    id: '11',
    slug: 'data-mesh-empresas-brasileiras',
    title: 'Data Mesh no Brasil: lições de 3 implementações reais em empresas de médio porte',
    excerpt:
      'Data Mesh deixou de ser teoria de big tech e está chegando ao mercado mid-market. Documentamos 3 implementações com contexto, desafios e resultados — incluindo o que não funcionou.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80',
    imageAlt: 'Visualização de dados e analytics',
    topic: 'Dados & Analytics',
    contentType: 'Pesquisa',
    readTime: 11,
    publishedAt: '2025-11-28',
    author: { name: 'Gustavo Pereira', role: 'Data Platform Lead' },
    tag: 'Pesquisa',
  },
  {
    id: '12',
    slug: 'observabilidade-sistemas-criticos',
    title: 'Observabilidade em sistemas críticos: da reatividade ao controle proativo em 90 dias',
    excerpt:
      'Uma operadora de saúde com 2M de beneficiários tinha SLA de 99,2%. Em 90 dias, chegou a 99,97%. A jornada revela como observabilidade bem implementada transforma operações críticas.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80',
    imageAlt: 'Monitoramento e observabilidade de sistemas',
    topic: 'Dados & Analytics',
    industry: 'Saúde',
    contentType: 'Caso de Sucesso',
    readTime: 8,
    publishedAt: '2025-11-15',
    author: { name: 'Sandra Alves', role: 'Observability Engineer' },
    tag: 'Caso Real',
  },
  // ──────── LIDERANÇA ────────
  {
    id: '13',
    slug: 'cto-dilemas-2026',
    title: 'Os 5 dilemas do CTO em 2026: IA, times, legado, custo e velocidade',
    excerpt:
      'Entrevistamos 42 CTOs de empresas com 200M+ de receita. Os padrões emergentes revelam um perfil de liderança tech sob pressão simultânea em frentes que nunca foram mais complexas.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80',
    imageAlt: 'Liderança tecnológica e estratégia',
    topic: 'Liderança Tech',
    contentType: 'Pesquisa',
    readTime: 13,
    publishedAt: '2026-02-10',
    author: { name: 'Carolina Mendes', role: 'Principal Consultant, Leadership' },
    tag: 'Pesquisa 2026',
  },
  {
    id: '14',
    slug: 'podcast-transformacao-digital-sem-trauma',
    title: 'Podcast: Transformação digital sem trauma — como a Foursys conduz mudanças em empresas conservadoras',
    excerpt:
      'Neste episódio, nosso Principal Architect discute por que 70% das transformações digitais falham, o papel do change management e como criar cultura de produto em empresas tradicionais.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&q=80',
    imageAlt: 'Podcast e entrevista sobre tecnologia',
    topic: 'Transformação Digital',
    contentType: 'Podcast',
    readTime: 45,
    publishedAt: '2026-01-25',
    author: { name: 'Diego Carvalho', role: 'Principal Architect' },
  },
  {
    id: '15',
    slug: 'webinar-ia-saude-operadoras',
    title: 'Webinar: IA aplicada em operadoras de saúde — autorização, fraude e jornada do beneficiário',
    excerpt:
      'Três casos reais de IA aplicada no setor de saúde: triagem de sinistros com 85% de redução de tempo, detecção de fraude e personalização da jornada. Acesse a gravação completa.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80',
    imageAlt: 'Saúde digital e tecnologia',
    topic: 'Inteligência Artificial',
    industry: 'Saúde',
    contentType: 'Webinar',
    readTime: 60,
    publishedAt: '2026-02-05',
    author: { name: 'Amanda Rocha', role: 'Health Tech Specialist' },
    tag: 'Gravação',
  },
  {
    id: '16',
    slug: 'agilidade-escala-safe-resultados',
    title: 'SAFe na prática: o que os números de 2 anos de adoção revelam sobre agilidade em escala',
    excerpt:
      'Acompanhamos a jornada SAFe de 3 clientes por 2 anos. Velocidade de entrega, previsibilidade, satisfação de times e impacto financeiro — tudo documentado com métricas reais.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
    imageAlt: 'Agilidade e organização de times',
    topic: 'Squads & Agilidade',
    contentType: 'Pesquisa',
    readTime: 10,
    publishedAt: '2025-11-05',
    author: { name: 'Renato Silva', role: 'Agile Coach, SAFe Fellow' },
  },
];

export const INSIGHT_TOPICS: InsightTopic[] = [
  'Inteligência Artificial',
  'Squads & Agilidade',
  'Modernização de Legado',
  'Cibersegurança',
  'Cloud & FinOps',
  'Dados & Analytics',
  'Transformação Digital',
  'Liderança Tech',
];

export const INSIGHT_INDUSTRIES: InsightIndustry[] = [
  'Financeiro', 'Saúde', 'Seguros', 'Varejo', 'Indústria', 'Tecnologia',
];

export const INSIGHT_CONTENT_TYPES: InsightContentType[] = [
  'Artigo', 'Pesquisa', 'Podcast', 'Caso de Sucesso', 'Relatório', 'Webinar',
];
