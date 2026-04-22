import { InteriorPage } from "@/components/interior-page";

export default function InsightsPage() {
  return (
    <InteriorPage
      eyebrow="Insights"
      title="Market Notes For The Few"
      statement="Our perspective is built from live buyer behavior, launch timing, and high-value inventory patterns."
      items={[
        "Private market signals",
        "Buyer intent shifts",
        "Launch timing intelligence"
      ]}
      closing="Public commentary stays limited. Strategic clarity stays private."
    />
  );
}
