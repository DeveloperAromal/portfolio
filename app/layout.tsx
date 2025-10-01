import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aromal S | Full-Stack Developer",
  description:
    "Aromal S is a full-stack developer specializing in Next.js, React Native, AI/ML integrations, and cybersecurity tools. Creator of LinkLens (NPM package). Expertise in Node.js, TypeScript, Expo, RAG/LLMs, and penetration testing.",
  keywords: [
    "Aromal S",
    "developeraromal",
    "dev aromal",
    "developer aromal",
    "aromal s",
    "aromals",
    "aromals.com",
    "Aromal S portfolio",
    "Aromal S GitHub",
    "Aromal S LinkedIn",
    "Aromal S projects",
    "full-stack developer",
    "Next.js developer",
    "React Native developer",
    "Flutter developer",
    "Go developer",
    "Supabase developer",
    "Node.js developer",
    "TypeScript developer",
    "MERN stack developer",
    "Django developer",
    "AI developer",
    "Python developer",
    "TensorFlow developer",
    "event-driven architecture developer",
    "open-source contributor",
    "LinkLens npm",
    "Anime.js React framework",
    "PyroScan AI",
    "Parana app",
    "Nymora founder",
    "WebForge websites",
    "school ERP system",
    "bus tracking system IoT",
    "Flutter chat app Supabase",
    "hospital ambulance network software",
    "penetration testing",
    "ethical hacking",
    "cybersecurity expert",
    "dark web researcher",
    "mystery podcast creator",
    "AI-driven software solutions",
    "AI automation developer",
    "technical SEO",
    "SEO specialist developer",
    "modern UI/UX websites",
    "high performance web apps",
    "startup founder developer",
    "nonprofit tech founder",
    "open source projects India",
    "developer in Kerala",
    "Kerala full-stack developer",
    "Indian AI developer",
    "Next.js developer India",
    "React Native developer India",
  ],
  alternates: {
    canonical: "https://www.aromals.com/",
  },
  openGraph: {
    title: "Aromal S | Full-Stack Developer",
    description:
      "Explore the portfolio of Aromal S, a full-stack developer building Next.js apps, React Native mobile apps, AI integrations, and cybersecurity tools.",
    url: "https://www.aromals.com/",
    siteName: "Aromal S Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/153208245?v=4",
        width: 1200,
        height: 630,
        alt: "Aromal S Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aromal S | Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, React Native, AI, and cybersecurity. Creator of LinkLens (NPM).",
    images: ["https://avatars.githubusercontent.com/u/153208245?v=4"],
    creator: "@AromalSDev",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aromal S",
  jobTitle: "Full-Stack Developer",
  url: "https://www.aromals.com/",
  sameAs: [
    "https://github.com/DeveloperAromal",
    "https://linkedin.com/in/developeraromal",
    "https://x.com/Dev_Aro_mal",
  ],
  description:
    "Aromal S is a full-stack developer with expertise in Next.js, React Native, AI/ML integrations, and cybersecurity tools. Creator of LinkLens (NPM package).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link
          rel="preload"
          href="/fonts/geist.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-mono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
