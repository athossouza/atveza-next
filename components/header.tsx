'use client';

import { dictionaries } from "@/lib/dictionaries";
import { Globe } from "lucide-react";

interface HeaderProps {
    content?: typeof dictionaries.pt.header;
    locale?: 'pt' | 'en';
}

export function Header({ content = dictionaries.pt.header, locale = 'pt' }: HeaderProps) {
    const handleLanguageSwitch = (targetLang: 'pt' | 'en') => {
        // Save preference to avoid auto-redirect loop
        localStorage.setItem('atveza_lang_pref', targetLang);

        // Navigate
        if (targetLang === 'en') {
            window.location.href = '/en';
        } else {
            window.location.href = '/';
        }
    };

    return (
        <header className="mb-8 flex justify-between items-center py-6 px-2">
            <div className="w-20 md:w-24">
                <img
                    src="/images/logo.png"
                    alt="ATVEZA"
                    className="w-full h-auto opacity-90"
                />
            </div>
            <nav className="gap-6 text-sm text-neutral-400 hidden md:flex items-center">
                <a href="#" className="hover:text-white transition">{content.nav_home}</a>
                <a href="#solutions" className="hover:text-white transition">{content.nav_method}</a>
                <a href="https://atveza.substack.com/archive" target="_blank" className="hover:text-white transition">{content.nav_blog}</a>

                {/* Language Switcher */}
                {/* Needs 'use client' for onClick, but this component is likely server component unless marked. 
             Ideally better to be client, or use a client component wrapper. 
             For simplicity now, Iwill convert Header to 'use client' since it has interactivity.
          */}
                <button
                    onClick={() => handleLanguageSwitch(locale === 'pt' ? 'en' : 'pt')}
                    className="flex items-center gap-1 hover:text-white transition border border-white/10 px-3 py-1 rounded-full text-xs"
                >
                    <Globe className="w-3 h-3" />
                    {locale === 'pt' ? 'EN' : 'PT'}
                </button>

                <a
                    href="https://calendar.app.google/eEe6Uy2F3m1uy6in7"
                    target="_blank"
                    className="px-4 py-2 rounded-full border border-neutral-700 hover:bg-white hover:text-black transition"
                >
                    {content.cta}
                </a>
            </nav>
        </header>
    );
}
