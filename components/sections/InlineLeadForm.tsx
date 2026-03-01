'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const SETORES = [
  'Saúde', 'Financeiro', 'Seguros', 'Varejo', 'Indústria', 'Tecnologia', 'Outro',
];

export function InlineLeadForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [setor, setSetor] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');

  const isValid = nome.trim().length > 1 && email.includes('@') && setor;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setFormState('submitting');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          empresa: `Setor: ${setor}`,
          mensagem: `Solicitação de diagnóstico via página de Casos de Sucesso. Setor: ${setor}.`,
          servico: 'Diagnóstico',
          ofertaContexto: setor,
        }),
      });
      setFormState(res.ok ? 'success' : 'error');
    } catch {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="text-center py-10 px-6">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h3 className="text-heading-xl font-bold text-navy mb-2">Recebemos sua solicitação, {nome}!</h3>
        <p className="text-body-lg text-gray-500 max-w-md mx-auto">
          Nossa equipe vai entrar em contato em até <strong className="text-navy">24 horas</strong> para agendar seu diagnóstico gratuito.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-label-md font-semibold text-orange uppercase tracking-wider mb-2">Diagnóstico gratuito</p>
        <h3 className="text-heading-xl font-bold text-navy leading-tight">
          Tem um desafio parecido?
        </h3>
        <p className="text-body-lg text-gray-500 mt-2">
          45 minutos com um especialista. Sem compromisso.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Nome */}
          <div>
            <label htmlFor="lead-nome" className="block text-label-md font-semibold text-gray-700 mb-1.5">
              Seu nome
            </label>
            <input
              id="lead-nome"
              type="text"
              required
              autoComplete="name"
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder="João Silva"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-body-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange/25 focus:border-orange transition-colors"
            />
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="lead-email" className="block text-label-md font-semibold text-gray-700 mb-1.5">
              E-mail corporativo
            </label>
            <input
              id="lead-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="joao@empresa.com.br"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-body-md placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange/25 focus:border-orange transition-colors"
            />
          </div>
        </div>

        {/* Setor */}
        <div>
          <label htmlFor="lead-setor" className="block text-label-md font-semibold text-gray-700 mb-1.5">
            Setor da empresa
          </label>
          <select
            id="lead-setor"
            required
            value={setor}
            onChange={e => setSetor(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-body-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange/25 focus:border-orange transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>Selecione seu setor...</option>
            {SETORES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {formState === 'error' && (
          <p className="text-body-sm text-red-500 bg-red-50 px-4 py-2.5 rounded-lg">
            Algo deu errado. Por favor, tente novamente.
          </p>
        )}

        <button
          type="submit"
          disabled={formState === 'submitting' || !isValid}
          className="w-full sm:w-auto bg-gradient-orange text-white font-bold text-body-md px-8 py-4 rounded-xl hover:shadow-brand hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {formState === 'submitting' ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Quero meu diagnóstico gratuito
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Trust signals */}
      <div className="flex flex-wrap items-center gap-5 mt-7 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-2 text-body-sm text-gray-400">
          <Shield className="w-4 h-4 text-gray-300 flex-shrink-0" />
          Dados protegidos — LGPD
        </div>
        <div className="flex items-center gap-1.5 text-body-sm text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
          Resposta em até 24h
        </div>
        <div className="flex items-center gap-1.5 text-body-sm text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
          Sem compromisso
        </div>
      </div>
    </div>
  );
}
