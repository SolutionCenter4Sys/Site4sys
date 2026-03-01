'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const PARTNERS = [
  { name: 'Microsoft', logo: 'MS', color: '#00A4EF', bg: '#E6F5FD' },
  { name: 'AWS', logo: 'AWS', color: '#FF9900', bg: '#FFF5E6' },
  { name: 'Google Cloud', logo: 'GCP', color: '#4285F4', bg: '#EEF3FD' },
  { name: 'SAP', logo: 'SAP', color: '#0070F2', bg: '#E6F0FD' },
  { name: 'Oracle', logo: 'ORC', color: '#F80000', bg: '#FEE6E6' },
  { name: 'ServiceNow', logo: 'SN', color: '#62D84E', bg: '#EDFAE9' },
  { name: 'Salesforce', logo: 'SF', color: '#00A1E0', bg: '#E6F5FC' },
  { name: 'Databricks', logo: 'DB', color: '#FF3621', bg: '#FEE9E7' },
];

const CERTS = [
  { label: 'Microsoft Gold Partner', badge: 'GOLD' },
  { label: 'AWS Select Partner', badge: 'SELECT' },
  { label: 'SAP Certified', badge: 'CERT' },
  { label: 'ISO 9001', badge: 'ISO' },
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

        {/* Logo grid */}
        <div
          className={cn(
            'grid grid-cols-4 sm:grid-cols-8 gap-3 mb-10 transition-all duration-700 delay-150',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {PARTNERS.map((partner, i) => (
            <div
              key={partner.name}
              title={partner.name}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black tracking-tight"
                style={{ background: partner.bg, color: partner.color }}
              >
                {partner.logo}
              </div>
              <span className="text-[10px] text-gray-400 font-medium text-center leading-tight hidden sm:block">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div
          className={cn(
            'flex flex-wrap justify-center gap-3 transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          {CERTS.map(cert => (
            <span
              key={cert.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-pill text-body-sm text-gray-600 font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-orange/10 text-orange text-[9px] font-black flex items-center justify-center flex-shrink-0">
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
