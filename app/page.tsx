import { SplineSceneBasic } from "@/components/hero-spline";
import { MethodBento } from "@/components/method-bento";
import { TestimonialsSection } from "@/components/testimonials";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { Header } from "@/components/header";
import { LanguageRedirect } from "@/components/language-redirect";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#051426] flex flex-col font-sans text-white">
      <LanguageRedirect />
      <div className="w-full max-w-7xl mx-auto p-4">
        {/* Header Simples */}
        <Header locale="pt" />

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
