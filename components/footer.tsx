import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Developments", href: "/developments" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "The Practice", href: "/the-practice" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: "/insights" }
];

const contactItems = [
  { label: "Phone", value: "+91 00000 00000" },
  { label: "Email", value: "access@arohaa.digital" },
  { label: "Location", value: "India" }
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "X", href: "#", icon: XIcon }
];

export function Footer() {
  return (
    <footer
      id="private-access"
      className="bg-[#11100c] px-5 pb-12 pt-20 text-[#cccccc] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr_1.2fr] lg:gap-24">
          <div>
            <Link href="/" aria-label="Arohaa Digital Solutions home" className="inline-flex">
              <Image
                src="/arohaa-logo-gold.png"
                alt="Arohaa Digital Solutions"
                width={300}
                height={190}
                className="h-auto w-48"
                priority
              />
            </Link>
            <p className="mt-8 max-w-sm font-display text-4xl font-light leading-tight text-white sm:text-5xl">
              Let&apos;s Build Your Digital Kingdom
            </p>
          </div>

          <div>
            <FooterTitle>Quick Links</FooterTitle>
            <nav className="mt-8 flex flex-col gap-4" aria-label="Footer quick links">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-light uppercase tracking-[0.16em] text-[#cccccc] transition-colors duration-500 hover:text-champagne"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <FooterTitle>Contact</FooterTitle>
            <div className="mt-8 space-y-6">
              {contactItems.map((item) => (
                <p key={item.label} className="text-sm font-light leading-7 text-[#cccccc]">
                  <span className="block text-xs uppercase tracking-[0.18em] text-[#888888]">
                    {item.label}
                  </span>
                  {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-7">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="text-[#cccccc] transition-colors duration-500 hover:text-champagne"
              >
                <Icon />
              </Link>
            );
          })}
        </div>

        <div className="mt-10 border-t border-white/16 pt-10 text-center">
          <p className="text-xs font-light uppercase tracking-[0.42em] text-[#cccccc]">
            Copyright &copy; 2026. Arohaa Digital Solutions. All Rights Reserved
          </p>
          <div className="mt-8 flex justify-center gap-3 text-xs font-light uppercase tracking-[0.32em] text-[#888888]">
            <Link href="#" className="transition-colors duration-500 hover:text-champagne">
              Disclaimer
            </Link>
            <span className="text-champagne/70">|</span>
            <Link href="#" className="transition-colors duration-500 hover:text-champagne">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-light uppercase leading-7 tracking-[0.22em] text-white">
      {children}
    </h2>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3V13h2.8v8h3.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none">
      <rect width="15.5" height="15.5" x="4.25" y="4.25" rx="4.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.45" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.75" cy="7.35" r="1" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 8.1a3 3 0 0 0-2.1-2.1C17 5.5 12 5.5 12 5.5s-5 0-6.9.5A3 3 0 0 0 3 8.1 31.2 31.2 0 0 0 2.5 12c0 1.3.1 2.6.5 3.9A3 3 0 0 0 5.1 18c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1c.4-1.3.5-2.6.5-3.9 0-1.3-.1-2.6-.5-3.9Zm-10.8 7V8.9l5.4 3.1-5.4 3.1Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.7 8.9H3.8V21h2.9V8.9ZM5.2 3a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5.2 3Zm15 11.1c0-3.2-1.7-5.2-4.4-5.2-1.9 0-3 .9-3.6 1.8V8.9H9.4V21h2.9v-6.5c0-1.8 1-2.9 2.6-2.9 1.5 0 2.4 1 2.4 2.9V21h2.9v-6.9Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.1 10.3 21.9 1h-1.8l-6.8 8.1L7.9 1H1.7l8.2 12.1L1.7 23h1.8l7.2-8.6 5.8 8.6h6.2l-8.6-12.7Zm-2.5 3-1-1.5L4 2.4h3l5.3 7.6 1 1.4 6.9 10.1h-3l-5.6-8.2Z" />
    </svg>
  );
}
