# ATVEZA Next.js Platform 🚀

A modern, scalable web platform built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. 

This project goes beyond a simple website; it is a **Multi-Tenant System** capable of generating multiple variations of the site (Personal Brand, Consultancy, Landing Pages) from a single codebase, managing content in multiple languages (i18n), and deploying automatically to distinct FTP servers.

---

## ✨ System Architecture

### 1. Multi-Tenant / Multi-Domain Strategy
Instead of maintaining 10 different repositories for 10 similar sites, we use a single codebase.
*   **Concept:** A single environment variable (`NEXT_PUBLIC_SITE_VARIANT`) dictates how the site behaves during the build.
*   **Mechanism:**
    *   `lib/seo-config.ts` stores the SEO configuration (Title, Description) for each identity (e.g., 'consultoria', 'personal', 'default').
    *   When we run `npm run build`, Next.js bakes the specific configuration into the static HTML.
    *   This allows `athos.cx` (Personal) and `atveza.com` (Corporate) to share the same components but look like distinct, tailored sites.

### 2. Internationalization (i18n) for Static Hosting
Since we deploy to **FTP (Apache/Nginx static hosting)**, we cannot use server-side middleware for language detection. We implemented a **Hybrid Static i18n Strategy**:

*   **Dictionary Pattern:** All text content is centralized in `lib/dictionaries.ts`.
    *   `components/hero.tsx` doesn't optimize text; it accepts a `content` prop.
    *   `app/page.tsx` injects Portuguese content (Default).
    *   `app/en/page.tsx` injects English content.
*   **Smart Auto-Redirect:**
    *   A client-side component (`LanguageRedirect`) checks the user's browser language (`navigator.language`).
    *   If the user is not Portuguese-speaking, they are automatically redirected to `/en`.
    *   **Loop Protection:** If the user manually switches languages (via the Header button), we save this preference in `localStorage` and stop auto-redirecting.

---

## 🛠️ Installation & Setup

If you want to replicate this structure:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/athossouza/atveza-next.git
    cd atveza-next
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run locally:**
    ```bash
    npm run dev
    ```
    *   Access **[http://localhost:3000](http://localhost:3000)** (Portuguese)
    *   Access **[http://localhost:3000/en](http://localhost:3000/en)** (English)

---

## 🚀 Deployment Pipeline (FTP Automation)

We use a custom Node.js pipeline (`deploy_all.js`) to manage builds and deployments for **11+ domains** simultaneously.

### How it works:
1.  **Grouping:** The script groups targets by their "Variant". For example, `athos.cx` and `athossouza.com.br` are both `personal`.
2.  **Efficient Build:** It builds the project **once** per variant (instead of once per domain).
    *   *Builds "personal" -> Deploys to `athos.cx` -> Deploys to `athossouza.com.br`.*
3.  **Upload:** Uses `basic-ftp` to upload the static `out/` folder to the `public_html` of the target server.

### Commands

**1. Universal Deploy (All Sites)**
This will rebuild and deploy the entire ecosystem.
```bash
export FTP_PASSWORD='YOUR_FTP_PASSWORD'
node deploy_all.js
```

**2. Updates to Deployment Logic**
To add a new site, edit `deploy_all.js` and add an entry to the `targets` array:
```javascript
{ user: "ftp.newsite.com", name: "newsite.com", variant: "consultoria" }
```

---

## 📂 Project Structure

*   `app/`
    *   `page.tsx`: Main entry point (Injects PT content).
    *   `en/page.tsx`: English entry point (Injects EN content).
    *   `layout.tsx`: Root layout with Dynamic SEO meta-tags.
*   `components/`
    *   `ui/`: Base UI elements (Buttons, Cards - shadcn/ui).
    *   `header.tsx`: Header with Language Switcher.
    *   `language-redirect.tsx`: Logic for client-side auto-redirect.
*   `lib/`
    *   `dictionaries.ts`: The "Database" of all text content (PT/EN).
    *   `seo-config.ts`: Configuration for Multi-Tenant SEO identities.
*   `deploy_all.js`: The heart of the automated deployment system.

---

## 🔐 Configuration & Secrets

*   **Trailing Slash:** Crucial for static hosting. In `next.config.ts`, we set `trailingSlash: true` so Next.js generates `/en/index.html` instead of `/en.html`, avoiding 403 errors on standard web servers.
*   **FTP Credentials:** Never store passwords in git. Always pass `FTP_PASSWORD` as an environment variable at runtime.

---
*Developed by ATVEZA Innovation.*
