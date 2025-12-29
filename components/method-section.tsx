import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BarChart3, Users, Rocket } from "lucide-react";

const benefits = [
    {
        icon: <BarChart3 className="w-10 h-10 text-cyan-500" />,
        title: "Redução de até 40% nos Custos",
        description: "Elimine o desperdício em licenças Zendesk ociosas e processos manuais que drenam seu orçamento."
    },
    {
        icon: <CheckCircle2 className="w-10 h-10 text-cyan-500" />,
        title: "Satisfação e Retenção B2B",
        description: "Transforme SLA batido em encantamento real. Clientes satisfeitos renovam contratos e indicam."
    },
    {
        icon: <Users className="w-10 h-10 text-cyan-500" />,
        title: "Time de Alta Performance",
        description: "Acabe com o burnout do suporte. Processos claros e ferramentas otimizadas motivam a equipe."
    },
    {
        icon: <Rocket className="w-10 h-10 text-cyan-500" />,
        title: "Suporte como Motor de Vendas",
        description: "Converta tickets em oportunidades de upsell e cross-sell. O suporte vira receita."
    }
];

export function MethodSection() {
    return (
        <section className="py-20 bg-neutral-950 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 mb-4">
                        Resultados de Inteligência Operacional
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Não é mágica, é método. O <strong>ATVEZA Method</strong> aplica engenharia de processos e IA
                        para transformar seu Zendesk em uma máquina de eficiência.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="bg-neutral-900 border-neutral-800 hover:border-cyan-900/50 transition duration-300">
                            <CardHeader>
                                <div className="mb-4">{benefit.icon}</div>
                                <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
