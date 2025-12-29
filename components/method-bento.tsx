import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import {
    Settings,
    Workflow,
    Bot,
    BrainCircuit,
} from "lucide-react";

const methodItems: BentoItem[] = [
    {
        title: "ATVEZA Flow Intelligence",
        meta: "SaaS Proprietário",
        description:
            "Nossa plataforma exclusiva para inteligência de fluxo e gestão avançada de atendimento. Visibilidade total da operação.",
        icon: <Workflow className="w-4 h-4 text-emerald-500" />,
        status: "Core Product",
        tags: ["Gestão", "Analytics", "mestre.cx"],
        colSpan: 2,
        hasPersistentHover: true,
        // In a real scenario, we might want to make the whole card clickable or add a Link component
    },
    {
        title: "Consultoria & IA",
        meta: "Custom",
        description: "Integrações com Inteligência Artificial personalizadas para a realidade do seu negócio.",
        icon: <BrainCircuit className="w-4 h-4 text-purple-500" />,
        status: "Estratégico",
        tags: ["Zendesk", "Python", "API"],
    },
    {
        title: "Bots Conversacionais",
        meta: "Automação",
        description: "Agentes digitais treinados que resolvem problemas complexos, não apenas respondem FAQs.",
        icon: <Bot className="w-4 h-4 text-blue-500" />,
        tags: ["NLP", "Deflection"],
    },
    {
        title: "ATVEZA Manutenção",
        meta: "Suporte Contínuo",
        description: "Sustentação técnica para garantir que sua operação nunca pare e evolua constantemente.",
        icon: <Settings className="w-4 h-4 text-orange-500" />,
        status: "Serviço",
        tags: ["SLA", "Evolução"],
        colSpan: 2,
    },
];

export function MethodBento() {
    return (
        <section id="solutions" className="py-20 bg-[#051426] text-white">
            <div className="container mx-auto px-4 text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ecossistema de Soluções
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                    Tecnologia proprietária e consultoria especializada para cada etapa da sua jornada de atendimento.
                </p>
            </div>
            <BentoGrid items={methodItems} />
        </section>
    );
}
