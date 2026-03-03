import type { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Kicker } from '@/components/ui/Kicker';
import { ContactForm } from '@/components/forms/ContactForm';
import { OFFICES } from '@/mocks/index';
import { DarkPageHero } from '@/components/sections/DarkPageHero';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com a Foursys. Escritórios em São Paulo, Boston e Lisboa. Agende um diagnóstico gratuito com nosso time de especialistas.',
};

export default function ContatoPage() {
  return (
    <>
      <DarkPageHero className="pt-32 pb-16" aria-label="Contato">
        <div className="container-site text-center">
          <Kicker light className="mb-4">Vamos conversar</Kicker>
          <h1 className="text-display-md text-white mb-4">Fale com a Foursys</h1>
          <p className="text-body-xl text-white/70 max-w-xl mx-auto">
            Agende um diagnóstico gratuito. Nosso time responde em até 24 horas.
          </p>
        </div>
      </DarkPageHero>

      {/* Form + Info */}
      <section className="section-padding bg-gray-50" aria-label="Formulário de contato">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h2 className="text-heading-xl text-navy mb-2">Envie uma mensagem</h2>
              <p className="text-body-md text-gray-500 mb-6">Preencha o formulário e retornamos em até 24h.</p>
              <ContactForm variant="full" />
            </div>

            {/* Info */}
            <div className="space-y-6">
              {/* Quick contact */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="text-heading-md text-navy mb-4">Contato rápido</h3>
                <div className="space-y-3">
                  <a href="mailto:contato@foursys.com.br" className="flex items-center gap-3 text-body-md text-gray-600 hover:text-orange transition-colors">
                    <Mail className="w-5 h-5 text-orange flex-shrink-0" />
                    contato@foursys.com.br
                  </a>
                  <a href="tel:+551130621823" className="flex items-center gap-3 text-body-md text-gray-600 hover:text-orange transition-colors">
                    <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                    +55 11 3062-1823
                  </a>
                  <div className="flex items-center gap-3 text-body-md text-gray-600">
                    <Clock className="w-5 h-5 text-orange flex-shrink-0" />
                    Seg–Sex, 9h–18h (BRT)
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="text-heading-md text-navy mb-4">Nossos escritórios</h3>
                <div className="space-y-5">
                  {OFFICES.map(office => (
                    <div key={office.id} className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{office.flag}</span>
                      <div>
                        <p className="text-body-md font-semibold text-navy">{office.city}, {office.country}</p>
                        <p className="text-body-sm text-gray-500 flex items-start gap-1.5 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-orange flex-shrink-0 mt-0.5" />
                          {office.address}
                        </p>
                        {office.email && (
                          <a href={`mailto:${office.email}`} className="text-body-sm text-orange hover:underline mt-0.5 block">
                            {office.email}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA cards for offers */}
              <div className="bg-navy rounded-2xl p-6">
                <p className="text-heading-sm text-white mb-3">Quer falar sobre uma oferta específica?</p>
                <div className="grid grid-cols-1 gap-2">
                  {['AI-Augmented Squad', 'Modernização de Legado', 'IA com ROI'].map(offer => (
                    <a
                      key={offer}
                      href={`/contato?servico=${encodeURIComponent(offer)}`}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange/30 transition-all"
                    >
                      <span className="text-body-md text-white/80">{offer}</span>
                      <span className="text-orange text-sm">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
