"use client";

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Nav from "./components/includes/Nav";
import Works from "./components/Works";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";
import News from "./components/News";
import { Analytics } from "@vercel/analytics/next";
export default function Landing() {
  return (
    <>
      <main suppressHydrationWarning={true} className="overflow-hidden">
        <Nav />
        <Hero />
        <AboutMe />
        <WhatIDo />
        <News />
        <Skills />
        <Works />
        <Contacts />
        <Footer />
        <Analytics />
      </main>
    </>
  );
}
