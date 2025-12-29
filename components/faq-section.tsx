
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Isso é uma consultoria de Zendesk?",
        answer: "Não apenas. Consultorias tradicionais configuram a ferramenta. Nós usamos a tecnologia (Zendesk e IA) como alavanca de inteligência operacional. Nosso foco é processo, estratégia e dinheiro no caixa — reduzindo custos ou aumentando o LTV."
    },
    {
        question: "Zendesk vale a pena para indústria?",
        answer: "Sim, especialmente para indústrias que lidam com B2B complexo ou pós-venda técnico. O valor do Zendesk na indústria não está apenas em abrir tickets, mas em centralizar o histórico de orçamentos, assistências técnicas e relacionamento com distribuidores em um único lugar, eliminando silos de informação entre vendas e suporte."
    },
    {
        question: "Zendesk ou Freshdesk?",
        answer: "Ambos são excelentes. O Freshdesk costuma ser mais amigável para PMEs que precisam de um setup rápido e simples. O Zendesk se destaca em robustez, capacidade de customização (API) e relatórios avançados para operações que planejam escalar globalmente ou precisam de regras de negócio complexas."
    },
    {
        question: "Alternativas ao Zendesk no Brasil",
        answer: "O mercado oferece boas opções como Movidesk (focado no mercado nacional), Freshdesk, HubSpot Service e Intercom. A escolha ideal depende da maturidade do seu processo. O ATVEZA Ops Intelligence ajuda justamente a diagnosticar se você precisa trocar de ferramenta ou apenas otimizar o uso da atual."
    },
    {
        question: "Zendesk é caro? Veja opções",
        answer: "O custo do Zendesk é relativo ao ROI que ele gera. Ele pode parecer caro se usado apenas como um 'e-mail gourmet'. Porém, quando orquestrado para automatizar 30-40% da demanda com IA e Autoatendimento, o custo por ticket cai drasticamente, tornando a ferramenta barata. Existem opções mais em conta inicialmente, mas que podem custar mais caro em ineficiência operacional no longo prazo."
    },
    {
        question: "Zendesk ou Salesforce?",
        answer: "Salesforce Service Cloud é imbatível se sua empresa já vive dentro do ecossistema Salesforce (CRM). O Zendesk vence em usabilidade, velocidade de implementação e foco exclusivo em CX ('Customer Experience'). Muitas empresas usam o Salesforce para vendas e integram o Zendesk para o suporte para ter o melhor dos dois mundos."
    },
    {
        question: "Zendesk ou HubSpot?",
        answer: "HubSpot brilha quando o foco é Marketing e Vendas (Inbound), com o Service Hub sendo um complemento. Se o coração da sua empresa é Marketing, HubSpot faz sentido. Se sua operação de suporte é de alta volumetria ou complexidade técnica, o Zendesk ainda oferece ferramentas de gestão de tickets e SLA mais profundas."
    },
    {
        question: "Qual a diferença entre IA e Orquestração de Agentes?",
        answer: "IA sozinha (como um chatbot simples) apenas responde perguntas. A Orquestração de Agentes de IA, que implementamos, conecta a IA aos seus sistemas (ERP, CRM) para executar de tarefas: emitir boletos, agendar visitas, consultar estoques. É a diferença entre um atendente que só fala e um que resolve."
    },
    {
        question: "O Que é o ATVEZA Manutenção?",
        answer: "É nossa plataforma dedicada para gestão de ativos e serviços de campo (CMMS). Ela centraliza ordens de serviço, manutenção preventiva e inventário de peças. Diferente de softwares isolados, ele pode ser integrado ao seu canal de suporte, permitindo que um chamado de cliente dispare automaticamente uma OS para o técnico, com rastreabilidade total."
    },
    {
        question: "Quanto tempo para ver resultados?",
        answer: "O ATVEZA Method é desenhado para Quick Wins. Em 4 semanas, já identificamos gargalos de custo e implementamos automações que pagam o investimento inicial."
    },
    {
        question: "Preciso contratar mais gente?",
        answer: "Pelo contrário. Nosso objetivo é fazer sua operação escalar sem aumentar headcount. Usamos IA e otimização de fluxo para que seu time atual produza mais com menos stress."
    },
    {
        question: "Serve para quem não usa Zendesk?",
        answer: "Sim. Nossos pilares de Gestão de Suporte B2B se aplicam a qualquer ferramenta. O método é agnóstico à plataforma, embora tenhamos profunda expertise técnica em preparar o Zendesk para alta performance."
    }
];

export function FAQSection() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-20 bg-[#051426] text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-white mb-10">Dúvidas Frequentes</h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                            <AccordionTrigger className="text-left text-lg text-white hover:text-[#2C74B3] hover:no-underline px-4">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 px-4 text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
