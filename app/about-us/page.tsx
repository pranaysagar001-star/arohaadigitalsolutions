import { InteriorPage } from "@/components/interior-page";

export default function AboutUsPage() {
  return (
    <InteriorPage
      eyebrow="About Us"
      title="A Private Digital Practice"
      statement="Arohaa Digital Solutions partners with select real estate developments where status, timing, and market perception must be controlled."
      items={[
        "Selective by design",
        "Strategy before scale",
        "Built for high-value launches"
      ]}
      closing="The work is quiet. The commercial effect is not."
    />
  );
}
