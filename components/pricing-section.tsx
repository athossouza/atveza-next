
import { Check } from "lucide-react";

const tiers = [
    {
        name: "Discovery",
        description: "Diagnóstico tático para identificar gargalos e desenhar o mapa de evolução do seu suporte.",
        features: [
            "Diagnóstico Operacional Completo",
            "Mapeamento de Processos",
            "Plano de Ação Tático",
            "3 Sessões de Orientação Estratégica",
            "Análise de Stack Tecnológico"
        ],
        cta: "Começar Diagnóstico",
        highlight: false,
    },
    {
        name: "Evolution",
        description: "Acompanhamento contínuo de 12 meses para implementar cultura, processos e tecnologia.",
        features: [
            "Todo o escopo Discovery",
            "Acompanhamento Mensal (12 meses)",
            "Implementação do Método ATVEZA",
            "Mentoria para Lideranças de CX",
            "Workshops de Treinamento"
        ],
        cta: "Iniciar Transformação",
        highlight: true, // Destaque visual
    },
    {
        name: "Enterprise",
        description: "O nível máximo de personalização. Desenvolvimento de software e orquestração de IA sob medida.",
        features: [
            "Todo o escopo Evolution",
            "Desenvolvimento de Softwares Custom",
            "Orquestração de Agentes de IA",
            "Automação de Processos Complexos (RPA)",
            "Integrações via API Dedicadas",
            "SLA de Atendimento Prioritário"
        ],
        cta: "Falar sobre Enterprise",
        highlight: false,
    },
];

export function PricingSection() {
    return (
        <section className="py-20 bg-[#051426] text-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Modelos de <span className="text-[#2C74B3]">Parceria</span>
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        Da orientação estratégica à construção de tecnologias exclusivas.
                        Escolha como você quer acelerar sua operação.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`
                relative flex flex-col p-8 rounded-2xl border 
                transition-all duration-300 hover:scale-105
                ${tier.highlight
                                    ? "bg-[#0A2647]/80 border-[#2C74B3] shadow-2xl shadow-blue-900/20"
                                    : "bg-[#0A2647]/40 border-white/10 hover:border-white/20"
                                }
              `}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-[#2C74B3] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Mais Escolhido
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed min-h-[60px]">
                                    {tier.description}
                                </p>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300">
                                        <Check className="w-5 h-5 text-[#2C74B3] shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://calendar.app.google/eEe6Uy2F3m1uy6in7"
                                target="_blank"
                                className={`
                  w-full py-3 rounded-full font-semibold transition-all text-center block
                  ${tier.highlight
                                        ? "bg-[#2C74B3] hover:bg-[#1a5c96] text-white shadow-lg"
                                        : "border border-white/20 hover:bg-white/10 text-white"
                                    }
                `}
                            >
                                {tier.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
