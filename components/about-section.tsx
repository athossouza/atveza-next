import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, MessageCircle } from "lucide-react";
import { dictionaries } from "@/lib/dictionaries";

interface AboutProps {
    content?: typeof dictionaries.pt.about;
}

export function AboutSection({ content = dictionaries.pt.about }: AboutProps) {
    return (
        <section className="py-20 bg-[#051426] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">

                    {/* Image Column */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                        {/* Glow Effect behind image */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform scale-75"></div>

                        <div className="relative w-64 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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
                            {content.title} <span className="text-[#2C74B3]">{content.name}</span>?
                        </h2>

                        <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                            <p>
                                {content.p1}
                            </p>
                            <p>
                                {content.p2}
                            </p>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                            <div className="inline-block px-4 py-2 border border-white/10 rounded-full bg-[#0A2647]/50 backdrop-blur-md">
                                <span className="text-[#2C74B3] font-semibold">{content.role}</span> <span className="mx-2 text-neutral-600">|</span> {content.method_label}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/athossouza/"
                                    target="_blank"
                                    className="p-2 rounded-full border border-white/10 hover:bg-[#0077b5]/20 hover:border-[#0077b5] transition text-neutral-400 hover:text-[#0077b5]"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://wa.me/5551994626084"
                                    target="_blank"
                                    className="p-2 rounded-full border border-white/10 hover:bg-[#25D366]/20 hover:border-[#25D366] transition text-neutral-400 hover:text-[#25D366]"
                                    aria-label="WhatsApp"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
