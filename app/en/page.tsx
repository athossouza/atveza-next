import { SplineSceneBasic } from "@/components/hero-spline";
import { MethodBento } from "@/components/method-bento";
import { AboutSection } from "@/components/about-section";
import { FAQSection } from "@/components/faq-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { dictionaries } from "@/lib/dictionaries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ATVEZA | Innovation Partners & AI Orchestration",
    description: "Specialists in technologies for service management. Orchestration of automations and AI agents to scale your B2B operation.",
    alternates: {
        canonical: '/en',
        languages: {
            'pt-BR': '/',
        }
    }
};

export default function HomeEn() {
    const content = dictionaries.en;

    return (
        <main className="min-h-screen bg-[#051426] flex flex-col font-sans text-white">
            <div className="w-full max-w-7xl mx-auto p-4">
                <Header content={content.header} locale="en" />
                <SplineSceneBasic content={content.hero} />
            </div>

            <MethodBento content={content.method} />
            <AboutSection content={content.about} />
            <PricingSection content={content.pricing} />
            <FAQSection content={content.faq} />
            <CTASection content={content.cta} />

            <Footer />
        </main>
    );
}
