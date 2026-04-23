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

      {/* Section 1: full visual introduction with market-leadership framing. */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <article className="relative min-h-[78vh] overflow-hidden rounded-[20px]">
          <div
            aria-label="Premium high-rise development"
            role="img"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=88)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/24 to-transparent" />
          <div className="relative flex min-h-[78vh] max-w-3xl flex-col justify-end px-8 pb-12 sm:px-12 sm:pb-16 lg:px-16 lg:pb-20">
            <p className="text-[0.68rem] font-light uppercase tracking-[0.34em] text-[#C6A75E]">
              Market Leadership
            </p>
            <h1 className="mt-7 font-display text-5xl font-medium leading-[0.96] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Presence should lead the market before the market responds.
            </h1>
          </div>
        </article>
      </section>

      {/* Section 2: split image and strategy statement. */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div
            aria-label="Luxury residential arrival experience"
            role="img"
            className="min-h-[34rem] rounded-[18px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=88)"
            }}
          />
          <div className="max-w-xl">
            <p className="text-[0.68rem] font-light uppercase tracking-[0.34em] text-[#C6A75E]">
              Strategic Positioning
            </p>
            <h2 className="mt-7 font-display text-4xl font-medium leading-[1.02] text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              Digital presence should feel as considered as the asset itself.
            </h2>
            <p className="mt-7 text-sm font-light leading-8 tracking-[0.02em] text-[#555555] sm:text-base">
              The first impression must signal category, confidence, and control.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: visual pause moment. */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <article className="relative min-h-[66vh] overflow-hidden rounded-[20px]">
          <div
            aria-label="Architectural facade symmetry"
            role="img"
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=2200&q=88)"
            }}
          />
          <div className="absolute inset-0 bg-black/32" />
          <div className="relative flex min-h-[66vh] items-center justify-center px-8 text-center sm:px-12">
            <p className="max-w-4xl font-display text-5xl font-medium leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Position defines perception.
            </p>
          </div>
        </article>
      </section>

      {/* Section 4: minimal horizontal process. */}
      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="border-y border-[#D8D2C4] py-8 sm:py-10">
            <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {[
                "Position",
                "Demand",
                "Conversion",
                "Scale"
              ].map((item) => (
                <div key={item}>
                  <p className="text-[0.68rem] font-light uppercase tracking-[0.34em] text-[#C6A75E]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: skyline authority visual. */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <article className="relative min-h-[76vh] overflow-hidden rounded-[20px]">
          <div
            aria-label="City skyline and premium towers"
            role="img"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=88)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/22 to-transparent" />
          <div className="relative flex min-h-[76vh] items-end px-8 pb-12 sm:px-12 sm:pb-16 lg:px-16 lg:pb-20">
            <div className="max-w-3xl">
              <p className="text-[0.68rem] font-light uppercase tracking-[0.34em] text-[#C6A75E]">
                Authority
              </p>
              <h2 className="mt-6 font-display text-5xl font-medium leading-[0.98] text-white sm:text-6xl lg:text-7xl">
                Structured visibility changes the quality of demand.
              </h2>
            </div>
          </div>
        </article>
      </section>

      {/* Section 6: minimal credibility statement. */}
      <section className="px-5 py-28 text-center sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-7xl font-medium leading-none text-[#1A1A1A] sm:text-8xl lg:text-9xl">
            100Cr+
          </p>
          <p className="mx-auto mt-7 max-w-xl text-[0.78rem] font-light uppercase tracking-[0.3em] text-[#555555] sm:text-[0.84rem]">
            Revenue influenced through structured digital execution
          </p>
        </div>
      </section>

      {/* Section 7: final decision and premium CTA. */}
      <section className="bg-[linear-gradient(180deg,#F8F7F3_0%,#F2EBD8_100%)] px-5 py-28 text-center sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-5xl font-medium leading-[1.02] text-[#1A1A1A] sm:text-6xl lg:text-7xl">
            Growth, when structured correctly, becomes inevitable.
          </h2>
          <a
            href="#private-access"
            className="mt-12 inline-flex bg-[#C6A75E] px-9 py-5 text-xs font-medium uppercase tracking-[0.26em] text-white"
          >
            Request Access
          </a>
          <p className="mt-7 text-[0.68rem] font-light uppercase tracking-[0.28em] text-[#888888]">
            Selective partnerships
          </p>
        </div>
      </section>
    </main>
  );
}
