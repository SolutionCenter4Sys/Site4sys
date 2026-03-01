import type { Metadata } from 'next';
import { Kicker } from '@/components/ui/Kicker';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos de Uso do site da Foursys com regras gerais de acesso, responsabilidades e direitos.',
};

export default function TermosPage() {
  return (
    <>
      <section className="bg-gradient-dark pt-32 pb-16" aria-label="Termos de Uso">
        <div className="container-site">
          <Breadcrumb items={[{ label: 'Termos' }]} light className="mb-8" />
        </div>
        <div className="container-site text-center">
          <Kicker light className="mb-4">
            Conformidade
          </Kicker>
          <h1 className="text-display-md text-white mb-4">Termos de Uso</h1>
          <p className="text-body-xl text-white/70 max-w-2xl mx-auto">
            Ao utilizar este site, você concorda com as condições abaixo e com as
            práticas de segurança e conformidade da Foursys.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-label="Conteúdo dos termos">
        <div className="container-site max-w-4xl">
          <div className="space-y-10 text-gray-600">
            <article>
              <h2 className="text-heading-xl text-navy mb-3">1. Uso permitido</h2>
              <p className="text-body-lg leading-relaxed">
                O conteúdo deste site é destinado à informação institucional e
                comercial. É vedado uso indevido, cópia não autorizada ou tentativa de
                comprometimento técnico da plataforma.
              </p>
            </article>

            <article>
              <h2 className="text-heading-xl text-navy mb-3">2. Propriedade intelectual</h2>
              <p className="text-body-lg leading-relaxed">
                Marcas, textos, design e materiais disponibilizados pertencem à
                Foursys ou a seus parceiros e são protegidos por legislação aplicável.
              </p>
            </article>

            <article>
              <h2 className="text-heading-xl text-navy mb-3">3. Limitações e isenções</h2>
              <p className="text-body-lg leading-relaxed">
                Empregamos boas práticas de qualidade e segurança, mas não garantimos
                ausência total de indisponibilidade, falhas de conexão ou eventos fora
                do nosso controle.
              </p>
            </article>

            <article>
              <h2 className="text-heading-xl text-navy mb-3">4. Links de terceiros</h2>
              <p className="text-body-lg leading-relaxed">
                Conteúdos e serviços de terceiros têm suas próprias políticas. A
                Foursys não se responsabiliza por práticas externas ao seu domínio.
              </p>
            </article>

            <article>
              <h2 className="text-heading-xl text-navy mb-3">5. Contato</h2>
              <p className="text-body-lg leading-relaxed">
                Para dúvidas jurídicas ou institucionais, entre em contato pelo e-mail
                contato@foursys.com.br.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        headline="Quer falar com nosso time executivo?"
        subheadline="Estamos prontos para apoiar sua transformação com segurança e governança."
        ctaLabel="Fale com um especialista"
        ctaHref="/contato"
        ctaSecondaryLabel="Conhecer soluções"
        ctaSecondaryHref="/solucoes"
      />
    </>
  );
}
