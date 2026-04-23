const frameworkColumns = [
  {
    title: "Market Reading",
    text: "Interpret category signals, buyer maturity, and competitive posture before any outward move is made."
  },
  {
    title: "Positioning Logic",
    text: "Define the commercial perception that should govern every surface, message, and interaction."
  },
  {
    title: "Execution Discipline",
    text: "Translate strategy into a digital environment that feels coherent, selective, and credible."
  }
];

const comparison = [
  {
    title: "Unstructured Presence",
    text: "Visibility expands, yet the market is left to infer value without guidance."
  },
  {
    title: "Structured Perception",
    text: "Clarity precedes attention, allowing confidence and buyer quality to rise together."
  }
];

const methods = [
  {
    label: "01",
    title: "Commercial Diagnosis",
    text: "A clear read on the asset, audience, and market context."
  },
  {
    label: "02",
    title: "Narrative Framing",
    text: "A disciplined articulation of value, status, and relevance."
  },
  {
    label: "03",
    title: "Digital Environment",
    text: "A controlled presentation system across every visible surface."
  },
  {
    label: "04",
    title: "Decision Alignment",
    text: "A buyer journey designed to improve the nature of enquiry."
  }
];

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

      {/* Opening statement */}
      <section className="bg-[#F8F7F3] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="mx-auto flex max-w-6xl gap-6 sm:gap-8">
          <div className="mt-2 h-24 w-px shrink-0 bg-[#C6A75E]" />
          <div className="max-w-4xl">
            <p className="text-xs font-light uppercase tracking-[0.28em] text-[#C6A75E]">
              Opening Statement
            </p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.02] text-[#1A1A1A] sm:text-6xl lg:text-7xl">
              Perception is often the first commercial advantage.
            </h1>
            <p className="mt-8 max-w-2xl text-sm font-light leading-8 tracking-[0.02em] text-[#555555] sm:text-base">
              Premium growth rarely begins with louder communication. It begins
              with clearer positioning.
            </p>
          </div>
        </div>
      </section>

      {/* Structured panel */}
      <section className="bg-[#F8F7F3] px-5 pb-28 sm:px-8 sm:pb-36 lg:px-12 lg:pb-44">
        <div className="mx-auto max-w-7xl rounded-[14px] bg-white px-8 py-10 shadow-[0_18px_50px_rgba(26,26,26,0.05)] sm:px-10 sm:py-12 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {frameworkColumns.map((column) => (
              <article key={column.title}>
                <p className="text-xs font-light uppercase tracking-[0.24em] text-[#C6A75E]">
                  {column.title}
                </p>
                <p className="mt-6 text-sm font-light leading-8 tracking-[0.02em] text-[#555555] sm:text-base">
                  {column.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural statement */}
      <section className="bg-[#F8F7F3] px-5 pb-28 sm:px-8 sm:pb-36 lg:px-12 lg:pb-44">
        <article className="mx-auto max-w-[92rem] overflow-hidden bg-[#E9E6DE]">
          <div
            aria-label="Architectural facade"
            role="img"
            className="relative min-h-[65vh] bg-cover bg-center grayscale"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=85)"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/68 via-black/22 to-transparent" />
            <div className="relative flex min-h-[65vh] max-w-3xl flex-col justify-end px-8 pb-12 sm:px-12 sm:pb-16 lg:px-16 lg:pb-20">
              <p className="text-xs font-light uppercase tracking-[0.28em] text-[#C6A75E]">
                Architectural Statement
              </p>
              <h2 className="mt-6 font-display text-5xl font-medium leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Authority is felt when structure becomes visible.
              </h2>
            </div>
          </div>
        </article>
      </section>

      {/* Contrast grid */}
      <section className="bg-[#F8F7F3] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
          {comparison.map((item) => (
            <article key={item.title}>
              <p className="text-xs font-light uppercase tracking-[0.24em] text-[#888888]">
                {item.title}
              </p>
              <h3 className="mt-6 font-display text-4xl font-medium leading-[1.08] text-[#1A1A1A] sm:text-5xl">
                {item.title === "Unstructured Presence"
                  ? "Attention without guidance."
                  : "Preference through clarity."}
              </h3>
              <p className="mt-8 max-w-xl text-sm font-light leading-8 tracking-[0.02em] text-[#555555] sm:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Method section */}
      <section className="bg-white px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-6xl">
          <div className="border-t border-[#D8D2C3]">
            {methods.map((item) => (
              <div
                key={item.label}
                className="grid gap-6 border-b border-[#D8D2C3] py-8 sm:grid-cols-[100px_1.1fr_1.4fr] sm:gap-10 sm:py-10"
              >
                <div className="text-xs font-light uppercase tracking-[0.24em] text-[#C6A75E]">
                  {item.label}
                </div>
                <div className="font-display text-3xl font-medium leading-tight text-[#1A1A1A] sm:text-4xl">
                  {item.title}
                </div>
                <div className="max-w-2xl text-sm font-light leading-8 tracking-[0.02em] text-[#555555] sm:text-base">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility section */}
      <section className="bg-[#F8F7F3] px-5 py-28 text-center sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-light uppercase tracking-[0.28em] text-[#C6A75E]">
            Credibility
          </p>
          <p className="mt-8 font-display text-7xl font-medium leading-none text-[#1A1A1A] sm:text-8xl lg:text-9xl">
            100Cr+
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-8 tracking-[0.02em] text-[#555555] sm:text-base">
            Inventory influenced through structured positioning and high-trust digital presentation.
          </p>
        </div>
      </section>

      {/* Final decision section */}
      <section className="bg-[linear-gradient(180deg,#F8F7F3_0%,#F3EBD9_100%)] px-5 py-32 text-center sm:px-8 sm:py-40 lg:px-12 lg:py-48">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-5xl font-medium leading-[1.04] text-[#1A1A1A] sm:text-6xl lg:text-7xl">
            The strongest growth decisions are made in environments that feel composed.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm font-light leading-8 tracking-[0.02em] text-[#555555] sm:text-base">
            Reserved for select mandates where positioning, category, and ambition
            justify a more deliberate standard.
          </p>
          <a
            href="#private-access"
            className="mt-12 inline-flex bg-[#C6A75E] px-9 py-5 text-xs font-medium uppercase tracking-[0.26em] text-white"
          >
            Request Alignment
          </a>
        </div>
      </section>
    </main>
  );
}
