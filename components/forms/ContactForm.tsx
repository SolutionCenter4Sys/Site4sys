'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { SERVICES_LIST } from '@/mocks/index';

interface ContactFormProps {
  context?: string;
  variant?: 'full' | 'compact';
  className?: string;
}

export function ContactForm({ context, variant = 'full', className }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    cargo: '',
    email: '',
    telefone: '',
    servico: context || '',
    mensagem: '',
  });

  const inputCls = 'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-body-lg text-gray-800 placeholder-gray-400 transition-all focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 hover:border-gray-300';
  const labelCls = 'block text-body-sm font-semibold text-gray-700 mb-1.5';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, ofertaContexto: context }),
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
        <p className="text-body-lg text-gray-500">Nossa equipe entrará em contato em breve.</p>
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

      <div className={cn('grid gap-4', variant === 'full' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1')}>
        <div>
          <label htmlFor="nome" className={labelCls}>Nome *</label>
          <input id="nome" type="text" required placeholder="Seu nome" className={inputCls}
            value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} />
        </div>
        <div>
          <label htmlFor="empresa" className={labelCls}>Empresa *</label>
          <input id="empresa" type="text" required placeholder="Nome da empresa" className={inputCls}
            value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} />
        </div>
      </div>

      {variant === 'full' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cargo" className={labelCls}>Cargo</label>
            <input id="cargo" type="text" placeholder="Seu cargo" className={inputCls}
              value={form.cargo} onChange={e => setForm({ ...form, cargo: e.target.value })} />
          </div>
          <div>
            <label htmlFor="telefone" className={labelCls}>Telefone</label>
            <input id="telefone" type="tel" placeholder="+55 11 99999-9999" className={inputCls}
              value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="email" className={labelCls}>E-mail *</label>
        <input id="email" type="email" required placeholder="seu@empresa.com" className={inputCls}
          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      </div>

      {variant === 'full' && (
        <div>
          <label htmlFor="servico" className={labelCls}>Serviço de interesse</label>
          <select id="servico" className={inputCls}
            value={form.servico} onChange={e => setForm({ ...form, servico: e.target.value })}>
            <option value="">Selecione uma opção</option>
            {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="mensagem" className={labelCls}>Mensagem *</label>
        <textarea id="mensagem" required rows={4} placeholder="Descreva brevemente sua necessidade..." className={cn(inputCls, 'resize-none')}
          value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} />
      </div>

      {status === 'error' && (
        <p className="text-body-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
          Ocorreu um erro. Tente novamente ou entre em contato pelo e-mail.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" fullWidth loading={status === 'loading'} rightIcon={<Send className="w-4 h-4" />}>
        Enviar mensagem
      </Button>

      <p className="text-body-sm text-gray-400 text-center">
        Seus dados são protegidos conforme nossa política de privacidade.
      </p>
    </form>
  );
}
