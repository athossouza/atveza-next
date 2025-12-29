import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "O ATVEZA Method transformou completamente nossa visão. Reduzimos em 35% os chamados repetitivos e aumentamos a renovação de contratos.",
        author: "Felipe Santos da Silva",
        role: "Applications and Support Manager at SolidCAM LATAM"
    },
    {
        quote: "Antes, nosso suporte era visto como custo. Hoje, é um diferencial competitivo e fonte de novos negócios. A visão estratégica do Athos mudou o jogo.",
        author: "Ana Claudia Mendes",
        role: "Diretora de Operações, TechSolutions Brasil"
    },
    {
        quote: "O suporte não apenas pode ser eficiente, mas também estratégico para o crescimento. O ROI da mentoria veio em menos de 3 meses.",
        author: "Ricardo Oliveira",
        role: "CEO, Nexus Software"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-20 bg-[#051426] text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#144272]/30 via-[#051426] to-[#051426] z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Quem confia no Método
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-[#0A2647]/50 border-white/10 backdrop-blur-sm shadow-sm hover:shadow-md transition">
                            <CardContent className="pt-8">
                                <Quote className="w-8 h-8 text-[#2C74B3] mb-4 opacity-50" />
                                <p className="text-gray-300 italic mb-6 text-lg">"{t.quote}"</p>
                                <div>
                                    <p className="font-semibold text-white">{t.author}</p>
                                    <p className="text-sm text-gray-400">{t.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
