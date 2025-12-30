
export const siteVariants = {
    default: {
        title: "ATVEZA | Inteligência Operacional e Orquestração de IA",
        description: "Parceiros de inovação tecnológica especializados em Orquestração de agentes de IA, automações de atendimento e suporte B2B.",
    },
    personal: {
        title: "Athos Alves de Souza | Especialista em Zendesk e IA",
        description: "Consultoria pessoal e estratégica em tecnologia, orquestração de IA e eficiência operacional com Athos Alves de Souza.",
    },
    consultor: {
        title: "Consultor Zendesk & IA | Otimização de Atendimento",
        description: "Contrate um consultor especialista para transformar sua operação de suporte com Inteligência Artificial e Zendesk.",
    },
    consultoria: {
        title: "Consultoria Especializada em Zendesk e Processos",
        description: "Consultoria técnica e estratégica para empresas que buscam escalar seu atendimento e suporte B2B.",
    },
    mentoria: {
        title: "Mentoria em Tecnologia e Gestão de Suporte",
        description: "Mentoria executiva para líderes de suporte e operações. Aprenda a orquestrar agentes de IA e times de alta performance.",
    },
    clientfy: {
        title: "Clientfy | Inteligência e Gestão de Clientes",
        description: "Soluções avançadas para gestão de relacionamento e sucesso do cliente (CS) com automação e dados.",
    },
};

export type SiteVariantKey = keyof typeof siteVariants;

export function getSeoConfig() {
    const variant = (process.env.NEXT_PUBLIC_SITE_VARIANT as SiteVariantKey) || "default";
    return siteVariants[variant] || siteVariants.default;
}
