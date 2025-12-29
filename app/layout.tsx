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
  title: "ATVEZA | Inteligência Operacional e Orquestração de IA",
  description: "Parceiros de inovação tecnológica especializados em Orquestração de agentes de IA, automações de atendimento e suporte B2B. Transforme sua operação com o método ATVEZA.",
  keywords: ["Orquestração de agentes de IA", "Orquestração de automações e agentes de IA", "Suporte B2B", "Zendesk", "Inteligência Artificial", "Atendimento ao Cliente"],
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
