"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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
      { x: -250, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  return (
    <section className="px-4 py-12 sm:px-8 sm:py-16 md:px-16 lg:px-20 lg:py-20">
      <div>
        <h2
          ref={headerRef}
          className="text-[3rem] text-right sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold tracking-tight text-stroke-3 text-black pb-10"
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
              className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400"
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
                  className="outline-none w-32 sm:w-40 md:w-48 lg:w-56 border-b-2 border-neutral-500 bg-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block align-baseline"
                  placeholder="your name"
                />
                , and I have a{" "}
                <input
                  type="text"
                  className="outline-none w-32 sm:w-40 md:w-48 lg:w-56 border-b-2 border-neutral-500 bg-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block align-baseline"
                  placeholder="project/job"
                />
                that needs your help. You can reach me at{" "}
                <input
                  type="email"
                  className="outline-none w-32 sm:w-40 md:w-48 lg:w-56 border-b-2 border-neutral-500 bg-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block align-baseline"
                  placeholder="your email"
                />
                to get things started.
              </p>
            </div>
            <button type="submit" className="cursor-pointer">
              <span className="flex items-center text-lg sm:text-xl">
                <code>- Send info</code>
                <ArrowUpRight className="hover:rotate-45 mt-1 ml-2 w-5 h-5" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
