import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-extrabold text-orange mb-4">404</div>
      <h1 className="text-display-sm text-white mb-4">Página não encontrada</h1>
      <p className="text-body-xl text-white/60 mb-10 max-w-md">
        A página que você procura não existe ou foi movida. Navegue pelo site ou fale com nosso time.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="/" variant="primary" size="lg" leftIcon={<Home className="w-4 h-4" />}>
          Voltar para a home
        </Button>
        <Button href="/solucoes" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
          Ver nossas ofertas
        </Button>
      </div>
    </div>
  );
}
