export type Development = {
  slug: string;
  name: string;
  location: string;
  heroLine: string;
  strategicLine: string;
  image: string;
  statement: string[];
  visualText: string[];
  strategicInsight: string;
  modelLines: string[];
  finalShift: string[];
};

export const developments: Development[] = [
  {
    slug: "sukhi-group",
    name: "Sukhi Group",
    location: "Hyderabad",
    heroLine: "A strategic structure to move residential branding from generic visibility to category-defining market position.",
    strategicLine: "Urban expansion requires sharper category control.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80",
    statement: [
      "Fast-moving residential corridors reward visibility.",
      "They reward structured perception even more.",
      "Buyer confidence forms before campaigns fully begin."
    ],
    visualText: [
      "Buyer comparison begins before enquiry.",
      "Similarity weakens value before campaigns begin.",
      "That is where disciplined positioning changes the reading."
    ],
    strategicInsight:
      "When the category speaks in the same language, the sharpest structure becomes the real differentiator.",
    modelLines: [
      "Position before promotion",
      "Perception before lead expansion",
      "Narrative control before campaign scale"
    ],
    finalShift: [
      "The development would move from being seen as available inventory to being read as a more deliberate market choice.",
      "That shift improves the quality of attention before performance is measured."
    ]
  },
  {
    slug: "vertex-homes",
    name: "Vertex Homes",
    location: "Hyderabad",
    heroLine: "A positioning-led model to shift real estate communication from generic advertising to sharper category distinction.",
    strategicLine: "Competitive corridors demand sharper distinction.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80",
    statement: [
      "Quality alone rarely secures perception.",
      "The market responds to the frame around it.",
      "Without structure, quality is flattened into category sameness."
    ],
    visualText: [
      "Polished launches often still feel interchangeable.",
      "Attention arrives. Conviction does not.",
      "The gap sits between exposure and interpretation."
    ],
    strategicInsight:
      "A project becomes harder to compare generically when its position is defined before its campaigns are amplified.",
    modelLines: [
      "Position before promotion",
      "Meaning before media scale",
      "One narrative before channel fragmentation"
    ],
    finalShift: [
      "The development would feel more intentional and more difficult to reduce to category sameness.",
      "That is how stronger buyer quality begins."
    ]
  },
  {
    slug: "vasavi-group",
    name: "Vasavi Group",
    location: "Hyderabad",
    heroLine: "A strategic approach to move premium real estate brands from repetitive promotion to category-defining perception.",
    strategicLine: "Premium demand responds to controlled narrative.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
    statement: [
      "Premium environments are interpreted before they are evaluated.",
      "Presence alone does not create pricing confidence.",
      "The market reads order before it reads scale."
    ],
    visualText: [
      "Selective buyers respond to order and restraint.",
      "Noise weakens authority.",
      "Premium positioning fails when communication behaves like volume."
    ],
    strategicInsight:
      "Premium positioning fails when communication behaves like volume advertising instead of controlled category framing.",
    modelLines: [
      "Hierarchy before exposure",
      "Restraint before repetition",
      "Consistency before performance pressure"
    ],
    finalShift: [
      "The development would read as more considered, more composed, and more category-defining.",
      "That changes the seriousness of incoming demand."
    ]
  },
  {
    slug: "casagrand",
    name: "Casagrand",
    location: "Chennai",
    heroLine: "A structured growth model to shift large-scale real estate branding from generic acquisition to category authority.",
    strategicLine: "Scale needs stronger interpretive control.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
    statement: [
      "Large-scale development creates reach by default.",
      "It does not create coherence by default.",
      "The market needs a clearer operating logic to interpret scale."
    ],
    visualText: [
      "Volume often amplifies fragmentation.",
      "The market sees more and understands less.",
      "That is why cohesion must be built before acceleration."
    ],
    strategicInsight:
      "Scale becomes brand strength only when positioning, demand, and conversion operate inside one disciplined system.",
    modelLines: [
      "Position before expansion",
      "Buyer logic before channel volume",
      "Control before acceleration"
    ],
    finalShift: [
      "The development would present with greater cohesion across media, message, and response environments.",
      "That is what turns scale into durable authority."
    ]
  },
  {
    slug: "godrej-properties",
    name: "Godrej Properties",
    location: "Bengaluru",
    heroLine: "A precision-driven framework to shift project communication from generic campaigns to category-defining positioning.",
    strategicLine: "Institutional trust still needs project-level precision.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
    statement: [
      "Institutional credibility creates trust.",
      "Project-level precision creates preference.",
      "Project narratives still determine how authority is translated."
    ],
    visualText: [
      "Established brands are judged by coherence.",
      "Presence alone is expected.",
      "The real distinction comes from how clearly the project is framed."
    ],
    strategicInsight:
      "Even trusted brands lose premium distance when digital environments are built campaign-first instead of position-first.",
    modelLines: [
      "Narrative before amplification",
      "Tone before tactic",
      "Confidence before conversion pressure"
    ],
    finalShift: [
      "The project would feel clearer, more composed, and easier to interpret at a premium level.",
      "That strengthens both authority and buyer seriousness."
    ]
  },
  {
    slug: "rajapushpa",
    name: "Rajapushpa",
    location: "Hyderabad",
    heroLine: "A strategic real estate model to move premium visibility from generic advertising to category-defining brand control.",
    strategicLine: "Premium perception must lead demand quality.",
    image:
      "https://images.unsplash.com/photo-1462396240927-52058a6a84ec?auto=format&fit=crop&w=1800&q=80",
    statement: [
      "Premium demand is shaped by interpretation first.",
      "Exposure becomes secondary once confidence is formed.",
      "That makes positioning more important than volume."
    ],
    visualText: [
      "High-value buyers do not respond like mass audiences.",
      "They respond to structure.",
      "Confidence rises when the category is framed with restraint."
    ],
    strategicInsight:
      "Generic acquisition logic reduces premium developments to visible inventory instead of category-defining offers.",
    modelLines: [
      "Position before promotion",
      "Confidence before volume",
      "Structure before scale"
    ],
    finalShift: [
      "The development would feel less like available stock and more like a deliberate market category.",
      "That changes the quality of attention before any result is discussed."
    ]
  }
];

export function getDevelopment(slug: string) {
  return developments.find((item) => item.slug === slug);
}
