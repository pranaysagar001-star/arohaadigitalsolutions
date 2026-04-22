import { Reveal } from "@/components/reveal";

const proof = ["INR 100Cr+ inventory influenced", "Limited partnerships per quarter"];

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

      <section className="bg-[#f8f8f8] px-5 py-28 sm:px-8 sm:py-40 lg:px-12">
        <Reveal className="mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl font-light leading-none text-[#111111] sm:text-7xl lg:text-8xl">
            We don&apos;t run campaigns.
            <br />
            We move inventory.
          </h1>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4 text-sm font-light uppercase tracking-luxury text-[#555555] sm:grid-cols-3">
            <p>Select developments only</p>
            <p>Strategy-led execution</p>
            <p>Built for high-value projects</p>
          </div>

          <div className="mx-auto mt-24 grid max-w-3xl gap-10 border-y border-[#b08a24]/25 py-10 sm:grid-cols-2">
            {proof.map((item) => (
              <p
                key={item}
                className="font-display text-3xl font-light text-[#9a7420] sm:text-4xl"
              >
                {item}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

    </main>
  );
}
