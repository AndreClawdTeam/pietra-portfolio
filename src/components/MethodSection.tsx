export default function MethodSection() {
  const steps = [
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
  ];

  return (
    <section className="py-16 bg-white" id="metodo">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            O Método 3C&apos;s
          </h2>
          <p className="text-gray-700">
            Um método exclusivo que já ajudou centenas de mulheres a perderem
            mais de 400kg, transformando definitivamente sua relação com a
            comida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-pink-50 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-400"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5511xxxxxxxxx"
            className="inline-block bg-pink-600 text-white font-medium py-3 px-8 rounded-full hover:bg-pink-700 transition duration-300"
          >
            Quero transformar minha relação com a comida
          </a>
        </div>
      </div>
    </section>
  );
}
