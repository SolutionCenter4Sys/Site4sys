import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#222239',
          light: '#2D2D54',
          dark: '#1A1A2E',
          50: '#EEEEF5',
          100: '#C8C8DC',
        },
        orange: {
          DEFAULT: '#FF5315',
          light: '#FF7A45',
          dark: '#E8460E',
          50: '#FFF0EB',
          100: '#FFD0BB',
        },
        vanilla: {
          DEFAULT: '#FFE2A9',
          dark: '#F5C842',
        },
        mint: {
          DEFAULT: '#89BAB1',
          dark: '#5E9E94',
        },
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'Helvetica', 'Arial', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-xl': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-xl': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-lg': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-md': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
        'label-lg': ['0.875rem', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
        'label-md': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.06em', fontWeight: '600' }],
        'label-sm': ['0.625rem', { lineHeight: '1.2', letterSpacing: '0.08em', fontWeight: '700' }],
      },
      boxShadow: {
        'brand': '0 8px 24px rgba(255,83,21,0.25)',
        'navy': '0 8px 24px rgba(34,34,57,0.25)',
        'card': '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
        'card-hover': '0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)',
        'xl': '0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #222239 0%, #2D2D54 50%, #FF5315 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A2E 0%, #222239 60%, #16213E 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF5315 0%, #FF7A45 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1A1A2E 0%, #222239 70%, #2D1A3E 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'count-up': 'countUp 1.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      borderRadius: {
        'pill': '9999px',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
