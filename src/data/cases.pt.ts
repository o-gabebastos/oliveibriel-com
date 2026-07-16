// PT-BR text overlay for case studies. EN (cases.ts) is the source of truth
// for structure (paths, layout, flags); this file carries only translated text,
// merged by index. Arrays are parallel to the EN arrays: same order, same length.

import type { CasePtOverlay } from "../i18n/content";

export const casesPt: Record<string, CasePtOverlay> = {
  "iris-v3": {
    role: "Designer UX/UI sênior · designer único da plataforma",
    team: "Time multifuncional com PMs, engenharia, firmware, QA e field service",
    duration: "Abril de 2023 → em andamento",
    contextOneLiner:
      "A IRIS é a HMI embarcada em cada moinho de bolas, dispersor, misturador e sistema de confeitaria que a NETZSCH entrega no mundo todo. A V3 foi a reescrita unificada: um design system, seis linhas de produto, em três idiomas.",
    highlights: ["Linhas de produto num só DS", "Países na rede", "Designer único desde"],
    challenge:
      "Antes da V3, cada máquina NETZSCH tinha sua própria HMI. Um operador que dominava a InView de olhos fechados não conseguia sentar num painel de Confeitaria sem passar por novo treinamento. O field service gastava metade do tempo respondendo pergunta que a interface deveria ter respondido sozinha.\n\nEntrei como único designer da plataforma. O briefing era fazer seis linhas de produto parecerem um produto só, sem achatar o que cada máquina realmente precisa, através da rede de 36 países e três idiomas da NETZSCH.",
    approach:
      "Comecei no chão de fábrica. Operador usa luva, a iluminação muda ao longo do dia, o painel fica na altura do peito e a atenção está dividida entre a tela e uma máquina rodando. Nada disso aparece numa folha de especificação.\n\nEscolhi a InView como referência e desenhei ela de ponta a ponta com usuários reais. Depois extraí os padrões pro sistema compartilhado e fui aplicando produto por produto: Confectionery, Epsilon, Mixers, ZetaRS, Inside.",
    outcome:
      "Seis linhas de produto agora saem com a mesma linguagem de design. Um operador treinado numa máquina consegue sentar em qualquer outra e encontrar o dashboard, as receitas, os alarmes e os ajustes no mesmo lugar, se comportando do mesmo jeito.\n\nColocar um produto novo pra rodar deixou de levar meses de design sob medida e passou a levar semanas de configuração. Toda máquina nova que a NETZSCH G&D entrega mundo afora agora nasce nesse sistema.",
    sections: [
      {
        heading: "Pra quem eu desenhei",
        body:
          "Quatro personas, cada uma com uma relação diferente com a máquina.\n\nO operador toca as bateladas sob a pressão do turno, muitas vezes em português ou alemão. A maior parte das telas é afinada pra esse usuário: controles simples, baixa carga cognitiva, sem surpresa.\n\nO técnico de manutenção precisa de profundidade de diagnóstico (logs de erro, fluxos de troubleshooting, status do equipamento), e o sistema traz isso à tona sem empurrar pro operador. O coordenador de manutenção vê a visão longitudinal de uma frota inteira: histórico, alertas preditivos, planejamento. O supervisor de produção lê a máquina pelos resultados, por KPIs e tendências, não pelo estado em tempo real.\n\nAcertar os quatro sem sobrecarregar nenhuma tela foi a parte difícil.",
        caption: "Alarmes · a tela que o Operador e o Técnico dividem",
        alt: "Fila de alarmes ativos da InView V3 com ordenação por severidade",
      },
      {
        heading: "Mesmo lugar, em toda máquina",
        body:
          "A maior decisão da V3 foi estrutural, não visual. Todo produto compartilha o mesmo layout de módulos: dashboard, alarmes, receitas, ajustes e manutenção ficam no mesmo lugar em toda máquina.\n\nRecursos exclusivos de cada produto se encaixam nesse layout sem quebrá-lo. Bead Filling na InView e na Confectionery. Scale Calibration nos produtos que fazem dosagem. A Operation Bar nos Mixers. A estrutura compartilhada é um contrato; as especificidades do produto vivem dentro do contrato, não em volta dele.\n\nÉ isso que torna real a promessa de treinar num produto e usar outro. A linguagem visual reforça (botões compartilhados, padrões de alarme, fluxos de confirmação), mas quem sustenta o peso é a decisão estrutural.",
        caption: "Confectionery · 15\" · mesma forma, outra máquina",
        alt: "Dashboard da Confectionery V3.1 no painel widescreen de 15 polegadas",
      },
      {
        heading: "O que não foi bem",
        body:
          "Adaptar do 15\" pro 12.1\" foi mais difícil do que eu esperava. A densidade de informação que funcionava no painel widescreen da Confectionery ficava apertada no menor. Vários módulos tiveram que ser refeitos do zero em vez de adaptados, e isso custou mais tempo do que o design original.\n\nA adoção também foi trabalho de venda, não de design. Achei que componentes sólidos mais uma boa documentação bastariam. Não bastaram. Padrões que pareciam genéricos demais na primeira revisão voltaram pra mesa, e tive que defendê-los de novo com evidência do chão de fábrica: gravações de operadores no painel, testes de iluminação, interações com luva. Todo componente conquistou seu lugar, mas conquistar era uma conversa contínua, não uma aprovação de uma vez só.",
      },
    ],
    reflection:
      "O trabalho que sobrevive a um turno de 12 horas de EPI sob má iluminação é diferente do trabalho que sobrevive a uma revisão de design de 12 minutos. Anos nessa plataforma me ensinaram que o segundo é fácil e o primeiro é o trabalho de verdade.",
    gallery: [
      { caption: "InView · Dashboard · 12.1\"", alt: "Dashboard da InView V3 com o fluxograma P&ID ao vivo e a barra de operação" },
      { caption: "InView · Receitas · Modo circulação", alt: "Gestão de receitas, parâmetros de circulação e metadados da receita" },
      { caption: "InView · Tendências · Zoom e arraste", alt: "Gráfico de tendências com interação de zoom e arraste" },
      { caption: "Alarmes · Fila ativa", alt: "Fila de alarmes ativos com ordenação por severidade" },
      { caption: "ZetaRS · Ajustes · 107 frames", alt: "Módulo de ajustes da ZetaRS com configuração de hardware" },
      { caption: "Confectionery V3.1 · Dashboard · 15\"", alt: "Dashboard widescreen da Confectionery com modos de operação" },
      { caption: "Inside · Dashboard · 12.1\"", alt: "Dashboard da Inside, produto simplificado, mesmo DS" },
      { caption: "Mixer InView V3 · Operation Bar · 02.3", alt: "Módulo de barra de operação exclusivo dos Mixers" },
      { caption: "Plants DS · Biblioteca de componentes", alt: "Design system Plants, componentes selecionados e tokens" },
      { caption: "InView V3.2 · Sequência de start/stop", alt: "Sequência de start e stop, visualização da lógica de processo" },
    ],
  },

  "netzsch-design-system": {
    role: "Product Designer sênior · dono do DS",
    team: "Time de plataforma frontend + 8 squads de produto",
    duration: "Ativo 2023 → hoje",
    contextOneLiner:
      "O DASDS é o design system dos Digital and Automation Systems da NETZSCH: um pipeline de Figma pra código feito pra que oito squads de produto entreguem UI consistente sem pagar um pedágio de coordenação a cada sprint.",
    highlights: ["Squads usando o DS", "Variáveis no Figma", "Componentes em produção"],
    challenge:
      "Cada linha de produto da NETZSCH tinha seus próprios componentes, tokens e convenções. Sobrepostos, mas incompatíveis. Toda feature que cruzava times se arrastava porque ninguém era dono da camada compartilhada.\n\nO briefing era construir algo que os times de linha de frente realmente quisessem usar, não um sistema imposto goela abaixo. O que significava que a base tinha que resolver problemas reais primeiro: cor acessível, tipografia que sobrevive à tradução de português pra alemão, tabelas de dados densas e padrões de formulário à altura da natureza regulada do software industrial.",
    approach:
      "Tokens primeiro. As variáveis no Figma mapeiam um pra um pras custom properties do CSS via Style Dictionary, então uma mudança de cor ou espaçamento flui do design pra produção sem tradução manual. Os componentes têm dono no código, são documentados no Storybook e demonstrados no Figma ao lado do build de produção.\n\nA governança é leve de propósito. Qualquer time pode propor um componente novo via PR. O time de plataforma revisa pela consistência. Quem contribui mantém o crédito de autoria. A métrica é adoção por squad, não contagem de componentes.",
    outcome:
      "Oito squads de produto usam o DS em produção. Features novas que cruzam times saem sem o velho vai e volta entre design e engenharia sobre qual token vence. As revisões de acessibilidade caíram de dias pra horas porque a base já é AA.\n\nHoje o DS serve de semente pra linhas novas (IRIS V3, o Customer Portal, ferramentas internas) em vez de cada uma reconstruir as mesmas peças básicas do zero.",
    sections: [
      {
        heading: "Pra quem eu desenhei",
        body:
          "Dois públicos com necessidades bem diferentes.\n\nOs engenheiros de frontend das squads são quem de fato consome o sistema. Eles queriam coisas sem graça: uma página de Storybook que carrega rápido, nomes de prop que batem com o que esperam e componentes que não brigam com o build que já existe. Qualquer coisa chique perdia pra qualquer coisa confiável.\n\nOs product designers das squads (em geral um por linha de produto, às vezes nenhum) queriam variáveis no Figma espelhando as variáveis do código, pra não terem que refazer o trabalho que a engenharia já fez. O mapeamento de tokens 1:1 não era estética. Era o contrato que deixa um designer entregar sem traduzir.",
        caption: "Botões · os componentes que as squads de fato consomem",
        alt: "Componentes de botão do DASDS: primário, secundário, destrutivo, desabilitado",
      },
      {
        heading: "A decisão-chave: uma fonte única de verdade pros tokens",
        body:
          "A maioria dos projetos de DS falha no mesmo ponto: os design tokens do Figma vão se descolando das variáveis CSS do código e, em seis meses, todo mundo volta a copiar código hex na mão. Me recusei a lançar qualquer coisa antes de o pipeline estar à prova de vazamento.\n\nAs variáveis do Figma exportam pra um spec JSON do Style Dictionary. O Style Dictionary compila os mesmos tokens em custom properties do CSS, config do Tailwind e um arquivo de tipos TypeScript. Uma fonte, três saídas, tudo gerado. Um designer renomear uma cor no Figma dispara um PR. Um engenheiro ajustar uma razão de contraste atualiza o Figma ao mesmo tempo.\n\nTodo o resto do sistema (escala tipográfica, espaçamento, raios, sombras, movimento) fica em cima desse pipeline. Sem ele, o DS é só uma pilha de componentes que parecem certos hoje e errados daqui a dois meses.",
        caption: "Fundações · tokens mapeados 1:1 do Figma pro código",
        alt: "Fundações do DASDS, tokens de cor e tipografia",
      },
      {
        heading: "O que não foi bem",
        body:
          "A parte difícil não foi construir o sistema. Foi fazer squads com código legado que já funcionava adotarem ele. Componentes sólidos e documentação limpa não bastaram. Os times resistiam quando um padrão novo significava refatorar algo que já tinha ido pra produção, e os primeiros seis meses foram mais demo, pareamento com os líderes de squad e reescrita de doc pra responder as mesmas cinco perguntas.\n\nO modelo de \"governança leve\" também mostrou o limite. Deixar qualquer um propor componente fez a fila encher de especiais de uso único. Tive que começar a dizer não, o que é desconfortável quando você vende o sistema como propriedade da comunidade. Todo DS precisa de um dono com opinião, e esse dono era eu, com ou sem o organograma dizendo isso.",
        caption: "Widgets de status · compartilhados entre as linhas de produto",
        alt: "Widgets de status do DASDS, componentes de estado da máquina",
      },
    ],
    reflection:
      "Um DS vive ou morre pela adoção, não pela estética. As vitórias vieram das partes sem graça (pipeline de tokens, piso de acessibilidade, fluxo de contribuição) feitas antes de alguém se empolgar com a linguagem visual.",
    gallery: [
      { caption: "App Header · a moldura de navegação", alt: "Componente de app header do DASDS com a marca NETZSCH" },
      { caption: "Chips · status e filtros", alt: "Chips de status e de filtro do DASDS" },
      { caption: "Alertas · feedback inline", alt: "Componentes de alerta inline do DASDS: sucesso, informação, aviso, erro" },
      { caption: "Formulários · inputs e controles", alt: "Controles de formulário do DASDS: campos de texto, checkboxes, radios, toggles" },
      { caption: "Pickers · data e dropdowns", alt: "Date picker e dropdowns de múltipla seleção do DASDS" },
    ],
  },

  "myct-connecticut": {
    role: "Product Designer sênior (consultor)",
    team: "Time multifuncional com os serviços digitais do estado + agência parceira",
    duration: "9 meses",
    contextOneLiner:
      "O MyCT é o portal ao cidadão do Estado de Connecticut: DMV, impostos, benefícios, licenças. O redesign tinha que funcionar pra um jovem de 17 anos no celular num estacionamento e pra uma pessoa de 80 anos num terminal de biblioteca.",
    highlights: ["Meta de acessibilidade", "Fatia de tráfego mobile-first", "Meta de nível de leitura"],
    challenge:
      "Serviço público não é opcional. Se o portal é hostil, o cidadão perde acesso a coisas que são direito dele. O site legado era desktop-first, cheio de jargão e trancado atrás de uma navegação no formato dos órgãos, que fazia sentido pro funcionário público e pra mais ninguém.\n\nO pedido era reconstruir em torno do que o cidadão realmente tenta fazer (\"renovar minha habilitação\", \"consultar minha restituição\") com mobile e acessibilidade tratados como restrições, não como algo pra pensar depois.",
    approach:
      "Reorganizei a arquitetura de informação em torno das principais tarefas em vez dos órgãos. Toda página reescrita em linguagem simples num nível de leitura de 6ª série, validada com painéis de cidadãos que incluíam idosos e usuários de inglês como segunda língua. Desenhei mobile-first usando componentes alinhados ao USWDS, pra experiência parecer familiar entre os sites .gov.\n\nCada componente saiu com comprovação de acessibilidade. Armadilhas de teclado, ordem de foco, labels de leitor de tela e contraste, tudo testado contra o WCAG 2.1 AA. Não carimbado, testado.",
    outcome:
      "A experiência relançada bateu AA em toda a superfície auditada. O mobile virou o padrão de tráfego dominante. O tempo até concluir a tarefa nos cinco principais fluxos (renovação de habilitação, status da restituição, elegibilidade a benefícios, registros de empresa, licenciamento de veículo) caiu de forma mensurável.\n\nA biblioteca de padrões segue como base pra outros serviços do estado.",
    sections: [
      {
        heading: "Pra quem eu desenhei",
        body:
          "Três cidadãos ficaram fixados acima do meu monitor por nove meses.\n\nUma mãe solo no ônibus com um Android de tela trincada, tentando renovar a habilitação entre uma parada e outra. Ela precisa da resposta em três toques e num tamanho de fonte grande o suficiente pra ler em movimento.\n\nUm aposentado num terminal de biblioteca pública com um mouse em que ele não confia totalmente. Ele precisa que a página faça sentido sem ter que aprender um novo modelo de interação.\n\nUm imigrante recente cujo inglês é funcional, mas não nativo. Ele precisa de linguagem simples que explique a coisa sem enterrar a ação.\n\nSe qualquer um dos três não conseguisse terminar a tarefa, o design falhava. Todo o resto era negociável.",
        caption: "Introdução do screener · linguagem simples, uma ação clara",
        alt: "Introdução do screener de elegibilidade do MyCT, boas-vindas em linguagem simples, 'Tenho direito a benefícios?', em menos de 10 minutos",
      },
      {
        heading: "A decisão-chave: tarefas em vez de órgãos",
        body:
          "A arquitetura antiga era organizada por qual órgão estadual era dono do fluxo. Coisa de imposto ficava embaixo do Department of Revenue Services. Coisa de habilitação, embaixo do DMV. Benefícios, no Social Services. É assim que o governo se organiza por dentro, e não tinha nada a ver com como o cidadão pensa.\n\nReconstruímos a home inteira e a navegação principal em torno de verbos que o cidadão de fato buscaria. \"Renovar\". \"Consultar\". \"Solicitar\". \"Pagar\". As telas por órgão continuam lá como caminho secundário, mas a porta de entrada tem o formato das tarefas.\n\nEssa foi a decisão que deu mais trabalho pra defender. Os stakeholders dos órgãos resistem quando perdem espaço no topo. A vitória veio dos dados: a navegação antiga tinha mais de 60% de taxa de rejeição a partir da home, e os painéis de cidadãos não achavam tarefas comuns sem ajuda. Com os dados na mesa, a arquitetura por verbos deixou de ser opinião de design e virou o movimento óbvio.",
        caption: "Programas de benefício · organizados por tarefa, não por órgão",
        alt: "Programas de benefício do MyCT organizados por tarefa do cidadão: Alimentação e Nutrição, Saúde, Renda, Contas de casa, Crianças",
      },
      {
        heading: "O que não foi bem",
        body:
          "Testar com idosos foi mais difícil do que eu tinha planejado. As sessões remotas que montamos funcionavam bem pros usuários mais jovens, mas viviam quebrando com o grupo de 70+: falha no Zoom, problema de compartilhamento de tela, permissão de microfone. Mudamos pra sessões presenciais em bibliotecas e centros de convivência, o que trouxe dados melhores, mas custou semanas que eu não tinha no orçamento.\n\nO outro erro foi o scope creep no texto. Linguagem simples é uma disciplina, e reescrever centenas de páginas pra um nível de leitura de 6ª série trouxe à tona termos jurídicos que os advogados do órgão não aprovavam. Vários fluxos acabaram saindo com um resumo em linguagem simples no topo e o texto jurídico mantido embaixo. É um meio-termo que funciona, mas não tão limpo quanto eu queria.",
      },
    ],
    reflection:
      "Design de serviço público é o trabalho de UX mais honesto que já fiz. Sem métrica de crescimento, sem otimização de funil. Só se a pessoa consegue fazer o que veio fazer. A régua é não atrapalhar.",
    gallery: [
      { caption: "Screener · Passo 1 de 5 · um conjunto de perguntas por vez", alt: "Screener de elegibilidade do MyCT, Passo 1 de 5, perguntas em linguagem simples sobre o solicitante" },
      { caption: "Resultados do pré-screening · a que você pode ter direito", alt: "Resultados do pré-screening de benefícios do MyCT, programas a que o cidadão pode ter direito" },
      { caption: "Dashboard · a base do cidadão", alt: "Dashboard do MyCT, vincular benefícios, resultados do pré-screening, gerenciar tudo num só lugar" },
      { caption: "Mobile-first · o fluxo de elegibilidade no celular", alt: "MyCT no mobile, introdução de elegibilidade e os dois primeiros passos do screener" },
      { caption: "Mobile · resultados e dashboard", alt: "MyCT no mobile, resultados do pré-screening e o dashboard pessoal" },
      { caption: "Mobile · gerenciar benefícios, explorar programas", alt: "MyCT no mobile, gerenciando benefícios vinculados e explorando programas por tarefa" },
    ],
  },

  nerida: {
    role: "Fundador solo · design, produto, frontend, backend, operação",
    team: "Só eu, com o Claude Code de parceiro de build",
    duration: "Abril de 2026 → em andamento",
    contextOneLiner:
      "A Nerida é uma plataforma modular pra profissionais de saúde autônomos no Brasil. Psicologia em produção, nutrição em beta. Agenda, prontuários estruturados, Pix nativo, um módulo financeiro que dá conta do Carnê Leão, e planos alimentares com um link público pro paciente. Tudo desenhado, construído e operado por uma pessoa só.",
    highlights: ["Clientes ativos", "Do zero ao ar", "Migrations de banco"],
    challenge:
      "Psicólogos que tocam o próprio consultório no Brasil têm um punhado de opções de software, e todas param no mesmo lugar: guardam pacientes, registram pagamentos, e é basicamente isso. Ferramentas como PsicoManager e Psicoplanner cuidam da agenda, mas não encostam no que de fato tira o sono das pessoas. O dinheiro é irregular, pedir pro paciente pagar é constrangedor, e a temporada de imposto com Receita Saúde e Carnê Leão é uma bagunça.\n\nO mesmo padrão apareceu de novo e de novo nas conversas com psicólogos que conheço: as pessoas pagam atrasado e cobrar é desconfortável, a renda oscila e planejar fica impossível, e a época de imposto vira uma reconstrução frenética no Excel. As ferramentas que existem foram feitas pro lado da agenda. O lado do dinheiro era o buraco.",
    approach:
      "Eu já tinha uma ferramenta clínica interna que vinha construindo pra clínicas com equipe, então dei um fork e enxuguei ela pra uma pessoa só: sem visão de time, sem troca de clínica, sem papéis. Do fork ao ar foram doze dias.\n\nO ritmo era de sprints curtos, de um a três dias cada, com o Claude Code de parceiro de build. Eu era dono da direção de produto, do design, do texto e de toda decisão de segurança. O Claude fazia a digitação pesada: o encanamento, as mudanças de banco, as integrações de pagamento e e-mail. Eu escrevia um brief, revisava cada mudança, subia, repetia.\n\nUm mês depois do lançamento virou plataforma. Cada profissão ganha seu próprio módulo e os dados de cada conta ficam isolados dos outros, então o mesmo core atende psicólogos em produção e nutricionistas em beta, cada um com sua navegação, seus prontuários e suas ferramentas.",
    outcome:
      "A Nerida roda em produção com usuários pagantes de verdade: mais de cem clientes ativos. Dois planos (R$49 e R$89 por mês, menos no anual), um teste de 7 dias e Pix via Asaas.\n\nNo ar hoje pra psicólogos: uma agenda com lembretes, prontuários estruturados (anamnese, notas de sessão, contratos), gestão de pacientes com importação por CSV, e o módulo financeiro em cinco abas: visão geral, pagamentos, um jeito gentil e em dois passos de cobrar o que está em aberto, assinaturas, e uma aba fiscal que exporta o CSV do Carnê Leão no formato exato da Receita Federal. Pra nutricionistas, em beta: antropometria, um construtor de plano alimentar com um link público pro paciente que atualiza em tempo real, e um recordatório de 24 horas.\n\nA landing pública em nerida.com.br sai separada, como página estática com motion sob medida e um SEO completo, e agora conta a história multiprofissão: psicologia e nutrição estão no ar, e mais áreas entram conforme a demanda aparece. Cinquenta e uma migrations de banco depois, a coisa toda sobreviveu a um lançamento, a um pivô pra atender mais de uma profissão, e a uma segunda entrando no ar.",
    sections: [
      {
        heading: "Pra quem eu desenhei",
        body:
          "Uma persona. Psicólogo brasileiro tocando um consultório solo: normalmente de 20 a 50 pacientes, muitas vezes trabalhando de casa, quase sempre no regime de pessoa física. Não é um comprador de tecnologia. Quer um software que suma e o deixe focar na sessão.\n\nEssa restrição de persona única mudou toda decisão de design. Sem visão de time. Sem troca de clínica. Sem permissões de papel. O produto é feito em torno de uma pessoa, não de uma equipe com fluxo de trabalho.\n\nA marca lilás e o login de esferas de vidro brigam com o mesmo inimigo: software clínico que parece frio e burocrático. A Nerida foi feita pra passar calma.",
        caption: "Login · esferas de vidro · a porta de entrada",
        alt: "Tela de login da Nerida com o tratamento de esferas de vidro sobre um gradiente lilás",
      },
      {
        heading: "A decisão-chave: o módulo financeiro",
        body:
          "Os concorrentes param no \"marcar este pagamento como pago\". A Nerida começa aí.\n\nO módulo financeiro tem cinco abas. Visão geral mostra a renda projetada pro fim do mês, separando o confirmado do que está em aberto. Pagamentos é a listagem. Cobrança roda uma régua humanizada em dois passos (cordial primeiro, firme depois, ativada pelo paciente). Assinaturas cuida dos planos mensais recorrentes. Fiscal exporta os CSVs do Carnê Leão no formato exato da Receita Federal, acompanha despesas dedutíveis e estima o IRPF.\n\nOutras ferramentas mostram o que você cobrou. A Nerida mostra o que sobrou, te ajuda a pedir sem constrangimento, e resolve a época de imposto sem reconstrução no Excel. Esse é o buraco que eu vivia ouvindo nas conversas, e é onde o produto vive.",
        caption: "Financeiro · visão geral",
        alt: "Aba de visão geral do módulo financeiro com receita, a receber e inadimplentes",
      },
      {
        heading: "O que não foi bem",
        body:
          "O pivô pra plataforma multiprofissão veio cedo, três semanas depois do lançamento, antes de eu ter dado de uso pra justificar. O sistema de módulos é boa engenharia e tornou o beta de nutrição possível, mas a decisão foi movida por ambição, não por usuário pedindo. Se a nutrição não converter, aquele mês pertencia a funcionalidades voltadas pro psicólogo.\n\nO marketing também ficou atrás do produto: por cerca de um mês a landing seguia contando a história de vertical única enquanto a plataforma já tinha seguido em frente. Alcançou no fim de maio, mas o descompasso é o custo honesto de uma empresa de uma pessoa só, onde produto, operação e marketing se revezam pra receber atenção.",
      },
    ],
    links: ["No ar · app.nerida.com.br", "Landing · nerida.com.br"],
    gallery: [
      { caption: "Landing pública · nerida.com.br", alt: "Hero da landing pública da Nerida, 'Você atende. A Nerida cuida do resto.' sobre um campo pastel de esferas de vidro com cards de produto flutuando (agenda, Receita Saúde, gráfico financeiro)" },
      { caption: "Landing · a história multiprofissão, no ar", alt: "Seção da landing 'Feito pra psicologia e nutrição. Outras áreas, em breve.' com os dois cards de profissão disponíveis e chips de em breve" },
      { caption: "Dashboard · o dia num relance", alt: "Dashboard, sessões de hoje, pacientes ativos, receita do mês, a receber" },
      { caption: "Agenda · calendário, próximas, histórico", alt: "Agenda, calendário mensal com sessões" },
      { caption: "Fiscal · Carnê Leão no formato da Receita", alt: "Aba fiscal, exportação do CSV do Carnê Leão, despesas dedutíveis, estimativa de IRPF" },
      { caption: "Pacientes · cadastro com importação por CSV", alt: "Listagem de pacientes, nomes, contato, status, importação por CSV" },
    ],
    reflection:
      "Doze dias do fork ao ar, mais um mês pra virar plataforma. O ritmo com o Claude Code te ensina que a restrição não é a velocidade de digitação; é a qualidade da decisão. A IA nunca foi dona de uma decisão; foi dona das teclas que vinham depois.",
  },

  "garmin-coach": {
    role: "Autor único · design + construção",
    team: "Sozinho",
    duration: "Feito num fim de semana, em andamento desde 2025",
    contextOneLiner:
      "Uma ponte entre um LLM e um relógio Garmin: cola um plano de treino, recebe treinos estruturados no pulso. Sem redigitar nada na mão.",
    highlights: ["Linhas de código", "Refresh de token", "Licença"],
    challenge:
      "Eu planejo minhas semanas de corrida com o Claude num chat à parte. A saída é texto puro, e o caminho dali até o meu Garmin era manual: ler a prosa, abrir o app, tocar em cada intervalo na mão. Fiz isso vezes suficientes pra deixar de ser mania e virar irritação.\n\nO formato do dado não é difícil: a API interna do Garmin expõe um formato de treino. O buraco era que ninguém tinha construído a ponte, e fazer um LLM preencher esse JSON sem inventar nome de campo significava que o próprio schema tinha que ser a primeira coisa a acertar.",
    approach:
      "Comecei pelo contrato JSON: aquecimento, intervalo, recuperação, desaquecimento, repetição, cada um com uma duração e um alvo tipados. Rígido, mas curto o bastante pra colar no prompt. Com o schema estável, veio a CLI. Ela lê o JSON, confere com o Pydantic e chama a API. Depois veio o web app, mobile-first em cima do FastAPI, pra eu conseguir mandar um plano do celular.\n\nA última peça de verdade era manter o login vivo. Os tokens do Garmin expiram em minutos, então mantenho uma linha no Supabase que se atualiza sozinha. O app simplesmente funciona quando pego o celular no meio da preparação da corrida.",
    outcome:
      "No ar como web app hospedado na Vercel, com a CLI rodando localmente. O pipeline inteiro (plano no Claude, JSON pra fora, envio pra um Forerunner 165) tem cerca de 2 mil linhas. Não estou treinando tanto quanto no começo de 2026, mas a infraestrutura é estável e recorro a ela sempre que volto pras corridas estruturadas.",
    sections: [
      {
        heading: "Pra quem eu desenhei",
        body:
          "Eu mesmo, e mais ninguém. Eu corro com um Garmin, planejo com o Claude e não queria redigitar intervalo na mão.\n\nConstruir uma ferramenta da qual você é o único usuário é outra disciplina. Sem fase de pesquisa, sem personas, e o ciclo de feedback dura dez minutos. Se o schema é chato de escrever prompt, eu sinto na hora. Essa compressão é todo o sentido de um projeto paralelo.",
        caption: "Enviar · cola o JSON, manda, ele cai no relógio",
        alt: "Web app do Garmin Coach, colar JSON, enviar pro Garmin",
      },
      {
        heading: "A decisão-chave: o schema primeiro",
        body:
          "A tentação era começar pela API ou pela UI. Comecei pelo schema JSON, e essa foi a decisão certa.\n\nUm LLM tem que preencher o schema sem uma explicação campo a campo toda vez, então o formato tinha que ser óbvio: chaves previsíveis, alvos tipados, sem aninhamento ambíguo. Fui iterando num único arquivo markdown, colando no Claude e refinando até a saída voltar válida sem precisar de correção. Depois disso o resto foi encanamento. O parser é só validação do Pydantic, e trocar o modelo é uma mudança de config.",
        caption: "O contrato JSON · passos, repetições, alvos tipados",
        alt: "O schema JSON do treino, passos, repetições, alvos tipados",
      },
      {
        heading: "O que não foi bem",
        body:
          "O deploy serverless deu trabalho. A biblioteca cliente do Garmin depende do curl_cffi, que não compila na Vercel, então rodo dois caminhos: a biblioteca completa na CLI, e requests diretas com um token exportado no web. Funciona, mas é deselegante.\n\nA autenticação também é meio castelo de cartas. Ela se apoia num endpoint não oficial que o Garmin pode mudar sem avisar. Quando a biblioteca em que comecei quebrou depois que o Garmin adicionou fingerprinting do Cloudflare, tive que migrar no meio do projeto. A visão de calendário no web ainda está incompleta porque o endpoint de listagem devolve 404 por lá. É uma ferramenta que eu uso, não um produto que eu entregaria pra um estranho.",
      },
    ],
    reflection:
      "Projetos paralelos deixam você entregar a API que quer consumir, não a que sobreviveu a um comitê. O schema é exatamente o formato de que eu precisava, a autenticação é exatamente a quantidade que eu estava disposto a manter, e a UI é tão mínima quanto uma ferramenta que uso sozinho pode ser.",
    gallery: [
      { caption: "CLI · validação do Pydantic → Garmin Connect", alt: "CLI do Garmin Coach, saída do push_workout com o treino criado" },
    ],
  },

  techcolab: {
    role: "Full stack conduzido pelo designer · design, motion, construção, deploy",
    team: "Sozinho, com o Figma Make e o Claude de parceiros de build",
    duration: "2024 → iterado desde então",
    contextOneLiner:
      "O site público da TechCo.lab, o hub de inovação interno da NETZSCH. Desenhei e entreguei de ponta a ponta, sem handoff pra engenharia: conceito no Figma, seções no Figma Make, produção em código limpo escrito à mão.",
    typewriter: {
      prefix: "Nós construímos",
      words: ["plataformas conectadas.", "IA industrial.", "experiências digitais.", "impacto real."],
    },
    highlights: ["Conduzido", "Handoffs pra engenharia", "Lighthouse"],
    challenge:
      "A TechCo.lab é o hub de inovação da NETZSCH, e precisava de um site público que fizesse dois trabalhos ao mesmo tempo: explicar o que o hub constrói (plataformas conectadas, IA industrial, interfaces digitais) pro resto da empresa, e atrair o tipo de gente que ia querer trabalhar ali.\n\nA restrição era real: nenhuma capacidade de engenharia alocada e uma janela apertada, mas a régua era qualidade de produção, não template. Tinha que parecer o trabalho que o hub de fato entrega.",
    approach:
      "Conduzi o stack inteiro. Desenhei no Figma, prototipei as seções mais carregadas de motion no Figma Make e depois portei tudo pra HTML/CSS limpo escrito à mão pro deploy de produção na Vercel. Sem CMS, sem peso de framework.\n\nO hero se apoia numa linha de máquina de escrever, \"Nós construímos…\" alternando entre o que o hub faz, o que dá o tom antes do primeiro scroll. O resto é um arco claro: capacidades, prova, o espaço físico e os números (500+ usuários, 35+ países, 80+ projetos).",
    outcome:
      "No ar em ntechcolab.com com acabamento de produção: 98 no Lighthouse, contraste AA, motion que se segura no celular. É a referência que eu aponto pra full-stack conduzido pelo designer, o tipo de projeto pequeno mas de aposta real onde um handoff teria custado mais do que valia.",
    sections: [
      {
        heading: "Pra quem eu desenhei",
        body:
          "Dois públicos numa página só. Dentro da NETZSCH, a liderança e outras unidades que precisam entender o que o hub faz e por que importa. Fora, os engenheiros, designers e pessoas de dados que o hub quer contratar.\n\nEsses dois puxam pra direções diferentes: um quer credibilidade e prova, o outro quer cultura e ambição. O site resolve isso começando pelo trabalho e pelos números, e fechando com o lugar e as pessoas.",
      },
      {
        heading: "A decisão-chave: ser dono do stack inteiro",
        body:
          "O caminho de sempre é desenhar no Figma, passar pra um engenheiro, revisar, repetir. Sem capacidade de engenharia e com uma janela apertada, comprimi isso num dono único: Figma pro design, Figma Make pra prototipar o motion, código escrito à mão pra produção.\n\nO hero de máquina de escrever e o motion de scroll foram feitos direto no código, não fingidos num mockup. Ser dono do deploy significava que eu mesmo podia afinar performance e contraste em vez de escrever um spec e torcer.",
      },
      {
        heading: "O que não foi bem",
        body:
          "O Figma Make é ótimo pra explorar uma seção rápido, mas o código que ele gera é descartável. Reescrevi a maior parte na mão pro build de produção, e tratar o Make como ferramenta de prototipação em vez de fonte de código foi uma lição que aprendi no meio do projeto.\n\nManter o motion suave no mobile levou mais passadas do que eu esperava. Os efeitos de máquina de escrever e de scroll que pareciam sem esforço no laptop precisaram de afinação de verdade pra não travar no celular.",
      },
    ],
    reflection:
      "Ferramentas assistidas por IA deixam um designer levar um projeto do rascunho ao ar sem o abismo do handoff. O trabalho muda de \"documentar o que construir\" pra \"construir, e usar o documento pra revisar\".",
    links: ["No ar · ntechcolab.com"],
    gallery: [
      { caption: "Hero · a linha de máquina de escrever", alt: "Hero da TechCo.lab, Nós construímos tecnologias inteligentes" },
      { caption: "Capacidades", alt: "Capacidades da TechCo.lab, IA industrial, plataformas conectadas, interfaces digitais" },
      { caption: "O lab · 500+ usuários · 35+ países · 80+ projetos", alt: "O espaço da TechCo.lab e os números de impacto" },
    ],
  },

  "digital-reports": {
    role: "Designer UX/UI · Techco.lab, alocado na squad NOTI",
    team: "Squad NOTI: PMs, frontend, QA. Único designer no módulo.",
    duration: "Março de 2026 → em andamento · sprints de 14 dias",
    contextOneLiner:
      "O Digital Reports é a plataforma de relatórios de batelada da NETZSCH pra moagem e dispersão industrial. Redesenhei os módulos centrais de lowfi pra hi-fi no Figma e depois reconstruí o produto como um protótipo funcional em código que hoje anda à frente do roadmap de produção: planejamento de disponibilidade, ranking de máquinas, um editor de batelada completo, exportações.",
    highlights: ["Frames de lowfi → hi-fi", "Tarefas do Jira entregues", "Telas do protótipo"],
    challenge:
      "O produto funcionava, mas a UX tinha crescido módulo por módulo sem uma linguagem comum. O Registry (a tabela central de bateladas) ainda estava em lowfi. A timeline diária do dashboard usava os tokens de status pastel do design system, e o cliente rejeitou de cara: numa parede de fábrica você não distingue um alarme de uma parada de manutenção numa cor lavada. O Settings tinha sete abas em dezessete frames sem uma moldura consistente.\n\nTinha também uma restrição física que ninguém tinha considerado no design: os stakeholders validam esse produto num monitor de sala de controle de 50 polegadas, onde um layout limitado a 1280px flutua como uma tirinha pequena no meio da tela.",
    approach:
      "Duas frentes. No Figma, apliquei a moldura compartilhada do design system (header, sidebar, sub-header, fileiras de abas) em todos os 36 frames de lowfi com um script rodado pelo plugin do Figma, salvando primeiro os overlays de pop-up de cada frame pra que a troca da moldura não os apagasse. Pra timeline, larguei as cores pastel e cravei cores de status saturadas na mão até o design system ganhar as próprias, porque o cliente tinha razão.\n\nNo código, reconstruí o produto como um protótipo funcional (React, TypeScript, Tailwind 4) com o título de trabalho Batch Book, com cada pedaço de dado atrás de um único arquivo que eu podia trocar. Esse protótipo virou o campo de provas: planejamento de disponibilidade com um calendário de heatmap e um assistente em linguagem simples, ranking de máquinas, um editor de batelada com uma navegação de seção flutuante, exportação em PDF/CSV/XLSX, e escala fluida pra que o layout leia corretamente de um laptop até o monitor de parede de 50 polegadas.",
    outcome:
      "O protótipo está no ar na Vercel e é como a squad valida decisões agora: os stakeholders clicam por interações reais em vez de imaginá-las a partir de frames estáticos. Os 36 frames em hi-fi vivem no arquivo de produção do Figma, e uma auditoria WCAG transformou as reclamações de contraste em quatro correções de token específicas, levando a nota projetada de 68 a 92.\n\nA camada de mock está a um arquivo de distância da API real, que era justamente o ponto: tudo o que o protótipo prova é diretamente construível.",
    sections: [
      {
        heading: "Pra quem eu desenhei",
        body:
          "Coordenadores de produção em plantas químicas, farmacêuticas, de alimentos e de mineração, revisando registros de batelada pra responder uma pergunta rápido: esta batelada rodou limpa e, se não, pra onde foi o tempo.\n\nOs gestores deles leem os mesmos dados à distância de parede. Foi daí que veio a decisão de cor: uma timeline diária no estilo Evocon, uma linha por dia, blocos de status hora a hora em verde, vermelho, azul e âmbar saturados. Os tokens pastel do design system servem pra badges à distância de laptop e são inúteis a cinco metros. Mantive os pastel na moldura e cravei o conjunto saturado no status, e sinalizei o buraco como um pedido de token pro DS.",
        caption: "Operações · status que se lê à distância de parede",
        alt: "Operações do dashboard, rankings e cards de batelada em operação com cores de status saturadas",
      },
      {
        heading: "A decisão-chave: prototipar em código, não em slides",
        body:
          "Os frames do Figma respondiam como as telas se parecem. Não conseguiam responder se os filtros funcionam bem no uso, se o heatmap do calendário de planejamento se lê num relance, ou o que acontece com o layout no monitor de 50 polegadas. Então reconstruí o produto como código rodando e movi as perguntas em aberto pra lá.\n\nO protótipo cresceu pra além do briefing de um jeito útil. O planejamento de disponibilidade (escalas de trabalho, tratamento de feriados, um calendário de heatmap, um assistente em linguagem simples baseado em regras) saiu ali primeiro, validado com os stakeholders, e agora define o spec em vez de seguir um. Toda interação é persistida, todo gráfico é SVG de verdade em cima de dados mock determinísticos, e trocar o serviço de mock pela API de produção é uma mudança de um arquivo.",
        caption: "Máquina · disponibilidade e ranking, funcionalidades que nasceram no protótipo",
        alt: "Aba de máquina, cards de disponibilidade, gráfico de performance mensal, ranking de máquinas",
      },
      {
        heading: "O que não foi bem",
        body:
          "Trabalhei a partir de uma nota desatualizada que dizia que a fonte do corpo era Montserrat. É Poppins. Perceber isso tarde significou reverificar a tipografia em frames que eu já tinha dado como prontos, que é exatamente o tipo de retrabalho que uma checagem de cinco minutos teria evitado.\n\nAs cores de status cravadas na mão são um paliativo, não uma solução. Elas consertam a timeline lavada hoje e criam risco de descolamento amanhã; o conserto de verdade são tokens de status saturados no design system, e até isso chegar, essa é uma dívida com o meu nome nela. E o acabamento do protótipo corta pros dois lados: valida decisões rápido, mas parece tanto um produto acabado que gerenciar a expectativa sobre o que de fato está ligado a dado real virou parte do trabalho.",
      },
    ],
    reflection:
      "A auditoria WCAG deixou visível o que as revisões de design não paravam de deixar passar: o teal primário reprova no contraste sobre branco, e o conserto é uma decisão de token, não cosmética. Um 68/100 é uma alavanca que força a ação. Número é mais difícil de adiar do que opinião de design.",
    gallery: [
      { caption: "Planejamento de disponibilidade · calendário de heatmap", alt: "Planejamento de disponibilidade, escala de trabalho aplicada sobre um período, calendário de heatmap com feriados" },
      { caption: "Observações · clique num ponto do gráfico pra anotar", alt: "Aba de observações, gráfico multissensor com marcadores de nota numerados e clique pra anotar" },
      { caption: "Análise · dez meses de produção", alt: "Análise, tendência de produção de dez meses, produção por receita, energia específica por máquina" },
      { caption: "Batelada ao vivo · detalhe no meio da corrida", alt: "Modal de detalhe da batelada ao vivo, operador, massa, energia, eventos recentes" },
      { caption: "Batch Resume · navegação de seção flutuante", alt: "Batch Resume, status, detalhes, informações da máquina com navegação de seção flutuante" },
      { caption: "Registry · o log central de bateladas", alt: "Registry, log de bateladas pesquisável com badges de status" },
    ],
  },

  "netzsch-customer-portal": {
    role: "Product designer, design de origem, todos os fluxos",
    team: "Sozinho no design; a implementação em HTML foi assumida por um colega a partir de abril de 2026",
    duration: "2025 → 2026",
    contextOneLiner:
      "Um portal de autoatendimento pros clientes industriais da NETZSCH Grinding & Dispersing: máquinas, peças de reposição, orçamentos, contratos, testes de laboratório e um assistente de IA. Feito pra quem toca as compras numa planta, não pra comprador casual.",
    highlights: ["Frames no Figma", "Fluxos desenhados", "Papéis do lado do comprador"],
    challenge:
      "Compra industrial não se parece com e-commerce. Os compradores pedem por número de peça e código de material, compras acima de um teto precisam de um aprovador, os preços vêm de contratos negociados e não de uma lista pública, e quem opera a máquina muitas vezes nem tem permissão pra ver preço.\n\nAntes do portal, tudo isso passava por e-mail e representantes de vendas. O briefing era um lugar único onde o cliente pudesse conferir suas máquinas instaladas, repor mídia de moagem, acompanhar pedidos e puxar preço de contrato sem ligar pra ninguém.",
    approach:
      "Desenhei a superfície inteira no Figma: 110+ frames em 12 fluxos, de um caminho de cadastro e SSO de 23 telas até checkout, contratos, serviços e uma área administrativa de cinco páginas. Só light mode, Inter, o verde NETZSCH e uma meta de contraste AAA, porque isso é usado em laptops de chão de fábrica com telas ruins.\n\nA decisão estrutural foi o design por papéis. Quatro papéis do lado do comprador (administrador, comprador, aprovador, técnico) veem navegações diferentes, ações diferentes, e no caso do técnico nenhum preço em lugar nenhum: o \"adicionar ao carrinho\" dele vira \"solicitar aprovação\" e gera um número de solicitação interno em vez de um pedido. Também desenhei a Milla, uma assistente de IA com quatro estados, de uma sugestão na barra de busca até um chat completo, com escopo em peças de reposição, status de pedido e documentos.\n\nA implementação foi pra HTML/CSS com um contrato 1:1 com o Figma, assumida por um colega em abril de 2026 enquanto eu revisava contra os frames.",
    outcome:
      "68 telas estão no ar no deploy de teste interno, fiéis pixel a pixel à fonte no Figma, cobrindo dashboard, máquinas com horímetros e histórico de serviço, loja com faixas de preço por volume, pedidos, orçamentos, contratos com listas de preço negociadas e a área administrativa completa.\n\nÉ pré-produção: o deploy fica atrás de um portão de acesso, e as respostas da Milla são simuladas enquanto a integração com o LLM segue no roadmap. O que existe hoje é a superfície completa desenhada e construída, esperando a ligação com o backend.",
    sections: [
      {
        heading: "Pra quem eu desenhei",
        body:
          "O Marcus, a persona em toda tela, gerencia as compras de uma planta que roda cinco moinhos NETZSCH. O trabalho dele é manter as máquinas moendo: repor as esferas antes que acabem, orçar um eixo de rolamento, verificar por que um pedido atrasou.\n\nEm volta dele estão três outros papéis com direitos diferentes. O aprovador revisa o que os compradores põem na fila. O técnico sabe exatamente qual peça de reposição a máquina precisa, mas não tem permissão pra comprometer dinheiro. O admin gerencia quem pode fazer o quê. Desenhar pros quatro ao mesmo tempo é o que moldou o portal mais do que qualquer decisão visual.",
        caption: "Máquinas · a base instalada do cliente",
        alt: "Página de máquinas, base instalada com horímetros e histórico de serviço",
      },
      {
        heading: "A decisão-chave: papéis como primitivo de design",
        body:
          "A versão fácil desse portal seria uma interface só com um toggle de admin. Em vez disso, desenhei o modelo de papéis dentro de cada fluxo, e o deixei visível numa matriz de admin onde as permissões de cada papel podem ser lidas por módulo.\n\nO papel do técnico é o exemplo mais claro. Mesmo catálogo, mesmas páginas de máquina, mas sem preço, sem carrinho e sem checkout. O fluxo dele termina numa solicitação com número próprio que cai na mesa do aprovador. Isso respeita como essas empresas de fato compram: a pessoa com o conhecimento técnico e a pessoa com o orçamento são pessoas diferentes, e fingir o contrário é como os portais acabam sem uso.",
        caption: "Acessos e Papéis · matriz de permissões",
        alt: "Admin de Acessos e Papéis, matriz de permissões entre quatro papéis",
      },
      {
        heading: "O que não foi bem",
        body:
          "A Milla é o buraco honesto. Desenhei quatro estados de uma assistente de IA e as respostas da demo são enlatadas: a integração do modelo nunca saiu do roadmap enquanto eu estava no projeto. O design se sustenta, mas não tenho como te mostrar uma resposta real.\n\nO outro buraco é a validação. O portal vive num deploy de teste com portão e ainda não esteve na frente de clientes de verdade, então toda decisão de fluxo ainda é uma aposta informada, não uma medida. E eu passei a implementação adiante no meio do projeto, o que deu certo porque o contrato 1:1 era rígido, mas significa que o acabamento entregue depois desse ponto não é meu pra reivindicar.",
        caption: "Milla · assistente de IA, respostas simuladas",
        alt: "Modal de chat da assistente de IA Milla sobre o dashboard",
      },
    ],
    reflection:
      "Design B2B é, na maior parte, respeitar um organograma que você não desenhou. As melhores ideias do portal não são visuais, são os números de solicitação, as filas de aprovação e as regras de visibilidade de preço que espelham como um cliente industrial já trabalha.",
    gallery: [
      { caption: "Landing pública · antes do login", alt: "Página de landing pública do portal do cliente" },
      { caption: "Detalhe do produto · preço por volume", alt: "Detalhe do produto, mídia de moagem com faixas de preço por volume" },
      { caption: "Contrato de peças · lista de preço negociada", alt: "Contrato de peças com lista de preço negociada" },
      { caption: "Pedidos · histórico com status acompanhado", alt: "Página de pedidos com histórico de status acompanhado" },
      { caption: "Login · SSO + e-mail", alt: "Tela de login com SSO" },
    ],
  },

  "iris-design-system": {
    role: "Designer · autor do DS",
    contextOneLiner:
      "A biblioteca de componentes por trás da IRIS V3: o design system a partir do qual toda HMI de máquina da NETZSCH G&D é construída. Tokens, 29 famílias de componentes e um conjunto de variantes pra cada tamanho de painel.",
    highlights: ["Famílias de componentes", "Variantes por tamanho de painel", "Produtos construídos em cima dela"],
    challenge:
      "HMIs industriais têm padrões que design systems genéricos não carregam: cards de batelada, passos de receita, botões de status de máquina, medidores, sequências de start/stop com estados de confirmação. E todo componente precisa existir duas vezes, porque as máquinas saem com um painel de 12 ou de 15 polegadas e os alvos de toque não dá pra simplesmente escalar.\n\nSem uma biblioteca compartilhada, cada uma das seis linhas de produto da IRIS teria continuado resolvendo isso localmente, que é exatamente a divergência que a IRIS V3 existiu pra acabar.",
    approach:
      "Construí a biblioteca no Figma como fonte única pras seis linhas de produto: uma camada de tokens (a rampa teal da NETZSCH, neutros, cores de sinal, espaçamento, raios) alimentando 29 famílias de componentes, cada uma publicada com variantes de 12\" e 15\" e seus conjuntos completos de estados.\n\nOs componentes de domínio são o ponto. Snackbars e campos de texto existem em qualquer DS; cards de batelada, medidores de dosagem, mostradores de horímetro e barras de operação são o que torna este industrial. Esses vieram dos produtos, foram generalizados e voltaram pra biblioteca.",
    outcome:
      "As seis linhas de produto da IRIS V3 saem dessa biblioteca, e telas novas de HMI começam a partir de componentes publicados em vez de cópias de telas antigas. É a metade silenciosa do case da IRIS V3: o redesign da plataforma ficou com a atenção, a biblioteca é o que o tornou repetível.",
    gallery: [
      { caption: "Fundações · tokens a partir das variáveis da biblioteca", alt: "Fundações do IRIS DS, tokens de cor e tipografia Segoe UI" },
      { caption: "Botões · o conjunto de 12\"", alt: "Botões do IRIS DS, conjunto completo de estados pros painéis de 12 polegadas" },
      { caption: "Formulários", alt: "Formulários do IRIS DS, campos de texto, checkboxes, radios, toggles" },
      { caption: "Feedback", alt: "Feedback do IRIS DS, snackbars, mensagens de seção, modais" },
      { caption: "Processo e batelada · a parte industrial", alt: "Processo do IRIS DS, barras de progresso, cards de batelada, cards de receita" },
      { caption: "Componentes de dashboard", alt: "Dashboard do IRIS DS, cards, controles, medidores" },
      { caption: "Peças pequenas", alt: "Peças pequenas do IRIS DS, chips, tags, badges, paginação, start/stop" },
    ],
  },

  superdigital: {
    role: "Product designer",
    contextOneLiner:
      "O SuperDigital era a conta digital pré-paga do Santander pra população desbancarizada da América Latina. Desenhei o MVP do Pix, trazendo o sistema de pagamento instantâneo do Brasil pra dentro do app: cadastrar chaves, pagar e receber dinheiro em segundos.",
    challenge:
      "O Pix era novo, era obrigatório e estava prestes a virar o jeito padrão de os brasileiros movimentarem dinheiro. Pro público do SuperDigital, muitos deles novos no sistema bancário formal, tinha que parecer óbvio já na primeira vez: sem jargão, sem medo de mandar pra pessoa errada, e uma confirmação clara em cada passo.",
    approach:
      "Desenhei a superfície completa do Pix pra Android em torno de um hub: gerenciar suas chaves (CPF, e-mail, telefone, aleatória), pagar por chave, ler um QR ou copiar e colar, receber com um QR estático compartilhável, agendar um Pix pra uma data futura e acompanhar seus limites. Toda tela de transferência começa por quem você está pagando e quanto, teclado primeiro, com o saldo sempre à vista pra ninguém passar do valor. O histórico de agendamentos mostra o status de cada pagamento (pago, agendado, processando, falhou) num relance.",
    outcome:
      "Entregue como o MVP de Pix do SuperDigital (cadastro de chave, pagar, receber e fluxos de QR) dentro de um app que já atendia milhões pela região.",
    gallery: [
      { caption: "Home e chaves · saldo na frente, chaves Pix geridas num só lugar", alt: "Pix do SuperDigital, home da conta com saldo e entrada do Pix, e o gerenciador de chaves Pix" },
      { caption: "Pagar e receber · pagamento com teclado primeiro, QR compartilhável pra receber", alt: "Pix do SuperDigital, pagando por chave com valor e teclado, e recebendo com um QR code estático" },
      { caption: "Hub do Pix e leitura · toda ação num só lugar, ler pra pagar", alt: "Pix do SuperDigital, o hub do Pix com todas as ações, e o leitor de QR code pra pagar" },
      { caption: "Agendamento e histórico · Pix com data futura, status num relance", alt: "Pix do SuperDigital, agendando um Pix pra uma data futura, e o histórico de agendamentos com status por pagamento" },
    ],
  },

  "dell-expert-network": {
    role: "Product designer",
    contextOneLiner:
      "A Dell Expert Network (DEN) é o programa da Dell pra consultores de TI independentes e provedores de serviço gerenciado. Desenhei o portal voltado ao membro, a porta de entrada pro suporte de conta, preços exclusivos e recompensas sobre o hardware que eles especificam pros clientes.",
    challenge:
      "A loja principal da Dell é feita pra quem compra pra si mesmo. Consultores de TI compram em nome de clientes, de novo e de novo, e precisam de uma relação diferente: um contato com nome, suporte mais rápido e um motivo pra seguir passando as compras pela Dell. A DEN era essa relação, mas precisava de uma casa que explicasse o valor rápido e levasse os membros ao benefício sem uma ligação de vendas.",
    approach:
      "Desenhei o portal em torno do ciclo real do membro: entender os benefícios, entrar, fazer compras qualificadas, resgatar as recompensas. A home começa por quem é o público (\"Empowering IT Consultants\") e pelos benefícios concretos: um time de conta dedicado, atalhos de serviço, preços exclusivos. Um \"How it works\" direto percorre os seis passos, de virar membro a resgatar recompensas no Dell.com, com indicação e um app companheiro como caminhos secundários. Responsivo por inteiro, no sistema de marca da Dell.",
    outcome:
      "Entregue como a porta de entrada no Reino Unido da Dell Expert Network, um portal que começa pelos benefícios e transforma um programa de parceria em algo que um consultor atarefado entende e sobre o qual age em cerca de um minuto.",
    gallery: [
      { caption: "Home da DEN · benefícios primeiro, o público no topo", alt: "Home do portal da Dell Expert Network, o público e os principais benefícios do membro" },
      { caption: "Benefícios do programa · os motivos pra entrar, logo de cara", alt: "Dell Expert Network, benefícios do programa: time de conta dedicado, experiência de compra online, recompensas" },
      { caption: "How it works · seis passos, de membro a recompensa", alt: "Dell Expert Network, o 'How it works' de seis passos, de virar membro a resgatar recompensas, mais indicação" },
      { caption: "O app companheiro · pontuação, novidades e ofertas na palma da mão", alt: "Dell Expert Network, a seção do app companheiro com links pra App Store e Google Play" },
      { caption: "Destaques · campanhas e conteúdo pros membros", alt: "Dell Expert Network, fileira de destaques com campanhas e conteúdo do programa" },
    ],
  },

  eye: {
    role: "Designer · co-desenvolvedor",
    contextOneLiner:
      "Shooter narrativo em terceira pessoa feito como parte de um pequeno time indie. Entregue como peça de estudante/portfólio.",
    challenge:
      "Construir um shooter em terceira pessoa onde a história conduzisse as mecânicas, e não o contrário, e dar conta disso sem o time nem o orçamento de um estúdio de verdade.",
    approach:
      "Escopo enxuto: uma mecânica por capítulo, momentos de narrativa embutidos no design dos encontros. Muitos cortes pra manter o build entregável.",
    outcome:
      "Build jogável, bem recebido dentro da pequena comunidade indie pra quem mostramos. Me ensinou tudo o que sei sobre cortar escopo.",
    videos: [
      { label: "Teaser", caption: "Teaser · o mundo e o tom de EYE" },
      { label: "Trailer", caption: "Trailer · um olhar mais longo sobre o mundo de EYE" },
    ],
    gallery: [
      { caption: "Personagem jogável · 3D em tempo real", alt: "EYE, personagem robô jogável, modelo 3D em tempo real" },
      { caption: "Ambiente na engine · Unity", alt: "EYE, ambiente sci-fi na engine, construído no Unity" },
      { caption: "Storyboard · encontros conduzidos pela narrativa", alt: "EYE, storyboard de um encontro conduzido pela narrativa" },
    ],
  },

  "gan-dath": {
    role: "Designer · desenvolvedor",
    contextOneLiner:
      "Jogo de puzzle 3D experimental onde a gravidade é o input. Se o jogo anterior me ensinou sobre escopo, este me ensinou sobre prototipação.",
    challenge:
      "Um jogo que começa pela mecânica tem que entregar um loop central divertido em poucos minutos de jogo, ou morre. A maior parte do trabalho foi prototipar o sistema de gravidade pra parecer óbvio sem instruções.",
    approach:
      "Iterei a mecânica de inverter a gravidade com um protótipo de papel antes de qualquer 3D. Com o loop sólido, o level design veio em uma semana.",
    outcome:
      "Entregue como peça de portfólio/aprendizado. O protótipo de gravidade é a parte de que ainda me orgulho.",
    videos: [
      { label: "Teaser", caption: "Teaser · o mundo, a mecânica, o gancho" },
      { label: "Gameplay", caption: "Gameplay · travessia movida a gravidade e puzzles de cor" },
    ],
    gallery: [
      { caption: "Gan Dath · colete todas as cores pra trazer a vida de volta", alt: "Gan Dath, key art de título, um jogo 3D sobre coletar cores pra trazer a vida de volta a um universo que morre" },
    ],
  },

  norius: {
    role: "Designer líder · design system, UI, protótipo",
    team: "Com a NDB (NETZSCH do Brasil): Leandro Starke, Nicolas (dev), Arthur Zinke",
    duration: "2 meses · 2026",
    contextOneLiner:
      "O Norius é a plataforma de monitoramento IoT da NETZSCH do Brasil: sensores, reservatórios, bombas, alarmes, operação remota, hospedada no Thingsboard. Redesenhei dois tenants do zero com uma descoberta estruturada, um design system e um protótipo navegável pra validação com o cliente.",
    highlights: ["Famílias de componentes no Storybook", "Stories documentadas", "Tokens de cor"],
    challenge:
      "Dois tenants (Pomerwasser e Capixaba Energia) rodavam em doze telas divergentes, cada uma resolvendo a mesma coisa de um jeito diferente. Pressão, nível de tanque e severidade de alarme apareciam em lugares diferentes com padrões incompatíveis. Não havia design system nem nada reutilizável. O ponto de partida era o Thingsboard cru: funcionalmente correto, visualmente datado e carente da acessibilidade e da consistência que um ambiente industrial precisa.\n\nO cliente precisava de uma interface que um operador de campo pudesse usar num tablet sob 4G fraco, sem retreinamento por tenant.",
    approach:
      "Comecei com uma descoberta estruturada: inventariei as doze telas na mão, cataloguei 42 componentes pequenos que já estavam na UI e escrevi 15 problemas de usabilidade ordenados por prioridade. Isso alimentou as decisões: colapsar doze telas em seis templates, usar Atomic Design pra montar tudo a partir de peças pequenas reutilizáveis, e servir os dois tenants a partir de um conjunto compartilhado de tokens e chaves simples de liga/desliga em vez de duplicar tela por tela.\n\nEm vez de só desenhar no Figma, construí o design system em código ao mesmo tempo. Storybook com React e Tailwind 4, uma story por componente, e docs com orientação de faça e não faça. No fim da fase de design, 30 componentes tinham implementações reais, 155 stories e 115 testes passando. Também construí um protótipo clicável separado pra que o cliente pudesse percorrer o fluxo antes de uma linha de código de produção.",
    outcome:
      "O cliente tem um design system funcional com um Storybook hospedado, 51 páginas de Figma espelhando os componentes, e um protótipo navegável que cresceu pra um pequeno produto: dashboard com sparklines de reservatório ao vivo, mapa de equipamentos completo com painel de dispositivos filtrado por status, telas de ETA por reator com gráficos em tempo real, um inventário de dispositivos, filas de alarme, e um registro de eventos que audita cada ação do operador. Tudo em inglês, pronto pra validação com o cliente.\n\nTrês princípios atravessam tudo: a severidade do alarme se lê por forma e cor, não só por cor; os gráficos de série temporal usam segmentos retos, não curvas suavizadas; ações destrutivas como parar uma bomba exigem um motivo digitado.",
    sections: [
      {
        heading: "Pra quem eu desenhei",
        body:
          "Três pessoas com relações diferentes com o mesmo dado.\n\nO operador de campo trabalha de um tablet, às vezes sob 4G fraco, e precisa confirmar se uma bomba está rodando ou qual alarme disparou. Sem tempo pra explorar, então a resposta tem que estar visível.\n\nO supervisor de operações lê o site inteiro pelo mapa antes de mergulhar num ponto. O engenheiro de manutenção precisa de horímetros, histórico de partidas e configuração de limiares pra diagnóstico, uma profundidade que não deve ficar no caminho do operador.\n\nOs dois tenants complicam: a Pomerwasser monitora reservatórios e química da água, a Capixaba monitora pressão e potência de bomba. Dados diferentes, interface compartilhada.",
        caption: "Dispositivos · a visão do engenheiro de manutenção",
        alt: "Tela de Dispositivos do Norius, inventário de dispositivos de campo com filtro de status: gateways, PLCs, medidores de vazão, sensores de nível, analisadores",
      },
      {
        heading: "A decisão-chave: um sistema, não dois produtos",
        body:
          "O caminho tentador eram dois produtos, um por tenant. Escolhi um design system com as diferenças controladas por tokens e feature flags.\n\nA Pomerwasser não precisa de um medidor de pressão; a Capixaba não precisa de indicadores de flúor. Mas as duas precisam que o card de alarme, o header de dispositivo, a sidebar, o mapa e o card de KPI se comportem de forma idêntica. Dividir os produtos dobraria a manutenção sem benefício nenhum pro usuário. Então os componentes em cada tela dos dois tenants viraram a base inegociável, e as peças específicas de cada tenant se encaixam via flags sem tocar no resto.",
        caption: "Docs · todo componente sai com quando-usar e faça/não-faça",
        alt: "Página de docs no Storybook do TankCard com quando usar, quando não usar e orientação de faça/não-faça",
      },
      {
        heading: "O design system vive no código",
        body:
          "O design system do Norius não é uma biblioteca de Figma com boas intenções sobre implementação. É um Storybook rodando: 33 famílias de componentes, 179 stories documentadas, cada story com controles, checagens de acessibilidade e docs em MDX que dizem quando usar o componente e quando não.\n\nA peça de vitrine é o RealtimeAreaChart, o gráfico de eixo duplo por trás das telas de ETA: nível e pressão em eixos opostos, marcadores de limiar, um navegador de intervalo, onze props configuráveis. Ele existe de forma idêntica no Figma (como componente que o cliente revisa) e no código (como a coisa que o dev entrega). Os componentes de domínio carregam o peso industrial: cards de tanque com dez estados documentados, fileiras de medidores pra pressão e vazão, cards de alarme em sete variantes de severidade e estado.",
        caption: "Storybook · RealtimeAreaChart, 11 controles, checagens de a11y",
        alt: "Story do RealtimeAreaChart no Storybook, gráfico de eixo duplo em tempo real com painel de controles e checagens de acessibilidade",
      },
      {
        heading: "O que não foi bem",
        body:
          "A descoberta me mostrou que parte da UX estranha da plataforma original era, na verdade, racional quando você entendia o contexto operacional. Redesenhei dois padrões de interação antes de perceber que o problema não era o padrão, era o contexto visual ausente que o deixava confuso. Isso custou alguns dias.\n\nO protótipo também cresceu pra além do briefing. Começou como cinco telas pro cliente clicar e virou um pequeno produto: mapa de equipamentos, inventário de dispositivos, registro de eventos, telas de ETA por reator, controles de operação remota. Valeu a pena (o cliente deu feedback específico em vez de aprovar frames estáticos), mas o escopo passou do que o contrato cobria.",
      },
    ],
    reflection:
      "Construir o design system em código junto com o Figma é a decisão que eu tomaria de novo sem hesitar. Escrever as docs em MDX forçou respostas pra perguntas que o Figma nunca faz, tipo quando um componente não deve ser usado, ou qual é o comportamento dele no erro. Essas respostas são exatamente o que o handoff pro dev precisa.",
    gallery: [
      { caption: "Dashboard · Pomerwasser", alt: "Dashboard do Norius, sparklines de reservatório, faixa de alarmes ativos, cards de status de dispositivo, mapa de equipamentos" },
      { caption: "Mapa de Equipamentos · painel filtrado por status", alt: "Mapa de equipamentos do Norius, 28 dispositivos com painel lateral filtrado por status" },
      { caption: "ETA · tanques, medidores, gráficos em tempo real", alt: "ETA Pomerode do Norius, tanques, medidores e gráficos em tempo real por reator" },
      { caption: "Alarmes e Alertas", alt: "Alarmes e alertas do Norius, fila de alertas no nível do cliente" },
      { caption: "Registro de Eventos · log de auditoria do operador", alt: "Registro de eventos do Norius, log de auditoria de ações do operador, alarmes e eventos do sistema" },
      { caption: "Storybook · família de medidores", alt: "Componentes de medidor no Storybook, fileira de dashboard de pressão, vazão, potência, torque" },
      { caption: "Storybook · TankCard, 10 estados documentados", alt: "Variante de quatro tanques do TankCard no Storybook" },
    ],
  },

  mosey: {
    role: "Sozinho · design, produto, dev iOS",
    team: "Sozinho",
    duration: "Abril de 2026 → em andamento",
    contextOneLiner:
      "Um app de viagem feito pra uma viagem só: 27 dias pela Dinamarca e Noruega. iOS nativo, anti-itinerário, com sugestões contextuais e um plano diário gerado por IA no próprio dispositivo.",
    highlights: ["Lugares curados", "Eventos reunidos", "Custo de inferência da IA"],
    challenge:
      "Tenho uma viagem de 27 dias pra Dinamarca e Noruega chegando em julho, e eu não queria um app de itinerário rígido. Queria algo que funcionasse com o jeito que eu de fato viajo: chegar em algum lugar, se virar ali, documentar depois.\n\nTodo app de viagem que testei era ou uma ferramenta de planejamento (calendário primeiro, de cima pra baixo) ou uma ferramenta de descoberta (um mapa com avaliações). Nenhum respondia a pergunta que eu de fato faço toda manhã: o que eu tô a fim de fazer agora, dado o tempo, onde estou e o que ainda não fiz.",
    approach:
      "Feito pra um usuário e uma viagem. Essa restrição cortou a maioria das decisões: sem camada social, sem login, sem suporte a múltiplas viagens, tudo local com SwiftData. A aba Today começa pela intenção, não por um calendário; uma aba Plan cobre os dias em que quero estrutura; um Journal registra as visitas depois do fato.\n\nA IA era pra rodar na API do Claude, até que uma rodada de auto-plano queimou minha cota numa sessão só. Movi toda a pilha de inferência pros Foundation Models no próprio dispositivo da Apple no iOS 26: sem API key, sem custo, funciona offline. Pra um app pessoal, era a decisão certa de qualquer jeito.",
    outcome:
      "O app compila limpo e roda no iOS 26. O auto-plano gera um itinerário de oito dias e onze paradas inteiramente no dispositivo. 60 lugares curados em Copenhague, Herlev, Billund e Oslo; 42 eventos reunidos pra janela da viagem.\n\nNão está na App Store. Roda em provisionamento gratuito até eu decidir se a taxa de desenvolvedor vale a pena. A viagem começa em julho, e esse é o teste de verdade.",
    sections: [
      {
        heading: "Pra quem eu desenhei",
        body:
          "Um usuário: eu. Isso soa como desculpa até você notar que a maioria dos apps de viagem falha justamente porque é feita pra todo mundo.\n\nMeu padrão: não reservo muita coisa com antecedência, me movo de bike e transporte público, como onde eu acabo parando e documento o dia depois. Eu queria que o app apoiasse isso, não que brigasse contra. O enquadramento anti-itinerário não é slogan, é por isso que a aba Today abre com \"o que você tá a fim de fazer hoje?\" em vez de uma agenda. A aba Plan existe pros dias em que eu quero estrutura, mas é opcional.",
      },
      {
        heading: "A decisão-chave: IA no dispositivo",
        body:
          "O plano original usava a API do Claude tanto pro chat de concierge quanto pro auto-plano estruturado. Isso durou até a primeira rodada de auto-plano de verdade esgotar minha cota mensal numa sessão.\n\nMovi tudo pros Apple Foundation Models. Isso significou subir o alvo de iOS de 18 pra 26, o que é um custo real: quem está num iOS mais antigo não consegue instalar. Pra um app pessoal, tudo bem. A geração guiada produz o plano dia a dia no dispositivo, em streaming, sem chamada de rede e sem conta pra pagar. O modelo é bom o suficiente pro trabalho. Não estou pedindo pra ele substituir um agente de viagens, só pra transformar uma lista de lugares numa ordem diária que faça sentido.",
      },
      {
        heading: "Onde está agora",
        body:
          "O build está limpo, o core funciona, a viagem ainda não aconteceu, e eu sou honesto de que essa é a parte inacabada.\n\nTrês coisas que sei que estão cruas: um punhado de force-unwraps que podem crashar num dia em que eu não esteja perto de um laptop; um auto-plano que às vezes repete os títulos dos dias; e cerca de cinquenta cores cravadas na mão que deveriam ser tokens. Fiz a auditoria e anotei tudo, mas não apliquei os consertos. O widget e a Live Activity estão prontos, mas desativados por ora. A sincronização com o CloudKit espera a decisão da conta de desenvolvedor, que preciso tomar antes de julho pra que a pessoa que viaja comigo consiga um build no TestFlight.",
      },
    ],
    reflection:
      "Construir um app pra uma viagem específica que você está prestes a fazer é um tipo estranho de pressão: um prazo duro, um usuário real, e o que está em jogo é exatamente uma viagem. As coisas que pulei (social, compras, múltiplas viagens) seguem puladas, porque não existe versão disso em que eu me arrependa delas.",
    gallery: [
      { caption: "Today · o que você tá a fim de fazer?", alt: "Tela Today do Mosey, sugestões contextuais" },
      { caption: "Ciente do clima · lê o céu", alt: "Sugestões do Mosey cientes do clima" },
      { caption: "Concierge · IA no dispositivo", alt: "Concierge do Mosey, chat de IA no dispositivo" },
      { caption: "Journal · sua viagem, dia a dia", alt: "Journal do Mosey, viagem dia a dia" },
      { caption: "Saved · lugares que vale a pena revisitar", alt: "Lugares salvos no Mosey" },
    ],
  },
};
