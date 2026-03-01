'use client';

import { useState, useCallback } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';
import { CaseCard } from '@/components/cases/CaseCard';
import { CASES } from '@/mocks/cases';
import type { Case } from '@/types';

const SECTORS = ['Todos', ...Array.from(new Set(CASES.map(c => c.sector)))];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function CasosPageClient() {
  const [activeSector, setActiveSector] = useState('Todos');
  const [modalCase, setModalCase] = useState<Case | null>(null);

  // Form state
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');

  const filtered = activeSector === 'Todos'
    ? CASES
    : CASES.filter(c => c.sector === activeSector);

  const handleOpenModal = useCallback((c: Case) => {
    setModalCase(c);
    setFormState('idle');
    setNome('');
    setEmail('');
    setEmpresa('');
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalCase(null);
    document.body.style.overflow = '';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email || !empresa) return;

    setFormState('submitting');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          empresa,
          mensagem: `Interesse no caso: ${modalCase?.sector} — ${modalCase?.impactLabel}. Setor: ${modalCase?.offer}.`,
          servico: modalCase?.offer,
          ofertaContexto: modalCase?.sector,
        }),
      });
      if (res.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <>
      {/* Filtro + Grid */}
      <div>
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtrar por setor">
          {SECTORS.map(sector => (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              aria-pressed={sector === activeSector}
              className={`px-4 py-1.5 rounded-pill text-label-md font-semibold transition-all duration-200 ${
                sector === activeSector
                  ? 'bg-navy text-white shadow-navy/20 shadow-md'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-orange hover:text-orange'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c => (
            <CaseCard key={c.id} caseData={c} onOpenModal={handleOpenModal} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Caso: ${modalCase.sector}`}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Modal content */}
          <div className="relative bg-white rounded-3xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-7 py-5 flex items-center justify-between rounded-t-3xl z-10">
              <div>
                <span className="text-label-sm font-semibold text-orange uppercase tracking-wider">{modalCase.sector}</span>
                <p className="text-heading-md text-navy font-bold leading-snug mt-0.5">{modalCase.offer}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="px-7 py-6 space-y-6">
              {/* Impact */}
              <div className="flex items-baseline gap-2">
                <span className="text-display-sm font-extrabold text-orange">{modalCase.impactMetric}</span>
                <span className="text-body-md text-gray-500">{modalCase.impactLabel}</span>
              </div>

              {/* Challenge / Solution / Impact */}
              <div className="space-y-4">
                {[
                  { label: 'Desafio', text: modalCase.challenge },
                  { label: 'Solução', text: modalCase.solution },
                  { label: 'Impacto', text: modalCase.impact },
                ].map(item => (
                  <div key={item.label}>
                    <p className="text-label-md font-semibold text-navy uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-body-md text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              {modalCase.quote && (
                <blockquote className="pl-4 border-l-2 border-orange/30">
                  <p className="text-body-md italic text-gray-600 leading-relaxed">&ldquo;{modalCase.quote}&rdquo;</p>
                  {modalCase.role && (
                    <cite className="not-italic text-label-sm mt-2 block font-semibold text-gray-400">— {modalCase.role}</cite>
                  )}
                </blockquote>
              )}

              {/* Divider */}
              <hr className="border-gray-100" />

              {/* Lead form */}
              {formState === 'success' ? (
                <div className="text-center py-4">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="text-heading-md font-bold text-navy">Ótimo, {nome}!</p>
                  <p className="text-body-md text-gray-500 mt-1">
                    Nossa equipe vai entrar em contato em até 24h.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-heading-sm font-bold text-navy mb-1">Tenho um desafio parecido</p>
                  <p className="text-body-sm text-gray-500 mb-5">Diagnóstico gratuito · 45 min · Sem compromisso</p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="modal-nome" className="block text-label-md font-semibold text-gray-700 mb-1.5">
                        Nome
                      </label>
                      <input
                        id="modal-nome"
                        type="text"
                        required
                        autoComplete="name"
                        inputMode="text"
                        enterKeyHint="next"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="João Silva"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[16px] min-h-[48px] focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange hover:border-gray-300 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-empresa" className="block text-label-md font-semibold text-gray-700 mb-1.5">
                        Empresa
                      </label>
                      <input
                        id="modal-empresa"
                        type="text"
                        required
                        autoComplete="organization"
                        inputMode="text"
                        enterKeyHint="next"
                        value={empresa}
                        onChange={e => setEmpresa(e.target.value)}
                        placeholder="Nome da empresa"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[16px] min-h-[48px] focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange hover:border-gray-300 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className="block text-label-md font-semibold text-gray-700 mb-1.5">
                        E-mail corporativo
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        enterKeyHint="send"
                        spellCheck={false}
                        autoCapitalize="none"
                        autoCorrect="off"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="joao@empresa.com.br"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[16px] min-h-[48px] focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange hover:border-gray-300 transition-colors"
                      />
                    </div>

                    {formState === 'error' && (
                      <p className="text-body-sm text-red-500">Algo deu errado. Tente novamente.</p>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'submitting' || !nome || !email || !empresa}
                      className="w-full bg-gradient-orange text-white font-semibold text-body-md py-3.5 rounded-xl hover:shadow-brand hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {formState === 'submitting' ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Quero um diagnóstico gratuito
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-label-sm text-gray-400 text-center">
                      Resposta em até 24h · Sem compromisso
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
