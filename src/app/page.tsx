import Header from "@/components/Header";
import MethodSection from "@/components/MethodSection";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";

export default function Home() {
  const faqItems = [
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-pink-100 min-h-[90vh] flex items-center pt-24">
        <div className="container mx-auto px-6 z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                Transforme sua relação com a comida definitivamente.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Com o método 3C&apos;s, mais de 400kg já foram eliminados por
                mulheres que descontavam suas emoções na comida. Você nunca mais
                terá que emagrecer novamente.
              </p>
              <a
                href="https://wa.me/5511xxxxxxxxx"
                className="inline-block bg-pink-600 text-white font-medium py-3 px-8 rounded-full hover:bg-pink-700 transition duration-300"
              >
                Quero saber mais
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
                {/* Replace with actual image of Pietra */}
                <div className="absolute inset-0 bg-pink-200 flex items-center justify-center text-pink-800 text-lg font-medium">
                  Foto Pietra Fogaça
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-50 p-8 rounded-lg shadow-sm">
              <Counter
                targetNumber={400}
                label="eliminados com o método 3C's"
                suffix="kg+"
              />
            </div>
            <div className="bg-pink-50 p-8 rounded-lg shadow-sm">
              <Counter
                targetNumber={100}
                label="mulheres transformadas"
                suffix="+"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <MethodSection />

      {/* Results Section */}
      <section className="py-16 bg-pink-50" id="resultados">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Nutrição comportamental
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Mais de 400kg eliminados com o método 3C&apos;s por mulheres que
            descontavam suas emoções na comida.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((i) => (
              <div key={i.title} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div>
                    <h4 className="font-bold">{i.title}</h4>
                  </div>
                </div>
                <p className="text-gray-700">{i.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Pietra Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 flex flex-col gap-12">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="aspect-square rounded-lg bg-pink-100 flex items-center justify-center">
                {/* Replace with actual image */}
                <div className="text-pink-800 text-lg font-medium">
                  Foto Pietra Fogaça
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Sobre Pietra Fogaça
              </h2>
              <p className="text-gray-700 mb-4">
                Nutricionista comportamental especializada em ajudar mulheres
                que descontam suas emoções na comida. Com base em São Paulo e
                Porto Alegre, já ajudei centenas de mulheres a transformarem
                definitivamente sua relação com a alimentação.
              </p>
              <p className="text-gray-700 mb-4">
                Meu método 3C&apos;s já eliminou mais de 400kg, mas o mais
                importante: meus clientes aprendem a nunca mais precisar
                emagrecer novamente.
              </p>
              <p className="text-gray-700">
                Acredito que a nutrição vai além de calorias e macronutrientes -
                é sobre entender a relação emocional com a comida e desenvolver
                hábitos sustentáveis.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder for testimonials - would be replaced with actual testimonials */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-pink-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Cliente {i}</h4>
                    <div className="flex text-pink-500">
                      {[...Array(5)].map((_, j) => (
                        <span key={j}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  &quot;O método da Pietra mudou minha vida. Finalmente entendi
                  minha relação com a comida e consegui emagrecer de forma
                  sustentável.&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-pink-50" id="faq">
        <div className="container mx-auto px-6">
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-pink-50" id="contato">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Entre em Contato
          </h2>

          <div className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-sm">
            <p className="text-center mb-6 text-gray-700">
              Estou pronta para te ajudar a transformar sua relação com a
              comida. Entre em contato para saber mais sobre o método 3C&apos;s.
            </p>

            <div className="flex flex-col space-y-4">
              <a
                href="https://wa.me/5511xxxxxxxxx"
                className="flex items-center justify-center bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300"
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M.057 24l1.687-6.163C.703 16.033.156 13.988.157 11.891.157 5.335 5.493 0 12.05 0c3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                WhatsApp
              </a>

              <p className="text-center text-sm text-gray-600">
                R. João Cachoeira, 488 - Conj 1009 - Itaim Bibi, São Paulo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Pietra Fogaça</h3>
              <p className="text-gray-400">Nutricionista Comportamental</p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://wa.me/5511xxxxxxxxx"
                className="hover:text-pink-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163C.703 16.033.156 13.988.157 11.891.157 5.335 5.493 0 12.05 0c3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/"
                className="hover:text-pink-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Pietra Fogaça. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
