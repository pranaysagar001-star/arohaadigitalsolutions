const projects = [
  {
    name: "Adityaram Signature",
    line: "Refined positioning",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
  },
  {
    name: "Aparna Towers",
    line: "Shift in perception",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
  },
  {
    name: "My Home",
    line: "Aligned with buyer intent",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=85"
  }
];

const quotes = [
  "They understood our buyers better than we did.",
  "The quality of conversations changed."
];

export default function Home() {
  return (
    <main className="bg-white">
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

      <section className="bg-white px-5 py-28 text-center sm:px-8 sm:py-36 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-display text-5xl font-light leading-tight text-[#111111] sm:text-6xl lg:text-7xl">
            Luxury is recognized instantly.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-[#555555] sm:text-lg">
            The way it is presented decides everything.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 pb-28 sm:px-8 sm:pb-36 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name}>
              <div className="group aspect-[4/5] overflow-hidden bg-[#f8f8f8]">
                <div
                  aria-label={project.name}
                  role="img"
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>
              <h2 className="mt-7 text-xs font-light uppercase tracking-luxury text-[#111111]">
                {project.name}
              </h2>
              <p className="mt-3 text-sm font-light leading-7 text-[#555555]">
                {project.line}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12">
        <p className="mx-auto max-w-3xl font-display text-4xl font-light leading-tight text-[#111111] sm:text-5xl lg:text-6xl">
          Buyers don&apos;t decide instantly.
          <br />
          They form perception first.
        </p>
      </section>

      <section className="bg-white px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-12">
          {quotes.map((quote) => (
            <blockquote
              key={quote}
              className="font-display text-3xl font-light leading-tight text-[#111111] sm:text-4xl lg:text-5xl"
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 pb-44 pt-24 text-center sm:px-8 sm:pb-56 sm:pt-32 lg:px-12">
        <p className="mx-auto max-w-5xl font-display text-5xl font-light leading-tight text-[#111111] sm:text-6xl lg:text-7xl">
          Some projects are seen.
          <br />
          Some are chosen.
        </p>
      </section>
    </main>
  );
}
