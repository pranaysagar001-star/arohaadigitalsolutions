import { InteriorPage } from "@/components/interior-page";

export default function CaseStudiesPage() {
  return (
    <InteriorPage
      eyebrow="Case Studies"
      title="Proof Is Shared Privately"
      statement="Selected work is reviewed only after qualification. Context matters. Numbers without strategy do not."
      items={[
        "Inventory movement",
        "Market repositioning",
        "Controlled release strategy"
      ]}
      closing="The strongest work is rarely public."
    />
  );
}
