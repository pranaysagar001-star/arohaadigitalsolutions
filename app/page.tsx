"use client";

import { useEffect, useRef, useState } from "react";

const marketVisual =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85";

const contrastVisual =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85";

const caseVisual =
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=2200&q=88";

const pathway = [
  {
    title: "Market Reading",
    text: "Understand the buyer&apos;s signals before shaping the narrative."
  },
  {
    title: "Positioning Architecture",
    text: "Define the perception layer that makes value feel inevitable."
  },
  {
    title: "Digital Environment",
    text: "Craft the first experience with restraint, clarity, and control."
  },
  {
    title: "Conversion Discipline",
    text: "Guide qualified intent into conversations that preserve status."
  }
];

const stats = [
  { value: 100, suffix: "Cr+", label: "Inventory influenced" },
  { value: 8, suffix: "+", label: "Premium launches shaped" },
  { value: 3, suffix: "x", label: "Sharper lead quality" }
];

function RevealFrame({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function CountUp({
  end,
  suffix
}: {
  end: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let start = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const animate = (time: number) => {
          if (!start) start = time;
          const progress = Math.min(1, (time - start) / 1400);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(end * eased));

          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          }
        };

        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [end]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function LineIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 text-[#C6A75E]"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M6 23 16 7l10 16M11 23h10"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-[#F8F7F3] text-[#1A1A1A]">
      <section className="video-fallback relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/7578541/7578541-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-night/40" />
        <div className="cinematic-noise absolute inset-0 opacity-30" />

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4">
          <span className="h-16 w-px origin-top bg-champagne/70" style={{ animation: "lineDraw 2.8s ease-in-out infinite" }} />
          <span className="h-2 w-2 rounded-full bg-champagne" style={{ animation: "scrollPulse 2.8s ease-in-out infinite" }} />
        </div>
      </section>

      {/* Market Reality: introduces the commercial tension with a restrained architectural visual. */}
      <section className="overflow-hidden bg-[#F8F7F3] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <RevealFrame className="relative border-l border-[#C6A75E] pl-8 sm:pl-10">
            <p className="text-xs font-light uppercase tracking-[0.32em] text-[#C6A75E]">
              Market Reality
            </p>
            <h1 className="mt-8 font-display text-5xl font-medium leading-[1.02] text-[#1A1A1A] sm:text-6xl lg:text-7xl">
              Attention is abundant. Preference is engineered.
            </h1>
            <p className="mt-9 max-w-xl text-sm font-light leading-8 tracking-[0.02em] text-[#555555] sm:text-base">
              Premium buyers do not respond to volume. They respond to signals that
              feel composed, rare, and aligned with the world they already value.
            </p>
          </RevealFrame>

          <RevealFrame>
            <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-[0_30px_90px_rgba(26,26,26,0.08)] lg:aspect-[5/6]">
              <div
                aria-label="Luxury architectural residence"
                role="img"
                className="h-[108%] w-full -translate-y-4 bg-cover bg-center transition-transform duration-1000 ease-out hover:translate-y-0"
                style={{ backgroundImage: `url(${marketVisual})` }}
              />
            </div>
          </RevealFrame>
        </div>
      </section>

      {/* The Reframe: narrows the promise into one centered strategic idea. */}
      <section className="bg-gradient-to-b from-[#F8F7F3] to-white px-5 py-28 text-center sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <RevealFrame className="mx-auto max-w-4xl">
          <div className="mx-auto h-px w-24 bg-[#C6A75E]" />
          <h2 className="mt-12 font-display text-5xl font-medium leading-[1.02] text-[#1A1A1A] sm:text-6xl lg:text-7xl">
            Growth begins when perception becomes intentional.
          </h2>
          <p className="mx-auto mt-9 max-w-2xl text-sm font-light leading-8 tracking-[0.02em] text-[#555555] sm:text-base">
            We shape digital presence as a boardroom-level asset, not a campaign
            layer. Every touchpoint is designed to make confidence easier.
          </p>
        </RevealFrame>
      </section>

      {/* Positioning Contrast: compares unclear visibility with refined market presence. */}
      <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#F8F7F3] shadow-[0_28px_80px_rgba(26,26,26,0.06)] lg:grid-cols-2">
          <RevealFrame className="flex min-h-[30rem] flex-col justify-center px-8 py-16 sm:px-12 lg:px-16">
            <p className="text-xs font-light uppercase tracking-[0.32em] text-[#888888]">
              Visibility
            </p>
            <h3 className="mt-8 font-display text-4xl font-medium leading-tight text-[#777777] sm:text-5xl">
              Seen by many. Chosen by few.
            </h3>
            <p className="mt-8 max-w-md text-sm font-light leading-8 tracking-[0.02em] text-[#777777]">
              Presence without hierarchy asks the buyer to decide what matters.
            </p>
          </RevealFrame>

          <RevealFrame className="relative flex min-h-[30rem] flex-col justify-end overflow-hidden px-8 py-16 sm:px-12 lg:px-16">
            <div
              aria-label="Sharp luxury positioning"
              role="img"
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out hover:scale-[1.025]"
              style={{ backgroundImage: `url(${contrastVisual})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            <div className="relative">
              <p className="text-xs font-light uppercase tracking-[0.32em] text-[#C6A75E]">
                Positioning
              </p>
              <h3 className="mt-8 font-display text-4xl font-medium leading-tight text-white sm:text-5xl">
                Recognized with clarity.
              </h3>
              <p className="mt-8 max-w-md text-sm font-light leading-8 tracking-[0.02em] text-white/78">
                The right environment compresses doubt and elevates intent.
              </p>
            </div>
          </RevealFrame>
        </div>
      </section>

      {/* The Pathway: presents the engagement model in calm, premium steps. */}
      <section className="bg-[#F8F7F3] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-7xl">
          <RevealFrame className="max-w-3xl">
            <p className="text-xs font-light uppercase tracking-[0.32em] text-[#C6A75E]">
              The Pathway
            </p>
            <h2 className="mt-7 font-display text-5xl font-medium leading-[1.04] text-[#1A1A1A] sm:text-6xl">
              A controlled sequence from perception to qualified demand.
            </h2>
          </RevealFrame>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pathway.map((item) => (
              <RevealFrame key={item.title}>
                <article className="group min-h-[20rem] bg-white px-7 py-8 shadow-[0_22px_60px_rgba(26,26,26,0.055)] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(26,26,26,0.09)]">
                  <div className="h-px w-12 bg-[#C6A75E]/45 transition-all duration-700 group-hover:w-20 group-hover:bg-[#C6A75E]" />
                  <div className="mt-10">
                    <LineIcon />
                  </div>
                  <h3 className="mt-10 font-display text-3xl font-medium leading-tight text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p
                    className="mt-6 text-sm font-light leading-8 tracking-[0.02em] text-[#555555]"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </article>
              </RevealFrame>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility: establishes authority through restrained, high-value proof. */}
      <section className="bg-white px-5 py-28 text-center sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <RevealFrame className="mx-auto max-w-5xl">
          <p className="text-xs font-light uppercase tracking-[0.32em] text-[#C6A75E]">
            Credibility
          </p>
          <h2 className="mt-8 font-display text-5xl font-medium leading-[1.02] text-[#1A1A1A] sm:text-6xl lg:text-7xl">
            Designed for decisions measured in crores.
          </h2>
        </RevealFrame>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <RevealFrame key={stat.label}>
              <p className="font-display text-6xl font-medium leading-none text-[#1A1A1A] sm:text-7xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-5 text-xs font-light uppercase tracking-[0.24em] text-[#888888]">
                {stat.label}
              </p>
            </RevealFrame>
          ))}
        </div>
      </section>

      {/* Case Experience: creates one cinematic proof moment with a direct invitation. */}
      <section className="bg-[#F8F7F3] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <RevealFrame className="mx-auto max-w-[92rem]">
          <article className="group relative min-h-[78vh] overflow-hidden">
            <div
              aria-label="Cinematic luxury development case experience"
              role="img"
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
              style={{ backgroundImage: `url(${caseVisual})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/32 to-transparent" />
            <div className="relative flex min-h-[78vh] max-w-2xl flex-col justify-end px-7 pb-12 sm:px-12 sm:pb-16 lg:px-16 lg:pb-20">
              <p className="text-xs font-light uppercase tracking-[0.32em] text-[#C6A75E]">
                Case Experience
              </p>
              <h2 className="mt-7 font-display text-5xl font-medium leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                A launch environment built for discernment.
              </h2>
              <p className="mt-8 text-sm font-light leading-8 tracking-[0.02em] text-white/78 sm:text-base">
                From first impression to qualified enquiry, the experience is
                composed to protect premium perception.
              </p>
              <a
                href="#private-access"
                className="mt-10 inline-flex w-fit bg-[#C6A75E] px-7 py-4 text-xs font-medium uppercase tracking-[0.24em] text-white transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(198,167,94,0.32)]"
              >
                Request Private Access
              </a>
            </div>
          </article>
        </RevealFrame>
      </section>

      {/* Decision Section: closes the commercial argument with a focused CTA. */}
      <section className="bg-gradient-to-br from-[#F8F7F3] via-white to-[#E9DFC1] px-5 py-28 text-center sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <RevealFrame className="mx-auto max-w-4xl">
          <h2 className="font-display text-5xl font-medium leading-[1.02] text-[#1A1A1A] sm:text-6xl lg:text-7xl">
            The right buyers should feel alignment before the first conversation.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm font-light leading-8 tracking-[0.02em] text-[#555555] sm:text-base">
            For select developments, digital presence becomes the quiet proof of
            ambition, taste, and market command.
          </p>
          <a
            href="#private-access"
            className="mt-12 inline-flex bg-[#C6A75E] px-9 py-5 text-xs font-medium uppercase tracking-[0.26em] text-white transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(198,167,94,0.36)]"
          >
            Begin Qualification
          </a>
        </RevealFrame>
      </section>

      {/* Pre-Footer Signature: leaves a final, quiet brand impression. */}
      <section className="bg-[#F8F7F3] px-5 pb-44 pt-28 text-center sm:px-8 sm:pb-56 sm:pt-36 lg:px-12">
        <RevealFrame>
          <p className="font-display text-4xl font-medium leading-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            Precision is remembered before persuasion begins.
          </p>
        </RevealFrame>
      </section>
    </main>
  );
}
