'use client';
import { Users, FolderKanban, UserPlus, Headphones } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Kicker } from '@/components/ui/Kicker';
import { cn } from '@/lib/utils';

const MODELS = [
  {
    id: 'squads',
    icon: Users,
    title: 'Squads',
    description: 'Times multidisciplinares integrados ao seu time, com governança e métricas. Entrega contínua com qualidade e turnover de 3,6%.',
    color: '#FF5315',
  },
  {
    id: 'projetos',
    icon: FolderKanban,
    title: 'Projetos (Escopo Fechado)',
    description: 'Iniciativas com escopo definido, prazo e entregas claras. Ideal para modernização, migração ou implementação de sistemas.',
    color: '#222239',
  },
  {
    id: 'alocacao',
    icon: UserPlus,
    title: 'Alocação',
    description: 'Profissionais especializados alocados ao seu time. Flexibilidade para demandas específicas de curto ou médio prazo.',
    color: '#059669',
  },
  {
    id: 'ams',
    icon: Headphones,
    title: 'AMS',
    description: 'Application Management Services com SLAs, NOC e evolução contínua. Operação com previsibilidade e excelência.',
    color: '#1D4ED8',
  },
];

export function HowWeWorkSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="section-padding bg-white border-t border-gray-100"
      aria-label="Como trabalhamos"
    >
      <div className="container-site">
        <div className="text-center mb-12">
          <Kicker className="mb-3">Modelos flexíveis</Kicker>
          <h2 className="text-display-sm text-navy mb-3">Como trabalhamos</h2>
          <p className="text-body-lg text-gray-500 max-w-2xl mx-auto">
            Squads, Projetos, Alocação e AMS — escolha o modelo que melhor se encaixa na sua necessidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODELS.map((model, i) => {
            const Icon = model.icon;
            return (
              <div
                key={model.id}
                className={cn(
                  'flex flex-col p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-card hover:border-orange/20 transition-all duration-300',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${model.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: model.color }} />
                </div>
                <h3 className="text-heading-md text-navy font-bold mb-2">{model.title}</h3>
                <p className="text-body-md text-gray-500 leading-relaxed">{model.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
