import { Reveal } from "@/components/reveal";

type InteriorPageProps = {
  eyebrow: string;
  title: string;
  statement: string;
  items?: string[];
  closing?: string;
};

export function InteriorPage({
  eyebrow,
  title,
  statement,
  items = [],
  closing
}: InteriorPageProps) {
  return (
    <main className="min-h-screen bg-white px-5 pt-36 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl pb-28 pt-10 sm:pb-40">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-luxury text-[#9a7420]">
            {eyebrow}
          </p>
          <h1 className="max-w-5xl font-display text-6xl font-light leading-none text-[#111111] sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-12 max-w-3xl text-xl font-light leading-9 text-[#555555] sm:text-2xl sm:leading-10">
            {statement}
          </p>
        </Reveal>

        {items.length > 0 && (
          <Reveal className="mt-28 grid gap-8 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item}
                className="border-t border-[#b08a24]/35 pt-8 transition-colors duration-500 hover:border-[#9a7420]"
              >
                <h2 className="font-display text-3xl font-light text-[#111111]">
                  {item}
                </h2>
              </div>
            ))}
          </Reveal>
        )}

        {closing && (
          <Reveal className="mt-28 max-w-3xl">
            <p className="font-display text-4xl font-light leading-tight text-[#111111] sm:text-5xl">
              {closing}
            </p>
          </Reveal>
        )}
      </section>
    </main>
  );
}
