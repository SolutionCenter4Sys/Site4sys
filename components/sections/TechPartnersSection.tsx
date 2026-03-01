'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const PARTNERS = [
  { name: 'Microsoft', tier: 'Strategic' },
  { name: 'Amazon Web Services', tier: 'Strategic' },
  { name: 'Google Cloud', tier: 'Strategic' },
  { name: 'SAP', tier: 'Enterprise' },
  { name: 'Oracle', tier: 'Enterprise' },
  { name: 'ServiceNow', tier: 'Enterprise' },
  { name: 'Salesforce', tier: 'Enterprise' },
  { name: 'Databricks', tier: 'Advanced' },
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
              className="group p-4 rounded-xl border border-gray-200 bg-white hover:border-navy/25 hover:shadow-card transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm sm:text-[15px] font-extrabold tracking-tight text-gray-800 group-hover:text-navy transition-colors">
                  {partner.name}
                </p>
                <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-bold bg-gray-100 text-gray-500">
                  {partner.tier}
                </span>
              </div>
              <div className="mt-3 h-0.5 w-full bg-gradient-to-r from-orange/70 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
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
