import { Article } from "@/services/articles/types";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/Avatar";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${article.id}`}
      className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 group"
      prefetch={false}
    >
      <div className="relative aspect-[4/3] md:aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={article.thumbnail}
          fill
          alt={article.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between py-1">
        <div>
          <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {article.title}
          </h2>
          <p className="mt-2 text-muted-foreground">{article.description}</p>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground mt-4">
          <Avatar className="w-6 h-6 border">
            <AvatarImage
              src={article.author.avatar}
              alt={article.author.name}
            />
            <AvatarFallback>
              {article.author.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2 text-sm">
            <span>{article.author.name}</span>
            <span>·</span>
            <time dateTime={article.date.toISOString()} className="text-sm">
              {formatDate(article.date)}
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { ArticleCard };
