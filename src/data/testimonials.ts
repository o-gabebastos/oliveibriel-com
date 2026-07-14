export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  relation?: string; // how they worked with Gabriel — adds credibility
  translated?: boolean; // originally written in Portuguese, translated faithfully
};

// Real LinkedIn recommendations (linkedin.com/in/oliveibriel · Received).
// English recommendations are verbatim (lightly excerpted); Portuguese ones are
// faithfully translated and flagged.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Gabriel is one of the best designers I have ever worked with — a wide range of skills and experience, consistently delivering outstanding designs with impressive speed. Beyond his technical prowess, he's an exceptional team player and incredibly generous. I learned a great deal from him.",
    name: "Renata Eger",
    role: "Product Designer & User Researcher",
  },
  {
    quote:
      "An exceptional User Experience Designer whose speed and efficiency are truly remarkable. Gabriel consistently delivers high-quality designs at an impressive pace without compromising on detail or creativity — not only fast, but visually captivating and highly functional.",
    name: "Cleiton Capristano",
    role: "Full Stack Developer",
    relation: "worked with Gabriel on the same team",
  },
  {
    quote:
      "An excellent professional — a 360° view of the problem and of the ideal journey. Proactive and dedicated, he efficiently delivers everything he takes on. It was excellent having Gabriel on my team!",
    name: "Bruna M. do Amaral",
    role: "IT & Digital Products Executive",
    relation: "Gabriel's client",
    translated: true,
  },
  {
    quote:
      "Gabriel is the classic problem-solver. We worked together twice, and I always saw him as collaborative, with well-crafted, proactive solutions. His strength as a UX designer is in the ideation and prototyping moments.",
    name: "Douglas Jordy",
    role: "Senior Product Designer",
    relation: "worked with Gabriel on the same team",
    translated: true,
  },
  {
    quote:
      "I recommend Gabriel with my eyes closed — for his professionalism, business vision, agility, strategy, communication, the quality of his delivery, and his design-system knowledge, always grounded in the user experience.",
    name: "Simone Noronha",
    role: "Scrum Master & Agile Coach",
    translated: true,
  },
];
