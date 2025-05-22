import { getAllArticles, getArticleById } from "@/services/articles";
import { redirect } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/Avatar";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { RenderBodyContent } from "@/sanity/components/render-body-content";
import { ArrowLeft } from "lucide-react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const revalidate = 1;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getAllArticles();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const post = await getArticleById(id);
  if (!post) return redirect("/not-found");
  const previousKeywords = (await parent).keywords || [];
  return {
    title: post.title,
    description: `Clique aqui para ler mais sobre ${post.title}...`,
    keywords: [post.title, ...previousKeywords],
    openGraph: {
      images: [post.thumbnail],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const post = await getArticleById(id);
  if (!post) return redirect("/blog");

  return (
    <article className="container mx-auto px-4 md:px-6">
      {/* Back Navigation */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Voltar para o blog</span>
      </Link>

      {/* Article Header */}
      <div className="max-w-3xl mx-auto">
        <header className="space-y-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>
                  {post.author.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span>{post.author.name}</span>
            </div>
            <span>·</span>
            <time dateTime={post.date.toISOString()} className="text-sm">
              {formatDate(post.date)}
            </time>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="blog-post prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <RenderBodyContent content={post.content} />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-6 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <time dateTime={post.date.toISOString()}>
              Publicado em {formatDate(post.date)}
            </time>
            <div className="flex items-center gap-2">
              <span>{post.author.name}</span>
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>
                  {post.author.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
