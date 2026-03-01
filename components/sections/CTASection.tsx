import { ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  variant?: 'dark' | 'orange' | 'gradient';
  highlights?: string[];
  className?: string;
}

export function CTASection({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  variant = 'gradient',
  highlights,
  className,
}: CTASectionProps) {
  const t = useTranslations('cta_section');
  const locale = useLocale();
  const lhref = (path: string) => locale === 'pt' ? path : `/${locale}${path}`;

  const finalHeadline = headline ?? t('headline');
  const finalSub = subheadline ?? t('sub');
  const finalCta = ctaLabel ?? t('primary');
  const finalCtaHref = ctaHref ?? lhref('/contato');
  const finalSecLabel = ctaSecondaryLabel ?? t('secondary');
  const finalSecHref = ctaSecondaryHref ?? lhref('/casos-de-sucesso');
  const finalHighlights = highlights ?? [t('highlight1'), t('highlight2'), t('highlight3')];

  const bgClass = {
    dark: 'bg-navy-dark',
    orange: 'bg-gradient-orange',
    gradient: 'bg-gradient-brand',
  }[variant];

  return (
    <section className={cn('relative overflow-hidden py-20 lg:py-28', bgClass, className)} aria-label="Chamada para ação">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
      </div>

      <div className="container-site relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-white/10 border border-white/20 mb-6">
          <div className="flex -space-x-1.5">
            {['F', 'I', 'S'].map((l, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-orange/80 border-2 border-white/20 flex items-center justify-center text-[9px] font-black text-white">
                {l}
              </div>
            ))}
          </div>
          <span className="text-label-md text-white/90 font-semibold">{t('social_proof')}</span>
        </div>

        <h2 className="text-3xl sm:text-display-sm text-white font-bold mb-4 max-w-2xl mx-auto">
          {finalHeadline}
        </h2>
        <p className="text-body-xl text-white/70 mb-8 max-w-xl mx-auto">{finalSub}</p>

        {finalHighlights.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {finalHighlights.map(h => (
              <span key={h} className="flex items-center gap-1.5 text-label-md text-white/80">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                {h}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={finalCtaHref} variant="white" size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
            {finalCta}
          </Button>
          {finalSecLabel && (
            <Button href={finalSecHref} variant="outline" size="xl" className="border-white/40 text-white hover:bg-white/10">
              {finalSecLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
