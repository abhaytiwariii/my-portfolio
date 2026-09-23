<div align="center">

  <h1>Abhay Tiwari — Developer Portfolio</h1>
  <p><strong>Modern, high-performance developer portfolio built with Next.js 16 App Router, React 19, Tailwind CSS v4, and Framer Motion.</strong></p>

  <p>
    <a href="https://abhaytiwari.vercel.app" target="_blank"><strong>🌐 View Live Demo »</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </p>

</div>

---

## 📌 Overview

This repository contains the source code for the personal portfolio of **Abhay Tiwari**, a Full Stack Developer specializing in **Next.js**, **React**, **TypeScript**, **FastAPI**, and **PostgreSQL**.

The portfolio is designed with a sleek, minimalist dark/light aesthetic, interactive micro-animations, production-grade SEO, structured schema data, and PWA installability.

---

## ✨ Key Features

- **Interactive Hero Experience**: Dynamic layered portrait with custom cursor tracking and interactive radial mask effects using Framer Motion.
- **Showcase / Work Section**: Filterable gallery of production and personal applications with interactive project previews, direct links, and tag categories.
- **Enterprise SEO & Social Sharing**:
  - Full OpenGraph & Twitter Cards with custom 1200×630 preview banner (`/og-image.jpg`).
  - Strict semantic heading hierarchy (single `<h1>` with contextual `<h2>` and `<h3>` tags).
  - Screen reader & crawler-optimized image `alt` attributes built from project metadata.
- **Structured Data (JSON-LD)**: Schema.org `Person` entity injected using Next.js `Script` with `strategy="beforeInteractive"` and sanitized payload.
- **Full PWA Ready**: Dynamic Web Manifest (`app/manifest.ts`) providing standalone app installability on iOS and Android with customized app icons (`192px`, `512px`, and `180px` Apple Touch Icon).
- **Automated Metadata Routes**: Built-in dynamic `sitemap.xml` (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`).
- **Modern Tech Stack**: Powered by Next.js 16 App Router, React 19, and the newly overhauled Tailwind CSS v4 compiler.

---

## 🛠️ Tech Stack

### Frontend & Architecture
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts:** Next.js Google Fonts (`Archivo Black`, `Roboto`)

### Featured Project Highlights Included
- **RocketSales**: Multi-tenant business, sales & inventory management platform (FastAPI, Node.js, MongoDB, Shopify API).
- **LabelLift**: Music distribution and artist royalty management dashboard.
- **Athletica**: Modern tournament and sports platform.
- **Stock Market Analyzer, RepairShop, Task Management System, and more.**

---

## 📂 Project Structure

```text
my-portfolio/
├── app/
│   ├── favicon.ico             # Custom 32x32 multi-resolution favicon
│   ├── icon.png                # 512x512 PWA & App Router icon
│   ├── apple-icon.png          # 180x180 Apple Touch Icon
│   ├── globals.css             # Global styles & Tailwind v4 theme variables
│   ├── layout.tsx              # Root layout with SEO, JSON-LD Schema & metadata
│   ├── manifest.ts             # Dynamic PWA Web Manifest route (/manifest.webmanifest)
│   ├── page.tsx                # Main entry landing page
│   ├── robots.ts               # Dynamic robots.txt route (/robots.txt)
│   └── sitemap.ts              # Dynamic sitemap.xml route (/sitemap.xml)
├── components/
│   ├── Contact.tsx             # Contact section & social connections
│   ├── Experience.tsx          # Work history & timeline
│   ├── HeroSection.tsx         # Interactive hero with custom cursor & mask
│   ├── Navbar.tsx              # Navigation bar with links & status
│   ├── ProjectCard.tsx         # Accessible project display card with rich alt tags
│   ├── Services.tsx            # Technical services & domain offerings
│   ├── Skills.tsx              # Core stack & technical toolset
│   ├── Work.tsx                # Filterable project portfolio gallery
│   ├── data/
│   │   └── projects.ts         # Central project database & contribution records
│   ├── lib/
│   │   └── utils.ts            # Class merging utility (clsx + tailwind-merge)
│   └── ui/
│       └── Button.tsx          # Reusable styled button component
├── public/                     # Static media, icons, and OG banner assets
│   ├── og-image.jpg            # 1200x630 social share preview banner
│   ├── icon-192.png            # 192x192 PWA manifest icon
│   ├── icon-512.png            # 512x512 PWA manifest icon
│   └── ...project screenshots
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and npm scripts
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18.0 or newer recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhaytiwariii/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server with hot-reloading |
| `npm run build` | Compiles and builds the production bundle |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code quality and style guidelines |

---

## 🌐 Connect & Contact

- **Website:** [abhaytiwari.vercel.app](https://abhaytiwari.vercel.app)
- **GitHub:** [@abhaytiwariii](https://github.com/abhaytiwariii)
- **LinkedIn:** [Abhay Tiwari](https://linkedin.com/in/abhaytiwariii)
- **Twitter / X:** [@_abhaytiwariii](https://x.com/_abhaytiwariii)
- **Instagram:** [@_abhaytiwariii](https://instagram.com/_abhaytiwariii)

---

## 📄 License

This project is personal intellectual property. Feel free to use the structure and design patterns as inspiration for your own portfolio.
