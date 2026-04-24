const frameworkItems = [
  {
    title: "Position",
    text: "Define market clarity before visibility begins."
  },
  {
    title: "Demand",
    text: "Structure qualified attention with intent-led systems."
  },
  {
    title: "Conversion",
    text: "Translate interest into confident commercial movement."
  },
  {
    title: "Scale",
    text: "Sustain growth through measured operational precision."
  }
];

export default function AboutUsPage() {
  return (
    <main className="bg-[#FAF9F6] pb-28 pt-24 text-[#1A1A1A] sm:pb-36 sm:pt-28 lg:pb-44">
      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="relative min-h-[88vh] overflow-hidden rounded-[24px]">
          <div
            aria-label="Luxury architecture skyline"
            role="img"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/about-cover.jpg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0)_78%)]" />
          <div className="relative flex min-h-[88vh] items-end px-8 pb-12 sm:px-12 sm:pb-16 lg:px-20 lg:pb-24">
            <div className="max-w-[38rem]">
              <h1 className="font-display text-[3.2rem] font-normal leading-[1.16] tracking-[0.02em] text-[#F5F5F5] sm:text-[3.8rem] lg:text-[4.45rem]">
                Built with Clarity. Scaled with Structure.
              </h1>
              <p className="mt-6 max-w-[31rem] text-base font-light leading-8 tracking-[0.02em] text-[rgba(245,245,245,0.9)]">
                Growth becomes predictable when strategy, execution, and systems operate as
                one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[75rem]">
          <div className="max-w-[37.5rem]">
            <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#C6A75E]">
              WHO WE ARE
            </p>
            <h2 className="mt-5 max-w-[37.5rem] font-display text-[2.85rem] font-normal leading-[1.2] tracking-[0.025em] text-[#1A1A1A] sm:text-[3.2rem] lg:text-[3.45rem]">
              Structure Before Scale.
            </h2>
            <div className="mt-5 max-w-[32.5rem] space-y-6">
              <p className="text-base font-light leading-[1.7] tracking-[0.01em] text-[#555555]">
                Arohaa Digital Solutions operates at the intersection of positioning, demand,
                and performance.
              </p>
              <p className="text-base font-light leading-[1.7] tracking-[0.01em] text-[#555555]">
                Every engagement is structured to deliver clarity, consistency, and measurable
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[75rem] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div
            aria-label="Arohaa story environment"
            role="img"
            className="min-h-[38rem] rounded-[24px] bg-cover bg-center"
            style={{ backgroundImage: "url('/about-story.jpg')" }}
          />
          <div className="max-w-[32.5rem]">
            <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#C6A75E]">
              STORY
            </p>
            <h2 className="mt-5 font-display text-[2.4rem] font-normal leading-[1.2] tracking-[0.025em] text-[#1A1A1A] sm:text-[2.8rem] lg:text-[3.15rem]">
              Built from observation, not assumption.
            </h2>
            <div className="mt-6 space-y-4 text-base font-light leading-[1.72] tracking-[0.01em] text-[#555555]">
              <p>Most businesses invest in marketing without structure.</p>
              <p>Activity increases. Outcomes remain inconsistent.</p>
              <p>A different approach became necessary — one built on systems, not noise.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-[100px] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[68rem] gap-12 lg:grid-cols-2 lg:gap-14">
          <article className="rounded-[4px] border border-[rgba(198,167,94,0.15)] bg-[linear-gradient(145deg,#F9F7F2,#F2EFE8)] px-10 py-[60px] sm:px-12 sm:py-[64px] lg:px-[64px] lg:py-[68px]">
            <div className="mb-5 h-[2px] w-[40px] bg-[#C6A75E]" />
            <p className="text-[0.78rem] font-light uppercase tracking-[0.2em] text-[#C6A75E]">
              VISION
            </p>
            <p className="mt-6 max-w-[31rem] font-display text-[2.2rem] font-normal leading-[1.35] tracking-[0.015em] text-[#1A1A1A] sm:text-[2.45rem] lg:text-[2.6rem]">
              To establish structured digital ecosystems that define long-term market
              leadership.
            </p>
          </article>
          <article className="rounded-[4px] border border-[rgba(198,167,94,0.15)] bg-[linear-gradient(145deg,#F9F7F2,#F2EFE8)] px-10 py-[60px] sm:px-12 sm:py-[64px] lg:px-[64px] lg:py-[68px]">
            <div className="mb-5 h-[2px] w-[40px] bg-[#C6A75E]" />
            <p className="text-[0.78rem] font-light uppercase tracking-[0.2em] text-[#C6A75E]">
              MISSION
            </p>
            <p className="mt-6 max-w-[31rem] font-display text-[2.2rem] font-normal leading-[1.35] tracking-[0.015em] text-[#1A1A1A] sm:text-[2.45rem] lg:text-[2.6rem]">
              To align strategy, execution, and performance into a measurable growth system.
            </p>
          </article>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[75rem] items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20">
          <div
            aria-label="Founder portrait"
            role="img"
            className="aspect-square min-h-[28rem] rounded-[24px] bg-cover bg-center"
            style={{ backgroundImage: "url('/about-founder.png')" }}
          />
          <div className="max-w-[32.5rem]">
            <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#C6A75E]">
              FOUNDER
            </p>
            <h2 className="mt-5 font-display text-[2.1rem] font-normal leading-[1.2] tracking-[0.025em] text-[#1A1A1A] sm:text-[2.45rem] lg:text-[2.8rem]">
              PRANAY SAGAR YADALA
            </h2>
            <p className="mt-2 text-[0.88rem] font-light uppercase tracking-[0.14em] text-[#555555]">
              Founder &amp; CEO
            </p>
            <blockquote className="mt-8 max-w-[31rem] font-display text-[1.6rem] font-normal leading-[1.4] tracking-[0.015em] text-[#1A1A1A] sm:text-[1.85rem]">
              “Growth without structure creates noise. Structure creates inevitability.”
            </blockquote>
            <div className="mt-8 max-w-[32.5rem] space-y-4 text-base font-light leading-[1.72] tracking-[0.01em] text-[#555555]">
              <p>
                Arohaa was built on a clear observation — many businesses invest in digital
                marketing, but very few experience structured growth.
              </p>
              <p>
                Execution often begins with intent but loses direction over time, resulting in
                inconsistent outcomes.
              </p>
              <p>
                The approach here is different. Every engagement begins with understanding the
                business, followed by structured planning and precise execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[75rem] text-center">
          <div
            aria-label="Team collaboration"
            role="img"
            className="mx-auto min-h-[34rem] w-full max-w-[68rem] rounded-[24px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80')"
            }}
          />
          <div className="mx-auto mt-10 max-w-[37.5rem]">
            <h2 className="font-display text-[2.35rem] font-normal leading-[1.2] tracking-[0.025em] text-[#1A1A1A] sm:text-[2.75rem] lg:text-[3.1rem]">
              Built with Intentional People.
            </h2>
            <p className="mx-auto mt-5 max-w-[32.5rem] text-base font-light leading-[1.7] tracking-[0.01em] text-[#555555]">
              A focused team aligned on clarity, execution, and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[75rem]">
          <div className="max-w-[37.5rem]">
            <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#C6A75E]">
              FRAMEWORK
            </p>
            <h2 className="mt-5 font-display text-[2.35rem] font-normal leading-[1.2] tracking-[0.025em] text-[#1A1A1A] sm:text-[2.75rem] lg:text-[3.1rem]">
              A strategic framework for controlled growth.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {frameworkItems.map((item) => (
              <div key={item.title}>
                <p className="text-[0.82rem] font-normal uppercase tracking-[0.18em] text-[#C6A75E]">
                  {item.title}
                </p>
                <p className="mt-4 max-w-[16rem] text-sm font-light leading-[1.7] tracking-[0.01em] text-[#555555]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-7xl font-normal leading-none tracking-[0.02em] text-[#1A1A1A] sm:text-8xl lg:text-9xl">
            ₹XX Cr+
          </p>
          <p className="mx-auto mt-6 max-w-[32.5rem] text-[0.8rem] font-light uppercase tracking-[0.18em] text-[#555555]">
            Revenue influenced through structured execution
          </p>
        </div>
      </section>

      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[24px] bg-[linear-gradient(180deg,#FAF9F6_0%,#F2EBD8_100%)] px-8 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-[37.5rem] font-display text-[2.35rem] font-normal leading-[1.2] tracking-[0.025em] text-[#1A1A1A] sm:text-[2.75rem] lg:text-[3.1rem]">
            Growth, when structured correctly, becomes inevitable.
          </h2>
          <a
            href="#private-access"
            className="mt-10 inline-flex rounded-[4px] bg-[#C6A75E] px-7 py-3 text-xs font-normal uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#b89b56]"
          >
            Request Access
          </a>
        </div>
      </section>
    </main>
  );
}
