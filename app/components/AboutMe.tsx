"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Smooch_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const SmoochSansFont = Smooch_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutMe() {
  gsap.registerPlugin(ScrollTrigger);
  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const hireRef = useRef(null);

  const router = useRouter();

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

  const handleView = () => {
    router.push("/hire/view-resume");
  };

  return (
    <section className="px-6 md:px-20 md:py-16 lg:py-16 bg-black text-white">
      <div>
        <div className="flex justify-between items-center">
          <h2
            ref={headerRef}
            className={`text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold tracking-tight text-stroke-3 text-white inline-flex ${SmoochSansFont.className}`}
          >
            01. About Me
          </h2>
          <div className="max-w-2xl">
            <p className="flex bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-700 bg-clip-text text-transparent text-xs pb-1 tracking-widest opacity-60">
              [ Passion in Pixels ]
            </p>
            <hr className="text-neutral-800 lg:pb-10 md:pb-10 pb-0" />
          </div>
        </div>

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
              className="paragraph max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-400"
            >
              <div>
                <p>
                  I&apos;m a full-stack developer passionate about building
                  sleek, scalable digital products that blend design and
                  functionality. My journey began with a personal project that
                  unexpectedly scaled, inspiring me to focus on creating
                  powerful, user-focused web experiences with React, Node.js,
                  and more.
                </p>
                <br />
                <p>
                  My mission is simple: make tech intuitive and enjoyable. I
                  believe in code that not only works, but inspires and
                  that&apos;s exactly what I strive to deliver, one project at a
                  time.
                </p>
                <br />
                <p>Let’s connect to bring your next big idea to life!</p>
                <div className="flex gap-10 pt-10">
                  <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3">
                    <span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
                      Let&apos;s Connect
                    </span>
                    <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
                    <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
                      <ArrowRight className="lucide lucide-arrow-right text-black transition-all duration-300" />
                    </span>
                  </button>
                  <Link
                    href="/assets/Aromal_Resume.pdf"
                    download={true}
                    onClick={handleView}
                  >
                    <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full py-[3px] pr-[3px] pl-2 text-base font-medium transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3">
                      <span className="z-10 text-white transition-colors duration-300 group-hover:text-white">
                        View Resume
                      </span>
                      <span className="z-10 flex items-center justify-center overflow-hidden p-2 md:p-2.5">
                        <ArrowUpRight className="lucide lucide-arrow-right text-white transition-all duration-300 group-hover:rotate-45" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
