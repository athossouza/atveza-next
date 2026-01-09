# ATVEZA Next.js Platform 🚀

![ATVEZA](public/images/logo.png)

> **Parceiros de inovação tecnológica.**
> Especialistas em tecnologias para gestão do atendimento. Orquestração de automações e agentes de IA para escalar sua operação B2B.

## 🚀 Sobre o Projeto

Este repositório contém o ecossistema digital da [ATVEZA](https://atveza.com).
Modernizado de uma estrutura estática para **Next.js 14**, o projeto é um **Sistema Multi-Tenant** capaz de gerar múltiplas variações do site (Marca Pessoal, Consultoria, Landing Pages) a partir de um único código-base.

### Stack Tecnológico

*   **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Turbopack)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
*   **Animações:** [Framer Motion](https://www.framer.com/motion/) + [Spline](https://spline.design/) (3D)
*   **Deploy:** Pipeline CI/CD customizado para FTP (Node.js)

---

## 🌐 Estrutura Multi-Domínio

O sistema gerencia identificadores de SEO e assets dinamicamente durante o build (`NEXT_PUBLIC_SITE_VARIANT`), permitindo o deploy de identidades visuais distintas:

| Variante | Domínios Principais | Foco |
| :--- | :--- | :--- |
| **Default** | `atveza.com` | Institucional Corporativo |
| **Personal** | `athos.cx` | Marca Pessoal (Athos Alves) |
| **Consultoria** | `consultoria.cx` | Serviços de Consultoria |
| **Mentoria** | `mentoria.cx` | Programas de Mentoria |

---

## ✨ Arquitetura do Sistema

### 1. Estratégia Multi-Tenant
Em vez de manter repositórios separados, usamos um único codebase.
*   `lib/seo-config.ts` armazena a configuração de SEO para cada identidade.
*   O build injeta a configuração específica no HTML estático.

### 2. Internacionalização (i18n) Híbrida
Como o deploy é em hospedagem estática (FTP), implementamos uma estratégia sem middleware server-side:
*   **Dicionários:** Textos centralizados em `lib/dictionaries.ts`.
*   **Rotas:** `/` (PT) e `/en` (EN).
*   **Auto-Redirect:** Componente client-side que detecta o idioma do navegador e redireciona (com proteção de loop via `localStorage`).

---

## 🛠️ Instalação e Uso

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/athossouza/atveza-next.git
    cd atveza-next
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Rode localmente:**
    ```bash
    npm run dev
    ```
    *   Acesse: [http://localhost:3000](http://localhost:3000)

## 🚀 Pipeline de Deploy (FTP)

Utilizamos um script customizado `deploy_all.js` para gerenciar builds massivos.

**Comando de Deploy:**
```bash
# Crie um arquivo .env com: FTP_PASSWORD="sua_senha"
node deploy_all.js
```

O script:
1.  Agrupa alvos por variante (evita rebuilds desnecessários).
2.  Compila o projeto para a variante específica.
3.  Faz upload via FTP para múltiplos servidores simultaneamente.

---

Desenvolvido por **Athos Alves** | [LinkedIn](https://linkedin.com/in/athosalves)
