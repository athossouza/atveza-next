import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#051426] via-[#0A2647] to-[#051426] z-0" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#2C74B3]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#2C74B3]/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Parceiros de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C74B3] to-[#60A5FA]">Inovação Tecnológica</span>
                </h2>

                <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Especialistas em tecnologias para gestão do atendimento. Orquestração de automações e agentes de IA para escalar sua operação B2B.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="https://calendar.app.google/eEe6Uy2F3m1uy6in7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#051426] rounded-full font-bold text-lg hover:bg-neutral-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                        Falar com Consultor
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#solutions"
                        className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors backdrop-blur-sm"
                    >
                        Ver Soluções
                    </a>
                </div>
            </div>
        </section>
    );
}
