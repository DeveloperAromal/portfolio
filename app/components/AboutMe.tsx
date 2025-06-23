import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="px-6 md:px-20 py-16">
      {/* <div className="relative -z-40">
        <div className="absolute -right-90">
          <Image
            src="/assets/circle.svg"
            alt=""
            height={400}
            width={200}
            className="w-full h-full"
          />
        </div>
      </div> */}
      <div>
        <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold tracking-tight text-stroke-3 text-black">
          01. About Me
        </h2>

        <div className="flex items-center justify-between px-20 gap-12">
          <div>
            <Image
              src="/assets/my_img_bgless-1.png"
              alt="My Portrait"
              width={400}
              height={400}
              className="object-cover "
              loading="lazy"
            />
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-10">
            <div className="max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300">
              <div>
                <p>
                  Passionate about building sleek and scalable digital products,
                  I specialize in turning ideas into user-focused solutions.
                  With a deep love for full-stack development, I blend design
                  and functionality into powerful web experiences.
                </p>
                <br />
                <p>
                  My mission is simple: make tech intuitive and enjoyable.
                  Whether it&apos;s a startup MVP or a full-scale system, I aim
                  to create clean, performant, and modern solutions that stand
                  out.
                </p>
                <br />
                <p>
                  I believe in code that not only works but inspires — and
                  that’s exactly what I strive to deliver, one project at a
                  time.
                </p>
                <br />
                <p>
                  Passionate about building sleek and scalable digital products,
                  I specialize in turning ideas into user-focused solutions.
                  With a deep love for full-stack development, I blend design
                  and functionality into powerful web experiences.
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
