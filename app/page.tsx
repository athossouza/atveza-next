import { SplineSceneBasic } from "@/components/hero-spline";
import { MethodBento } from "@/components/method-bento";
import { TestimonialsSection } from "@/components/testimonials";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#051426] flex flex-col font-sans text-white">
      <div className="w-full max-w-7xl mx-auto p-4">
        {/* Header Simples */}
        <header className="mb-8 flex justify-between items-center py-6 px-2">
          <div className="w-20 md:w-24">
            <img
              src="/images/logo.png"
              alt="ATVEZA"
              className="w-full h-auto opacity-90"
            />
          </div>
          <nav className="gap-6 text-sm text-neutral-400 hidden md:flex items-center">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#solutions" className="hover:text-white transition">Método</a>
            <a href="https://atveza.substack.com/archive" target="_blank" className="hover:text-white transition">Blog</a>
            <a
              href="https://calendar.app.google/eEe6Uy2F3m1uy6in7"
              target="_blank"
              className="px-4 py-2 rounded-full border border-neutral-700 hover:bg-white hover:text-black transition"
            >
              Falar com Consultor
            </a>
          </nav>
        </header>

        {/* Hero Section (3D) */}
        <SplineSceneBasic />
      </div>

      {/* Seções de Conteúdo (Fundo Escuro Contínuo) */}
      <MethodBento />
      <AboutSection />

      <PricingSection />

      {/* <TestimonialsSection /> */}

      <FAQSection />

      <CTASection />

      <Footer />
    </main>
  );
}
