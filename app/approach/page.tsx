import { InteriorPage } from "@/components/interior-page";

export default function ApproachPage() {
  return (
    <InteriorPage
      eyebrow="Approach"
      title="Less Noise. More Control."
      statement="We shape how the market sees, values, and moves toward a development before spend is scaled."
      items={[
        "Position before promotion",
        "Demand before visibility",
        "Velocity before volume"
      ]}
      closing="Execution follows strategy. Never the reverse."
    />
  );
}
