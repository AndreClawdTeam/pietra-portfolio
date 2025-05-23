import Image from "next/image";
import Header from "@/components/Header";
import MethodSection from "@/components/MethodSection";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";
import siteContent from "@/content/siteContent";
import { CtaButton } from "@/components/CtaButton";
import { WhatsAppCard } from "@/components/WhatsAppCard";
import { InstagramCard } from "@/components/InstagramCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Footer } from "@/components/Footer";

// Transform the site testimonials to match the TestimonialCarousel component props
const testimonialData = siteContent.testimonials.map((testimonial) => ({
  imageUrl: testimonial.image,
  name: testimonial.name,
  score: 5, // All testimonials show 5 stars in the current implementation
  testimonial: testimonial.text,
}));

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

          {/* Testimonials Carousel */}
          <div className="bg-accent rounded-xl shadow-md overflow-hidden">
            <div className="px-5 py-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
                O que as pacientes dizem
              </h2>
              <div>
                <TestimonialCarousel testimonials={testimonialData} />
              </div>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <WhatsAppCard />

            {/* Instagram Card */}
            <InstagramCard />

            <div className="rounded-2xl shadow-lg hidden md:block relative col-span-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-md relative">
                <Image
                  src={siteContent.contact.clinicImage.src}
                  alt={siteContent.contact.clinicImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center blur-xs"
                />
              </div>
              <div className="rounded-2xl bg-tertiary/50 absolute top-0 left-0 w-full h-full text-center text-tertiary-foreground flex flex-col gap-8 items-center justify-center p-8">
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

            <div className="rounded-2xl shadow-lg flex md:hidden relative bg-tertiary text-tertiary-foreground flex-col items-center justify-center gap-8 p-8">
              <h2 className="text-2xl font-bold">
                {siteContent.contact.clinicSection.title}
              </h2>
              {siteContent.contact.addresses.map((address, index) => (
                <div key={index}>
                  <p className="font-semibold">{address.city}</p>
                  <p>{address.label}</p>
                  <p className="text-tertiary-foreground">{address.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
