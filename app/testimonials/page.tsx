"use client";

import { useState } from "react";

const alignmentBlocks = [
  {
    title: "Competitive Developers",
    text: "Built for development groups operating in crowded corridors where distinction is reduced by market similarity."
  },
  {
    title: "Scaling Brands",
    text: "Relevant to brands expanding faster than their current positioning system can sustain with clarity."
  },
  {
    title: "Inconsistent Conversion Cases",
    text: "Suited to projects where enquiry exists, but buyer confidence and conversion quality remain uneven."
  },
  {
    title: "Leadership-Driven Positioning",
    text: "Aligned with leadership teams that want strategic control over how the brand is interpreted in market."
  }
];

const alignmentInsights = [
  "Most developers increase spend before defining position.",
  "Visibility without structure leads to inconsistency.",
  "Perception is assumed, not engineered.",
  "Growth slows without clarity."
];

const approvedTestimonials: Array<{
  title: string;
  body: string;
}> = [];

export default function TestimonialsPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-[#FAF9F6] pb-28 pt-24 text-[#1A1A1A] sm:pb-36 sm:pt-28 lg:pb-44">
      <section className="px-5 pb-[96px] pt-[120px] sm:px-8 sm:pb-[92px] sm:pt-[128px] lg:px-12 lg:pb-[88px] lg:pt-[132px]">
        <div className="mx-auto max-w-[48rem] text-center">
          <p className="text-[0.8rem] font-light uppercase tracking-[0.2em] text-[#A68A5B]">
            Testimonials
          </p>
          <h1 className="mt-5 font-display text-[3rem] font-normal leading-[1.16] tracking-[0.02em] text-[#1A1A1A] sm:text-[3.7rem] lg:text-[4.4rem]">
            Client Alignment &amp; Strategic Engagement
          </h1>
          <p className="mx-auto mt-7 max-w-[37rem] text-base font-light leading-[1.7] tracking-[0.01em] text-[#555555]">
            Engagement begins with clarity of thinking. This section reflects the type
            of developers we align with and the perspective we bring into their growth
            systems.
          </p>
        </div>
      </section>

      <section className="px-5 py-[110px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[78rem]">
          <div className="max-w-[28rem]">
            <p className="text-[0.84rem] font-normal uppercase tracking-[0.22em] text-[#A68A5B]">
              Who This Is Built For
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
            {alignmentBlocks.map((item) => (
              <article
                key={item.title}
                className="rounded-[18px] border border-[rgba(26,26,26,0.05)] bg-[#F7F4EE] px-6 py-8 shadow-[0_8px_24px_rgba(17,17,17,0.04)] transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(17,17,17,0.06)]"
              >
                <h2 className="font-display text-[1.45rem] font-medium leading-[1.22] tracking-[0.014em] text-[#1A1A1A]">
                  {item.title}
                </h2>
                <p className="mt-4 text-[0.98rem] font-light leading-[1.68] tracking-[0.01em] text-[#555555]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-[110px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[78rem]">
          <div className="max-w-[32rem]">
            <p className="text-[0.84rem] font-normal uppercase tracking-[0.22em] text-[#A68A5B]">
              What Alignment Typically Reveals
            </p>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2 xl:gap-x-16">
            {alignmentInsights.map((item) => (
              <article key={item} className="max-w-[28rem]">
                <p className="font-display text-[2rem] font-normal leading-[1.24] tracking-[0.015em] text-[#1A1A1A] sm:text-[2.25rem]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-[110px] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[78rem] items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div
            aria-label="Strategic alignment environment"
            role="img"
            className="aspect-[16/9] rounded-[24px] bg-cover bg-center"
            style={{ backgroundImage: "url('/approach-system.png')" }}
          />
          <div className="max-w-[30rem]">
            <p className="text-[0.84rem] font-normal uppercase tracking-[0.22em] text-[#A68A5B]">
              How We Approach Engagement <span className="ml-3 inline-block h-px w-20 align-middle bg-[rgba(166,138,91,0.35)]" />
            </p>
            <div className="mt-6 space-y-5">
              <p className="font-display text-[1.65rem] font-medium leading-[1.24] tracking-[0.014em] text-[#1A1A1A] sm:text-[1.8rem]">
                Clarity before commitment
              </p>
              <p className="font-display text-[1.65rem] font-medium leading-[1.24] tracking-[0.014em] text-[#1A1A1A] sm:text-[1.8rem]">
                Structure before scale
              </p>
              <p className="font-display text-[1.65rem] font-medium leading-[1.24] tracking-[0.014em] text-[#1A1A1A] sm:text-[1.8rem]">
                Alignment before execution
              </p>
            </div>
            <p className="mt-6 text-[1rem] font-light leading-[1.7] tracking-[0.01em] text-[#555555]">
              Engagement begins only when the strategic fit is clear, the operating logic
              is aligned, and the market role of the brand can be defined with discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-[80px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[68rem]">
          <div className="max-w-[30rem]">
            <p className="text-[0.84rem] font-normal uppercase tracking-[0.22em] text-[#A68A5B]">
              Approved Perspectives
            </p>
          </div>

          {approvedTestimonials.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {approvedTestimonials.map((item) => (
                <article key={item.title} className="max-w-[30rem]">
                  <h2 className="font-display text-[1.6rem] font-normal leading-[1.24] tracking-[0.014em] text-[#1A1A1A]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-[1rem] font-light leading-[1.7] tracking-[0.01em] text-[#555555]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 max-w-[34rem]">
              <p className="text-[1rem] font-light leading-[1.7] tracking-[0.01em] text-[#555555]">
                Approved testimonials can be published here later without altering the page
                structure. The system is ready for future additions once release permission
                is given.
              </p>
            </div>
          )}
        </div>
      </section>

      <FloatingFeedbackCard
        open={open}
        onToggle={() => setOpen((value) => !value)}
      />
    </main>
  );
}

function FloatingFeedbackCard({
  open,
  onToggle
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:bottom-6 sm:left-auto sm:right-6 sm:w-[24rem]">
      <div
        className={`overflow-hidden rounded-[22px] bg-[#FCFBF8] shadow-[0_24px_60px_rgba(17,17,17,0.12)] ring-1 ring-[rgba(26,26,26,0.06)] transition-all duration-300 ${
          open ? "translate-y-0" : "translate-y-0"
        }`}
      >
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6"
          aria-expanded={open}
          aria-controls="testimonial-feedback-form"
        >
          <div>
            <p className="text-[0.78rem] font-normal uppercase tracking-[0.18em] text-[#A68A5B]">
              Feedback
            </p>
            <p className="mt-2 font-display text-[1.2rem] font-normal leading-[1.2] text-[#1A1A1A]">
              Share your experience
            </p>
          </div>
          <span className="text-[1.3rem] leading-none text-[#1A1A1A]">
            {open ? "−" : "+"}
          </span>
        </button>

        <div
          id="testimonial-feedback-form"
          className={`grid transition-[grid-template-rows,opacity] duration-300 ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <form className="grid gap-5 border-t border-[rgba(26,26,26,0.06)] px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
              <Field label="Name">
                <input
                  type="text"
                  name="name"
                  className="w-full border-b border-[rgba(26,26,26,0.12)] bg-transparent px-0 py-3 text-[0.98rem] font-light leading-[1.6] text-[#1A1A1A] outline-none placeholder:text-[rgba(85,85,85,0.55)]"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Company">
                <input
                  type="text"
                  name="company"
                  className="w-full border-b border-[rgba(26,26,26,0.12)] bg-transparent px-0 py-3 text-[0.98rem] font-light leading-[1.6] text-[#1A1A1A] outline-none placeholder:text-[rgba(85,85,85,0.55)]"
                  placeholder="Company name"
                />
              </Field>
              <Field label="Role (optional)">
                <input
                  type="text"
                  name="role"
                  className="w-full border-b border-[rgba(26,26,26,0.12)] bg-transparent px-0 py-3 text-[0.98rem] font-light leading-[1.6] text-[#1A1A1A] outline-none placeholder:text-[rgba(85,85,85,0.55)]"
                  placeholder="Role"
                />
              </Field>
              <Field label="Feedback">
                <textarea
                  name="feedback"
                  rows={4}
                  className="w-full resize-none border-b border-[rgba(26,26,26,0.12)] bg-transparent px-0 py-3 text-[0.98rem] font-light leading-[1.7] text-[#1A1A1A] outline-none placeholder:text-[rgba(85,85,85,0.55)]"
                  placeholder="Share your perspective"
                />
              </Field>
              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex rounded-[8px] bg-[#C6A75E] px-6 py-[13px] text-[0.72rem] font-normal uppercase tracking-[0.22em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,167,94,0.18)] transition-colors duration-300 hover:bg-[#b89b56] hover:shadow-[0_12px_28px_rgba(198,167,94,0.22)]"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[0.82rem] font-normal uppercase tracking-[0.16em] text-[#A68A5B]">
        {label}
      </span>
      <div className="mt-3">{children}</div>
    </label>
  );
}
