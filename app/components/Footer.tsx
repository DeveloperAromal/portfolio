import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Heart,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">AR</h3>
            <p className="text-gray-300 text-sm">
              I’m Aromal — a full-stack developer, founder of Nymora, and a
              passionate builder of modern digital experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com/__itz__aro_mal__"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Quick Links</h3>
            <div className="grid grid-cols-1 gap-y-2">
              <Link
                href="/"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/startup"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Startup
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Kerala, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <p className="text-gray-300 text-sm">
                  developeraromal@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Newsletter</h3>
            <p className="text-gray-300 text-sm">
              Stay updated on my latest projects, blogs, and open-source work.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-300 border border-neutral-700 bg-transparent"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex item-center justify-center">
            <p className="text-gray-400 text-sm text-center flex gap-2">
              Made with <Heart className="text-red-500 w-4 h-4" /> by Aromal.
              All rights reserved. © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
