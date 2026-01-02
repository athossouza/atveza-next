
import { dictionaries } from "@/lib/dictionaries";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPageEn() {
    const content = dictionaries.en.privacy;

    return (
        <main className="min-h-screen bg-[#020817] text-white selection:bg-blue-500/30 font-sans">
            <div className="w-full max-w-7xl mx-auto p-4">
                <Header content={dictionaries.en.header} locale="en" />
            </div>

            <div className="container mx-auto px-4 py-32 max-w-3xl">
                <Link
                    href="/en"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    {content.title}
                </h1>
                <p className="text-neutral-400 mb-12 border-b border-white/10 pb-8">
                    {content.last_updated}
                </p>

                <div className="prose prose-invert prose-lg max-w-none text-neutral-300">
                    <p className="lead text-xl mb-12">{content.intro}</p>

                    {content.sections.map((section, index) => (
                        <div key={index} className="mb-10">
                            <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
                            <p className="leading-relaxed">{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer locale="en" />
        </main>
    );
}
