import { cn } from '@/lib/utils';

interface DarkPageHeroProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

/** Hero escuro com overlay animado — consistente com o HeroHome.
 *  Usado em todas as páginas internas com fundo navy-dark. */
export function DarkPageHero({ children, className, ...rest }: DarkPageHeroProps) {
  return (
    <section
      className={cn('relative overflow-hidden bg-gradient-dark', className)}
      {...rest}
    >
      {/* Overlay animado — mesmo efeito visual do hero da home */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-30 animate-gradient-shift"
          style={{
            background:
              'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, transparent 50%, rgba(15,23,42,0.3) 100%)',
            backgroundSize: '200% 200%',
          }}
        />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-navy-light/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Conteúdo — z-10 para ficar acima dos overlays */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
