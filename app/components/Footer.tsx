"use client";

import { ArrowRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import localFont from "next/font/local";

const asimovian = localFont({
  src: "../../public/fonts/Asimovian-Regular.ttf",
  weight: "400",
  style: "normal",
});

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full px-6 sm:px-10 md:px-20 py-16 relative">
      <hr className="text-neutral-900 pb-10" />
      <span className="absolute bottom-30 left-6">
        <Image
          src="/assets/star.svg"
          alt="Plus Doodle"
          width={60}
          height={60}
          className="object-contain opacity-80"
          loading="lazy"
        />
      </span>

      <span className="absolute bottom-10 right-10">
        <Image
          src="/assets/star.svg"
          alt="Star Doodle"
          width={60}
          height={60}
          className="object-contain opacity-80"
          loading="lazy"
        />
      </span>

      <span className="absolute top-10 right-10">
        <Image
          src="/assets/star.svg"
          alt="Star Doodle"
          width={60}
          height={60}
          className="object-contain opacity-80"
          loading="lazy"
        />
      </span>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:text-left text-center">
        {/* Left side (address + lists) */}
        <div className="flex flex-col lg:flex-row lg:gap-20 items-center lg:items-start">
          <address className="mb-6 lg:mb-0">
            Thiruvananthapuram,
            <br />
            Kerala,
            <br />
            India - 693511
          </address>

          <div className="flex gap-10">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Works</li>
              <li>Experience</li>
            </ul>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Works</li>
              <li>Experience</li>
            </ul>
          </div>
        </div>

        <div className="mb-10 lg:mb-0">
          <div className="max-w-2xl text-2xl">
            Because I know that{" "}
            <mark className="bg-cyan-300/20 text-white p-1 py-1">
              <i> good design drives good business</i>
            </mark>{" "}
            , let’s begin the journey.
          </div>
          <div className="flex gap-10 pt-10 justify-center lg:justify-start">
            <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3">
              <span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
                Let&apos;s Accelerate
              </span>
              <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
              <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
                <ArrowRight className="lucide lucide-arrow-right text-black transition-all duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <div>
          <p>© Aromal S {new Date().getFullYear()}. All rights reserved</p>
        </div>
        <div className="flex gap-6">
          <Github />
          <Linkedin />
          <Instagram />
          <Twitter />
        </div>
      </div>
      <div>
        <h2
          className={`lg:text-[20rem] md:text-[16rem] sm:text-[8rem] text-[5rem] text-center ${asimovian.className}`}
        >
          aromal
        </h2>
      </div>
    </footer>
  );
}
