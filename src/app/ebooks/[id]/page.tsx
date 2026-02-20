import { getAllEbooks, getEbookById } from "@/services/ebooks";
import { notFound, redirect } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/Avatar";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { RenderBodyContent } from "@/sanity/components/render-body-content";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { ExternalLink } from "@/components/ExternalLink";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const revalidate = 1;
export const dynamicParams = true;

export async function generateStaticParams() {
  const ebooks = await getAllEbooks();
  return ebooks.map((ebook) => ({
    id: ebook.id,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const ebook = await getEbookById(id);
  if (!ebook) return redirect("/not-found");
  const previousKeywords = (await parent).keywords || [];

  if (ebook.previewImage || ebook.thumbnailImage) {
    return {
      title: ebook.title,
      description: ebook.description,
      keywords: [ebook.title, ...previousKeywords],
      openGraph: {
        images: [ebook.previewImage! ?? ebook.thumbnailImage!],
      },
    };
  }

  return {
    title: ebook.title,
    description: ebook.description,
    keywords: [ebook.title, ...previousKeywords],
    openGraph: null,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const ebook = await getEbookById(id);
  if (!ebook) return notFound();

  return (
    <article className="container mx-auto px-4 md:px-6">
      {/* Back Navigation */}
      <Link
        href="/ebooks"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Voltar para a lista de ebooks e cursos</span>
      </Link>

      {/* Article Header */}
      <div className="max-w-3xl mx-auto">
        <header className="space-y-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            {ebook.title}
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={ebook.author.avatar}
                  alt={ebook.author.name}
                />
                <AvatarFallback>
                  {ebook.author.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span>{ebook.author.name}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {ebook.previewImage || ebook.thumbnailImage ? (
          <div className="relative mb-12 rounded-lg">
            &nbsp;
            <Image
              src={(ebook.previewImage ?? ebook.thumbnailImage)!}
              alt={ebook.title}
              priority
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        ) : null}

        {/* Article Content */}
        <div className="blog-post prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <RenderBodyContent content={ebook.content} />
        </div>

        <div className="mt-12">
          <ExternalLink content="EU QUERO!" link={ebook.link} />
          <p className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
            <ShieldCheck className="h-4 w-4 text-green-500 shrink-0" />
            O pagamento é processado de forma segura pela plataforma Kiwify.
          </p>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-6 border-t border-primary/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <time dateTime={ebook.date.toISOString()}>
              {formatDate(ebook.date)}
            </time>
            <div className="flex items-center gap-2">
              <span>Feito com 💜 por {ebook.author.name}</span>
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={ebook.author.avatar}
                  alt={ebook.author.name}
                />
                <AvatarFallback>
                  {ebook.author.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
