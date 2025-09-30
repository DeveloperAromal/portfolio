"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Smooch_Sans } from "next/font/google";

const SmoochSansFont = Smooch_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Skills() {
  const headerRef = useRef(null);
  const skillRef = useRef(null);
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
      {
        x: -250,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    tl.fromTo(
      skillRef.current,
      {
        x: 250,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  const data = [
    { name: "ReactJS", url: "https://cdn.simpleicons.org/react" },
    { name: "NextJS", url: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript" },
    { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Motion", url: "https://cdn.simpleicons.org/framer" },
    { name: "NodeJS", url: "https://cdn.simpleicons.org/nodedotjs/darkgreen" },
    { name: "ExpressJS", url: "https://cdn.simpleicons.org/express/white" },
    { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/sky" },
    { name: "Git", url: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", url: "https://cdn.simpleicons.org/github/white" },
    { name: "Docker", url: "https://cdn.simpleicons.org/docker" },
    { name: "Expo", url: "https://cdn.simpleicons.org/expo/gray" },
    { name: "Linux", url: "https://cdn.simpleicons.org/linux" },
    { name: "Kali linux", url: "https://cdn.simpleicons.org/kalilinux" },
    { name: "Supabase", url: "https://cdn.simpleicons.org/supabase" },
    { name: "Flutter", url: "https://cdn.simpleicons.org/flutter" },
    { name: "Golang", url: "https://cdn.simpleicons.org/go" },
    { name: "C", url: "https://cdn.simpleicons.org/c" },
    { name: "C#", url: "https://cdn.simpleicons.org/c#" },
    { name: "C++", url: "https://cdn.simpleicons.org/c++" },
    { name: "Python", url: "https://cdn.simpleicons.org/python" },
    { name: "Django", url: "https://cdn.simpleicons.org/django" },
    { name: "Flask", url: "https://cdn.simpleicons.org/flask/white" },
    { name: "Javascript", url: "https://cdn.simpleicons.org/javascript" },
    { name: "Rust", url: "https://cdn.simpleicons.org/rust/red" },
  ];

  return (
    <section className="px-4 md:px-20 md:py-16 lg:py-16 py-4 bg-black text-white">
      <div className="flex justify-between items-center">
        <div className="max-w-2xl">
          <p className="flex bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-700 bg-clip-text text-transparent text-xs pb-1 tracking-widest opacity-60">
            [ The Art of Mastery ]
          </p>
          <hr className="text-neutral-800 lg:pb-10 md:pb-10 pb-8" />
        </div>
        <h2
          ref={headerRef}
          className={`text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold tracking-tight text-stroke-3 text-right text-white pb-10 ${SmoochSansFont.className}`}
        >
          04. My Skills
        </h2>
      </div>
      <span className="absolute left-10 -40 lg:block md:block hidden">
        <Image
          src="/assets/plus_doodle.svg"
          alt="My Portrait"
          width={150}
          height={150}
          className="object-cover"
          loading="lazy"
        />
      </span>
      <span className="absolute right-10 lg:block md:block hidden">
        <Image
          src="/assets/star.svg"
          alt="My Portrait"
          width={50}
          height={50}
          className="object-cover"
          loading="lazy"
        />
      </span>
      <div
        ref={skillRef}
        className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 lg:gap-3"
      >
        {data.map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-3 py-1 text-sm md:px-4 md:py-1.5 w-fit whitespace-nowrap gap-2 transition-all hover:bg-white/10"
          >
            <Image
              src={tech.url}
              alt={tech.name}
              width={18}
              height={18}
              className="w-4 h-4 object-contain"
            />
            <span>{tech.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
