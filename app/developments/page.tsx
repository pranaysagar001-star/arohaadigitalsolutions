import Link from "next/link";

import { developments } from "./data";

export default function DevelopmentsPage() {
  return (
    <main className="bg-[#FAF9F6] pb-28 pt-24 text-[#1A1A1A] sm:pb-36 sm:pt-28 lg:pb-44">
      <section className="px-5 pb-[120px] pt-12 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
        <div className="mx-auto max-w-[78rem]">
          <p className="text-center text-[0.8rem] font-light uppercase tracking-[0.2em] text-[#A68A5B]">
            SELECTED DEVELOPMENT ENVIRONMENTS
          </p>

          <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
            {developments.map((development) => (
              <Link
                key={development.slug}
                href={`/developments/${development.slug}`}
                className="group block"
              >
                <article>
                  <div
                    aria-label={development.name}
                    role="img"
                    className="aspect-[16/9] overflow-hidden rounded-[22px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url('${development.image}')` }}
                  />
                  <div className="mt-6 max-w-[22rem] space-y-3">
                    <h2 className="font-sans text-[1.28rem] font-semibold leading-[1.2] text-[#1A1A1A] sm:text-[1.38rem]">
                      {development.name}
                    </h2>
                    <p className="text-[0.82rem] font-light uppercase tracking-[0.16em] text-[#555555]">
                      {development.location}
                    </p>
                    <p className="text-[0.96rem] font-light leading-[1.55] text-[#555555]">
                      {development.strategicLine}
                    </p>
                    <p className="pt-1 text-[0.84rem] font-normal tracking-[0.01em] text-[#A68A5B] transition-colors duration-300 group-hover:text-[#8f7345]">
                      View Development Strategy →
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
