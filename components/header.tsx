'use client';

import { dictionaries } from "@/lib/dictionaries";
import { Globe } from "lucide-react";

interface HeaderProps {
    content?: typeof dictionaries.pt.header;
    locale?: 'pt' | 'en';
}

export function Header({ content = dictionaries.pt.header, locale = 'pt' }: HeaderProps) {
    const handleLanguageSwitch = (targetLang: 'pt' | 'en') => {
        // Save preference
        localStorage.setItem('atveza_lang_pref', targetLang);

        const currentPath = window.location.pathname;

        if (targetLang === 'en') {
            // Se já está em inglês, não faz nada
            if (currentPath.startsWith('/en')) return;
            // Se é raiz '/', vira '/en'
            if (currentPath === '/') {
                window.location.href = '/en';
            } else {
                // Senão, prefixa com /en (ex: /privacy -> /en/privacy)
                window.location.href = '/en' + currentPath;
            }
        } else {
            // Se quer PT, remove o /en do começo
            const newPath = currentPath.replace(/^\/en/, '') || '/';
            window.location.href = newPath;
        }
    };

    const homeLink = locale === 'en' ? '/en' : '/';
    const methodLink = locale === 'en' ? '/en#solutions' : '/#solutions';

    return (
        <header className="mb-8 flex justify-between items-center py-6 px-2">
            <div className="w-20 md:w-24">
                <a href={homeLink}>
                    <img
                        src="/images/logo.png"
                        alt="ATVEZA"
                        className="w-full h-auto opacity-90 cursor-pointer"
                    />
                </a>
            </div>
            <nav className="gap-6 text-sm text-neutral-400 hidden md:flex items-center">
                <a href={homeLink} className="hover:text-white transition">{content.nav_home}</a>
                <a href={methodLink} className="hover:text-white transition">{content.nav_method}</a>
                <a href="https://atveza.substack.com/archive" target="_blank" className="hover:text-white transition">{content.nav_blog}</a>

                {/* Language Switcher */}
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
