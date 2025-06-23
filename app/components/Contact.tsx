"use client";

import { Mail, MapPin } from "lucide-react";

export default function Contacts() {
  return (
    <section className="px-20 py-20">
      <div>
        <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] text-left font-bold tracking-tight text-stroke-3 text-black">
          04. Contacts
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form className="space-y-8 bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-800">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-neutral-800 dark:text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-neutral-800 dark:text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-neutral-800 dark:text-white"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-sky-500 text-white font-medium rounded-xl hover:bg-sky-600 transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-neutral-900 dark:text-white">
              Get in Touch
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              If you’d like to collaborate, hire me, or just say hi — feel free
              to reach out using the form or via direct contact info below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-neutral-800 dark:text-neutral-300">
                <Mail className="w-5 h-5 text-sky-500" />
                <a
                  href="mailto:your@email.com"
                  className="underline hover:text-sky-600"
                >
                  your@email.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-800 dark:text-neutral-300">
                <MapPin className="w-5 h-5 text-sky-500" />
                Kerala, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
