import { InteriorPage } from "@/components/interior-page";

export default function TestimonialsPage() {
  return (
    <InteriorPage
      eyebrow="Testimonials"
      title="Shared With Discretion"
      statement="Client references are reserved for qualified conversations, where context and confidentiality can be respected."
      items={["Private references", "Verified conversations", "No public theatre"]}
      closing="Trust is handled privately."
    />
  );
}
