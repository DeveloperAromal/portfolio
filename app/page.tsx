"use client"

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
// import NavBar from "./components/includes/Nav";
import Works from "./components/Works";
import Contacts from "./components/Contact";
// import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";
import News from "./components/News";
import { Analytics } from "@vercel/analytics/next";

import { useEffect, useState } from "react";
import Loading from "./components/includes/Loading";

export default function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timeout);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
          {/* <CTA /> */}
          <Footer />
          <Analytics />
        </main>
      )}
    </>
  );
}
