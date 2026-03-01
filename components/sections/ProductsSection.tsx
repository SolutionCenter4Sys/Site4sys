'use client';
import Link from 'next/link';
import { ArrowRight, Users, Coins, Target, Megaphone, Bot, Box, Building2, Calculator, Leaf } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Kicker } from '@/components/ui/Kicker';
import { cn } from '@/lib/utils';

const PRODUCTS = [
  {
    id: 'fourmakers',
    name: 'Fourmakers',
    description: 'Plataforma de talentos que engaja, acelera carreiras e conecta profissionais às melhores oportunidades.',
    icon: Users,
    href: '/sobre#fourmakers',
    color: '#FF5315',
  },
  {
    id: 'token4you',
    name: 'Token4you',
    description: 'Plataforma Web3 as a service com tokenização de ativos e tecnologia Blockchain.',
    icon: Coins,
    href: '/sobre',
    color: '#7C3AED',
  },
  {
    id: 'fourgoals',
    name: 'Fourgoals',
    description: 'Produto para áreas comerciais cadastrarem e acompanharem metas de vendas.',
    icon: Target,
    href: '/sobre',
    color: '#059669',
  },
  {
    id: 'fourleads',
    name: 'Fourleads',
    description: 'Captação de leads e geração de oportunidades em feiras e eventos.',
    icon: Megaphone,
    href: '/sobre',
    color: '#EA580C',
  },
  {
    id: '4ai',
    name: '4AI',
    description: 'Diversidade de produtos do ecossistema com uso de IA no dia a dia.',
    icon: Bot,
    href: '/sobre',
    color: '#2563EB',
  },
  {
    id: 'moxe',
    name: 'Moxe',
    description: 'Arquitetura modular AI Brick que acelera desenvolvimento e maximiza performance.',
    icon: Box,
    href: '/sobre',
    color: '#0D9488',
  },
  {
    id: 'loome',
    name: 'Loome',
    description: 'Plataforma para gestão de espaços compartilhados.',
    icon: Building2,
    href: '/sobre',
    color: '#475569',
  },
  {
    id: 'concilia',
    name: 'Concilia',
    description: 'Conciliação de folha de pagamento inteligente para departamentos pessoais.',
    icon: Calculator,
    href: '/sobre',
    color: '#DC2626',
  },
  {
    id: 'fourlives',
    name: 'FourLives',
    description: 'Capacitação e inclusão digital que amplia sua base de talentos e gera impacto social e ambiental.',
    icon: Leaf,
    href: '/sobre#fourlives',
    color: '#16A34A',
  },
];

export function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="section-padding bg-gray-50"
      aria-label="Produtos e Ecossistema"
    >
      <div className="container-site">
        <div className="text-center mb-12">
          <Kicker className="mb-3">Ecossistema Foursys</Kicker>
          <h2 className="text-display-sm text-navy mb-3">Produtos e Soluções</h2>
          <p className="text-body-lg text-gray-500 max-w-2xl mx-auto">
            Soluções proprietárias que aceleram resultados com inteligência e flexibilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.id}
                href={product.href}
                className={cn(
                  'flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-orange/20 hover:shadow-card transition-all duration-300 group',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${product.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: product.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-heading-sm text-navy font-bold group-hover:text-orange transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-body-sm text-gray-500 mt-0.5 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
