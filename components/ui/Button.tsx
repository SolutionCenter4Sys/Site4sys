'use client';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-orange !text-white hover:bg-orange-dark active:scale-95 shadow-brand [&_svg]:text-white',
  secondary: 'bg-navy text-white hover:bg-navy-light active:scale-95 shadow-navy',
  outline: 'bg-transparent text-orange border-2 border-orange hover:bg-orange/10 active:scale-95',
  ghost: 'bg-transparent text-orange hover:bg-orange/8 active:scale-95',
  dark: 'bg-navy-dark text-white hover:bg-navy active:scale-95',
  white: 'bg-white text-navy hover:bg-gray-50 active:scale-95 shadow-card',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-label-md h-9',
  md: 'px-6 py-3 text-label-lg h-[42px]',
  lg: 'px-8 py-3.5 text-body-lg font-semibold h-[50px]',
  xl: 'px-10 py-4 text-body-xl font-semibold h-[58px]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  loading,
  disabled,
  fullWidth,
  children,
  onClick,
  href,
  className,
  type = 'button',
  target,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-200 select-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    (disabled || loading) && 'opacity-50 pointer-events-none',
    className,
  );

  const content = (
    <>
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} target={target} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} disabled={disabled || loading}>
      {content}
    </button>
  );
}
