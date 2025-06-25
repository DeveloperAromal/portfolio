import { Timeline } from "./ui/Timeline";
import Image from "next/image";

export default function Education() {
  const data = [
    {
      title: "June 2022",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            During my school summer break, I stumbled upon a YouTube video that
            introduced me to the world of coding. It talked about how websites
            work and basic programming logic. I got curious and started
            experimenting with basic Python syntax and HTML structure.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I wasn’t learning seriously yet — just exploring possibilities. I
            played with Python&apos;s print statements and created simple HTML
            pages like displaying `Hello World` . That curiosity planted the
            seed.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/assets/code.png"
              alt="2022 discovery"
              width={800}
              height={400}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "October 2022",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I started watching videos about ethical hacking, how games are made,
            and what developers actually do. I didn’t understand much but got
            fascinated by how deep and creative the world of tech could be.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I joined some online forums, bookmarked websites like W3Schools and
            FreeCodeCamp, and saved tons of videos to watch later. My interest
            kept growing, though I was still just scratching the surface.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/assets/yt.png"
              alt="Tech curiosity phase"
              width={800}
              height={400}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "January 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A new year started with a life-changing opportunity. A tech company
            named STEYP came to our school and announced the Young Scientist
            Program. I applied, cleared the selection process, and was granted a
            full scholarship.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I enrolled in their 1-year full-stack development program. We
            covered everything from Figma and UI design to REST APIs, databases,
            authentication, mobile app development, and even DevOps basics.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/assets/steyp.png"
              alt="Steyp scholarship program"
              width={800}
              height={400}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Around May, I built my first full-stack web app — a student
            management app with login, data storage, and real-time updates using
            Firebase. This project gave me confidence. I started publishing my
            work on GitHub and LinkedIn.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I also got my first freelance request to build a tuition
            center&apos;s website.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/assets/studbud.jpg"
              alt="First projects"
              width={800}
              height={400}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            By now, I had worked on 4 paid projects. I started using React and
            Tailwind CSS, and I learned about Next.js. My services ranged from
            static sites to dashboards and mobile-friendly UI redesigns.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Each project sharpened my skills. I also started maintaining
            invoices, timelines, and client calls.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/assets/prana.png"
              alt="Freelance journey"
              width={800}
              height={400}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "February 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            This was a phase of deep learning and innovation. I explored backend
            frameworks like Express and Go, tried Supabase and Firebase, learned
            about microservices, caching, and built my own authentication
            system.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I also launched an open-source project and participated in
            hackathons.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/assets/hackathon.png"
              alt="Deep research"
              width={800}
              height={400}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I started focusing on building actual products — SaaS tools for
            schools, mobile apps for businesses, and a full-fledged ERP for a
            client. I was managing teams, deadlines, and user experience at
            once.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            My favorite project was an AI chatbot integrated with school
            software for instant student help.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/assets/prana.png"
              alt="Product building"
              width={800}
              height={400}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "January 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            By 2025, I had worked with over 20 clients and delivered 40+ web,
            mobile, and desktop apps. I felt it was time to go beyond
            freelancing. So I founded <strong>Nymora</strong> — a startup
            focused on smart digital solutions.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Nymora now builds software for schools, healthcare, and small
            businesses. I serve as the CEO, leading a team of developers,
            designers, and researchers.
          </p>
          <div className="grid grid-cols-1 gap-4 ">
            <Image
              src="/assets/studbud.jpg"
              alt="Nymora startup"
              width={800}
              height={400}
              className="h-20 w-full rounded-lg object-cover object-center md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "June 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Currently, I’m scaling Nymora, working on AI integrations, and
            mentoring juniors. I’ve spoken at webinars, shared projects on
            GitHub, and aim to grow as a founder and innovator.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The journey from a curious school student who discovered basic tags
            to leading a software company was anything but straight — but it was
            worth every late night, error, and breakthrough.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/assets/steyp.png"
              alt="Future vision"
              width={800}
              height={400}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
