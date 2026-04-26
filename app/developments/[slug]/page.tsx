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
            <div className="max-w-[40rem]">
              <p className="text-[0.8rem] font-light uppercase tracking-[0.2em] text-[#A68A5B]">
                {development.location}
              </p>
              <h1 className="mt-5 font-display text-[3rem] font-normal leading-[1.16] tracking-[0.02em] text-[#F5F5F5] sm:text-[3.7rem] lg:text-[4.5rem]">
                {development.name}
              </h1>
              <p className="mt-7 max-w-[34rem] text-base font-light leading-[1.65] tracking-[0.01em] text-[rgba(245,245,245,0.9)]">
                A strategic model to shift real estate brands from generic advertising to
                category-defining positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-[120px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[72rem] space-y-[100px]">
          <StructuredSection
            label="CONTEXT"
            content={development.context}
          />
          <StructuredSection
            label="MARKET OBSERVATION"
            content={development.marketObservation}
          />
          <StructuredSection
            label="STRATEGIC GAP"
            content={development.strategicGap}
          />
          <StructuredSection
            label="DEVELOPMENT MODEL"
            content={development.developmentModel}
          />
          <StructuredSection
            label="EXPECTED SHIFT"
            content={development.expectedShift}
          />
        </div>
      </section>
    </main>
  );
}

function StructuredSection({
  label,
  content
}: {
  label: string;
  content: string[];
}) {
  return (
    <section className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
      <div>
        <p className="text-[0.8rem] font-light uppercase tracking-[0.2em] text-[#A68A5B]">
          {label}
        </p>
      </div>
      <div className="max-w-[38rem] space-y-5">
        {content.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base font-light leading-[1.7] tracking-[0.01em] text-[#555555]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
