import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atveza.com"),
  title: {
    default: "ATVEZA | Inteligência Operacional e Orquestração de IA",
    template: "%s | ATVEZA"
  },
  description: "Parceiros de inovação tecnológica especializados em Orquestração de agentes de IA, automações de atendimento e suporte B2B. Transforme sua operação com o método ATVEZA.",
  keywords: ["Orquestração de agentes de IA", "Orquestração de automações e agentes de IA", "Suporte B2B", "Zendesk", "Inteligência Artificial", "Atendimento ao Cliente"],
  openGraph: {
    title: "ATVEZA | Inteligência Operacional B2B",
    description: "Especialistas em tecnologias para gestão do atendimento. Orquestração de agentes de IA e automações para escalar sua operação.",
    url: "https://atveza.com",
    siteName: "ATVEZA",
    images: [
      {
        url: "/images/athos.png",
        width: 1200,
        height: 1200,
        alt: "Athos - Founder ATVEZA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATVEZA | Inteligência Operacional B2B",
    description: "Especialistas em tecnologias para gestão do atendimento. Orquestração de agentes de IA e automações.",
    images: ["/images/athos.png"],
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
