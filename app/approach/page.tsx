const frameworkItems = [
  { title: "Position", text: "Define perception before demand." },
  { title: "Demand", text: "Create consistent inbound interest." },
  { title: "Conversion", text: "Turn attention into outcomes." },
  { title: "Scale", text: "Expand with control." }
];

const executionSteps = [
  { title: "Business understanding", text: "Context defines where structure is required first." },
  { title: "Market positioning", text: "Perception is clarified before communication expands." },
  { title: "Strategy design", text: "A measured system is designed around business objectives." },
  { title: "System implementation", text: "Execution is aligned into one controlled operating layer." },
  { title: "Performance tracking", text: "Outcomes are monitored so growth stays measurable." }
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
            style={{ backgroundImage: "url('/Approach/approach-cover.png')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0)_78%)]" />
          <div className="relative flex min-h-[86vh] items-end px-8 pb-12 sm:px-12 sm:pb-16 lg:px-20 lg:pb-24">
            <div className="max-w-[38rem]">
              <h1 className="font-display text-[3rem] font-normal leading-[1.18] tracking-[0.025em] text-[#F5F5F5] sm:text-[3.5rem] lg:text-[4rem]">
                Growth is not random. It is structured.
              </h1>
              <p className="mt-6 max-w-[28rem] text-base font-light leading-[1.6] tracking-[0.01em] text-[rgba(245,245,245,0.9)]">
                Outcomes follow systems, not activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-[100px] text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[44rem]">
          <p className="font-display text-[2.2rem] font-normal leading-[1.22] tracking-[0.025em] text-[#1A1A1A] sm:text-[2.7rem] lg:text-[3rem]">
            Most businesses scale effort.
            <br />
            Very few scale structure.
          </p>
        </div>
      </section>

      <section className="px-5 py-[120px] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[75rem] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-[31rem]">
            <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#A68A5B]">
              THE PROBLEM
            </p>
            <h2 className="mt-5 font-display text-[2.6rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3rem] lg:text-[3.35rem]">
              Activity Without Structure Creates Noise.
            </h2>
            <div className="mt-8 space-y-4 text-base font-light leading-[1.6] tracking-[0.01em] text-[#555555]">
              <p>Campaigns increase</p>
              <p>Channels expand</p>
              <p>Effort multiplies</p>
              <p>Outcomes remain inconsistent</p>
            </div>
            <p className="mt-8 max-w-[26rem] text-base font-light leading-[1.6] tracking-[0.01em] text-[#1A1A1A]">
              Because there is no system connecting it all.
            </p>
          </div>
          <div
            aria-label="Corporate architectural lines"
            role="img"
            className="min-h-[36rem] rounded-[24px] bg-cover bg-center"
            style={{ backgroundImage: "url('/Approach/approach-problem.jpg')" }}
          />
        </div>
      </section>

      <section className="px-5 py-[120px] sm:px-8 lg:px-12">
        <div className="relative min-h-[74vh] overflow-hidden rounded-[24px]">
          <div
            aria-label="Structured architectural geometry"
            role="img"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Approach/approach-system.png')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,249,246,0.82)_0%,rgba(250,249,246,0.78)_36%,rgba(250,249,246,0.9)_100%)]" />
          <div className="relative flex min-h-[74vh] flex-col items-center justify-center px-8 text-center sm:px-12 lg:px-20">
            <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#A68A5B]">
              THE SYSTEM
            </p>
            <h2 className="mt-5 max-w-[38rem] font-display text-[2.8rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3.2rem] lg:text-[3.6rem]">
              A Structured Growth Framework.
            </h2>
            <p className="mt-5 max-w-[32rem] text-base font-light leading-[1.6] tracking-[0.01em] text-[#555555]">
              Every engagement follows a defined system.
            </p>

            <div className="mt-16 grid w-full max-w-[58rem] gap-14 text-left md:grid-cols-2 md:gap-x-20 md:gap-y-16">
              {frameworkItems.map((item) => (
                <div key={item.title}>
                  <p className="text-[0.84rem] font-normal uppercase tracking-[0.18em] text-[#A68A5B]">
                    {item.title}
                  </p>
                  <p className="mt-5 max-w-[18rem] font-display text-[1.55rem] font-normal leading-[1.35] tracking-[0.015em] text-[#1A1A1A] sm:text-[1.7rem]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-[120px] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[75rem] gap-16 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          <div>
            <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#A68A5B]">
              EXECUTION DEPTH
            </p>
            <h2 className="mt-5 max-w-[30rem] font-display text-[3rem] font-normal leading-[1.2] tracking-[0.025em] text-[#1A1A1A] sm:text-[3.3rem] lg:text-[3.5rem]">
              Execution Without Clarity Is Waste.
            </h2>
          </div>

          <div className="relative lg:pl-12">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-[rgba(0,0,0,0.05)] lg:block" />
            <div className="space-y-10 lg:space-y-9">
              {executionSteps.map((step, index) => (
                <div key={step.title} className="relative pl-16 sm:pl-20">
                  <span className="absolute left-0 top-[-10px] font-display text-[3.1rem] leading-none tracking-[0.02em] text-[rgba(0,0,0,0.08)] sm:text-[3.5rem] lg:text-[4rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.95rem] font-normal uppercase tracking-[0.12em] text-[#1A1A1A]">
                    {step.title}
                  </p>
                  <p className="mt-3 max-w-[32rem] text-[0.98rem] font-light leading-[1.6] tracking-[0.01em] text-[#555555]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-[160px] text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[46rem]">
          <p className="font-display text-[2.4rem] font-normal leading-[1.22] tracking-[0.025em] text-[#1A1A1A] sm:text-[3rem] lg:text-[3.4rem]">
            Systems create predictability.
            <br />
            Predictability creates scale.
          </p>
        </div>
      </section>

      <section className="px-5 py-[120px] sm:px-8 lg:px-12">
        <div className="relative min-h-[56vh] overflow-hidden rounded-[24px]">
          <div
            aria-label="Abstract architectural statement"
            role="img"
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{ backgroundImage: "url('/Approach/approach-statement.jpg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,249,246,0.68)_0%,rgba(250,249,246,0.8)_100%)]" />
          <div className="relative flex min-h-[56vh] items-center justify-center px-8 text-center sm:px-12">
            <p className="max-w-[38rem] font-display text-[2.5rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3rem] lg:text-[3.4rem]">
              Structure creates predictability.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-[100px] text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[50rem]">
          <h2 className="font-display text-[2.8rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3.2rem] lg:text-[3.6rem]">
            Clarity Leads. Growth Follows.
          </h2>
          <p className="mx-auto mt-6 max-w-[35rem] text-base font-light leading-[1.6] tracking-[0.01em] text-[#555555]">
            When structure is in place, outcomes become measurable and repeatable.
          </p>
        </div>
      </section>

      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[24px] bg-[linear-gradient(180deg,#FAF9F6_0%,#F1ECE2_100%)] px-8 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-[37rem] font-display text-[2.8rem] font-normal leading-[1.18] tracking-[0.025em] text-[#1A1A1A] sm:text-[3.2rem] lg:text-[3.6rem]">
            Scale is not luck. It is designed.
          </h2>
          <a
            href="#private-access"
            className="mt-10 inline-flex rounded-[8px] bg-[#C6A75E] px-7 py-[14px] text-xs font-normal uppercase tracking-[0.24em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,167,94,0.18)] transition-colors duration-300 hover:bg-[#b89b56] hover:shadow-[0_12px_28px_rgba(198,167,94,0.22)]"
          >
            Request Access
          </a>
        </div>
      </section>
    </main>
  );
}
