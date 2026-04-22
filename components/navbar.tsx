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
      <nav className="relative mx-auto flex min-h-28 max-w-[92rem] items-center justify-between px-5 py-4 sm:min-h-32 sm:px-8 lg:min-h-[132px] lg:px-12 lg:py-0">
        <div className="hidden items-center gap-8 xl:gap-11 lg:absolute lg:left-[calc(48%_-_34rem)] lg:flex">
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
          className="lg:absolute lg:left-[48%] lg:-translate-x-1/2"
          aria-label="Arohaa Digital Solutions home"
        >
          <Image
            src="/navbar-logo-transparent.png"
            alt="Arohaa Digital Solutions"
            width={490}
            height={436}
            priority
            className="h-20 w-auto sm:h-24 lg:h-[128px]"
          />
        </Link>

        <div className="hidden items-center sm:right-8 lg:absolute lg:right-12 lg:flex">
          <div className="mr-9 flex items-center gap-8 xl:mr-12 xl:gap-11">
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
            className="border border-champagne px-5 py-3 text-xs font-light uppercase tracking-luxury text-champagne transition-all duration-500 hover:bg-champagne hover:text-white"
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
              className="py-4 text-sm font-light uppercase tracking-luxury text-[#111111]/76 transition-colors duration-500 hover:text-champagne"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#private-access"
            onClick={() => setOpen(false)}
            className="mt-4 border border-champagne px-5 py-4 text-center text-sm font-light uppercase tracking-luxury text-champagne transition-all duration-500 hover:bg-champagne hover:text-white"
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
      className="text-[0.68rem] font-light uppercase tracking-luxury text-[#111111]/72 transition-colors duration-500 hover:text-champagne"
    >
      {label}
    </Link>
  );
}
