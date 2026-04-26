import Link from "next/link";

import { developments } from "./data";

export default function DevelopmentsPage() {
  return (
    <main className="bg-[#FAF9F6] pb-28 pt-24 text-[#1A1A1A] sm:pb-36 sm:pt-28 lg:pb-44">
      <section className="px-5 py-[120px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[78rem]">
          <p className="text-center text-[0.8rem] font-light uppercase tracking-[0.2em] text-[#A68A5B]">
            SELECTED DEVELOPMENTS
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
            {developments.map((development) => (
              <Link
                key={development.slug}
                href={`/developments/${development.slug}`}
                className="group block"
              >
                <article>
                  <div className="relative min-h-[24rem] overflow-hidden rounded-[22px] sm:min-h-[26rem] lg:min-h-[28rem]">
                    <div
                      aria-label={development.name}
                      role="img"
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url('${development.image}')` }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.36)_100%)]" />
                    <div className="relative flex min-h-[24rem] items-end px-7 pb-7 sm:min-h-[26rem] sm:px-8 sm:pb-8 lg:min-h-[28rem]">
                      <div className="max-w-[18rem]">
                        <h2 className="font-sans text-[1.25rem] font-semibold leading-[1.25] text-[#F5F5F5] sm:text-[1.35rem]">
                          {development.name}
                        </h2>
                        <p className="mt-3 text-[0.95rem] font-light leading-[1.55] text-[rgba(245,245,245,0.9)]">
                          {development.subtext}
                        </p>
                      </div>
                    </div>
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
