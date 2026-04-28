export default function Home() {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A]">
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
            src="/Home%20Page/hero-video.mp4"
            type="video/mp4"
          />
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
      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <article className="relative min-h-[92vh] overflow-hidden rounded-[20px] lg:min-h-[98vh]">
          <div
            aria-label="Premium high-rise development"
            role="img"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Home%20Page/home-leadership.jpg')"
            }}
          />
          <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0)_72%)]" />
          <div className="relative flex min-h-[92vh] items-center px-8 sm:px-14 lg:px-24 xl:px-28 lg:min-h-[98vh]">
            <div className="max-w-[36rem]">
              <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#A68A5B]">
                Market Leadership
              </p>
              <h1
                className="mt-6 max-w-[36rem] font-display text-[2.15rem] font-normal leading-[1.22] tracking-[0.025em] text-[#F5F5F5] sm:text-[2.5rem] lg:text-[3.2rem]"
                style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.2)" }}
              >
                Presence should lead the market before the market responds.
              </h1>
            </div>
          </div>
        </article>
      </section>

      {/* Empty power section: whitespace pause for pacing. */}
      <section className="px-5 py-[80px] sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-[40vh] max-w-4xl items-center justify-center px-4 text-center">
          <div className="flex flex-col items-center">
            <span className="mb-5 h-px w-[60px] bg-[#A68A5B]" />
            <p className="font-display text-[2.15rem] font-normal leading-[1.22] tracking-[0.02em] text-[#1A1A1A] sm:text-[2.75rem] lg:text-[3.35rem]">
              Structure defines scale.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: split image and strategy statement. */}
      <section className="px-5 py-[100px] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div
            aria-label="Luxury residential arrival experience"
            role="img"
            className="min-h-[32rem] rounded-[18px] bg-cover bg-center lg:min-h-[40rem]"
            style={{
              backgroundImage: "url('/Home%20Page/home-strategy.jpg')"
            }}
          />
          <div className="max-w-[38rem] lg:max-w-[34rem]">
            <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#A68A5B]">
              Strategic Positioning
            </p>
            <h2 className="mt-7 font-display text-4xl font-normal leading-[1.22] tracking-[0.025em] text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              Digital presence should feel as considered as the asset itself.
            </h2>
            <p className="mt-7 text-sm font-light leading-8 tracking-[0.02em] text-[rgba(85,85,85,0.88)] sm:text-base">
              The first impression must signal category, confidence, and control.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: visual pause moment. */}
      <section className="px-5 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <article className="relative min-h-[94vh] overflow-hidden rounded-[20px] lg:min-h-[102vh]">
          <div
            aria-label="Architectural facade symmetry"
            role="img"
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{
              backgroundImage: "url('/Home%20Page/home-pause.jpg')"
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center px-8 text-center sm:px-14 lg:px-20">
            <div className="max-w-[42rem]">
              <p className="font-display text-[1.85rem] font-normal leading-[1.22] tracking-[0.02em] text-[#1A1A1A] sm:text-[2.15rem] lg:text-[2.7rem] lg:whitespace-nowrap">
                Position defines perception.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Section 4: minimal horizontal process. */}
      <section className="px-5 py-[80px] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <div className="w-full border-y border-[#D8D2C4] py-8 sm:py-9">
            <div className="grid items-center gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {[
                "Position",
                "Demand",
                "Conversion",
                "Scale"
              ].map((item) => (
                <div key={item}>
                  <p className="text-[0.88rem] font-normal uppercase tracking-[0.12em] text-[#A68A5B] sm:text-[0.94rem] lg:text-[0.98rem]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: skyline authority visual. */}
      <section className="px-5 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <article className="relative min-h-[94vh] overflow-hidden rounded-[20px] lg:min-h-[104vh]">
          <div
            aria-label="City skyline and premium towers"
            role="img"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Home%20Page/home-skyline.jpg')"
            }}
          />
          <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.16)_40%,rgba(0,0,0,0)_72%)]" />
          <div className="relative flex min-h-[94vh] items-center px-8 sm:px-14 lg:px-24 xl:px-28 lg:min-h-[104vh]">
            <div className="max-w-[36rem]">
              <p className="text-[0.78rem] font-light uppercase tracking-[0.18em] text-[#A68A5B]">
                Authority
              </p>
              <h2
                className="mt-6 max-w-[36rem] font-display text-[2.15rem] font-normal leading-[1.22] tracking-[0.025em] text-[#F5F5F5] sm:text-[2.5rem] lg:text-[3.2rem]"
                style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.2)" }}
              >
                Structured visibility changes the quality of demand.
              </h2>
            </div>
          </div>
        </article>
      </section>

      {/* Section 6: minimal credibility statement. */}
      <section className="px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-7xl font-normal leading-none tracking-[0.02em] text-[#1A1A1A] sm:text-8xl lg:text-9xl">
            100Cr+
          </p>
          <p className="mx-auto mt-7 max-w-xl text-[0.78rem] font-light uppercase tracking-[0.3em] text-[rgba(85,85,85,0.86)] sm:text-[0.84rem]">
            Revenue influenced through structured digital execution
          </p>
        </div>
      </section>

      {/* Section 7: final decision and premium CTA. */}
      <section className="bg-[linear-gradient(180deg,#FAF9F6_0%,#F1ECE2_100%)] px-5 py-[120px] text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-5xl font-normal leading-[1.22] tracking-[0.025em] text-[#1A1A1A] sm:text-6xl lg:text-7xl">
            Growth, when structured correctly, becomes inevitable.
          </h2>
          <a
            href="#private-access"
            className="mt-10 inline-flex rounded-[8px] bg-[#C6A75E] px-7 py-[14px] text-xs font-normal uppercase tracking-[0.24em] text-[#1A1A1A] shadow-[0_10px_24px_rgba(198,167,94,0.18)] transition-colors duration-300 hover:bg-[#b89b56] hover:shadow-[0_12px_28px_rgba(198,167,94,0.22)]"
          >
            Request Access
          </a>
          <p className="mt-6 text-[0.76rem] font-light uppercase tracking-[0.18em] text-[#555555]">
            Selective partnerships
          </p>
        </div>
      </section>
    </main>
  );
}
