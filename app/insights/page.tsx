const insights = [
  {
    title: "Why Most Real Estate Ads Fail",
    text: "Generic creatives attract attention, not buyers."
  },
  {
    title: "Positioning Before Performance",
    text: "Without clarity, marketing becomes noise."
  },
  {
    title: "Demand vs Lead Generation",
    text: "More leads do not guarantee better outcomes."
  },
  {
    title: "Structure vs Activity",
    text: "Effort increases, but outcomes stay inconsistent."
  },
  {
    title: "High-Ticket Buyers Think Differently",
    text: "Mass marketing does not convert premium audiences."
  },
  {
    title: "Visibility Is Not Market Leadership",
    text: "Presence must be structured before scale becomes durable."
  }
];

export default function InsightsPage() {
  return (
    <main className="bg-[#FAF9F6] pb-28 pt-24 text-[#1A1A1A] sm:pb-36 sm:pt-28 lg:pb-44">
      <section className="px-5 py-[120px] text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[52rem]">
          <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#A68A5B]">
            INSIGHTS
          </p>
          <h1 className="mt-5 font-display text-[2.9rem] font-normal leading-[1.2] tracking-[0.025em] text-[#1A1A1A] sm:text-[3.4rem] lg:text-[4rem]">
            Market Insights &amp; Strategic Perspectives
          </h1>
          <p className="mx-auto mt-6 max-w-[38rem] text-base font-light leading-[1.6] tracking-[0.01em] text-[#555555]">
            Observations and structured thinking around positioning, demand, and growth
            systems.
          </p>
        </div>
      </section>

      <section className="px-5 py-[100px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[75rem]">
          <article className="relative min-h-[38rem] overflow-hidden rounded-[24px] lg:min-h-[42rem]">
            <div
              aria-label="Architectural structural geometry"
              role="img"
              className="absolute inset-0 bg-cover bg-center grayscale"
              style={{ backgroundImage: "url('/approach-system.png')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0)_78%)]" />
            <div className="relative flex min-h-[38rem] items-end px-8 pb-10 sm:px-12 sm:pb-14 lg:min-h-[42rem] lg:px-16 lg:pb-16">
              <div className="max-w-[30rem]">
                <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#A68A5B]">
                  FEATURED INSIGHT
                </p>
                <h2 className="mt-5 font-display text-[2.3rem] font-normal leading-[1.2] tracking-[0.025em] text-[#F5F5F5] sm:text-[2.8rem] lg:text-[3.2rem]">
                  The Problem With Real Estate Marketing Today
                </h2>
                <div className="mt-6 space-y-2 text-base font-light leading-[1.6] tracking-[0.01em] text-[rgba(245,245,245,0.88)]">
                  <p>Most developers increase spending, not structure.</p>
                  <p>Demand rises temporarily.</p>
                  <p>Systems fail long-term.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 py-[120px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[75rem]">
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-16 xl:gap-y-20">
            {insights.map((item) => (
              <article key={item.title} className="max-w-[22rem]">
                <h2 className="font-display text-[1.7rem] font-normal leading-[1.28] tracking-[0.02em] text-[#1A1A1A] sm:text-[1.9rem]">
                  {item.title}
                </h2>
                <p className="mt-5 text-base font-light leading-[1.6] tracking-[0.01em] text-[#555555]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-[100px] text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[42rem]">
          <p className="font-display text-[2.4rem] font-normal leading-[1.2] tracking-[0.025em] text-[#1A1A1A] sm:text-[2.9rem] lg:text-[3.3rem]">
            Structured thinking creates predictable growth.
          </p>
        </div>
      </section>
    </main>
  );
}
