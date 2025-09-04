"use client";

import { useEffect, useRef } from "react";
import { Smooch_Sans } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "../mock/mock";

gsap.registerPlugin(ScrollTrigger);

const SmoochSansFont = Smooch_Sans({
  subsets: ["latin"],
  weight: "400",
});

const projects = works;

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!scrollRef.current || !containerRef.current) return;

    const cards = gsap.utils.toArray(scrollRef.current.children);
    const cardHeight = (cards[0] as HTMLElement)?.offsetHeight || 0;
    const pinDuration = cards.length * cardHeight;

    gsap.to(cards, {
      yPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=" + pinDuration,
        scrub: true,
        pin: true,
      },
    });
  }, []);
  return (
    <section className="px-6 sm:px-10 md:px-20 py-16">
      <h2
        className={`text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] text-right font-bold tracking-tight text-stroke-3 text-white ${SmoochSansFont.className}`}
      >
        04. Works
      </h2>

      <div
        ref={containerRef}
        className="relative mt-12 w-full h-[80vh] bg-neutral-950 rounded-4xl overflow-hidden border-2 border-stone-800"
      >
        <div ref={scrollRef} className="flex flex-col gap-12 h-full w-full">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row w-full min-h-[80vh] bg-neutral-950 rounded-4xl pt-4 p-4"
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-full rounded-2xl overflow-hidden hover:rotate-12 transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 flex flex-col justify-between mt-20 md:pl-8">
                <div className="flex gap-2">
                  <div className="h-2 w-8 bg-amber-700 rounded-2xl mt-2"></div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-300 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 mb-4 max-w-lg">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-3 py-1 text-sm gap-2 hover:bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
