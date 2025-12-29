
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Isso é uma consultoria de Zendesk convencional?",
        answer: "Não. Consultorias tradicionais apenas configuram a ferramenta. Nós usamos o Zendesk como alavanca de inteligência operacional. Nosso foco é processo, estratégia e dinheiro no caixa (redução de custo ou aumento de LTV)."
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
        answer: "Sim. Os princípios de Gestão de Suporte B2B se aplicam a qualquer ferramenta (Intercom, HubSpot, Freshdesk). O método é agnóstico à plataforma, embora tenhamos profunda expertise técnica em Zendesk."
    }
];

export function FAQSection() {
    return (
        <section className="py-20 bg-[#051426] text-white">
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
