// All UI copy, keyed by locale. Case-study and project content live in the
// data files (cases.ts / projects.ts) and their .pt.ts translations.
// Rich paragraphs that carry inline emphasis are stored as HTML strings and
// rendered with set:html.

import type { Locale } from "./config";

type Copy = typeof copy.en;

export function useCopy(locale: Locale): Copy {
  return copy[locale];
}

export const copy = {
  en: {
    nav: {
      tagline: "Designer · Curitiba",
      getInTouch: "Get in touch",
      work: "Work",
      about: "About",
      openPalette: "Open command palette",
      switchTo: "Português",
    },
    cmdk: {
      placeholder: "Search projects, pages, or actions…",
      pages: "Pages",
      projects: "Projects",
      actions: "Actions",
      home: "Home",
      work: "Work",
      about: "About",
      contact: "Contact",
      toggleTheme: "Toggle theme",
      sendEmail: "Send email",
    },
    footer: {
      tagline:
        "I design and build industrial SaaS and design systems at Techco.lab, NETZSCH's innovation hub, and I ship AI-native products solo on the side. Inbox is open.",
      site: "Site",
      connect: "Connect",
      work: "Work",
      about: "About",
      contact: "Contact",
      pressK: "Press ⌘K to search",
      location: "Curitiba, BR",
    },
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      optional: "(optional)",
      problem: "What's the problem?",
      phName: "Your name",
      phEmail: "you@company.com",
      phCompany: "Where you work",
      phMessage:
        "A few lines about the product, the constraint, and the timeline.",
      send: "Send message",
      sending: "Sending…",
      or: "or",
      success: "Sent. I'll reply within a few days.",
      error: "Something went wrong. Try again or email me directly.",
      subject: "New message from oliveibriel.com",
    },
    seo: {
      homeTitle:
        "Gabriel Oliveira · Senior Product Designer | Industrial SaaS, Design Systems & AI",
      homeDescription:
        "Senior product designer with 7+ years shipping industrial SaaS, design systems, and AI-native tools. I work at Techco.lab, NETZSCH's innovation hub, where I design platforms like IRIS end to end, and I build AI-native SaaS solo on the side. Based in Curitiba, Brazil.",
      aboutTitle: "About · Gabriel Oliveira",
      aboutDescription:
        "Senior product designer at Techco.lab, NETZSCH's innovation hub. 7+ years across industrial SaaS, design systems, fintech, and public-sector platforms. I design and build, more and more with AI. Based in Curitiba, Brazil.",
      workTitle: "Work · Gabriel Oliveira",
      workDescription:
        "Case studies across industrial SaaS, design systems, AI-native tools, fintech, and public-sector platforms.",
      contactTitle: "Contact · Gabriel Oliveira",
      contactDescription:
        "Get in touch about new projects or collaborations.",
    },
    home: {
      heroEyebrow: "Senior Product Designer · 7+ years",
      heroHtml:
        'I design and ship <span class="kw">industrial SaaS</span>, <span class="kw">design systems</span>, and <span class="kw">AI-native tools</span>. I\'m a product designer at <span class="font-medium text-[var(--color-fg)]">Techco.lab</span>, <span class="font-medium text-[var(--color-fg)]">NETZSCH</span>\'s innovation hub, where I design platforms like <span class="font-medium text-[var(--color-fg)]">IRIS</span> end to end. On the side I build AI-native SaaS <span class="font-medium text-[var(--color-fg)]">solo</span>.',
      viewWork: "View selected work",
      getInTouch: "Get in touch",
      trustedBy: "Trusted by · Selected clients",
      selectedWork: "Selected work",
      recentProjects: "Recent projects.",
      allPrefix: "All",
      allSuffix: "projects →",
      personalEyebrow: "Personal projects",
      personalTitle: "Side bets & weekend builds.",
      personalBlurb:
        "Things I built for myself: open source, AI-native, shipped because I wanted them to exist.",
      approachEyebrow: "Approach",
      approachTitle: "How I work.",
      approachIntro:
        "Four principles I actually use. Each one maps to a project on this site.",
      cards: [
        {
          t: "Ship before you generalize",
          d: "Build the messy v1 with real users, then pull the patterns out of it. IRIS V3's design system started as five operator screens, not a table of tokens.",
          tag: "IRIS V3",
        },
        {
          t: "Design for the operator",
          d: "Industrial software gets used under gloves, glare, and time pressure. I tune color, hierarchy, and feedback for the worst lighting on the floor, not the marketing shot.",
          tag: "NETZSCH HMIs",
        },
        {
          t: "Own the full stack",
          d: "When it's faster, I go from design to React to deploy myself. Nerida shipped solo, start to finish, with Claude Code as my build partner.",
          tag: "Nerida",
        },
        {
          t: "AI for the boring parts",
          d: "I let the AI handle the tedious parts: boilerplate, wiring data together, first-draft copy, throwaway scripts. Taste, the decisions, and the system itself stay mine.",
          tag: "Solo builds",
        },
      ],
      contactEyebrow: "Get in touch",
      contactTitle: "Currently open to new work.",
      contactPara:
        "Product design and AI-native build work, whether full-time, contract, or advisory. I usually reply within a few days.",
      contactList: [
        "Product design · AI-native builds",
        "Remote · UTC−3 · EN / PT-BR",
        "Available",
      ],
    },
    about: {
      eyebrow: "About",
      h1a: "Senior Product Designer.",
      h1b: "7+ years shipping.",
      introHtml:
        'Based in Curitiba, Brazil. I\'m a product designer at <span class="text-[var(--color-fg)]">Techco.lab</span>, NETZSCH\'s innovation hub, where I design industrial platforms end to end. <span class="text-[var(--color-fg)]">IRIS</span>, the global HMI, is one of them. On the side I build <span class="text-[var(--color-fg)]">AI-native SaaS</span> solo, like Nerida.',
      para2:
        "Seven-plus years across industrial SaaS, design systems, fintech, and public-sector platforms, with a game-design background underneath it all. B2B, messy domains, and AI-native work are where I'm most useful.",
      available: "Available",
      role: "Role",
      roleVal: "Senior Product Designer",
      focus: "Focus",
      focusVal: "B2B SaaS · Design Systems · AI",
      basedIn: "Based in",
      basedInVal: "Curitiba, Brazil · UTC−3",
      currently: "Currently",
      currentlyVal: "Techco.lab · Independent",
      languages: "Languages",
      languagesVal: "Portuguese (native) · English (fluent)",
      resumeCv: "Resume / CV",
      downloadPdf: "Download PDF",
      linkedin: "LinkedIn",
      email: "Email",
      journeyEyebrow: "Journey",
      journeyTitle: "From games to SaaS.",
      journeyP1Html:
        "I started in games. I studied game design and shipped two of my own: a narrative third-person shooter and an experimental 3D game built around gravity. That's where I learned to think in systems, feedback, and pacing, and it's still how I read an interface. What does it teach you, and how fast?",
      journeyP2Html:
        'From there it went mobile, fintech, public sector, and enterprise, and now industrial software for the engineers who run NETZSCH instruments. These days I focus on B2B, design systems, and actually shipping, more and more with AI in the loop. I pair the design intent with AI-assisted build to take products all the way, from a clinical SaaS to internal tools.',
      experienceEyebrow: "Experience",
      experienceTitle: "Career timeline.",
      experienceSubPrefix: "Selected engagements, ordered by year. Full work history on",
      skillsEyebrow: "Skills",
      skillsTitle: "What I do.",
      catDesign: "Design",
      catTools: "Tools & Code",
      catAi: "AI workflow",
      catDomains: "Domains",
      skillsDesign: [
        "Product Design",
        "UX Strategy",
        "Design Systems",
        "Information Architecture",
        "Prototyping",
        "Usability Testing",
        "Workshops",
        "Accessibility",
      ],
      skillsTools: [
        "React",
        "TypeScript",
        "Next.js",
        "Astro",
        "Tailwind",
        "Supabase",
        "Storybook",
        "Figma",
      ],
      skillsAi: [
        "Claude Code",
        "Cursor",
        "LLM prompting",
        "Vibe coding",
        "AI-assisted build",
        "Structured prompting",
      ],
      skillsDomains: [
        "Industrial SaaS",
        "B2B platforms",
        "Fintech",
        "Healthcare",
        "Public sector",
        "Games",
      ],
      outsideEyebrow: "Outside of work",
      outsideTitle: "Off the clock.",
      outsideP1:
        "Three French Bulldogs at home: Link, Koda, and Bolt. They run my mornings and sit in on every call.",
      outsideP2:
        "Running on weekends, back on an Apple Watch after a long Garmin detour. And games, still. I grew up making them and I still play them closely. A well-built game teaches pacing, feedback, and restraint as well as any design book. That's not a metaphor, it's where a lot of my instincts come from.",
      outsideP3:
        "I cook when I have the patience and order when I don't. I read more interface code than design theory.",
      elsewhereEyebrow: "Elsewhere",
      elsewhereTitle: "Where to find me.",
      elsewhereLinkedinNote: "Career, recommendations, the long-form CV.",
      elsewhereEmailNote: "Direct line. I respond within a few days.",
    },
    work: {
      heroEyebrowPrefix: "Work",
      heroEyebrowProjects: "projects",
      heroH1a: "Everything I've shipped",
      heroH1b: "since 2016.",
      heroPara:
        "Every project across industrial SaaS, design systems, and AI-native tools, grouped by how I work, not just by when.",
      groups: [
        {
          eyebrow: "Industrial SaaS · Design systems",
          title: "Where I go deep.",
          blurb:
            "Inside NETZSCH's product lines: the on-machine HMIs, the B2B portals, and the design systems that hold them together.",
        },
        {
          eyebrow: "AI-native · Solo builds",
          title: "Where I move fast.",
          blurb:
            "Products I design and build end to end, with AI as my build partner, shipped because I wanted them to exist.",
        },
        {
          eyebrow: "Foundations",
          title: "Where I came from.",
          blurb:
            "Public sector, fintech, and enterprise work, plus the indie games I started with.",
        },
      ],
      ctaEyebrow: "Working on something hard?",
      ctaTitle: "Let's get into the weeds together.",
    },
    contact: {
      eyebrow: "Contact · 2026",
      h1a: "Let's talk.",
      h1b: "Open to new work.",
      intro:
        "I'm taking on a small number of product design and AI-native build projects through 2026. Pick a channel below, or send a note through the form.",
      noteEmail: "Best for project inquiries",
      noteWhatsapp: "Quick questions, time-zone friendly",
      noteLinkedin: "Roles, connections, references",
      noteInstagram: "Behind the scenes, less work-y",
      formEyebrow: "Send a note",
      formTitle: "Tell me about the project.",
      formPara:
        "What you're building, the constraint that's making it hard, and roughly when you'd want to start. I respond within a few days.",
      formList: [
        "Product design · AI-native builds",
        "Remote · UTC−3 · EN / PT-BR",
        "Available now",
      ],
    },
    caseTpl: {
      allWork: "All work",
      role: "Role",
      team: "Team",
      duration: "Duration",
      year: "Year",
      stack: "Stack",
      links: "Links",
      jumpTo: "Jump to",
      sections: "sections",
      challenge: "Challenge",
      approach: "Approach",
      outcome: "Outcome",
      video: "Video",
      screens: "Screens",
      selectedScreens: "Selected screens",
      dragScroll: "Drag or scroll →",
      expand: "Expand",
      placeholderPending: "Placeholder · capture pending",
      reflection: "Reflection",
      nextProject: "Next project",
      coverSuffix: "cover",
    },
    testimonials: {
      eyebrow: "Testimonials",
      heading: "In their words.",
      blurb:
        "Recommendations from LinkedIn: designers, engineers, and clients I've worked with.",
      translatedFrom: "Translated from Portuguese",
    },
  },

  pt: {
    nav: {
      tagline: "Designer · Curitiba",
      getInTouch: "Fale comigo",
      work: "Projetos",
      about: "Sobre",
      openPalette: "Abrir paleta de comandos",
      switchTo: "English",
    },
    cmdk: {
      placeholder: "Busque projetos, páginas ou ações…",
      pages: "Páginas",
      projects: "Projetos",
      actions: "Ações",
      home: "Início",
      work: "Projetos",
      about: "Sobre",
      contact: "Contato",
      toggleTheme: "Alternar tema",
      sendEmail: "Enviar e-mail",
    },
    footer: {
      tagline:
        "Eu desenho e construo SaaS industrial e design systems na Techco.lab, o hub de inovação da NETZSCH, e lanço produtos com IA por conta própria nas horas vagas. A caixa de entrada tá aberta.",
      site: "Site",
      connect: "Redes",
      work: "Projetos",
      about: "Sobre",
      contact: "Contato",
      pressK: "Aperte ⌘K pra buscar",
      location: "Curitiba, BR",
    },
    form: {
      name: "Nome",
      email: "E-mail",
      company: "Empresa",
      optional: "(opcional)",
      problem: "Qual é o problema?",
      phName: "Seu nome",
      phEmail: "voce@empresa.com",
      phCompany: "Onde você trabalha",
      phMessage:
        "Umas linhas sobre o produto, a restrição que trava e o prazo.",
      send: "Enviar mensagem",
      sending: "Enviando…",
      or: "ou",
      success: "Enviado. Respondo em alguns dias.",
      error: "Algo deu errado. Tente de novo ou me mande um e-mail direto.",
      subject: "Nova mensagem de oliveibriel.com",
    },
    seo: {
      homeTitle:
        "Gabriel Oliveira · Product Designer Sênior | SaaS Industrial, Design Systems & IA",
      homeDescription:
        "Product designer sênior com 7+ anos entregando SaaS industrial, design systems e ferramentas com IA. Trabalho na Techco.lab, o hub de inovação da NETZSCH, onde desenho plataformas como o IRIS de ponta a ponta, e construo SaaS com IA por conta própria. De Curitiba, Brasil.",
      aboutTitle: "Sobre · Gabriel Oliveira",
      aboutDescription:
        "Product designer sênior na Techco.lab, o hub de inovação da NETZSCH. 7+ anos entre SaaS industrial, design systems, fintech e plataformas do setor público. Eu desenho e construo, cada vez mais com IA. De Curitiba, Brasil.",
      workTitle: "Projetos · Gabriel Oliveira",
      workDescription:
        "Cases entre SaaS industrial, design systems, ferramentas com IA, fintech e plataformas do setor público.",
      contactTitle: "Contato · Gabriel Oliveira",
      contactDescription:
        "Fale comigo sobre novos projetos ou parcerias.",
    },
    home: {
      heroEyebrow: "Product Designer Sênior · 7+ anos",
      heroHtml:
        'Eu desenho e entrego <span class="kw">SaaS industrial</span>, <span class="kw">design systems</span> e <span class="kw">ferramentas com IA</span>. Sou product designer na <span class="font-medium text-[var(--color-fg)]">Techco.lab</span>, o hub de inovação da <span class="font-medium text-[var(--color-fg)]">NETZSCH</span>, onde desenho plataformas como o <span class="font-medium text-[var(--color-fg)]">IRIS</span> de ponta a ponta. Nas horas vagas eu construo SaaS com IA <span class="font-medium text-[var(--color-fg)]">sozinho</span>.',
      viewWork: "Ver projetos selecionados",
      getInTouch: "Fale comigo",
      trustedBy: "Confiaram no meu trabalho · Clientes selecionados",
      selectedWork: "Projetos selecionados",
      recentProjects: "Projetos recentes.",
      allPrefix: "Todos os",
      allSuffix: "projetos →",
      personalEyebrow: "Projetos pessoais",
      personalTitle: "Apostas paralelas & projetos de fim de semana.",
      personalBlurb:
        "Coisas que fiz pra mim: open source, com IA, no ar porque eu quis que existissem.",
      approachEyebrow: "Como trabalho",
      approachTitle: "Meu jeito de trabalhar.",
      approachIntro:
        "Quatro princípios que eu uso de verdade. Cada um aponta pra um projeto neste site.",
      cards: [
        {
          t: "Entregar antes de generalizar",
          d: "Construo a v1 bagunçada com usuários reais e só então extraio os padrões. O design system do IRIS V3 começou como cinco telas de operador, não como uma tabela de tokens.",
          tag: "IRIS V3",
        },
        {
          t: "Desenhar pro operador",
          d: "Software industrial é usado de luva, com reflexo na tela e sob pressão de tempo. Ajusto cor, hierarquia e feedback pra pior iluminação do chão de fábrica, não pra foto de marketing.",
          tag: "HMIs NETZSCH",
        },
        {
          t: "Dominar a stack inteira",
          d: "Quando é mais rápido, eu mesmo vou do design ao React até o deploy. A Nerida saiu sozinha, do começo ao fim, com o Claude Code de parceiro de build.",
          tag: "Nerida",
        },
        {
          t: "IA pra parte chata",
          d: "Deixo a IA cuidar do tedioso: boilerplate, ligar os dados, primeiro rascunho de texto, scripts descartáveis. O gosto, as decisões e o sistema em si continuam meus.",
          tag: "Projetos solo",
        },
      ],
      contactEyebrow: "Fale comigo",
      contactTitle: "Aberto a novos trabalhos.",
      contactPara:
        "Design de produto e build com IA, seja full-time, contrato ou consultoria. Costumo responder em alguns dias.",
      contactList: [
        "Design de produto · Builds com IA",
        "Remoto · UTC−3 · EN / PT-BR",
        "Disponível",
      ],
    },
    about: {
      eyebrow: "Sobre",
      h1a: "Product Designer Sênior.",
      h1b: "7+ anos entregando.",
      introHtml:
        'De Curitiba, Brasil. Sou product designer na <span class="text-[var(--color-fg)]">Techco.lab</span>, o hub de inovação da NETZSCH, onde desenho plataformas industriais de ponta a ponta. O <span class="text-[var(--color-fg)]">IRIS</span>, o HMI global, é uma delas. Nas horas vagas eu construo <span class="text-[var(--color-fg)]">SaaS com IA</span> sozinho, como a Nerida.',
      para2:
        "Sete e poucos anos entre SaaS industrial, design systems, fintech e plataformas do setor público, com uma base de game design por baixo de tudo. B2B, domínios complicados e trabalho com IA são onde eu rendo mais.",
      available: "Disponível",
      role: "Cargo",
      roleVal: "Product Designer Sênior",
      focus: "Foco",
      focusVal: "SaaS B2B · Design Systems · IA",
      basedIn: "Baseado em",
      basedInVal: "Curitiba, Brasil · UTC−3",
      currently: "Atualmente",
      currentlyVal: "Techco.lab · Independente",
      languages: "Idiomas",
      languagesVal: "Português (nativo) · Inglês (fluente)",
      resumeCv: "Currículo / CV",
      downloadPdf: "Baixar PDF",
      linkedin: "LinkedIn",
      email: "E-mail",
      journeyEyebrow: "Trajetória",
      journeyTitle: "Dos games ao SaaS.",
      journeyP1Html:
        "Comecei nos games. Estudei game design e lancei dois jogos meus: um shooter em terceira pessoa com narrativa e um jogo 3D experimental construído em torno da gravidade. Foi ali que aprendi a pensar em sistemas, feedback e ritmo, e é assim que eu ainda leio uma interface. O que ela te ensina, e quão rápido?",
      journeyP2Html:
        "De lá foi pra mobile, fintech, setor público e enterprise, e agora software industrial pros engenheiros que operam os instrumentos da NETZSCH. Hoje eu foco em B2B, design systems e em entregar de verdade, cada vez mais com IA no meio do caminho. Junto a intenção de design com build assistido por IA pra levar produtos até o fim, de um SaaS clínico a ferramentas internas.",
      experienceEyebrow: "Experiência",
      experienceTitle: "Linha do tempo.",
      experienceSubPrefix: "Trabalhos selecionados, por ano. Histórico completo no",
      skillsEyebrow: "Habilidades",
      skillsTitle: "O que eu faço.",
      catDesign: "Design",
      catTools: "Ferramentas & código",
      catAi: "Fluxo com IA",
      catDomains: "Domínios",
      skillsDesign: [
        "Design de produto",
        "Estratégia de UX",
        "Design Systems",
        "Arquitetura de informação",
        "Prototipação",
        "Testes de usabilidade",
        "Workshops",
        "Acessibilidade",
      ],
      skillsTools: [
        "React",
        "TypeScript",
        "Next.js",
        "Astro",
        "Tailwind",
        "Supabase",
        "Storybook",
        "Figma",
      ],
      skillsAi: [
        "Claude Code",
        "Cursor",
        "Prompting de LLM",
        "Vibe coding",
        "Build com IA",
        "Prompting estruturado",
      ],
      skillsDomains: [
        "SaaS industrial",
        "Plataformas B2B",
        "Fintech",
        "Saúde",
        "Setor público",
        "Games",
      ],
      outsideEyebrow: "Fora do trabalho",
      outsideTitle: "Longe do expediente.",
      outsideP1:
        "Três Bulldogs Franceses em casa: Link, Koda e Bolt. Eles mandam nas minhas manhãs e participam de toda call.",
      outsideP2:
        "Corro nos fins de semana, de volta ao Apple Watch depois de um longo desvio pela Garmin. E games, ainda. Cresci fazendo eles e sigo jogando com atenção. Um jogo bem feito ensina ritmo, feedback e contenção tão bem quanto qualquer livro de design. Isso não é metáfora, é de onde vem boa parte dos meus instintos.",
      outsideP3:
        "Cozinho quando tenho paciência e peço quando não tenho. Leio mais código de interface do que teoria de design.",
      elsewhereEyebrow: "Por aí",
      elsewhereTitle: "Onde me achar.",
      elsewhereLinkedinNote: "Carreira, recomendações, o CV longo.",
      elsewhereEmailNote: "Linha direta. Respondo em alguns dias.",
    },
    work: {
      heroEyebrowPrefix: "Projetos",
      heroEyebrowProjects: "projetos",
      heroH1a: "Tudo que entreguei",
      heroH1b: "desde 2016.",
      heroPara:
        "Todo projeto entre SaaS industrial, design systems e ferramentas com IA, agrupado por como eu trabalho, não só por quando.",
      groups: [
        {
          eyebrow: "SaaS industrial · Design systems",
          title: "Onde eu me aprofundo.",
          blurb:
            "Dentro das linhas de produto da NETZSCH: os HMIs de máquina, os portais B2B e os design systems que seguram tudo junto.",
        },
        {
          eyebrow: "Com IA · Projetos solo",
          title: "Onde eu vou rápido.",
          blurb:
            "Produtos que desenho e construo de ponta a ponta, com IA de parceira de build, no ar porque eu quis que existissem.",
        },
        {
          eyebrow: "Base",
          title: "De onde eu venho.",
          blurb:
            "Setor público, fintech e trabalho enterprise, mais os jogos indie por onde comecei.",
        },
      ],
      ctaEyebrow: "Trabalhando em algo difícil?",
      ctaTitle: "Vamos meter a mão na massa juntos.",
    },
    contact: {
      eyebrow: "Contato · 2026",
      h1a: "Vamos conversar.",
      h1b: "Aberto a novos trabalhos.",
      intro:
        "Vou pegar um número pequeno de projetos de design de produto e build com IA ao longo de 2026. Escolha um canal abaixo, ou me mande um recado pelo formulário.",
      noteEmail: "Melhor pra falar de projeto",
      noteWhatsapp: "Perguntas rápidas, bom pro fuso",
      noteLinkedin: "Vagas, conexões, referências",
      noteInstagram: "Bastidores, menos profissional",
      formEyebrow: "Mande um recado",
      formTitle: "Me conte sobre o projeto.",
      formPara:
        "O que você está construindo, a restrição que tá deixando difícil e mais ou menos quando quer começar. Respondo em alguns dias.",
      formList: [
        "Design de produto · Builds com IA",
        "Remoto · UTC−3 · EN / PT-BR",
        "Disponível agora",
      ],
    },
    caseTpl: {
      allWork: "Todos os projetos",
      role: "Papel",
      team: "Time",
      duration: "Duração",
      year: "Ano",
      stack: "Stack",
      links: "Links",
      jumpTo: "Ir para",
      sections: "seções",
      challenge: "Desafio",
      approach: "Abordagem",
      outcome: "Resultado",
      video: "Vídeo",
      screens: "Telas",
      selectedScreens: "Telas selecionadas",
      dragScroll: "Arraste ou role →",
      expand: "Ampliar",
      placeholderPending: "Placeholder · captura pendente",
      reflection: "Reflexão",
      nextProject: "Próximo projeto",
      coverSuffix: "capa",
    },
    testimonials: {
      eyebrow: "Depoimentos",
      heading: "Nas palavras deles.",
      blurb:
        "Recomendações do LinkedIn: designers, engenheiros e clientes com quem trabalhei.",
      translatedFrom: "Traduzido do português",
    },
  },
};
