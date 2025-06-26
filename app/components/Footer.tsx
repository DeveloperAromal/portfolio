import { Quote } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  const quote1Ref = useRef(null);
  const quote2Ref = useRef(null);
  const bottomNameRef = useRef(null);
  const shitRef = useRef(null);
  const ideaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
      scrollTrigger: {
        trigger: shitRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.from(shitRef.current, {
      x: 250,
      opacity: 0,
    })
      .from(
        quote1Ref.current,
        {
          y: 250,
          opacity: 0,
        },
        "-=0.6"
      )
      .from(
        ideaRef.current,
        {
          x: -250,
          opacity: 0,
        },
        "-=0.6"
      )
      .from(
        quote2Ref.current,
        {
          y: -250,
          opacity: 0,
        },
        "-=0.6"
      )
      .from(bottomNameRef.current, {
        y: 250,
        opacity: 0,
      });
  }, []);

  return (
    <footer className="bg-black text-white pt-16 pb-8 w-full relative h-[90vh] px-20">
      <div className="pb-20">
        <h2
          ref={shitRef}
          className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] text-bold text-neutral-400 line-spacing-2 text-right"
        >
          Let&apos;s start <br />
          this shit here
        </h2>
        <h2 className="text-[1rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] text-bold text-neutral-400 line-spacing-2 text-right inline-flex">
          <Quote
            ref={quote1Ref}
            className="lg:w-40 lg:h-40 md:w-34 md:h-34 sm:w-20 sm:h-20 w-16 h-16 opacity-4 -mt-26"
          />
          <span ref={ideaRef}>I know good designs means good business </span>
          <Quote
            ref={quote2Ref}
            className="lg:w-40 lg:h-40 md:w-34 md:h-34 sm:w-20 sm:h-20 w-16 h-16 opacity-4"
          />
        </h2>
      </div>
      <h2
        ref={bottomNameRef}
        className="sm:text-[3rem] md:text-[10rem] lg:text-[20rem] font-bold text-neutral-800 absolute bottom-0 translate-y-40 text-stroke-1"
      >
        AROMAL
      </h2>
    </footer>
  );
}
