import Link from "next/link";

import { caseStudies } from "./data";

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#FAF9F6] pb-28 pt-24 text-[#1A1A1A] sm:pb-36 sm:pt-28 lg:pb-44">
      <section className="px-5 pb-[120px] pt-12 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
        <div className="mx-auto max-w-[78rem]">
          <div className="text-center">
            <p className="text-[0.8rem] font-light uppercase tracking-[0.2em] text-[#A68A5B]">
              Case Studies
            </p>
            <h1 className="mt-5 font-display text-[2.7rem] font-normal leading-[1.18] tracking-[0.02em] text-[#1A1A1A] sm:text-[3.2rem] lg:text-[3.7rem]">
              Strategic Case Analysis &amp; Market Frameworks
            </h1>
            <p className="mx-auto mt-6 max-w-[46rem] text-base font-light leading-[1.7] tracking-[0.01em] text-[#555555]">
              These studies represent structured interpretations of real estate
              developments, built from market observation and positioning systems.
            </p>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <article>
                  <div
                    aria-label={study.name}
                    role="img"
                    className="aspect-[16/9] overflow-hidden rounded-[22px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url('${study.image}')` }}
                  />
                  <div className="mt-6 max-w-[22rem] space-y-3">
                    <h2 className="font-sans text-[1.28rem] font-semibold leading-[1.2] text-[#1A1A1A] sm:text-[1.38rem]">
                      {study.name}
                    </h2>
                    <p className="text-[0.82rem] font-light uppercase tracking-[0.16em] text-[#555555]">
                      {study.location}
                    </p>
                    <p className="text-[0.96rem] font-light leading-[1.55] text-[#555555]">
                      {study.problemLine}
                    </p>
                    <p className="pt-1 text-[0.84rem] font-normal tracking-[0.01em] text-[#A68A5B] transition-colors duration-300 group-hover:text-[#8f7345]">
                      View Case Study →
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
