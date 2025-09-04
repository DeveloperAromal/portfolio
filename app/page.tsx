import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
// import NavBar from "./components/includes/Nav";
import Works from "./components/Works";
import Contacts from "./components/Contact";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";
import Skills from "./components/Skills";
import  WhatIDo  from "./components/WhatIDo";

export default function Landing() {

  return (
    <main className="overflow-hidden" suppressHydrationWarning>
      {/* <NavBar /> */}
      <Hero />
      <AboutMe />
      <WhatIDo />
      {/* <OriginalStory /> */}
      <Skills />
      <Works />
      <Contacts />
      {/* <CTA />
      <Footer /> */}
    </main>
  );
}
