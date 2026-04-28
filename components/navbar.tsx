"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const leftItems = [
  { label: "About Us", href: "/about-us" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: "/insights" }
];

const rightItems = [
  { label: "Developments", href: "/developments" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Testimonials", href: "/testimonials" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-800 ${
        scrolled || open
          ? "bg-white/95 shadow-[0_10px_30px_rgba(17,17,17,0.06)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto flex min-h-[72px] max-w-[92rem] items-center justify-between px-5 py-3 sm:min-h-[76px] sm:px-8 sm:py-3 lg:min-h-[64px] lg:justify-center lg:px-10 lg:py-2">
        <div className="hidden items-center gap-8 lg:absolute lg:right-[calc(50%+72px)] lg:flex">
          {leftItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
            />
          ))}
        </div>

        <Link
          href="/"
          className="lg:absolute lg:left-1/2 lg:z-[1] lg:-translate-x-1/2"
          aria-label="Arohaa Digital Solutions home"
        >
          <Image
            src="/Navbar%20%26%20Footer/navbar-logo-transparent.png"
            alt="Arohaa Digital Solutions"
            width={490}
            height={436}
            priority
            className="h-10 w-auto object-contain sm:h-[44px] lg:h-[42px]"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:absolute lg:left-[calc(50%+72px)] lg:flex">
          <div className="flex items-center gap-8">
            {rightItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </div>
          <Link
            href="#private-access"
            className="ml-10 rounded-[8px] bg-[#C6A75E] px-5 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.05em] text-[#1A1A1A] shadow-[0_8px_20px_rgba(198,167,94,0.16)] transition-all duration-300 hover:bg-[#b89a52] hover:shadow-[0_10px_24px_rgba(198,167,94,0.2)]"
          >
            Access
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="group flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-[#111111] transition duration-500 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-6 bg-[#111111] transition duration-500 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[#111111]/10 bg-white transition-[max-height,opacity] duration-600 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-6">
          {[...leftItems, ...rightItems].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-4 text-sm font-light uppercase tracking-[0.12em] text-[#1A1A1A]/76 transition-colors duration-500 hover:text-[#A68A5B]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#private-access"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-[8px] bg-[#C6A75E] px-5 py-2.5 text-center text-[0.68rem] font-medium uppercase tracking-[0.05em] text-[#1A1A1A] shadow-[0_8px_20px_rgba(198,167,94,0.16)] transition-all duration-300 hover:bg-[#b89a52] hover:shadow-[0_10px_24px_rgba(198,167,94,0.2)]"
          >
            Access
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  label
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="text-[0.76rem] font-light uppercase tracking-[0.12em] text-[#1A1A1A] transition-colors duration-500 hover:text-[#A68A5B]"
    >
      {label}
    </Link>
  );
}
