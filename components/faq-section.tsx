
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { dictionaries } from "@/lib/dictionaries";

interface FAQProps {
    content?: typeof dictionaries.pt.faq;
}

export function FAQSection({ content = dictionaries.pt.faq }: FAQProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.items.map(faq => ({
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
                <h2 className="text-3xl font-bold text-center text-white mb-10">{content.title}</h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {content.items.map((faq, index) => (
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
