import { notFound } from "next/navigation";

import { developments, getDevelopment } from "../data";

export function generateStaticParams() {
  return developments.map((development) => ({
    slug: development.slug
  }));
}

export default async function DevelopmentDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const development = getDevelopment(slug);

  if (!development) {
    notFound();
  }

  return (
    <main className="bg-[#FAF9F6] pb-28 pt-24 text-[#1A1A1A] sm:pb-36 sm:pt-28 lg:pb-44">
      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="relative min-h-[84vh] overflow-hidden rounded-[24px]">
          <div
            aria-label={development.name}
            role="img"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${development.image}')` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.24)_44%,rgba(0,0,0,0)_80%)]" />
          <div className="relative flex min-h-[84vh] items-end px-8 pb-12 sm:px-12 sm:pb-16 lg:px-20 lg:pb-20">
            <div className="max-w-[34rem]">
              <p className="text-[0.8rem] font-light uppercase tracking-[0.2em] text-[#A68A5B]">
                {development.location}
              </p>
              <h1 className="mt-5 font-display text-[3rem] font-normal leading-[1.16] tracking-[0.02em] text-[#F5F5F5] sm:text-[3.7rem] lg:text-[4.5rem]">
                {development.name}
              </h1>
              <p className="mt-7 max-w-[34rem] text-base font-light leading-[1.65] tracking-[0.01em] text-[rgba(245,245,245,0.9)]">
                {development.heroLine}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-[120px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[78rem] space-y-[110px]">
          <section className="px-4 text-center sm:px-8">
            <div className="mx-auto max-w-[46rem]">
              <p className="font-display text-[2rem] font-normal leading-[1.22] tracking-[0.016em] text-[#1A1A1A] sm:text-[2.3rem] lg:text-[2.7rem]">
                Most developers compete for attention.
                <br />
                Very few control perception.
              </p>
            </div>
          </section>

          <section className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div
              aria-label={`${development.name} strategic environment`}
              role="img"
              className="min-h-[30rem] rounded-[24px] bg-cover bg-center lg:min-h-[36rem]"
              style={{ backgroundImage: `url('${development.image}')` }}
            />
            <div className="max-w-[30rem]">
              <p className="text-[0.84rem] font-normal uppercase tracking-[0.22em] text-[#A68A5B]">
                CONTEXT <span className="ml-3 inline-block h-px w-20 align-middle bg-[rgba(166,138,91,0.35)]" />
              </p>
              <h2 className="mt-5 font-display text-[1.9rem] font-normal leading-[1.22] tracking-[0.014em] text-[#1A1A1A] sm:text-[2.1rem]">
                Category reading begins before campaign response.
              </h2>
              <div className="mt-5 space-y-4">
                {development.statement.map((line) => (
                  <p
                    key={line}
                    className="text-[1.02rem] font-light leading-[1.7] tracking-[0.01em] text-[#555555]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <StructuredSection
            label="MARKET OBSERVATION"
            heading="The market rewards interpretation before momentum."
            content={development.visualText}
          />

          <section className="px-4 text-center sm:px-8">
            <div className="mx-auto max-w-[44rem]">
              <p className="font-display text-[1.85rem] font-normal leading-[1.24] tracking-[0.015em] text-[#1A1A1A] sm:text-[2.15rem] lg:text-[2.45rem]">
                {development.strategicInsight}
              </p>
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div>
              <p className="text-[0.84rem] font-normal uppercase tracking-[0.22em] text-[#A68A5B]">
                DEVELOPMENT MODEL <span className="ml-3 inline-block h-px w-20 align-middle bg-[rgba(166,138,91,0.35)]" />
              </p>
            </div>
            <div className="max-w-[34rem] space-y-4">
              {development.modelLines.map((line) => (
                <p
                  key={line}
                  className="font-display text-[1.45rem] font-medium leading-[1.22] tracking-[0.012em] text-[#1A1A1A] sm:text-[1.62rem] lg:text-[1.78rem]"
                >
                  {line}
                </p>
              ))}
            </div>
          </section>

          <StructuredSection
            label="EXPECTED SHIFT"
            heading="The shift begins in how the development is read."
            content={development.finalShift}
          />
        </div>
      </section>
    </main>
  );
}

function StructuredSection({
  label,
  heading,
  content
}: {
  label: string;
  heading: string;
  content: string[];
}) {
  return (
    <section className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
      <div>
        <p className="text-[0.84rem] font-normal uppercase tracking-[0.22em] text-[#A68A5B]">
          {label} <span className="ml-3 inline-block h-px w-20 align-middle bg-[rgba(166,138,91,0.35)]" />
        </p>
      </div>
      <div className="max-w-[34rem]">
        <h2 className="font-display text-[1.7rem] font-normal leading-[1.24] tracking-[0.014em] text-[#1A1A1A] sm:text-[1.9rem]">
          {heading}
        </h2>
        <div className="mt-5 space-y-4">
        {content.map((line) => (
          <p
            key={line}
            className="text-[1.02rem] font-light leading-[1.7] tracking-[0.01em] text-[#555555]"
          >
            {line}
          </p>
        ))}
        </div>
      </div>
    </section>
  );
}
