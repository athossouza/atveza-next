'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function LanguageRedirect() {
    const router = useRouter();

    useEffect(() => {
        // 1. Check if user has already manually chosen a language
        const manualPreference = localStorage.getItem('atveza_lang_pref');

        // If they explicitly chose PT, stay here.
        if (manualPreference === 'pt') return;

        // If they explicitly chose EN, redirect (although this component is only on the PT page)
        if (manualPreference === 'en') {
            router.push('/en');
            return;
        }

        // 2. If no manual preference, check browser language
        const browserLang = navigator.language || navigator.languages[0];

        // If browser is NOT Portuguese (pt-BR, pt-PT, etc), redirect to English
        if (browserLang && !browserLang.toLowerCase().startsWith('pt')) {
            console.log(`[ATVEZA] Detected non-PT language (${browserLang}). Redirecting to /en...`);
            router.push('/en');
        }
    }, [router]);

    return null; // This component renders nothing
}
