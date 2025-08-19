// /data/projects.ts
export interface Project {
  slug: string;
  title: string;
  location: string;
  category: string;
  images: string[]; // changed from single `image`
  description: string;
}

export const projects: Project[] = [
  {
    slug: "pearl-city",
    title: "Pearl City",
    location: "Hyderabad",
    category: "Residential Township",
    images: [
      "/projects/srikakulamint/1.jpeg",
      "/projects/srikakulamint/2.jpeg",
      "/projects/srikakulamint/3.jpeg",
    ],
    description:
      "A township of 5 apartments with opulent 3 BHK spaces, designed for ample natural lighting and ventilation. Earthy tones and local materials reflect a sustainable approach.",
  },
  {
    slug: "soma-adobe",
    title: "Soma Adobe",
    location: "Hyderabad",
    category: "Residential",
    images: ["/projects/somaabode/1.jpg"],
    description:
      "A premium apartment project with lavishly proportioned 3 BHK homes, integrating natural ventilation, earthy tones, and locally sourced sustainable materials.",
  },
  {
    slug: "commercial-residential-complex",
    title: "Commercial & Residential Complex",
    location: "Hyderabad",
    category: "Mixed-Use Development",
    images: [
      "/projects/villainteriors/1.jpeg",
      "/projects/villainteriors/2.jpeg",
      "/projects/villainteriors/3.jpeg",
      "/projects/villainteriors/4.jpeg",
    ],
    description:
      "A hybrid commercial and residential building designed to blend functionality with sustainable architecture principles.",
  },
  {
    slug: "celest-apartments",
    title: "Celest Apartments",
    location: "Palasa",
    category: "Residential",
    images: [
      "/projects/extintraajam/1.jpeg",
      "/projects/extintraajam/2.jpeg",
      "/projects/extintraajam/3.jpeg",
      "/projects/extintraajam/4.jpeg",
    ],
    description:
      "A thoughtfully designed apartment complex balancing contemporary living with contextual sustainability concepts.",
  },
  {
    slug: "luxury-villa",
    title: "Luxury Villa",
    location: "Vizag",
    category: "Residential Villa",
    images: ["/projects/luxury_villas_1.png", "/projects/luxury_villas_2.png"],
    description:
      "A 5BHK villa with a luxury contemporary aesthetic, crafted with modern materials and elements that highlight sophistication and comfort.",
  },
  {
    slug: "cafe-cuppers",
    title: "Cafe Cuppers",
    location: "Warangal",
    category: "Interiors",
    images: [
      "/projects/cafeint/1.png",
      "/projects/cafeint/2.png",
      "/projects/cafeint/3.png",
      "/projects/cafeint/4.png",
      "/projects/cafeint/5.png",
      "/projects/cafeint/6.png",
      "/projects/cafeint/7.png",
      "/projects/cafeint/8.png",
    ],
    description:
      "Tucked in the heart of Warangal, Café Cuppers is more than just a coffee spot—it’s a spatial experience designed to invite, engage, and inspire. Conceptualized as a cozy yet contemporary retreat, the café blends local cultural influences with modern design sensibilities, creating an atmosphere that feels both familiar and fresh.",
  },
];
