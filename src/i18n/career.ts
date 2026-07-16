// Career timeline for the About page, per locale. Kept here so both the EN and
// PT About pages read from one source.

export type CareerEntry = {
  range: string;
  org: string;
  role: string;
  summary: string;
};

export const careerTimeline: { en: CareerEntry[]; pt: CareerEntry[] } = {
  en: [
    {
      range: "2023 → Present",
      org: "Techco.lab · NETZSCH",
      role: "Senior Product Designer · NETZSCH's innovation hub",
      summary:
        "NETZSCH's innovation hub, where I lead product design across its platforms end-to-end. The flagship is IRIS, the global industrial HMI spanning six product lines; alongside it, design systems and newer product bets, several of them AI-native builds.",
    },
    {
      range: "2022 → 2023",
      org: "Accenture",
      role: "Product Designer",
      summary:
        "UX for healthcare and public-sector products in distributed Agile teams across Latin America and EMEA. Research, flows, and high-fidelity prototypes.",
    },
    {
      range: "2021 → 2023",
      org: "Vortigo Digital",
      role: "Product Designer",
      summary:
        "Wireframes, flows, and interactive prototypes for fintech and cross-platform digital products. Analytics-informed iteration and content strategy.",
    },
    {
      range: "2020 → 2021",
      org: "ZOLY",
      role: "Journey Designer",
      summary:
        "End-to-end customer journeys across digital channels, conversational and chatbot flows, and conversion optimization.",
    },
    {
      range: "2019 → 2020",
      org: "Tekoa",
      role: "CX Designer",
      summary:
        "End-to-end customer experiences for large-scale digital products, from wireframes and flows through validated prototypes.",
    },
    {
      range: "2016 → 2019",
      org: "Youtz",
      role: "Game Designer & Innovations Analyst",
      summary:
        "Where I started. I designed educational games, their mechanics, flows, and interfaces, and ran product-innovation research and workshops.",
    },
  ],
  pt: [
    {
      range: "2023 → Atual",
      org: "Techco.lab · NETZSCH",
      role: "Product Designer Sênior · Hub de inovação da NETZSCH",
      summary:
        "O hub de inovação da NETZSCH, onde lidero o design de produto por todas as suas plataformas de ponta a ponta. O carro-chefe é o IRIS, o HMI industrial global que abrange seis linhas de produto; ao lado dele, design systems e apostas de produto mais novas, várias delas construídas com IA.",
    },
    {
      range: "2022 → 2023",
      org: "Accenture",
      role: "Product Designer",
      summary:
        "UX pra produtos de saúde e do setor público em times ágeis distribuídos pela América Latina e EMEA. Pesquisa, fluxos e protótipos de alta fidelidade.",
    },
    {
      range: "2021 → 2023",
      org: "Vortigo Digital",
      role: "Product Designer",
      summary:
        "Wireframes, fluxos e protótipos interativos pra fintech e produtos digitais multiplataforma. Iteração guiada por dados e estratégia de conteúdo.",
    },
    {
      range: "2020 → 2021",
      org: "ZOLY",
      role: "Journey Designer",
      summary:
        "Jornadas de cliente de ponta a ponta pelos canais digitais, fluxos conversacionais e de chatbot, e otimização de conversão.",
    },
    {
      range: "2019 → 2020",
      org: "Tekoa",
      role: "CX Designer",
      summary:
        "Experiências de cliente de ponta a ponta pra produtos digitais de larga escala, dos wireframes e fluxos até protótipos validados.",
    },
    {
      range: "2016 → 2019",
      org: "Youtz",
      role: "Game Designer & Analista de Inovação",
      summary:
        "Onde comecei. Desenhei jogos educativos, suas mecânicas, fluxos e interfaces, e conduzi pesquisas de inovação de produto e workshops.",
    },
  ],
};
