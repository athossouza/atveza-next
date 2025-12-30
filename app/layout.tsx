import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { getSeoConfig } from "@/lib/seo-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fetch SEO config based on build-time env var
const seoConfig = getSeoConfig();

export const metadata: Metadata = {
  metadataBase: new URL("https://atveza.com"),
  title: {
    default: seoConfig.title,
    template: "%s | ATVEZA"
  },
  description: seoConfig.description,
  keywords: ["Orquestração de agentes de IA", "Orquestração de automações e agentes de IA", "Suporte B2B", "Zendesk", "Inteligência Artificial", "Atendimento ao Cliente"],
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    url: "https://atveza.com",
    siteName: "ATVEZA",
    images: [
      {
        url: "/images/athos_wpp.png", // Imagem otimizada para WhatsApp (User Provided)
        width: 1200,
        height: 1200,
        alt: "Athos - Founder ATVEZA",
        type: "image/png",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: ["/images/athos_wpp.png"],
    creator: "@atveza",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
