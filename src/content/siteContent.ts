const WHATSAPP_NUMBER = "5511991538151";
const INSTAGRAM_URL = "https://instagram.com/nutricionistapietra";
const EMAIL = "agendamento@nutricionistapietra.com.br";

export const siteContent = {
  // General site info
  site: {
    title: "Pietra Fogaça | Nutricionista Comportamental",
    description:
      "Eu te ajudo a emagrecer de forma leve, sem culpa, sem dieta restritiva e sem abrir mão da sua vida social.",
    address: "R. João Cachoeira, 488 - Conj 1009 - Itaim Bibi, São Paulo",
    whatsappNumber: WHATSAPP_NUMBER,
  },

  // Navigation header
  navigation: {
    brand: "Nutricionista Pietra Fogaça",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Método", href: "#metodo" },
      { label: "FAQ", href: "#faq" },
      { label: "Contato", href: "#contato" },
      { label: "Mentoria", href: "/mentoria" },
      { label: "Blog", href: "/blog" },
      { label: "Ebooks e Cursos", href: "/ebooks" },
    ],
    cta: {
      label: "AGENDAR CONSULTA",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
    ctaMobile: {
      label: "AGENDAR",
    },
  },

  // Hero section
  hero: {
    headline: "Já tentou de tudo e nada funcionou?",
    description:
      "Eu te ajudo a emagrecer de forma leve, sem culpa, sem dieta restritiva e sem abrir mão da sua vida social.",
    ctaText: "AGENDAR CONSULTA",
    image: {
      alt: "Pietra Fogaça - Nutricionista",
      src: "/assets/nutricionista-pietra-fogaca-esperando-pra-atender-voce.jpg",
    },
  },

  // Stats section
  stats: [
    {
      value: 400,
      label: "eliminados com o método 3C's",
      suffix: "kg+",
    },
    {
      value: 100,
      label: "mulheres transformadas",
      suffix: "+",
    },
  ],

  // About section
  about: {
    title: "Como Funciona o Acompanhamento?",
    description:
      "Aqui, a gente conversa de verdade e constrói juntas o que funciona pra você.",
    cards: [
      {
        title: "Plano Personalizado",
        content:
          "Planos alimentares adaptados às suas necessidades emocionais, rotina e preferências.",
      },
      {
        title: "Contato direto",
        content:
          "Você terá acesso a mim entre as sessões pelo WhatsApp para dúvidas, apoio emocional ou ajustes no plano.",
      },
      {
        title: "Transformações Reais",
        content:
          "Mulheres que escolheram um caminho mais leve com a comida, com o corpo e com elas mesmas e descobriram que é possível emagrecer sem abrir mão da própria vida.",
      },
    ],
    ctaText: "QUERO VIVER ESSA TRANSFORMAÇÃO",
  },

  // Method section
  method: {
    title: "O Método 3C's",
    description:
      "Caminho leve e possível para transformar sua relação com a comida.",
    steps: [
      {
        title: "Conhecimento",
        description:
          "Autoconhecimento e educação alimentar com base na sua rotina e história com a comida.",
        icon: "🧠",
      },
      {
        title: "Consciência",
        description:
          "Compreensão dos gatilhos emocionais, comportamentais e ambientais que afetam suas escolhas.",
        icon: "👁️",
      },
      {
        title: "Comportamento",
        description:
          "Ações práticas, consistentes e possíveis que geram resultado a longo prazo — sem terrorismo nutricional.",
        icon: "🔄",
      },
    ],
    ctaText: "QUERO COMEÇAR MINHA JORNADA COM O MÉTODO 3C'S",
  },

  // About Pietra section
  aboutPietra: {
    title: "Sobre Pietra Fogaça",
    crn: "94003",
    image: {
      alt: "Pietra Fogaça Nutricionista com Jaleco",
      src: "/assets/sobre-a-nutricionista-pietra-fogaca.jpg",
    },
    paragraphs: [
      "Nutricionista formada na Universidade Federal do Rio Grande do Sul, com especialização em Nutrição Comportamental e foco no atendimento de mulheres que sofrem com compulsão alimentar, efeito sanfona e autossabotagem.",
      "Mais de 100 mulheres já passaram pelo meu acompanhamento e reencontraram o prazer de comer, de se olhar no espelho e de se priorizar.",
      "Acredito em um processo nutricional baseado em três pilares: Conhecimento, Consciência e Comportamento. Essa é a base do meu método 3C’s, construído com base em ciência, prática clínica e muita escuta.",
    ],
    ctaText: "QUERO TRANSFORMAR A MINHA RELAÇÃO COM A COMIDA",
  },

  // Mentoria Nutri Plus (página /mentoria — voltada a nutricionistas)
  mentoria: {
    title: "Mentoria Nutri Plus",
    image: {
      alt: "Pietra Fogaça — mentora da Mentoria Nutri Plus",
      srcDesktop: "/assets/pietra-fogaca/pietra-fogaca-mentoria-desktop.jpeg",
      srcMobile: "/assets/pietra-fogaca/pietra-fogaca-mentoria-mobile.jpg",
    },
    paragraphs: [
      "A Mentoria Nutri Plus foi criada para nutricionistas que desejam se POSICIONAR com estratégia, ter segurança clínica no atendimento e construir uma carreira mais valorizada e lucrativa.",
      "Mais do que teoria, é uma mentoria prática e 100% individual, pensada para te ajudar a viver bem da nutrição, fortalecer seu posicionamento e desenvolver um atendimento que gere resultados para seus pacientes e também para a sua carreira.",
      "Se você sente que tem potencial, mas ainda não consegue transformar isso em reconhecimento, constância e faturamento, a Mentoria Nutri Plus pode ser o próximo passo da sua jornada.",
      "Eu irei pegar na sua mão e te guiarei até o objetivo final. O seu negócio será a minha meta!",
    ],
    whatsappUrl:
      "https://wa.me/5511991538151?text=Vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20a%20Mentoria%20Nutri%20Plus!",
    formUrl: "https://forms.gle/mie2GEVmbFsyGTRR7",
    primaryCtaText: "QUERO SABER MAIS",
    secondaryCtaText: "Preencher formulário de interesse",
    testimonialsTitle: "O que as mentoradas dizem",
    testimonials: [
      {
        name: undefined,
        image: undefined,
        text: [
          "Saí cheia de ideias ontem! E, aliás, fechamos os 7k! Rumo aos 10k porque hoje tem mais uma reunião!",
        ],
      },
      {
        name: undefined,
        image: undefined,
        text: [
          "Já fechei 14k só em uma semana!",
        ],
      },
      {
        name: undefined,
        image: undefined,
        text: [
          "To fechando muitos planos! Eu tinha estimado 120 mil esse mês, mas já estamos em 140 mil e ainda tem 4 consultas até fechar o mês!",
        ],
      },
    ],
  },

  // Testimonials
  testimonials: [
    {
      name: "Mariana Pacheco",
      image:
        "/testimonials/mariana-cavalcante-de-albuquerque-pacheco-paciente-da-nutricionista-pietra-fogaca.jpeg",
      text: [
        "Acompanhei a Pietra muito tempo nas redes sociais e especialmente pós-competição. Decidi consultar com ela quando passei a ter episódios de exagero alimentar em razão da ansiedade com o nascimento do meu segundo filho. Diferente de todas as outras nutricionistas que consultei, e não foram poucas, antes mesmo da primeira consulta ela conversou comigo por mais de 1h, para me explicar como ela trabalhava e como se propunha a me acompanhar nos meses seguintes. Me senti acolhida desde o primeiro instante e ali tive certeza de que enfim tinha encontrado a minha última nutricionista! Ela não se preocupa apenas em entregar um plano alimentar, ela ouve a paciente pelo tempo necessário para entender as suas necessidades. Acolhe e orienta sempre que preciso, seja por mensagens, por áudio ou até por vídeo. É aquela profissional que ama o que faz e é perceptível em seus olhos! Estou muito satisfeita e feliz por tê-la comigo durante essa fase e com a certeza que alcançaremos meus objetivos em pouco tempo.",
      ],
    },
    {
      name: "Vanessa Bassi",
      image:
        "/testimonials/vanessa-bassi-paciente-da-nutricionista-pietra-fogaca.jpeg",
      text: [
        "Acompanho a Pietra desde a época em que ela ainda era estudante, e já naquela época dava pra ver o quanto ela seria uma profissional incrível e dedicada. Me tornei paciente dela em janeiro de 2025 e, desde então, só tenho motivos pra agradecer.",
        "O atendimento é super personalizado, com aquele cuidado que faz a gente se sentir ouvida e acolhida. Tem acompanhamento toda semana e tudo é pensado de forma leve e real. Consegui perder peso, melhorar minha hidratação e, o mais importante: mudei minha relação com a comida. Nem parece que estou de dieta, de verdade! Como bem, sinto menos fome e me sinto mais conectada com meu corpo.",
        "Durante esse processo, precisei passar por uma cirurgia, e a Pietra foi essencial. Ela ajustou meu plano alimentar com tanto cuidado que consegui manter meus resultados mesmo em repouso e sem treinar. Me senti segura e muito bem acompanhada.",
        "A Pietra é aquele tipo de profissional que vai além da nutrição. Ela cuida com carinho, escuta de verdade e torce junto com a gente. Sou muito feliz por ter ela nesse processo – virou mais que nutri, virou parceira de jornada!",
      ],
    },
    {
      name: "Alana Louise",
      image:
        "/testimonials/alana-louise-paciente-da-nutricionista-pietra-fogaca.jpeg",
      text: [
        "Eu já acompanhava a Pietra nas redes sociais mesmo antes de ela se formar, e sempre tive muita confiança que ela seria uma ótima profissional por sempre compartilhar conteúdos de qualidade e confiáveis.",
        "Quando decidi consultar uma nutricionista, não pensei duas vezes antes de escolher a Pietra, e foi a melhor escolha que eu fiz! ",
        "Pedi ajuda pra Nutri em relação a ansiedade com a comida, com histórico de transtornos alimentares, além também de ter necessidades específicas por conta de praticar corrida, e ela me ajudou com tudo isso, montando um plano pensado em todos os quesitos e me dando suporte o tempo todo. Ganhei mais disposição e perdi o medo de comer, além dos resultados estéticos que são só um extra comparado a melhoria de qualidade de vida que eu tive.",
        "Além de tudo, a Pietra monta a dieta com alimentos que gosto de comer, sem restrições malucas ou suplementos desnecessários, só o básico que funciona e sempre adequado às minhas preferências!",
        "Recomendo de olhos fechados ❤️",
      ],
    },
    {
      name: "Mirella Stumpf",
      image:
        "/testimonials/mirella-stumpf-paciente-da-nutricionista-pietra-fogaca.jpeg",
      text: [
        "Estou amando o atendimento da nutri, por ser humanizado, específico e adaptável a minha rotina e minhas necessidades.",
        "Já fiz dezenas de outras dietas e passei por vários outros profissionais, mas nenhum como ela! Me sinto acolhida e amparada de verdade para enfrentar o processo difícil e complexo que é a mudança de hábitos, a Pi me ajudou a ter um posicionamento diferente não só na alimentação, mas também na mentalidade e emocional.",
        "Pedi ajuda pra Nutri em relação a ansiedade com a comida, com histórico de transtornos alimentares, além também de ter necessidades específicas por conta de praticar corrida, e ela me ajudou com tudo isso, montando um plano pensado em todos os quesitos e me dando suporte o tempo todo. Ganhei mais disposição e perdi o medo de comer, além dos resultados estéticos que são só um extra comparado a melhoria de qualidade de vida que eu tive.",
        "Recomendo demais o atendimento dela, sem dúvidas foi um dos melhores investimento que já fiz por mim mesma!",
      ],
    },
    {
      name: "Letícia Guedes",
      image:
        "/testimonials/leticia-guedes-paciente-da-nutricionista-pietra-fogaca.jpeg",
      text: [
        "Sou completamente fã do trabalho dela. É impressionante como ela consegue transformar algo que já era bom em algo ainda mais especial. E isso só é possível porque ela coloca amor de verdade no que faz — e a gente sente isso em cada palavra, em cada cuidado.",
        "Em um momento difícil, quando pensei em desistir, ela me acolheu com tanta empatia e sensibilidade que me senti segura pra falar sobre questões delicadas como a compulsão alimentar. Eu me sinto ouvida, acolhida, respeitada, suas palavras e sua abordagem fazem toda a diferença no meu processo. É uma profissional única e eu sou profundamente grata por ter encontrado.",
      ],
    },
    {
      name: "Clara Angeletti",
      image:
        "/testimonials/clara-angeletti-paciente-da-nutricionista-pietra-fogaca.jpeg",
      text: [
        "Passar com a Pietra foi uma escolha muito acertada. Acompanho seu trabalho desde o início das postagens no Instagram, em 2019, e é muito inspirador ver a profissional que ela se formou.",
        "Ela tem um atendimento realmente diferente, porque em vez de ser centralizado nas consultas, volta-se para tudo o que acontece entre uma consulta e outra. Seguir a dieta. Ter dúvidas. Ter dificuldades, frustrações, angústias, viagens. Aí tudo muda, porque não adianta ter a dieta se não conseguimos seguir, e o trabalho dela parte dessa premissa. Além disso ela sempre foi muito acolhedora e compreensiva, mas com a firmeza necessária no melhor equilíbrio para eu atingir meus objetivos.",
      ],
    },
    {
      name: "Filomena Barreto",
      image:
        "/testimonials/filomena-barreto-paciente-da-nutricionista-pietra-fogaca.png",
      text: [
        "Falar da nutricionista Pietra, é falar de uma grande amiga, que se preocupa com o bem-estar de suas pacientes, como um dos seu familiares 🥰🥰 Gente! Conheci a nutri Pietra através do Instagram, e com a insistência da minha filha fomos fazer uma consulta online, e na conversa com a nutricionista Pietra, gostei de cara, a Pi é muito querida, uma pessoa maravilhosa e compreensível, e uma profissional incrível! Daí fomos pra uma consulta presencial,  e amei o plano alimentar dela. A consulta durou mais de uma hora, ela com toda sua dedicação passou seu plano alimentar, e planejamos juntas o minha dieta. Com mudanças simples e sem passar fome, estou conseguindo perder peso! Tudo bem planejado, e conforme o meu gosto.",
        "Super recomendo essa nutricionista Pietra Fogaça pra quem quer perder peso e sem sofrimento, pois o plano alimentar dela é tudo conforme o gosto de cada paciente.",
        "Sou Filomena Barreto, e comecei meu tratamento em fevereiro. Sigo firme com o meu coração leve e conseguindo perder peso.",
      ],
    },
    {
      name: "Laíse Matros",
      image:
        "/testimonials/laise-matros-paciente-da-nutricionista-pietra-fogaca.jpeg",
      text: [
        "O acompanhamento da Pietra é de longe um dos melhores que eu já tive. O cuidado em adaptar o plano para a minha realidade, sem impor nenhum tipo de alimento ou de refeição faz TOTAL diferença na adesão. A empatia e acolhimento permite que eu me abra sem medo de julgamento.",
        "Ela vibra a cada conquista com a mesma intensidade, fazendo com que me sinta capaz e motivada a continuar. Consegue mostrar que a “falha” faz parte do caminho e que o mais importante é a constância. Mas vejam, isso todo mundo fala, mas a Pietra tem uma mágica que faz o paciente realmente incorporar e vivenciar nisso.Só tenho a agradecer por me ajudar a ter uma boa relação com a comida de novo!",
      ],
    },
  ],

  // FAQ section
  faq: {
    title: "Perguntas Frequentes",
    items: [
      {
        question: "Quanto tempo leva para ver os resultados?",
        answer:
          "Os resultados variam de pessoa para pessoa, mas a maioria dos clientes começa a notar mudanças nas primeiras semanas. O mais importante é que focamos não apenas em resultados estéticos rápidos, mas em uma transformação sustentável da sua relação com a comida.",
      },
      {
        question: "Como funciona o método 3C's?",
        answer:
          "O método 3C's trabalha com três pilares: Conhecimento (entender a relação emocional com a comida), Consciência (desenvolver atenção plena na alimentação) e Comportamento (transformar hábitos de forma sustentável). Este método foi desenvolvido especialmente para mulheres que descontam emoções na comida.",
      },
      {
        question: "Você atende online também?",
        answer:
          "Sim! Atendo tanto presencialmente em São Paulo e Porto Alegre, quanto online para clientes de todo o Brasil. A abordagem é igualmente eficaz em ambos os formatos.",
      },
      {
        question: "Preciso seguir uma dieta restritiva?",
        answer:
          "Não! O foco do meu trabalho é justamente libertar você de dietas restritivas. Trabalho com uma abordagem baseada em comportamento, que te ensina a fazer escolhas saudáveis sem restrições extremas ou terrorismo nutricional.",
      },
      {
        question: "Como começo o acompanhamento?",
        answer:
          "Entre em contato pelo WhatsApp para agendarmos uma consulta inicial. Nessa primeira conversa, vamos entender sua história, objetivos e discutir como o método 3C's pode te ajudar.",
      },
      {
        question: "E se eu já tentei de tudo e nada funcionou?",
        answer:
          "Isso é mais comum do que você imagina. Muitas das minhas pacientes chegaram até mim depois de anos tentando sozinhas ou passando por dietas super restritivas que não funcionaram a longo prazo. Mas aqui, a abordagem é diferente: não se trata de cortar tudo, nem de viver presa em regras alimentares. A gente vai entender de verdade o que está por trás das suas dificuldades, desde sabotadores internos até os gatilhos emocionais. Você não falhou. O que faltava era o caminho certo, com suporte, acolhimento e estratégias que respeitam sua rotina e sua história. E eu tô aqui pra caminhar com você nisso.",
      },
      {
        question: "E se eu tiver vergonha de pedir ajuda?",
        answer:
          "Você não precisa ter vergonha de sentir o que sente. Muita gente carrega culpa, medo ou insegurança quando o assunto é alimentação, corpo ou autoestima. Mas pedir ajuda não é sinal de fraqueza, é um ato de coragem e autocuidado. Meu papel aqui é te acolher, te ouvir sem julgamentos e construir um plano leve, possível e totalmente seu. A consulta é um espaço seguro, onde você pode ser quem você é. As minhas pacientes costumam enviar áudios e textões até no sábado e no domingo, e eu não só não me importo como AMO ver pessoas tão dedicas no próprio autodesenvolvimento! Pode vir com medo mesmo. Eu te recebo com empatia e braços abertos.",
      },
    ],
  },

  // Contact section
  contact: {
    title: "Entre em Contato",
    description:
      "Estou pronta para te ajudar a transformar sua relação com a comida. Entre em contato para saber mais sobre o método 3C's.",
    addresses: [
      {
        city: "São Paulo",
        label: "Núcleo Haya",
        address:
          "João Cachoeira, 488 - conjunto 1009 - Itaim Bibi, São Paulo - SP",
      },
      {
        city: "Porto Alegre",
        label: "Wall Street Profissional Center",
        address:
          "Av. Cristóvão Colombo, 1918 - sala 303 - Floresta, Porto Alegre - RS",
      },
    ],
    socialCards: {
      whatsapp: {
        title: "WhatsApp",
        description:
          "Tire suas dúvidas e agende sua consulta diretamente pelo WhatsApp",
        buttonText: "Mandar mensagem",
      },
      instagram: {
        title: "Instagram",
        description:
          "Conheça meu trabalho e acompanhe dicas de nutrição comportamental",
        buttonText: "Seguir",
      },
    },
    ctaText: "WhatsApp",
    clinicImage: {
      src: "/assets/clinica-para-atendimento-com-a-nutricionista-pietra.JPG",
      alt: "Clinica para atendimento com a nutricionista Pietra",
    },
    clinicSection: {
      title: "Onde atendemos",
    },
  },

  // Footer
  footer: {
    name: "Pietra Fogaça",
    title: "Nutricionista Comportamental",
    email: EMAIL,
    copyright: "Todos os direitos reservados.",
    socialLinks: [
      {
        name: "WhatsApp",
        href: `https://wa.me/${WHATSAPP_NUMBER}`,
        icon: "whatsapp" as const,
      },
      {
        name: "Instagram",
        href: INSTAGRAM_URL,
        icon: "instagram" as const,
      },
      {
        name: "Email",
        href: `mailto:${EMAIL}`,
        icon: "email" as const,
      },
    ],
  },
};

export default siteContent;
