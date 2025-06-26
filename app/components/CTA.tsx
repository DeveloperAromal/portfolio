// import { ArrowRight } from "lucide-react";

// export default function CTA() {
//   return (
//     <section className="bg-image py-24 px-6 md:px-20 text-center text-black dark:text-white">
      // <div className="max-w-4xl mx-auto space-y-8 flex items-center justify-center">
      //   <div>
      //     <h2 className="text-3xl md:text-4xl lg:text-4xl  lg:max-w-2xl font-extrabold tracking-tight leading-tight">
      //       FROM CONCEPT TO CREATION LET&apos;S MAKE IT HAPPEN!
      //     </h2>
      //     <br />
      //     <button className="group relative inline-flex items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-2 pr-2 pl-4 text-base font-medium backdrop-blur-sm transition-all hover:bg-black dark:border-white/10 dark:bg-white/10 hover:shadow-xl">
      //       <span className="z-10 px-4 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
      //         Let&apos;s Connect
      //       </span>
      //       <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
      //       <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent dark:bg-white">
      //         <ArrowRight className="h-5 w-5 text-white transition-all duration-300 group-hover:text-black dark:text-black" />
      //       </span>
      //     </button>
      //     <div className="space-y-2 mt-4">
      //       <h3 className="text-lg font-semibold">
      //         I&apos;m available for full-time roles & freelance projects.
      //       </h3>
      //       <h4 className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
      //         I thrive on crafting dynamic web applications and delivering
      //         seamless user experiences.
      //       </h4>
      //     </div>
      //   </div>
      // </div>
//     </section>
//   );
// }

"use client";
import { ThreeDMarquee } from "./ui/3d-marquee";

export default function CTA() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  return <ThreeDMarquee images={images} />;
}
