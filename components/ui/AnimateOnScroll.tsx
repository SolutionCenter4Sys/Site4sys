'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  threshold?: number;
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = 'up',
  threshold = 0.12,
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  const baseTransform = {
    up: isVisible ? 'translate-y-0' : 'translate-y-8',
    left: isVisible ? 'translate-x-0' : '-translate-x-8',
    right: isVisible ? 'translate-x-0' : 'translate-x-8',
    fade: 'translate-y-0',
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        isVisible ? 'opacity-100' : 'opacity-0',
        baseTransform,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
