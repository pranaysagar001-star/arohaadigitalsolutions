import { InteriorPage } from "@/components/interior-page";

export default function DevelopmentsPage() {
  return (
    <InteriorPage
      eyebrow="Developments"
      title="For Projects With Consequence"
      statement="We work with developments where positioning, absorption, and buyer psychology materially affect value."
      items={[
        "High-value inventory",
        "Clear market ambition",
        "Discretion at every stage"
      ]}
      closing="Access is reserved for projects where strategy can change the commercial outcome."
    />
  );
}
