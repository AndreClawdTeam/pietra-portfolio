import Image from "next/image";
import Header from "@/components/Header";
import MethodSection from "@/components/MethodSection";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";
import siteContent from "@/content/siteContent";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";
import { WhatsAppCard } from "@/components/WhatsAppCard";
import { InstagramCard } from "@/components/InstagramCard";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Redesigned with full image area */}
      <section className="relative bg-gradient-to-r bg-accent min-h-[90vh] flex items-center pt-24">
        <div className="absolute inset-0 bg-gradient-to-r bg-accent z-0"></div>

        {/* Background image - visible on larger screens */}
        <div className="absolute inset-0 md:left-1/2 z-0 hidden md:block">
          <div className="relative w-full h-full">
            <Image
              src={siteContent.hero.image.src}
              alt=""
              fill
              priority
              className="object-cover object-top opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pb-12 pt-12 md:pt-0 md:pb-0">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                {siteContent.hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-foreground mb-8">
                {siteContent.hero.description}
              </p>
              <CtaButton
                content={siteContent.hero.ctaText}
                className="inline-block"
              />
            </div>

            {/* Image for mobile only - shown centrally */}
            <div className="md:hidden w-full flex justify-center mt-8">
              <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={siteContent.hero.image.src}
                  alt={siteContent.hero.image.alt}
                  width={1000}
                  height={1000}
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.stats.map((stat, index) => (
              <div key={index} className="bg-accent p-8 rounded-lg shadow-sm">
                <Counter
                  targetNumber={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Pietra Section */}
      <section id="sobre" className="py-16 bg-background">
        <div className="container mx-auto px-6 flex flex-col gap-12">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="aspect-square rounded-lg overflow-hidden shadow-md relative">
                <Image
                  src={siteContent.aboutPietra.image.src}
                  alt={siteContent.aboutPietra.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="text-xs text-muted text-center mt-1">
                CRN: {siteContent.aboutPietra.crn}
              </p>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-6 text-foreground">
                {siteContent.aboutPietra.title}
              </h1>
              {siteContent.aboutPietra.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-foreground mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
              <CtaButton
                content={siteContent.aboutPietra.ctaText}
                className="inline-block"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonials */}
            {siteContent.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-accent rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, j) => (
                        <span key={j}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-foreground">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-accent" id="resultados">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            {siteContent.about.title}
          </h2>
          <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
            {siteContent.about.description}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {siteContent.about.cards.map((card, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div>
                    <h4 className="font-bold">{card.title}</h4>
                  </div>
                </div>
                <p className="text-foreground">{card.content}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <CtaButton
              content={siteContent.about.ctaText}
              className="inline-block"
            />
          </div>
        </div>
      </section>

      {/* Method Section */}
      <MethodSection />

      {/* FAQ Section */}
      <section className="py-16 bg-accent" id="faq">
        <div className="container mx-auto px-6">
          <FAQ items={siteContent.faq.items} />
        </div>
      </section>

      {/* Contact Section - Redesigned to be more eye-catching */}
      <section className="py-20 bg-background" id="contato">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-3 text-foreground">
            {siteContent.contact.title}
          </h2>
          <p className="text-center text-lg mb-16 max-w-2xl mx-auto">
            {siteContent.contact.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <WhatsAppCard />

            {/* Instagram Card */}
            <InstagramCard />

            <div className="relative col-span-2">
              <div className="aspect-video rounded-lg overflow-hidden shadow-md relative">
                <Image
                  src={siteContent.contact.clinicImage.src}
                  alt={siteContent.contact.clinicImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center blur-xs"
                />
              </div>
              <div className="bg-tertiary/50 absolute top-0 left-0 w-full h-full text-center text-tertiary-foreground flex flex-col gap-8 items-center justify-center p-8">
                <h2 className="text-2xl font-bold">
                  {siteContent.contact.clinicSection.title}
                </h2>
                {siteContent.contact.addresses.map((address, index) => (
                  <div key={index}>
                    <p className="font-semibold">{address.city}</p>
                    <p>{address.label}</p>
                    <p className="text-tertiary-foreground">
                      {address.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tertiary text-tertiary-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h1 className="text-xl font-bold">{siteContent.footer.name}</h1>
              <p className="text-muted">{siteContent.footer.title}</p>
              <Link
                href={`mailto:${siteContent.footer.email}`}
                className="text-muted hover:text-tertiary-foreground underline!"
              >
                {siteContent.footer.email}
              </Link>
            </div>

            <div className="flex space-x-4">
              {siteContent.footer.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-primary transition duration-300"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon === "instagram" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ) : null}
                  {link.icon === "whatsapp" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163C.703 16.033.156 13.988.157 11.891.157 5.335 5.493 0 12.05 0c3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  ) : null}
                  {link.icon === "email" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ) : null}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-muted pt-8 text-center text-sm text-muted">
            © {new Date().getFullYear()} {siteContent.footer.name}.{" "}
            {siteContent.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
