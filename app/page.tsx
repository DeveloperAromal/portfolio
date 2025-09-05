import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
// import NavBar from "./components/includes/Nav";
import Works from "./components/Works";
import Contacts from "./components/Contact";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";
import News from "./components/News";
import { Analytics } from "@vercel/analytics/next";
import Metadata from "./components/includes/Metadata";
export default function Landing() {
  return (
    <>
      <Metadata
        title="Aromal S | Full‑Stack Developer"
        description="Aromal S — Full‑stack developer building production‑grade Next.js apps, React Native mobile apps, AI/ML integrations, and cybersecurity tools. Creator of LinkLens (NPM). Expertise in Node.js, TypeScript, NativeWind, Expo, RAG/LLMs, dashboards, and penetration testing."
        keywords={`
                    Aromal S, Aromal, aromals, aromals.com, Aromal S portfolio, Aromal S developer,
                    Aromal S full‑stack developer, Aromal S React Native, Aromal S Next.js, Aromal S AI,
                    Aromal S cybersecurity, Aromal S CodeCave, CodeCave developer, Master Tutor Steyp, Steyp mentor,
                    LinkLens, LinkLens npm, linklens npm package, linklens package,
                    Next.js developer portfolio, Next.js SEO, React Server Components, App Router Next.js, Metadata API Next.js,
                    React Native developer, React Native portfolio, Expo, Expo Router, NativeWind, TypeScript mobile,
                    JavaScript developer, Node.js developer, Express.js, REST APIs, GraphQL, tRPC, Prisma, PostgreSQL, MongoDB, Redis, Drizzle ORM,
                    Security engineer, penetration testing, web pentest, OWASP, XSS prevention, CSRF protection, JWT auth, OAuth 2.0, NextAuth, secure coding, DevSecOps,
                    CI/CD, GitHub Actions, Docker, containerized apps, Vercel, Netlify, Cloudflare, AWS Lambda, Firebase, Supabase, serverless Next.js, edge functions,
                    AI developer, AI/ML integration, OpenAI API, LangChain, vector DB, RAG pipeline, embeddings, semantic search, AI copilots,
                    video steganography, QR code masking, OpenCV Python, image processing, computer vision,
                    dashboards, admin dashboards, UI systems, design systems, Tailwind CSS, NativeWind styling,
                    performance optimization, Core Web Vitals, Lighthouse, accessibility a11y, mobile‑first development,
                    portfolio website, developer branding, GitHub projects, npm packages, package publishing, monorepo, Turborepo, Bun, PNPM,
                    testing Jest, Playwright, end‑to‑end testing, code quality, linting, TypeScript strict, Sentry, logging, observability,
                    feature flags, internationalization i18n, content SEO, technical SEO, structured data, Open Graph, Twitter cards,
                    canonical URL, sitemap, robots metadata, 2025 SEO trends, entity SEO, topical authority, zero‑click SERP, long‑tail keywords, voice search, visual search
                `}
        canonical="https://www.aromals.com/"
      />

      <main suppressHydrationWarning>
        {/* <NavBar /> */}
        <Hero />
        <AboutMe />
        <WhatIDo />
        <News />
        {/* <OriginalStory /> */}
        <Skills />
        <Works />
        <Contacts />
        {/* <CTA />
      <Footer /> */}
        <Analytics />
      </main>
    </>
  );
}
