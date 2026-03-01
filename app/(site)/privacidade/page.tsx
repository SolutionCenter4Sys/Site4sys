import type { Metadata } from 'next';
import { Kicker } from '@/components/ui/Kicker';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade da Foursys para uso de dados pessoais, cookies e contato institucional.',
};

export default function PrivacidadePage() {
  return (
    <>
      <section className="bg-gradient-dark pt-32 pb-16" aria-label="Política de Privacidade">
        <div className="container-site">
          <Breadcrumb items={[{ label: 'Privacidade' }]} light className="mb-8" />
        </div>
        <div className="container-site text-center">
          <Kicker light className="mb-4">
            Transparência
          </Kicker>
          <h1 className="text-display-md text-white mb-4">Política de Privacidade</h1>
          <p className="text-body-xl text-white/70 max-w-2xl mx-auto">
            Este documento descreve como tratamos dados pessoais em nossos canais
            digitais e como você pode exercer seus direitos.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-label="Conteúdo da política">
        <div className="container-site max-w-4xl">
          <div className="space-y-10 text-gray-600">
            <article>
              <h2 className="text-heading-xl text-navy mb-3">1. Dados que coletamos</h2>
              <p className="text-body-lg leading-relaxed">
                Coletamos apenas os dados necessários para responder ao seu contato,
                apresentar nossas soluções e melhorar sua experiência de navegação.
              </p>
            </article>

            <article>
              <h2 className="text-heading-xl text-navy mb-3">2. Finalidade do uso</h2>
              <p className="text-body-lg leading-relaxed">
                Utilizamos dados para comunicação comercial, atendimento, análise de
                desempenho do site e melhoria contínua dos nossos serviços.
              </p>
            </article>

            <article>
              <h2 className="text-heading-xl text-navy mb-3">3. Compartilhamento</h2>
              <p className="text-body-lg leading-relaxed">
                Não comercializamos dados pessoais. O compartilhamento ocorre somente
                com parceiros necessários para operação segura dos serviços, sempre com
                controles de proteção adequados.
              </p>
            </article>

            <article>
              <h2 className="text-heading-xl text-navy mb-3">4. Seus direitos</h2>
              <p className="text-body-lg leading-relaxed">
                Você pode solicitar acesso, correção, exclusão ou portabilidade de
                dados conforme a legislação aplicável. Para exercer seus direitos,
                contate: contato@foursys.com.br.
              </p>
            </article>

            <article>
              <h2 className="text-heading-xl text-navy mb-3">5. Atualizações</h2>
              <p className="text-body-lg leading-relaxed">
                Esta política pode ser atualizada periodicamente para refletir ajustes
                legais, técnicos ou operacionais.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        headline="Precisa de esclarecimentos sobre privacidade?"
        subheadline="Nosso time de governança responde dúvidas e solicitações em até 24h."
        ctaLabel="Falar com a Foursys"
        ctaHref="/contato"
        ctaSecondaryLabel="Voltar para a Home"
        ctaSecondaryHref="/"
      />
    </>
  );
}
