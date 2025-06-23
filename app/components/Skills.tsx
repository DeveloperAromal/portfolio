import Image from "next/image";

export default function Skills() {
  const data = [
    { name: "ReactJS", url: "https://cdn.simpleicons.org/react" },
    { name: "NextJS", url: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript" },
    { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Motion", url: "https://cdn.simpleicons.org/framer" },
    { name: "Sanity", url: "https://cdn.simpleicons.org/sanity" },
    { name: "Contentful", url: "https://cdn.simpleicons.org/contentful" },
    { name: "NodeJS", url: "https://cdn.simpleicons.org/nodedotjs/darkgreen" },
    { name: "ExpressJS", url: "https://cdn.simpleicons.org/express/white" },
    { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/sky" },
    { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/darkgreen" },
    { name: "Prisma", url: "https://cdn.simpleicons.org/prisma/blue" },
    { name: "Zustand", url: "https://cdn.simpleicons.org/redux/pink" },
    { name: "Zod", url: "https://cdn.simpleicons.org/zod" },
    { name: "pnpm", url: "https://cdn.simpleicons.org/pnpm" },
    { name: "Bun", url: "https://cdn.simpleicons.org/bun/white" },
    { name: "Git", url: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", url: "https://cdn.simpleicons.org/github/white" },
    { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/white" },
    { name: "AWS", url: "https://cdn.simpleicons.org/amazonwebservices/gray" },
    { name: "Docker", url: "https://cdn.simpleicons.org/docker" },
    { name: "Expo", url: "https://cdn.simpleicons.org/expo/gray" },
    { name: "Clerk", url: "https://cdn.simpleicons.org/clerk" },
    { name: "Linux", url: "https://cdn.simpleicons.org/linux" },
  ];

  return (
    <section className="px-4 md:px-20 py-12 bg-black text-white">
      <h2
        className=" text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-bold tracking-tight text-stroke-3 text-black pb-10"
      >
        03. My Skills
      </h2>
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 lg:gap-3">
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
