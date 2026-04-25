const insights = [
  {
    title: "Real estate advertising fails when attention is mistaken for demand.",
    text: "Generic creatives attract attention, not buyers."
  },
  {
    title: "Positioning must lead performance, or performance becomes noise.",
    text: "Without clarity, marketing becomes noise."
  },
  {
    title: "Lead volume does not create demand quality.",
    text: "More leads do not guarantee better outcomes."
  },
  {
    title: "Activity expands faster than outcomes when structure is absent.",
    text: "Effort increases, but outcomes stay inconsistent."
  },
  {
    title: "Premium buyers respond to precision, not mass exposure.",
    text: "Mass marketing does not convert premium audiences."
  },
  {
    title: "Visibility alone does not establish market authority.",
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
          <article className="relative min-h-[42rem] overflow-hidden rounded-[24px] lg:min-h-[46rem]">
            <div
              aria-label="Architectural structural geometry"
              role="img"
              className="absolute inset-0 bg-cover bg-center grayscale"
              style={{ backgroundImage: "url('/approach-system.png')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0)_78%)]" />
            <div className="relative flex min-h-[42rem] items-end px-8 pb-14 sm:px-12 sm:pb-18 lg:min-h-[46rem] lg:px-16 lg:pb-24">
              <div className="max-w-[32rem]">
                <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#A68A5B]">
                  FEATURED INSIGHT
                </p>
                <h2 className="mt-6 font-display text-[2.7rem] font-medium leading-[1.22] tracking-[0.018em] text-[#F5F5F5] sm:text-[3.2rem] lg:text-[3.9rem]">
                  The Problem With Real Estate Marketing Today
                </h2>
                <div className="mt-10 space-y-4 text-[1.08rem] font-light leading-[1.78] tracking-[0.01em] text-[rgba(245,245,245,0.88)]">
                  <p>Most developers increase spending.</p>
                  <p>Very few build structure.</p>
                  <p>That is where growth breaks.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 py-[120px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[75rem]">
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 xl:gap-x-16 xl:gap-y-20">
            {insights.map((item, index) => (
              <article
                key={item.title}
                className={index < 2 ? "max-w-[31rem]" : "max-w-[24rem]"}
              >
                <h2
                  className={
                    index < 2
                      ? "font-display text-[2.25rem] font-medium leading-[1.22] tracking-[0.018em] text-[#1A1A1A] sm:text-[2.65rem]"
                      : "font-display text-[1.78rem] font-medium leading-[1.28] tracking-[0.018em] text-[#1A1A1A] sm:text-[2.02rem]"
                  }
                >
                  {item.title}
                </h2>
                <p
                  className={
                    index < 2
                      ? "mt-6 max-w-[23rem] text-base font-light leading-[1.66] tracking-[0.01em] text-[rgba(85,85,85,0.9)]"
                      : "mt-5 max-w-[22rem] text-base font-light leading-[1.62] tracking-[0.01em] text-[rgba(85,85,85,0.9)]"
                  }
                >
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
