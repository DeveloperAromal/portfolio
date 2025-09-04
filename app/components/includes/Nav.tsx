"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useEffect, useState } from "react";


const navLinks = [
  { name: "Features", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Enterprise", href: "#" },
  { name: "Documentation", href: "/docs" },
];

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 flex items-center justify-between px-10 py-4 transition-colors duration-300 ${
        scrolled ? "bg-[var(--background)] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="absolute inset-x-0 top-full h-3 bg-linear-to-b from-[var(--background)] to-transparent md:h-14 lg:h-18 z-10" />
      <div className="absolute inset-x-0 top-full h-1 bg-linear-to-b from-[var(--background)] to-transparent md:h-14 lg:h-3 z-10" />
      <div className="absolute inset-x-0 top-full h-1 bg-linear-to-b from-[var(--background)] to-transparent md:h-14 lg:h-2 z-10" />
      <div className="left flex items-center gap-12">
        <Image
          src={"/assets/logo.png"}
          alt="xploitagent_logo"
          width={40}
          height={40}
        />
        <ul className="flex items-center gap-6 ">
          {navLinks.map((navLink, idx) => (
            <Link key={idx} href={navLink.href}>
              <li
                className="relative text-[var(--text-main)] 
                after:content-[''] 
                after:absolute after:left-0 after:-bottom-1 
                after:w-0 after:h-[2px] 
                after:bg-[var(--dashboard-accent-green)] 
                after:rounded-full 
                after:shadow-[0_0_10px_var(--dashboard-accent-green)] 
                after:transition-all after:duration-300 
                hover:after:w-full 
                hover:after:shadow-[0_0_20px_var(--dashboard-accent-green),_0_0_40px_var(--dashboard-accent-green)]"
              >
                {navLink.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="right flex flex-row-reverse items-center gap-3">
        <Link href={isLoggedIn ? "/dashboard" : "/contact"}>
          <Button
            content={isLoggedIn ? "Login" : "Contact Sales"}
            variant="primary"
            className="border border-[var(--primary)]  text-white"
          />
        </Link>{" "}
        <Image
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='white' d='M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418'/%3E%3C/svg%3E"
          alt="XploitAgent Logo"
          width={30}
          height={30}
        />
      </div>
    </header>
  );
}