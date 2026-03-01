'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const PARTNERS = [
  { name: 'Microsoft', tier: 'Strategic', initial: 'M', color: 'from-blue-600 to-blue-800' },
  { name: 'Amazon Web Services', tier: 'Strategic', initial: 'AWS', color: 'from-amber-500 to-orange-600' },
  { name: 'Google Cloud', tier: 'Strategic', initial: 'G', color: 'from-blue-500 to-green-600' },
  { name: 'SAP', tier: 'Enterprise', initial: 'SAP', color: 'from-blue-700 to-indigo-800' },
  { name: 'Oracle', tier: 'Enterprise', initial: 'O', color: 'from-red-600 to-red-800' },
  { name: 'ServiceNow', tier: 'Enterprise', initial: 'SN', color: 'from-emerald-600 to-teal-700' },
  { name: 'Salesforce', tier: 'Enterprise', initial: 'SF', color: 'from-sky-400 to-blue-600' },
  { name: 'Databricks', tier: 'Advanced', initial: 'D', color: 'from-orange-500 to-red-600' },
];

const CERTS = [
  { label: 'Microsoft Gold Partner' },
  { label: 'AWS Select Partner' },
  { label: 'SAP Certified' },
  { label: 'ISO 9001' },
  { label: 'ISO 27001' },
];

export function TechPartnersSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-14 bg-white border-t border-gray-100"
      aria-label="Tecnologias e parcerias estratégicas"
    >
      <div className="container-site">
        <div
          className={cn(
            'text-center mb-10 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <p className="text-label-lg text-gray-400 uppercase tracking-widest mb-2 font-semibold">
            Tecnologias & Parcerias
          </p>
          <p className="text-body-lg text-gray-500 max-w-xl mx-auto">
            Trabalhamos com os líderes globais de tecnologia para entregar as melhores soluções para nossos clientes.
          </p>
        </div>

        {/* Logo wall */}
        <div
          className={cn(
            'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 transition-all duration-700 delay-150',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {PARTNERS.map((partner, i) => (
            <div
              key={partner.name}
              title={`${partner.name} - ${partner.tier}`}
              className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-4"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Logo placeholder */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                <span className="text-white font-bold text-sm">{partner.initial}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-[15px] font-extrabold tracking-tight text-gray-800 group-hover:text-navy transition-colors truncate">
                  {partner.name}
                </p>
                <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-bold bg-gray-100 text-gray-500 mt-1">
                  {partner.tier}
                </span>
              </div>
              <div className="h-8 w-0.5 bg-gradient-to-b from-orange/50 to-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div
          className={cn(
            'flex flex-wrap justify-center gap-2.5 transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          {CERTS.map(cert => (
            <span
              key={cert.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy/5 border border-navy/10 rounded-pill text-body-sm text-navy font-semibold"
            >
              <span className="w-5 h-5 rounded-full bg-orange/15 text-orange text-[9px] font-black flex items-center justify-center flex-shrink-0">
                ✓
              </span>
              {cert.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
