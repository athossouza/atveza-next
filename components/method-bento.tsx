
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import {
    TrendingUp,
    Workflow,
    Bot,
    Wallet,
} from "lucide-react";

const methodItems: BentoItem[] = [
    {
        title: "Redução de Custos (ROI)",
        meta: "-40% OPEX",
        description:
            "Diagnóstico financeiro profundo para eliminar licenças ociosas e processos manuais caros.",
        icon: <Wallet className="w-4 h-4 text-emerald-500" />,
        status: "Estratégico",
        tags: ["Financeiro", "Zendesk", "Saving"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Automação de Fluxos",
        meta: "No-Code",
        description: "Engenharia de processos para que tickets simples se resolvam sozinhos.",
        icon: <Workflow className="w-4 h-4 text-blue-500" />,
        status: "Técnico",
        tags: ["Triggers", "Macros"],
    },
    {
        title: "Inteligência Artificial",
        meta: "GPT-4o",
        description: "Bot treinado na sua base de conhecimento para triage e resposta humanizada.",
        icon: <Bot className="w-4 h-4 text-purple-500" />,
        tags: ["IA", "Deflection"],
        colSpan: 2,
    },
    {
        title: "Maturidade Operacional",
        meta: "Growth",
        description: "Transforme SLA batido em motor de Upsell e Retenção B2B.",
        icon: <TrendingUp className="w-4 h-4 text-orange-500" />,
        status: "Gestão",
        tags: ["CS", "LTV"],
    },
];

export function MethodBento() {
    return (
        <section className="py-20 bg-[#051426] text-white">
            <div className="container mx-auto px-4 text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Pilares da Inteligência
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                    Uma visão panorâmica de como transformamos caos em processos lucrativos.
                </p>
            </div>
            <BentoGrid items={methodItems} />
        </section>
    );
}
