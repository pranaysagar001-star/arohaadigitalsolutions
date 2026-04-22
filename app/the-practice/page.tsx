import { Reveal } from "@/components/reveal";

const beliefs = [
  "Demand is engineered",
  "Positioning defines velocity",
  "Scarcity drives value"
];

export default function ThePracticePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-5 pb-28 pt-40 sm:px-8 sm:pb-36 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h1 className="font-display text-6xl font-light leading-none text-[#111111] sm:text-8xl lg:text-9xl">
              A Select Practice
            </h1>
            <p className="mt-12 max-w-4xl text-xl font-light leading-9 text-[#555555] sm:text-2xl sm:leading-10">
              We operate at the intersection of demand, positioning, and market
              timing.
            </p>
          </Reveal>

          <Reveal className="mt-28 grid gap-8 md:grid-cols-3">
            {beliefs.map((belief) => (
              <div
                key={belief}
                className="border-t border-[#b08a24]/35 pt-8 transition-colors duration-500 hover:border-[#9a7420]"
              >
                <h2 className="font-display text-3xl font-light text-[#111111] sm:text-4xl">
                  {belief}
                </h2>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-32 max-w-4xl border-l border-[#b08a24]/45 pl-8">
            <p className="font-display text-4xl font-light leading-tight text-[#111111] sm:text-5xl">
              We partner with a limited number of developments each quarter.
            </p>
            <p className="mt-8 text-sm font-light uppercase tracking-luxury text-[#888888]">
              Not every project qualifies.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
