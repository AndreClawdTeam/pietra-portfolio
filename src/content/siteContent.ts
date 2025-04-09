const WHATSAPP_NUMBER = "5551982903170";
const INSTAGRAM_URL = "https://instagram.com/nutricionistapietra";

export const siteContent = {
  // General site info
  site: {
    title: "Pietra Fogaça | Nutricionista Comportamental",
    description:
      "Emagreça de forma definitiva com o método 3C's para mulheres que descontam emoções na comida. +400kg eliminados com resultados que duram.",
    address: "R. João Cachoeira, 488 - Conj 1009 - Itaim Bibi, São Paulo",
    whatsappNumber: WHATSAPP_NUMBER,
  },

  // Navigation header
  navigation: {
    brand: "Pietra Fogaça",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Método", href: "#metodo" },
      { label: "FAQ", href: "#faq" },
      { label: "Contato", href: "#contato" },
    ],
    cta: {
      label: "Agende Agora",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
  },

  // Hero section
  hero: {
    headline: "Transforme sua relação com a comida definitivamente.",
    description:
      "Com o método 3C's, mais de 400kg já foram eliminados por mulheres que descontavam suas emoções na comida. Você nunca mais terá que emagrecer novamente.",
    ctaText: "Quero saber mais",
    image: {
      alt: "Pietra Fogaça - Nutricionista",
      src: "/assets/nutricionista-pietra-fogaca.png",
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
    title: "Nutrição Comportamental",
    description:
      "Mais de 400kg eliminados com o método 3C&apos;s por mulheres que descontavam suas emoções na comida.",
    cards: [
      {
        title: "Plano Personalizado",
        content:
          "Planos alimentares adaptados às suas necessidades emocionais, rotina e preferências.",
      },
      {
        title: "Método Exclusivo",
        content:
          "Uma abordagem única que trata a relação emocional com a comida, para resultados que duram para sempre.",
      },
      {
        title: "Apoio Contínuo",
        content:
          "Tenha acesso direto para tirar dúvidas e ajustarmos seu plano sempre que necessário entre as consultas.",
      },
    ],
  },

  // Method section
  method: {
    title: "O Método 3C's",
    description:
      "Um método exclusivo que já ajudou centenas de mulheres a perderem mais de 400kg, transformando definitivamente sua relação com a comida.",
    steps: [
      {
        title: "Conhecimento",
        description:
          "Entenda como suas emoções influenciam seus hábitos alimentares e aprenda a identificar gatilhos emocionais.",
        icon: "🧠",
      },
      {
        title: "Consciência",
        description:
          "Desenvolva consciência plena para estar presente nas suas refeições e reconhecer a fome física vs. emocional.",
        icon: "👁️",
      },
      {
        title: "Comportamento",
        description:
          "Transforme seus comportamentos alimentares com estratégias práticas, sem restrições severas ou terrorismo nutricional.",
        icon: "🔄",
      },
    ],
    ctaText: "Quero transformar minha relação com a comida",
  },

  // About Pietra section
  aboutPietra: {
    title: "Sobre Pietra Fogaça",
    image: {
      alt: "Pietra Fogaça Nutricionista com Jaleco",
      src: "/assets/nutricionista-pietra-fogaca-de-jaleco.png",
    },
    paragraphs: [
      "Nutricionista comportamental especializada em ajudar mulheres que descontam suas emoções na comida. Com base em São Paulo e Porto Alegre, já ajudei centenas de mulheres a transformarem definitivamente sua relação com a alimentação.",
      "Meu método 3C's já eliminou mais de 400kg, mas o mais importante: meus clientes aprendem a nunca mais precisar emagrecer novamente.",
      "Acredito que a nutrição vai além de calorias e macronutrientes - é sobre entender a relação emocional com a comida e desenvolver hábitos sustentáveis.",
    ],
  },

  // Testimonials
  testimonials: [
    {
      name: "Cliente 1",
      image: "/images/testimonial1.jpg", // Replace with actual image path
      text: "O método da Pietra mudou minha vida. Finalmente entendi minha relação com a comida e consegui emagrecer de forma sustentável.",
    },
    {
      name: "Cliente 2",
      image: "/images/testimonial2.jpg", // Replace with actual image path
      text: "O método da Pietra mudou minha vida. Finalmente entendi minha relação com a comida e consegui emagrecer de forma sustentável.",
    },
    {
      name: "Cliente 3",
      image: "/images/testimonial3.jpg", // Replace with actual image path
      text: "O método da Pietra mudou minha vida. Finalmente entendi minha relação com a comida e consegui emagrecer de forma sustentável.",
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
    ],
  },

  // Contact section
  contact: {
    title: "Entre em Contato",
    description:
      "Estou pronta para te ajudar a transformar sua relação com a comida. Entre em contato para saber mais sobre o método 3C's.",
    address: "R. João Cachoeira, 488 - Conj 1009 - Itaim Bibi, São Paulo",
    socialCards: {
      whatsapp: {
        title: "WhatsApp",
        description:
          "Tire suas dúvidas e agende sua consulta diretamente pelo WhatsApp",
        buttonText: "Falar agora",
      },
      instagram: {
        title: "Instagram",
        description:
          "Conheça meu trabalho e acompanhe dicas de nutrição comportamental",
        buttonText: "Seguir",
      },
    },
    ctaText: "WhatsApp",
  },

  // Footer
  footer: {
    name: "Pietra Fogaça",
    title: "Nutricionista Comportamental",
    copyright: "Todos os direitos reservados.",
    socialLinks: [
      {
        name: "WhatsApp",
        href: `https://wa.me/${WHATSAPP_NUMBER}`,
        icon: "whatsapp",
      },
      {
        name: "Instagram",
        href: INSTAGRAM_URL,
        icon: "instagram",
      },
    ],
  },
};

export default siteContent;
