import siteContent from "@/content/siteContent";

export default function MethodSection() {
  return (
    <section className="py-16 bg-white" id="metodo">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {siteContent.method.title}
          </h2>
          <p className="text-gray-700">{siteContent.method.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {siteContent.method.steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-pink-50 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>

              {index < siteContent.method.steps.length - 1 && (
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
            href={`https://wa.me/${siteContent.site.whatsappNumber}`}
            className="inline-block bg-pink-600 text-white font-medium py-3 px-8 rounded-full hover:bg-pink-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteContent.method.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
