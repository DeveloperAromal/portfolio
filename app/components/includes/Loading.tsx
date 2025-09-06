"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loading() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const dotsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Main text animation
    if (textRef.current) {
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      );
    }

    // Subtext fade
    if (subRef.current) {
      gsap.fromTo(
        subRef.current,
        { opacity: 0 },
        { opacity: 1, delay: 1, duration: 1, ease: "power2.inOut" }
      );
    }

    // Animated dots
    if (dotsRef.current) {
      gsap.to(dotsRef.current.children, {
        opacity: 0,
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
        duration: 0.6,
      });
    }
  }, []);

  return (
    <section className="h-screen w-full bg-black flex flex-col items-center justify-center text-white overflow-hidden">
      <h2
        ref={textRef}
        className="text-[5rem] font-bold text-center tracking-tight"
      >
        Heyy it&apos;s me <span className="text-white-500">Aromal</span>...
      </h2>

      <p ref={subRef} className="mt-4 text-lg text-gray-300">
        Loading Portfolio
      </p>

      <div ref={dotsRef} className="flex space-x-2 mt-2">
        <span className="w-2 h-2 bg-white-500 rounded-full"></span>
        <span className="w-2 h-2 bg-white-500 rounded-full"></span>
        <span className="w-2 h-2 bg-white-500 rounded-full"></span>
      </div>
    </section>
  );
}
