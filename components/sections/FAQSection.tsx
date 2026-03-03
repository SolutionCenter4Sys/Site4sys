import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Como começa um projeto com a Foursys?',
    a: 'Tudo começa com um diagnóstico gratuito de 45 minutos. Nessa conversa, entendemos seu contexto, mapeamos o desafio real e apresentamos uma perspectiva inicial sem compromisso. Se houver fit, desenvolvemos uma proposta personalizada em até 5 dias úteis.',
  },
  {
    q: 'Quanto tempo leva para ver os primeiros resultados?',
    a: 'Nosso modelo é focado em valor em semanas, não em meses. Para AI-Augmented Squad, os primeiros entregáveis acontecem na segunda semana. Para IA com Impacto, o business case com impacto projetado sai em 4 a 6 semanas. Para Modernização de Legado, o primeiro módulo piloto opera em 8 a 12 semanas.',
  },
  {
    q: 'Qual é o investimento mínimo para começar?',
    a: 'Trabalhamos com empresas mid-market e enterprise, com investimentos a partir de R$ 120k/trimestre para engajamentos focados. O diagnóstico inicial é sempre gratuito. Não fazemos orçamentos genéricos — cada proposta é calculada com base no escopo real do desafio.',
  },
  {
    q: 'A Foursys trabalha só com tecnologia ou também com transformação cultural?',
    a: 'Ambos. Tecnologia sem mudança de cultura não escala. Por isso nosso modelo integra entrega técnica (squads, código, cloud) com transformação organizacional (agilidade, liderança, governança). Os casos de Agilidade & Org Design mostram isso na prática.',
  },
  {
    q: 'Como vocês garantem a qualidade e a segurança das entregas?',
    a: 'Todas as nossas squads operam com um playbook interno de qualidade e segurança: code review obrigatório, testes automatizados, compliance desde o design. Somos certificados ISO 9001, ISO 27001, ISO 27701 e ISO 14001. Nossa taxa de incidentes pós-implementação é historicamente próxima de zero.',
  },
  {
    q: 'A Foursys atua fora do Brasil?',
    a: 'Sim. Temos presença em Boston (EUA) e Lisboa (Portugal), com projetos ativos nos três países e capacidade de engajamento remoto-first ou presencial. Nosso modelo permite integrar talentos globais sem abrir mão da governança local.',
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-white" aria-label="Perguntas frequentes">
      <div className="container-site max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-label-md font-semibold text-orange uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-display-sm font-bold text-navy">Dúvidas frequentes</h2>
        </div>

        <div className="divide-y divide-gray-100">
          {FAQS.map((item, i) => (
            <details key={i} className="group py-1">
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none">
                <span className="text-body-lg font-semibold text-navy group-open:text-orange transition-colors pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180 group-open:text-orange"
                  aria-hidden="true"
                />
              </summary>
              <div className="pb-6 text-body-md text-gray-600 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
