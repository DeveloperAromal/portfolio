/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import ParticleBackground from "./ui/ParticleBackground";
import { HeroReleaseNote } from "./ui/HeroReleaseNote";
import { Cormorant } from "next/font/google";
import { useState } from "react";
import { CheckCircle2, Copy } from "lucide-react";

const CormorantFont = Cormorant({
  subsets: ["latin"],
  weight: "600",
});

export default function Hero() {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    const copy = navigator.clipboard.writeText("developeraromal@gmail.com");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
    return copy;
  };
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <ParticleBackground />
      <div className="absolute bg-[#bc1ef1] w-40 h-40 bottom-0 blur " />
      <div className="absolute bg-[#bc1ef1] w-40 h-40 bottom-0 right-0 blur " />
      <div className="absolute bg-[#bc1ef1] w-80 h-40 bottom-0 right-1/2 translate-x-1/2 rounded-full top-1/2 -translate-y-1/2 blur" />

      <div className="relative h-60 w-full z-[19] mt-8">
        <div className="relative z-20 mx-auto mt-32 mb-2 flex max-w-full flex-col items-center justify-center px-3 md:mt-36 md:max-w-4xl lg:max-w-5xl">
          <HeroReleaseNote />
          <div className="absolute w-40 h-20 bg-sky-300 blur translate-x-1/2 right-1/2" />
          <h2 className="animate-fadeInUp my-2 w-full py-px text-center text-4xl leading-snug! font-semibold text-balance text-zinc-700 opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100">
            <span className="md:text-nowrap">I help founders turn ideas</span>
            <br className="hidden md:block" />
            into seamless{" "}
            <span
              className={`bg-linear-to-l from-zinc-600 via-zinc-700 to-zinc-900 bg-clip-text font-light tracking-wide text-transparent dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-50 ${CormorantFont.className}`}
            >
              digital experiences
            </span>
          </h2>
          <h1 className="animate-fadeInUp grad-white relative z-20 mt-4 mb-7 flex flex-col items-center justify-center text-center text-xl sm:flex-row md:text-xl lg:mt-7 lg:text-2xl text-neutral-400">
            <span className="grad-white flex items-center justify-center">
              Hello, I&apos;m &nbsp;Aromal
              <div className="group relative z-300">
                <div className="mx-2 w-16 cursor-pointer overflow-hidden rounded-3xl md:w-20 lg:mx-3">
                  <Image
                    src="/assets/aromal.png"
                    alt="j"
                    width={100}
                    height={6}
                  />
                </div>
              </div>
            </span>
            <span className="grad-white leading-relaxed">
              a Full Stack Developer
            </span>
          </h1>

          <div className="animate-fadeInUp z-100 mt-4 flex flex-col items-center justify-center gap-6 sm:flex-row md:mt-8 md:gap-10">
            <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10">
              <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                Let&apos;s Connect
              </span>
              <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
              <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right absolute -translate-x-5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-2 py-3 text-base font-light text-black dark:text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-black/60 dark:hover:text-white/90"
            >
              {copy == true ? <CheckCircle2 /> : <Copy />}
              developeraromal@gmail.com
            </button>
          </div>
        </div>

        <div
          className="absolute lg:-bottom-110 md:-bottom-110 -bottom-130 left-1/2 z-0 h-[400px] w-[1200px] -translate-x-1/2 transform overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
          }}
        >
          <div
            className="absolute bottom-[167px] left-1/2 h-[111px] w-[787px] -translate-x-1/2 transform overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#bc1ef1%,rgba(10,10,10,0)_100%)] blur-[57px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #bc1ef1 0%, rgba(10,10,10,0) 100%)",
              transform: "translateX(-61.0227px)",
            }}
          ></div>
          <div className="absolute right-[-432px] bottom-[-753px] left-[-454px] h-[955px] rounded-[100%] bg-gradient-to-b from-black to-transparent dark:from-white"></div>
          <div
            className="absolute right-[-510px] bottom-[-759px] left-[-532px] aspect-[2.346820809248555/1] h-[956px] rounded-[100%] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d] dark:bg-black"
            style={{
              boxShadow:
                "inset 0 2px 22.8022px #000000, 0 -10px 52.8022px 1px rgba(255, 255, 255, 0.53)",
              backgroundColor: "#000000",
            }}
          ></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
