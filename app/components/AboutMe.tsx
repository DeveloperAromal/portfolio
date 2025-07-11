"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function AboutMe() {
  gsap.registerPlugin(ScrollTrigger);
  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const hireRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    
    const mountTl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    mountTl.to(".paragraph", {
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power1.inOut",
    });

    tl.from(headerRef.current, {
      x: -250,
      opacity: 0,
    })

      .from(
        paragraphRef.current,
        {
          x: 250,
          opacity: 0,
        },
        "-=0.6"
      )
      .from(
        imageRef.current,
        {
          y: 250,
          opacity: 0,
        },
        "-=0.6"
      )
      .from(
        hireRef.current,
        {
          y: -150,
          opacity: 0,
        },
        "-=0.6"
      );
  }, []);

  return (
    <section className="px-6 md:px-20 py-16">
      <div>
        <h2
          ref={headerRef}
          className="text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold tracking-tight text-stroke-3 text-black inline-flex"
        >
          01. About Me{" "}
          <span ref={hireRef} className="absolute -right-10 -top-10">
            <Image
              src="/icons/hiring-w.png"
              alt="My Portrait"
              width={150}
              height={150}
              className="object-cover hidden lg:block md:block rotate-img bg-white/5 rounded-full bg-clip-padding backdrop-filter backdrop-blur opacity-80"
              loading="lazy"
            />
          </span>
        </h2>

        <div className="md:flex md:items-center md:lg:flex lg:items-center lg:justify-between lg:px-20 md:px-10">
          <div ref={imageRef}>
            <Image
              src="/assets/my_img_bgless-1.png"
              alt="My Portrait"
              width={350}
              height={350}
              className="object-cover hidden lg:block md:block"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="flex items-center justify-center md:justify-between lg:justify-between gap-12 mt-10">
            <div
              ref={paragraphRef}
              className="paragraph max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300"
            >
              <div>
                <p>
                  Passionate about building sleek and scalable digital products,
                  my journey into full-stack development began with a personal
                  project that unexpectedly scaled, inspiring me to specialize
                  in turning ideas into user-focused solutions. With a deep love
                  for full-stack development, I blend design and functionality
                  into powerful web experiences using React, Node.js, and more.
                </p>
                <br />
                <p>
                  My mission is simple: make tech intuitive and enjoyable.
                  Whether it’s a startup MVP that gained 10k users in 3 months
                  or a full-scale system, I aim to create clean, performant, and
                  modern solutions that stand out.
                </p>
                <br />
                <p>
                  I believe in code that not only works but inspires—and that’s
                  exactly what I strive to deliver, one project at a time.
                </p>
                <br />
                <p>
                  Let’s connect to bring your next big idea to life! [View
                  Resume]
                </p>
                <div className="flex gap-10 pt-10">
                  <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10">
                    <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                      Let&apos;s Connect
                    </span>
                    <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
                    <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
                      <ArrowRight className="lucide lucide-arrow-right text-black transition-all duration-300 dark:text-black" />
                    </span>
                  </button>
                  <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full py-[3px] pr-[3px] pl-2 text-base font-medium transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3">
                    <span className="z-10 text-white transition-colors duration-300 group-hover:text-white dark:text-white ">
                      View Resume
                    </span>
                    <span className="z-10 flex items-center justify-center overflow-hidden p-2 md:p-2.5">
                      <ArrowUpRight className="lucide lucide-arrow-right text-white transition-all duration-300 group-hover:rotate-45 " />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
