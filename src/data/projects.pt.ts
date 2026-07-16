// PT-BR overlay for the project index/listing. Only translated text; every
// path, flag, id, and metric value comes from projects.ts. Keyed by slug.

import type { ProjectPtOverlay } from "../i18n/content";

export const projectsPt: Record<string, ProjectPtOverlay> = {
  "iris-v3": {
    type: "Plataforma HMI industrial",
    summary:
      "Designer único da plataforma HMI global da NETZSCH. Seis linhas de produto, um design system, em três idiomas por 36 países.",
    metricLabel: "Linhas de produto unificadas",
  },
  "netzsch-design-system": {
    summary:
      "Construí e mantive o DASDS, o design system da área de Digital and Automation Systems da NETZSCH. Figma e React/Storybook, usado por vários times.",
    metricLabel: "Times de produto",
  },
  "myct-connecticut": {
    type: "Plataforma do setor público",
    summary: "Portal voltado ao cidadão. WCAG 2.1 AA, linguagem simples, mobile-first.",
  },
  nerida: {
    client: "Fundador solo",
    type: "SaaS de saúde modular · Feito com IA",
    summary:
      "Plataforma modular para profissionais de saúde autônomos no Brasil. Psicólogos em produção, nutricionistas em beta. Desenhada, construída e operada sozinho.",
    metricLabel: "Clientes ativos",
  },
  norius: {
    type: "Plataforma IoT · Design System",
    summary:
      "Redesign de uma plataforma industrial de monitoramento IoT, da descoberta ao Storybook. 33 famílias de componentes, 179 stories, um protótipo navegável.",
    metricLabel: "Stories no Storybook",
  },
  "garmin-coach": {
    client: "Projeto paralelo · OSS",
    type: "CLI + Web com IA",
    summary:
      "Planos de treino em JSON gerados por um LLM, enviados direto pro Garmin Connect.",
  },
  mosey: {
    client: "Solo · Pessoal",
    type: "App iOS · IA no dispositivo",
    summary:
      "Um app de viagem pessoal pra 27 dias entre Dinamarca e Noruega. iOS nativo, anti-itinerário, planejamento gerado por IA no próprio aparelho.",
  },
  techcolab: {
    type: "Landing · Fluxo com IA",
    summary:
      "Stack inteira nas mãos do designer. Do conceito à URL no ar com Figma Make + vibe coding.",
  },
  "digital-reports": {
    type: "SaaS industrial · Relatórios de batelada",
    summary:
      "Relatórios de batelada pra moagem industrial: 36 frames hi-fi no Figma mais um protótipo em código funcionando à frente do roadmap de produção.",
  },
  "netzsch-customer-portal": {
    type: "Portal B2B self-service",
    summary:
      "Portal self-service pra clientes industriais: máquinas, peças de reposição, contratos e um assistente com IA. 110+ frames, 12 fluxos, 4 papéis.",
    metricLabel: "Fluxos desenhados",
  },
  "iris-design-system": {
    summary:
      'A biblioteca de componentes por trás da plataforma HMI IRIS. 29 famílias de componentes, tokens, variações de painel de 12" e 15".',
    metricLabel: "Famílias de componentes",
  },
  superdigital: {
    type: "Banco digital · Pix",
    summary:
      "MVP do Pix pra conta digital do Santander: pagar, receber e gerenciar chaves. Fintech atendendo milhões na América Latina.",
  },
  "dell-expert-network": {
    type: "Educação enterprise",
    summary: "Plataforma de certificação pros parceiros enterprise da Dell.",
  },
  eye: {
    type: "Jogo · TPS narrativo",
    summary: "Shooter em terceira pessoa com mecânicas guiadas pela narrativa.",
  },
  "gan-dath": {
    type: "Jogo · 3D experimental",
    summary: "Jogo 3D experimental explorando mecânicas de gravidade.",
  },
};
