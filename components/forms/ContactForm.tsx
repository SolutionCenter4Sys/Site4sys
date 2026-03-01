'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

/** Desafios comuns — CRO: reduzir fricção, formulário enxuto (4 campos) */
const DESAFIOS_OPTIONS = [
  { value: '', label: 'Qual seu maior desafio hoje?' },
  { value: 'Backlog sem previsão', label: 'Backlog sem previsão' },
  { value: 'Legado travando integração', label: 'Legado travando integração' },
  { value: 'IA sem ROI', label: 'IA sem ROI' },
  { value: 'Expandir equipe técnica', label: 'Expandir equipe técnica' },
  { value: 'Modernização de sistemas', label: 'Modernização de sistemas' },
  { value: 'Outro', label: 'Outro' },
];

interface ContactFormProps {
  context?: string;
  variant?: 'full' | 'compact';
  className?: string;
}

export function ContactForm({ context, variant = 'full', className }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    nome: '',
    email: '',
    desafio: context || '',
    mensagem: '',
  });

  // Igor (iOS): font-size forçado a 16px via classe para prevenir zoom automático
  // Anderson (Android): min-h-[48px] garante área de toque ≥ 48dp (Material Design 3)
  const inputCls = 'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[16px] text-gray-800 placeholder-gray-400 transition-all focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 hover:border-gray-300 min-h-[48px]';
  const labelCls = 'block text-body-sm font-semibold text-gray-700 mb-1.5';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          mensagem: form.mensagem,
          empresa: '',
          ofertaContexto: form.desafio || context,
        }),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={cn('flex flex-col items-center justify-center py-12 text-center gap-4', className)}>
        <CheckCircle className="w-14 h-14 text-green-500" />
        <h3 className="text-heading-lg text-navy">Mensagem enviada!</h3>
        <p className="text-body-lg text-gray-500">Nossa equipe entrará em contato em até 24h.</p>
        <Button variant="outline" size="md" onClick={() => setStatus('idle')}>Enviar nova mensagem</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)} noValidate>
      {context && (
        <div className="bg-orange/10 border border-orange/20 rounded-xl px-4 py-3 mb-2">
          <p className="text-body-sm text-orange font-semibold">📌 Sobre: {context}</p>
        </div>
      )}

      {/* 4 campos apenas — CRO: cada campo adicional reduz conversão ~7% */}
      {/* Igor (iOS): autocomplete + inputMode corretos evitam teclado errado
          e permitem autopreenchimento do gerenciador de senhas / iCloud Keychain.
          Anderson (Android): autocomplete também ativa Autofill do Google. */}
      <div>
        <label htmlFor="nome" className={labelCls}>Nome *</label>
        <input
          id="nome"
          type="text"
          required
          placeholder="Seu nome"
          className={inputCls}
          autoComplete="name"
          inputMode="text"
          enterKeyHint="next"
          value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>E-mail *</label>
        <input
          id="email"
          type="email"
          required
          placeholder="seu@empresa.com"
          className={inputCls}
          autoComplete="email"
          inputMode="email"
          enterKeyHint="next"
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect="off"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="desafio" className={labelCls}>Qual seu maior desafio hoje?</label>
        {/* Igor (iOS): select sem font-size 16px causa zoom automático no Safari.
            A classe inputCls já tem text-[16px] para prevenir isso. */}
        <select
          id="desafio"
          className={inputCls}
          value={form.desafio}
          onChange={e => setForm({ ...form, desafio: e.target.value })}
        >
          {DESAFIOS_OPTIONS.map(opt => (
            <option key={opt.value || 'empty'} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className={labelCls}>Mensagem *</label>
        <textarea
          id="mensagem"
          required
          rows={4}
          placeholder="Descreva brevemente sua necessidade..."
          className={cn(inputCls, 'resize-none')}
          enterKeyHint="send"
          value={form.mensagem}
          onChange={e => setForm({ ...form, mensagem: e.target.value })}
        />
      </div>

      {status === 'error' && (
        <p className="text-body-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
          Ocorreu um erro. Tente novamente ou entre em contato pelo e-mail.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" fullWidth loading={status === 'loading'} rightIcon={<Send className="w-4 h-4" />}>
        Receber proposta em 24h
      </Button>

      <p className="text-body-sm text-gray-400 text-center">
        Seus dados estão seguros. LGPD compliant.
      </p>
    </form>
  );
}
