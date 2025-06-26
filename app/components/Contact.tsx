"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

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
  const cursorRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;

    const handleMouseControll = (e: MouseEvent) => {
      if (!cursor || !section) return null;

      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cursor.style.transform = `translate(${x - 75}px, ${y - 75}px)`;
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    section?.addEventListener("mousemove", handleMouseControll);
    section?.addEventListener("mouseenter", handleMouseEnter);
    section?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section?.removeEventListener("mousemove", handleMouseControll);
      section?.removeEventListener("mouseenter", handleMouseEnter);
      section?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 py-12 sm:px-8 sm:py-16 md:px-16 lg:px-20 lg:py-20 relative"
    >
      <img
        ref={cursorRef}
        src="/icons/hiring-w.png"
        alt="My Portrait"
        width={150}
        height={150}
        className={`object-cover  absolute hidden lg:block md:block  duration-100 transform transition-transform pointer-events-none ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
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
