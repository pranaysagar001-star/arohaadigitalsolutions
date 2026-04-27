export type CaseStudy = {
  slug: string;
  name: string;
  location: string;
  problemLine: string;
  heroStatement: string;
  heroLine: string;
  image: string;
  marketObservation: string[];
  strategicGap: string[];
  approachSupport: string;
  expectedShift: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sukhi-group",
    name: "Sukhi Group",
    location: "Hyderabad",
    problemLine: "Expansion increased visibility, but not differentiation.",
    heroStatement: "Visibility increased. Distinction did not.",
    heroLine:
      "A strategic model to move residential branding from generic expansion into category-defining market position.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80",
    marketObservation: [
      "Residential expansion corridors generate attention quickly.",
      "Buyers compare faster when surrounding launches look and sound alike.",
      "Visibility rises before meaning becomes clear."
    ],
    strategicGap: [
      "Growth slows when expansion is not matched by a stronger category frame.",
      "The market sees more, but understands less.",
      "Positioning weakens when communication stays interchangeable."
    ],
    approachSupport:
      "The framework would align message hierarchy, market reading, and demand architecture into one controlled structure.",
    expectedShift: [
      "Buyer understanding becomes sharper before enquiry begins.",
      "Attention quality improves because the development is interpreted with clearer distinction.",
      "Positioning moves from visible inventory toward a more deliberate market category."
    ]
  },
  {
    slug: "vertex-homes",
    name: "Vertex Homes",
    location: "Hyderabad",
    problemLine: "Competitive corridor reduced distinction across launches.",
    heroStatement: "Competition increased. Distinction weakened.",
    heroLine:
      "A positioning-led case model to shift project communication from generic competition into category-specific market clarity.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80",
    marketObservation: [
      "Growth corridors compress differences between launches.",
      "High-frequency competition reduces the impact of product quality alone.",
      "Buyers respond to how the project is framed, not only how often it appears."
    ],
    strategicGap: [
      "Distinction fails when communication stops at visibility.",
      "The project enters comparison before its position is established.",
      "That weakens conviction even when attention is present."
    ],
    approachSupport:
      "The system would define a clearer interpretive frame before campaigns expand, so every channel reinforces one market reading.",
    expectedShift: [
      "The development is understood with more precision at the first point of contact.",
      "Enquiry quality improves because distinction precedes performance activity.",
      "Market reading becomes harder to flatten into category sameness."
    ]
  },
  {
    slug: "vasavi-group",
    name: "Vasavi Group",
    location: "Hyderabad",
    problemLine: "Premium demand existed, but narrative lacked control.",
    heroStatement: "Demand existed. Narrative control did not.",
    heroLine:
      "A strategic positioning model to shift premium real estate communication from repetitive promotion into category-defining brand authority.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
    marketObservation: [
      "Premium demand responds to order, restraint, and confidence.",
      "Buyers in this segment interpret brand tone before campaign frequency.",
      "Noise weakens authority even when product quality is strong."
    ],
    strategicGap: [
      "Positioning fails when premium communication behaves like volume advertising.",
      "The market reads presence, but not enough control.",
      "That slows confidence before decision-making begins."
    ],
    approachSupport:
      "The framework would align tone, hierarchy, and demand systems so premium reading is sustained across every touchpoint.",
    expectedShift: [
      "The development begins to feel more considered and more category-defining.",
      "Buyer confidence rises because the narrative behaves with more control.",
      "Enquiry quality improves through sharper premium interpretation."
    ]
  },
  {
    slug: "casagrand",
    name: "Casagrand",
    location: "Chennai",
    problemLine: "Scale increased output, but diluted interpretive clarity.",
    heroStatement: "Scale expanded. Clarity thinned out.",
    heroLine:
      "A structured real estate framework to shift large-scale communication from generic acquisition intensity into category-defining coherence.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
    marketObservation: [
      "Large-scale developers generate reach by default.",
      "The challenge is not attention, but coherence across multiple entry points.",
      "Without structure, scale intensifies fragmentation."
    ],
    strategicGap: [
      "Growth slows when message volume outpaces interpretive control.",
      "The market sees more assets, but the brand reads with less clarity.",
      "Positioning becomes diluted by channel expansion."
    ],
    approachSupport:
      "The model would organize buyer logic, positioning hierarchy, and channel behavior into one disciplined operating layer.",
    expectedShift: [
      "The development portfolio reads with stronger cohesion across campaigns and environments.",
      "Buyer understanding becomes more stable as scale expands.",
      "Positioning clarity improves before demand systems are intensified."
    ]
  },
  {
    slug: "godrej-properties",
    name: "Godrej Properties",
    location: "Bengaluru",
    problemLine: "Institutional trust did not translate into project-level preference.",
    heroStatement: "Trust existed. Preference remained unresolved.",
    heroLine:
      "A precision-led strategy to shift project communication from generic campaign credibility into category-defining buyer preference.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
    marketObservation: [
      "Established brands enter the market with default trust.",
      "Project-level preference still depends on narrative precision.",
      "The market expects presence and evaluates coherence."
    ],
    strategicGap: [
      "Positioning fails when trusted brands rely on campaign repetition instead of project-specific meaning.",
      "Credibility remains intact, but preference does not deepen.",
      "That limits premium distance at the project layer."
    ],
    approachSupport:
      "The framework would sharpen project narrative, align tone with brand authority, and structure demand environments around clearer interpretation.",
    expectedShift: [
      "The project reads with more precision and less friction.",
      "Buyer confidence improves because authority is translated more clearly.",
      "Preference strengthens through tighter project-level positioning."
    ]
  },
  {
    slug: "rajapushpa",
    name: "Rajapushpa",
    location: "Hyderabad",
    problemLine: "Premium positioning required stronger perception control.",
    heroStatement: "Premium value existed. Perception control did not.",
    heroLine:
      "A strategic market model to shift premium real estate visibility from generic advertising into category-defining perception control.",
    image:
      "https://images.unsplash.com/photo-1462396240927-52058a6a84ec?auto=format&fit=crop&w=1800&q=80",
    marketObservation: [
      "Premium buyers interpret value before they respond to promotion.",
      "Mass-market acquisition logic weakens that reading.",
      "Confidence forms through structure, not repetition."
    ],
    strategicGap: [
      "Growth slows when premium projects are marketed with generic performance logic.",
      "The product is reduced to visible inventory instead of elevated category.",
      "Positioning loses control before enquiry quality develops."
    ],
    approachSupport:
      "The model would align premium framing, demand structure, and conversion environments around a more deliberate buyer reading.",
    expectedShift: [
      "The development feels more intentional and more difficult to interpret generically.",
      "Buyer understanding becomes more precise before conversation begins.",
      "Positioning clarity rises because perception is controlled with more discipline."
    ]
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
