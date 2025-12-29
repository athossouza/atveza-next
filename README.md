# ATVEZA Next.js Modernization 🚀

A modern, high-performance reconstruction of the ATVEZA website, utilizing **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

This project upgrades the original static HTML site into a dynamic React application with premium UI components, enhanced SEO capabilities, and a scalable architecture.

## ✨ Key Features

*   **Modern Tech Stack:** Built with Next.js (App Router), React, and TypeScript.
*   **Premium UI:** Integrates Shadcn/UI, Framer Motion for animations, and Lucide React icons.
*   **3D Elements:** Subtly integrated 3D interactions using Spline.
*   **Automated Deployment:** Custom scripts to build and deploy to multiple FTP targets simultaneously (8+ domains).
*   **SEO Optimized:** Automatic Sitemap generation, metadata management, and JSON-LD structured data.
*   **Responsive Design:** Fully responsive layout with a deep blue premium theme (`#051426`).

## 🛠️ Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/atveza-next.git
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
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build & Deploy

This project uses a static export configuration for hosting on standard FTP servers.

### 1. Build
Generates the static `out/` folder:
```bash
npm run build
```

### 2. Deploy (FTP)
We use custom Node.js scripts to deploy to our specific FTP targets.

**⚠️ Security Note:** Password is **NEVER** stored in the code. It must be provided via environment variable.

**Single Target Deployment:**
```bash
export FTP_PASSWORD='YOUR_PASSWORD' && node deploy_fix_final.js
```

**Universal Deployment (All 8+ Domains):**
This script updates all configured domains sequentially:
```bash
export FTP_PASSWORD='YOUR_PASSWORD' && node deploy_all.js
```

## 📂 Project Structure

*   `/app`: Next.js App Router pages and layouts.
*   `/components`: Reusable UI components (Hero, Footer, Navbar, BentoGrid).
*   `/components/ui`: Shadcn/UI primitive components (Button, Card, etc.).
*   `/public`: Static assets (images, fonts, robots.txt).
*   `deploy_*.js`: Deployment automation scripts.

## 🔐 Security & Config

*   **Environment Variables:** Create a `.env.local` file for local secrets (it is git-ignored).
*   **FTP Credentials:** Managed via `process.env.FTP_PASSWORD` at runtime.

---
*Developed by ATVEZA Innovation.*
