"use client";

import { ArrowRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Smooch_Sans } from "next/font/google";
import localFont from "next/font/local";

const asimovian = localFont({
  src: "../../public/fonts/Asimovian-Regular.ttf",
  weight: "400",
  style: "normal",
});
const SmoochSansFont = Smooch_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Contacts() {
  const headerRef = useRef(null);
  const letsStartRef = useRef(null);
  const letsparaRef = useRef(null);
  const inputRef = useRef(null);

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

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

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-20 md:py-16 lg:py-16 py-4 relative bg-black text-white"
    >
      <div>
        <div className="flex justify-between items-center">
          <div className="max-w-2xl">
            <p className="flex bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-700 bg-clip-text text-transparent text-xs pb-1 tracking-widest opacity-60">
              [ Drop me a line ]
            </p>
            <hr className="text-neutral-800 pb-10" />
          </div>
          <h2
            ref={headerRef}
            className={`text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold tracking-tight text-stroke-3 text-right text-white pb-10 ${SmoochSansFont.className}`}
          >
            06. Contact
          </h2>
        </div>

        <div className="lg:mt-8 md:mt-8 mt-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-4">
            <h3
              ref={letsStartRef}
              className="text-5xl sm:text-4xl md:text-4xl lg:text-[5rem] font-bold text-neutral-300 leading-tight"
            >
              Let&apos;s <br /> get started
            </h3>
            <p
              ref={letsparaRef}
              className={`text-sm sm:text-base text-neutral-400 ${asimovian.className}`}
            >
              If you’d like to collaborate, hire me, or just say hi — feel free
              to reach out using the form or via direct contact info below.
            </p>
          </div>

          <form className="space-y-6" ref={inputRef} onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-600">
              <p className="leading-relaxed text-neutral-300">
                Hi! My name is{" "}
                <input
                  type="text"
                  name="name"
                  className="outline-none font-mono w-32 sm:w-40 md:w-48 lg:w-56 border-b-1 border-neutral-500 bg-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block align-baseline"
                  placeholder="your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                , and I have a{" "}
                <input
                  type="text"
                  name="message"
                  className="outline-none font-mono w-32 sm:w-40 md:w-48 lg:w-56 border-b-1 border-neutral-500 bg-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block align-baseline"
                  placeholder="project/job"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                that needs your help. You can reach me at{" "}
                <input
                  type="email"
                  name="email"
                  className="outline-none font-mono w-32 sm:w-40 md:w-48 lg:w-56 border-b-1 border-neutral-500 bg-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl inline-block align-baseline"
                  placeholder="your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                to get things started.
              </p>
            </div>
            <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3">
              <span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
                Send Info
              </span>
              <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
              <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
                <ArrowRight className="lucide lucide-arrow-right text-black transition-all duration-300" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}