import { SplineSceneBasic } from "@/components/hero-spline";
import { MethodBento } from "@/components/method-bento";
import { TestimonialsSection } from "@/components/testimonials";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#051426] flex flex-col font-sans text-white">
      <div className="w-full max-w-7xl mx-auto p-4">
        {/* Header Simples */}
        <header className="mb-8 flex justify-between items-center py-6 px-2">
          <div className="w-20 md:w-24">
            <img
              src="https://lp.atveza.com/wp-content/uploads/2024/02/cropped-atveza-logo-03.png"
              alt="ATVEZA"
              className="w-full h-auto"
            />
          </div>
          <nav className="gap-6 text-sm text-neutral-400 hidden md:flex items-center">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Método</a>
            <a href="#" className="hover:text-white transition">Blog</a>
            <button className="px-4 py-2 rounded-full border border-neutral-700 hover:bg-white hover:text-black transition">
              Falar com Consultor
            </button>
          </nav>
        </header>

        {/* Hero Section (3D) */}
        <SplineSceneBasic />
      </div>

      {/* Seções de Conteúdo (Fundo Escuro Contínuo) */}
      <MethodBento />
      <AboutSection />
      {/* <TestimonialsSection /> */}

      <FAQSection />

      <Footer />
    </main>
  );
}
