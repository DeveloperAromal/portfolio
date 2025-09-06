"use client";

import { ArrowRight } from "lucide-react";
import localFont from "next/font/local";
import Image from "next/image";
const asimovian = localFont({
  src: "../../public/fonts/Asimovian-Regular.ttf",
  weight: "400",
  style: "normal",
});

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 w-full px-20 relative  max-h-[80vh]">
      <span className="absolute bottom-6 left-6">
        <Image
          src="/assets/plus_doodle.svg"
          alt="Plus Doodle"
          width={120}
          height={120}
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
      <div className="flex justify-between">
        <div className="flex gap-20">
          <div>
            <ul>
              <li>Home</li>
              <li>About </li>
              <li>Service</li>
              <li>Works</li>
              <li>Experience</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>About </li>
              <li>Service</li>
              <li>Works</li>
              <li>Experience</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>About </li>
              <li>Service</li>
              <li>Works</li>
              <li>Experience</li>
            </ul>
          </div>
        </div>{" "}
        <div>
          <div className="max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            corporis sunt ut quos vel optio vitae a delectus blanditiis velit
            cumque, quae voluptatum veniam officiis. Culpa pariatur perferendis
            dolorum voluptatum facere.
          </div>
          <div className="flex gap-10 pt-10">
            <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10">
              <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                Let&apos;s Accelleratte
              </span>
              <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
              <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
                <ArrowRight className="lucide lucide-arrow-right text-black transition-all duration-300 dark:text-black" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-10">
        <div>
          <p>© Aromal S {new Date().getFullYear()}. All rights reserved</p>
        </div>
        <div>Linkedin . Instagram . LeetCode . Dev.to .</div>
      </div>
      <div>
        <h2 className={`text-[20rem] text-center ${asimovian.className}`}>
          aromal
        </h2>
      </div>
    </footer>
  );
}
