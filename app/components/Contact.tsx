"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Smooch_Sans } from "next/font/google";
import localFont from "next/font/local";

const asimovian = localFont({
  src: "../../public/fonts/Asimovian-Regular.ttf",
  weight: "400",
  style: "normal",
});
const SmoochSansFont = Smooch_Sans({
  subsets: ["latin"],
  weight: "400",
});


export default function Contacts() {
  const headerRef = useRef(null);
  const letsStartRef = useRef(null);
  const letsparaRef = useRef(null);
  const inputRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      headerRef.current,
      { x: 250, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    tl.fromTo(
      letsStartRef.current,
      { y: -250, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    tl.fromTo(
      letsparaRef.current,
      { x: -250, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    tl.fromTo(
      inputRef.current,
      { x: 250, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);


  return (
    <section
      ref={sectionRef}
      className="px-4 py-12 sm:px-8 sm:py-16 md:px-16 lg:px-20 lg:py-20 relative"
    >
      <div>
        <h2
          ref={headerRef}
          className={`${SmoochSansFont.className} text-[3rem] text-right sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold tracking-tight text-stroke-3 text-white pb-10 ${SmoochSansFont.className}`}
        >
          04. Contacts
        </h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-4">
            <h3
              ref={letsStartRef}
              className="text-5xl sm:text-4xl md:text-4xl lg:text-[5rem] font-bold text-neutral-300 leading-tight"
            >
              Let&apos;s <br /> get started
            </h3>
            <p
              ref={letsparaRef}
              className={`text-sm sm:text-base text-neutral-600 dark:text-neutral-400 ${asimovian.className}`}
            >
              If you’d like to collaborate, hire me, or just say hi — feel free
              to reach out using the form or via direct contact info below.
            </p>
          </div>

          <form className="space-y-6" ref={inputRef}>
            <div className="flex flex-col space-y-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-600">
              <p className="leading-relaxed text-neutral-300">
                Hi! My name is{" "}
                <input
                  type="text"
                  className="outline-none font-mono w-32 sm:w-40 md:w-48 lg:w-56 border-b-1 border-neutral-500 bg-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block align-baseline"
                  placeholder="your name"
                />
                , and I have a{" "}
                <input
                  type="text"
                  className="outline-none font-mono w-32 sm:w-40 md:w-48 lg:w-56 border-b-1 border-neutral-500 bg-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block align-baseline"
                  placeholder="project/job"
                />
                that needs your help. You can reach me at{" "}
                <input
                  type="email"
                  className="outline-none font-mono w-32 sm:w-40 md:w-48 lg:w-56 border-b-1 border-neutral-500 bg-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block align-baseline"
                  placeholder="your email"
                />
                to get things started.
              </p>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-transparent text-white hover:bg-white/5 duration-300 transform transition-transform ease-in hover:text-white dark:text-white rounded-4xl group"
            >
              <span className="flex items-center gap-1 text-lg sm:text-xl px-2 py-2">
                <code>- Send info</code>
                <span className="group-hover:bg-white rounded-full py-2 px-2 duration-300 transform transition-transform">
                  <ArrowUpRight className="duration-300 group-hover:rotate-45 w-6 h-6 rounded-full transform transition-transform group-hover:text-black" />
                </span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
