"use client";

import { useEffect, useRef } from "react";
import { Smooch_Sans } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "../mock/mock";
import { Github, Sparkle } from "lucide-react";

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
        className={`text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold tracking-tight text-stroke-3 text-white ${SmoochSansFont.className}`}
      >
        04. Works
      </h2>

      <div
        ref={containerRef}
        className="relative mt-12 w-full h-[80vh] bg-neutral-950 rounded-4xl overflow-hidden border-2 border-stone-800"
      >
        <div
          ref={scrollRef}
          className="flex flex-col gap-12 h-full w-full pb-20"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row w-full min-h-[75vh] bg-neutral-950 rounded-4xl pt-4 p-4"
            >
              <div className="relative w-full md:w-1/2 h-[75vh] rounded-2xl px-10 bg-gradient-to-tr from-zinc-700 to-neutral-900 overflow-hidden transition-all duration-300">
                <div className="text-4xl pr-4 py-10 absolute">A Emergency responce app that saves millions of lives</div>

                <div className="relative flex items-end justify-center w-full h-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
              <div className="content___section md:w-1/2 flex flex-col justify-between mt-20 md:pl-8">
                <div className="flex gap-2">
                  <div
                    className={`h-2 w-8 ${project.bg} rounded-2xl mt-2`}
                  ></div>
                  <div>
                    <div className="headline___content">
                      <h3 className="text-4xl font-bold text-gray-300 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500 mb-4 max-w-lg">
                        {project.description}
                      </p>
                    </div>
                    <ul className="point___content">
                      {project.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-neutral-400"
                        >
                          <Sparkle className={`w-3 h-3 ${project.text}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 pt-10 tech___stack">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-cyan-500/5 px-3 py-1 text-sm gap-2 hover:bg-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="cta___content mt-6">
                      <button className="px-4 py-3 inline-flex items-center gap-2 bg-white rounded-2xl">
                        <Github className="text-neutral-950 w-4 h-4" />
                        <code className="text-neutral-950">View on github</code>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
