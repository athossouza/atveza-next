import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#051426] text-neutral-400 border-t border-white/10 py-12 relative overflow-hidden">
            {/* Marca D'água Centralizada - Masonic G (PNG) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 pointer-events-none mix-blend-overlay">
                <img
                    src="/images/masonic_g.png"
                    alt=""
                    className="w-full h-full object-contain invert grayscale"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left">
                        <div className="w-28 mx-auto md:mx-0 mb-4">
                            <img
                                src="/images/logo.png"
                                alt="ATVEZA"
                                className="w-full h-auto opacity-90"
                            />
                        </div>
                        <p className="text-sm">Inteligência Operacional em Suporte B2B.</p>
                        <p className="text-sm mt-1">&copy; 2025 ATVEZA Method ∴</p>
                        <p className="text-xs mt-2 text-neutral-600">
                            ATVEZA SERVICOS EM TECNOLOGIA LTDA <br />
                            CNPJ: 48.761.773/0001-17
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <Link href="https://www.linkedin.com/in/athossouza/" target="_blank" className="hover:text-cyan-500 transition">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.instagram.com/atveza/" target="_blank" className="hover:text-purple-500 transition">
                            <Instagram className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.youtube.com/@ATVEZATechnology" target="_blank" className="hover:text-red-500 transition">
                            <Youtube className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
