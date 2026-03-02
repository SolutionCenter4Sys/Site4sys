'use client';
import { Users, FolderKanban, UserPlus, Headphones } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Kicker } from '@/components/ui/Kicker';
import { cn } from '@/lib/utils';

export function HowWeWorkSection() {
  const t = useTranslations('how_we_work');
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const MODELS = [
    { id: 'squads', icon: Users, title: t('squads_title'), description: t('squads_body'), color: '#FF5315' },
    { id: 'projetos', icon: FolderKanban, title: t('projects_title'), description: t('projects_body'), color: '#222239' },
    { id: 'alocacao', icon: UserPlus, title: t('allocation_title'), description: t('allocation_body'), color: '#059669' },
    { id: 'ams', icon: Headphones, title: t('ams_title'), description: t('ams_body'), color: '#1D4ED8' },
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-white border-t border-gray-100"
      aria-label={t('headline')}
    >
      <div className="container-site">
        <div className="text-center mb-12">
          <Kicker className="mb-3">{t('kicker')}</Kicker>
          <h2 className="text-display-sm text-navy mb-3">{t('headline')}</h2>
          <p className="text-body-lg text-gray-500 max-w-2xl mx-auto">{t('sub')}</p>
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
