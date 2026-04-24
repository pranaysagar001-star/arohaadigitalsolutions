const frameworkItems = [
  {
    title: "Position",
    text: "Define perception before demand."
  },
  {
    title: "Demand",
    text: "Create consistent inbound interest."
  },
  {
    title: "Conversion",
    text: "Turn attention into outcomes."
  },
  {
    title: "Scale",
    text: "Expand with control."
  }
];

const executionSteps = [
  {
    title: "Business understanding",
    text: "Context defines where structure is required first."
  },
  {
    title: "Market positioning",
    text: "Perception is clarified before communication expands."
  },
  {
    title: "Strategy design",
    text: "A measured system is designed around business objectives."
  },
  {
    title: "System implementation",
    text: "Execution is aligned into one controlled operating layer."
  },
  {
    title: "Performance tracking",
    text: "Outcomes are monitored so growth stays measurable."
  }
];

export default function ApproachPage() {
  return (
    <main className="bg-[#FAF9F6] pb-28 pt-24 text-[#1A1A1A] sm:pb-36 sm:pt-28 lg:pb-44">
      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="relative min-h-[86vh] overflow-hidden rounded-[24px]">
          <div
            aria-label="Architectural skyline"
            role="img"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/about-cover.jpg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0)_78%)]" />
          <div className="relative flex min-h-[86vh] items-end px-8 pb-12 sm:px-12 sm:pb-16 lg:px-20 lg:pb-24">
            <div className="max-w-[38rem]">
              <h1 className="font-display text-[3rem] font-normal leading-[1.18] tracking-[0.025em] text-[#F5F5F5] sm:text-[3.5rem] lg:text-[4rem]">
                Growth is not random. It is structured.
              </h1>
              <p className="mt-6 max-w-[28rem] text-base font-light leading-[1.72] tracking-[0.01em] text-[rgba(245,245,245,0.9)]">
                Outcomes follow systems, not activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[44rem]">
          <p className="font-display text-[2.2rem] font-normal leading-[1.22] tracking-[0.025em] text-[#1A1A1A] sm:text-[2.7rem] lg:text-[3rem]">
            Most businesses scale effort.
            <br />
            Very few scale structure.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[75rem] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-[31rem]">
            <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#C6A75E]">
              THE PROBLEM
            </p>
            <h2 className="mt-5 font-display text-[2.6rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3rem] lg:text-[3.35rem]">
              Activity Without Structure Creates Noise.
            </h2>
            <div className="mt-8 space-y-4 text-base font-light leading-[1.72] tracking-[0.01em] text-[#555555]">
              <p>Campaigns increase</p>
              <p>Channels expand</p>
              <p>Effort multiplies</p>
              <p>Outcomes remain inconsistent</p>
            </div>
            <p className="mt-8 max-w-[26rem] text-base font-light leading-[1.72] tracking-[0.01em] text-[#1A1A1A]">
              Because there is no system connecting it all.
            </p>
          </div>
          <div
            aria-label="Corporate architectural lines"
            role="img"
            className="min-h-[36rem] rounded-[24px] bg-cover bg-center"
            style={{ backgroundImage: "url('/about-story.jpg')" }}
          />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="relative min-h-[74vh] overflow-hidden rounded-[24px]">
          <div
            aria-label="Structured architectural geometry"
            role="img"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/home-pause.jpg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,249,246,0.82)_0%,rgba(250,249,246,0.78)_36%,rgba(250,249,246,0.9)_100%)]" />
          <div className="relative flex min-h-[74vh] flex-col items-center justify-center px-8 text-center sm:px-12 lg:px-20">
            <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#C6A75E]">
              THE SYSTEM
            </p>
            <h2 className="mt-5 max-w-[38rem] font-display text-[2.8rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3.2rem] lg:text-[3.6rem]">
              A Structured Growth Framework.
            </h2>
            <p className="mt-5 max-w-[32rem] text-base font-light leading-[1.72] tracking-[0.01em] text-[#555555]">
              Every engagement follows a defined system.
            </p>

            <div className="mt-14 grid w-full max-w-[68rem] gap-10 lg:grid-cols-4 lg:gap-12">
              {frameworkItems.map((item) => (
                <div key={item.title} className="text-center">
                  <p className="text-[0.82rem] font-normal uppercase tracking-[0.18em] text-[#C6A75E]">
                    {item.title}
                  </p>
                  <p className="mx-auto mt-5 max-w-[14rem] text-sm font-light leading-[1.72] tracking-[0.01em] text-[#555555]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[75rem]">
          <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#C6A75E]">
            EXECUTION DEPTH
          </p>
          <h2 className="mt-5 max-w-[37rem] font-display text-[2.6rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3rem] lg:text-[3.35rem]">
            Execution Without Clarity Is Waste.
          </h2>

          <div className="mt-12 max-w-[58rem] border-t border-[rgba(198,167,94,0.2)]">
            {executionSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-4 border-b border-[rgba(198,167,94,0.16)] py-6 sm:grid-cols-[56px_0.9fr_1.1fr] sm:gap-8"
              >
                <p className="text-[0.82rem] font-normal uppercase tracking-[0.12em] text-[#C6A75E]">
                  {index + 1}
                </p>
                <p className="text-[0.9rem] font-normal uppercase tracking-[0.12em] text-[#1A1A1A]">
                  {step.title}
                </p>
                <p className="max-w-[32rem] text-sm font-light leading-[1.72] tracking-[0.01em] text-[#555555]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="relative min-h-[56vh] overflow-hidden rounded-[24px]">
          <div
            aria-label="Abstract architectural statement"
            role="img"
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{ backgroundImage: "url('/home-pause.jpg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,249,246,0.68)_0%,rgba(250,249,246,0.8)_100%)]" />
          <div className="relative flex min-h-[56vh] items-center justify-center px-8 text-center sm:px-12">
            <p className="max-w-[38rem] font-display text-[2.5rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3rem] lg:text-[3.4rem]">
              Structure creates predictability.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[50rem]">
          <h2 className="font-display text-[2.8rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3.2rem] lg:text-[3.6rem]">
            Clarity Leads. Growth Follows.
          </h2>
          <p className="mx-auto mt-6 max-w-[35rem] text-base font-light leading-[1.72] tracking-[0.01em] text-[#555555]">
            When structure is in place, outcomes become measurable and repeatable.
          </p>
        </div>
      </section>

      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[24px] bg-[linear-gradient(180deg,#FAF9F6_0%,#F2EBD8_100%)] px-8 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-[37rem] font-display text-[2.8rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3.2rem] lg:text-[3.6rem]">
            Scale is not luck. It is designed.
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
