import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
    return (
        <section className="py-20 bg-[#051426] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">

                    {/* Image Column */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                        {/* Glow Effect behind image */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform scale-75"></div>

                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/images/athos.png"
                                alt="Athos - Fundador ATVEZA"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Quem é <span className="text-[#2C74B3]">Athos</span>?
                        </h2>

                        <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                            <p>
                                Especialista em Estratégia de Suporte e Zendesk.
                                Minha missão é transformar departamentos de atendimento, muitas vezes vistos como "centro de custo", em operações de alta performance.
                            </p>
                            <p>
                                Com o método ATVEZA, ajudo empresas a reduzir custos operacionais, automatizar processos repetitivos e elevar a satisfação do cliente (CSAT) a novos patamares.
                            </p>
                        </div>

                        <div className="pt-4">
                            <div className="inline-block px-4 py-2 border border-white/10 rounded-full bg-[#0A2647]/50 backdrop-blur-md">
                                <span className="text-[#2C74B3] font-semibold">Founder & CEO</span> <span className="mx-2 text-neutral-600">|</span> ATVEZA Method
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
