import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import {
    Settings,
    Workflow,
    Bot,
    BrainCircuit,
} from "lucide-react";
import { dictionaries } from "@/lib/dictionaries";

interface MethodProps {
    content?: typeof dictionaries.pt.method;
}

export function MethodBento({ content = dictionaries.pt.method }: MethodProps) {

    // Map icons to the dynamic content based on index or title logic, 
    // but since the order is preserved in dictionary, we can map by index.
    const icons = [
        <Workflow key="1" className="w-4 h-4 text-emerald-500" />,
        <BrainCircuit key="2" className="w-4 h-4 text-purple-500" />,
        <Bot key="3" className="w-4 h-4 text-blue-500" />,
        <Settings key="4" className="w-4 h-4 text-orange-500" />
    ];

    const methodItems: BentoItem[] = content.items.map((item, index) => ({
        ...item,
        icon: icons[index],
        colSpan: (index === 0 || index === 3) ? 2 : 1, // Preserve layout logic
        hasPersistentHover: index === 0 ? true : undefined
    }));

    return (
        <section id="solutions" className="py-20 bg-[#051426] text-white">
            <div className="container mx-auto px-4 text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {content.title}
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                    {content.subtitle}
                </p>
            </div>
            <BentoGrid items={methodItems} />
        </section>
    );
}
