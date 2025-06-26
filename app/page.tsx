"use client";

// import { useEffect } from "react";

import AboutMe from "./components/AboutMe";
import Education from "./components/OriginalStory";
import Hero from "./components/Hero";
import NavBar from "./components/includes/Nav";
// import Works from "./components/Works";
import Contacts from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Landing() {
  //   useEffect(() => {
  //     const handleSpeed = (e: WheelEvent) => {
  //       e.preventDefault();
  //       window.scrollBy({
  //         top: e.deltaY * 0.2,
  //         behavior: "auto",
  //       });
  //     };
  //     window.addEventListener("wheel", handleSpeed, { passive: false });

  //     return () => {
  //       window.removeEventListener("wheel", handleSpeed);
  //     };
  //   }, []);

  return (
    <main className="overflow-hidden cursor">
      <NavBar />
      <Hero />
      <AboutMe />
      <Education />
      <Skills />
      {/* <Works /> */}
      <Contacts />
      <CTA />
      <Footer />
    </main>
  );
}
