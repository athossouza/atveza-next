'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
    return (
        <Card className="w-full h-[600px] bg-[#0A2647]/50 relative overflow-hidden border-white/5 rounded-none md:rounded-lg">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#2C74B3"
            />

            <div className="flex h-full flex-col md:flex-row">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Parceiros de Inovação <br /> Tecnológica
                    </h1>
                    <p className="mt-4 text-neutral-300 max-w-lg text-lg">
                        Especialistas em tecnologias para gestão do atendimento.{" "}
                        <strong>Orquestração de automações e agentes de IA</strong> para escalar sua operação B2B.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a
                            href="https://calendar.app.google/eEe6Uy2F3m1uy6in7"
                            target="_blank"
                            className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition"
                        >
                            Falar com Especialista
                        </a>
                        <a
                            href="#solutions"
                            className="px-6 py-3 rounded-full border border-neutral-700 text-white font-semibold hover:bg-neutral-900 transition"
                        >
                            Conhecer o Método
                        </a>
                    </div>
                </div>

                {/* Right content */}
                <div className="flex-1 relative min-h-[300px] md:min-h-full">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Card>
    )
}
