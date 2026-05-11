import Image from "next/image";
import siteContent from "@/content/siteContent";
import { ExternalLink } from "@/components/ExternalLink";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const mentoriaTestimonialData = siteContent.mentoria.testimonials.map(
  (testimonial) => ({
    imageUrl: testimonial.image,
    name: testimonial.name,
    score: 5,
    testimonial: testimonial.text,
  })
);

export default function MentoriaPage() {
  const { mentoria } = siteContent;

  return (
    <article className="container mx-auto px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Foto: horizontal no mobile, vertical (cover) no desktop */}
          <div className="rounded-lg overflow-hidden md:relative md:self-stretch md:h-full">
            <Image
              src={mentoria.image.srcMobile}
              alt={mentoria.image.alt}
              priority
              width={1200}
              height={800}
              sizes="100vw"
              className="w-full h-auto md:hidden"
            />
            <Image
              src={mentoria.image.srcDesktop}
              alt={mentoria.image.alt}
              priority
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="hidden md:block object-cover object-center"
            />
          </div>

          {/* Texto + CTAs */}
          <div>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                {mentoria.title}
              </h1>
            </header>

            <div className="blog-post prose prose-lg prose-neutral dark:prose-invert max-w-none">
              {mentoria.paragraphs.map((paragraph, index) => (
                <p className="text-justify" key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <ExternalLink
                content={mentoria.primaryCtaText}
                link={mentoria.whatsappUrl}
                variant="primary"
              />
              <ExternalLink
                content={mentoria.secondaryCtaText}
                link={mentoria.formUrl}
                variant="ghost"
              />
            </div>

            {/* Carrossel — full width, abaixo das duas colunas */}
            <div className="sm:mt-6 overflow-hidden">
              <div className="pt-8">
                <TestimonialCarousel testimonials={mentoriaTestimonialData} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
