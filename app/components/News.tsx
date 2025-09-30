import VideoDialog from "./ui/VideoDialog";
import { Smooch_Sans } from "next/font/google";

const SmoochSansFont = Smooch_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function News() {
  return (
    <section className="px-4 py-12 sm:px-8 sm:py-16 md:px-16 lg:px-20 lg:py-20 relative">
      <div>
        <div className="flex justify-between items-center gap-20">
          <h2
            // ref={headerRef}
            className={`${SmoochSansFont.className} text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold tracking-tight text-stroke-3  text-white pb-10 ${SmoochSansFont.className}`}
          >
            03. Media
          </h2>
          <div className="max-w-2xl">
            <p className="flex text-neutral- text-xs pb-1 tracking-widest opacity-60">
              [ Media Coverage ]
            </p>
            <hr className="text-neutral-800 pb-10" />
          </div>
        </div>

        <VideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="/works/news.mp4"
          thumbnailSrc="https://i.ytimg.com/vi/jOmSNKzI9GY/maxresdefault.jpg"
          thumbnailAlt="Video"
        />
        <VideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="/works/news.mp4"
          thumbnailSrc="https://i.ytimg.com/vi/jOmSNKzI9GY/maxresdefault.jpg"
          thumbnailAlt="Video"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
