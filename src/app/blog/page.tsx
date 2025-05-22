import { getAllArticles } from "@/services/articles";
import { ArticleCard } from "./components/article-card";

export const revalidate = 1;

export default async function Page() {
  const articles = await getAllArticles();

  return (
    <div className="flex flex-col">
      {/* Compact Header */}
      <div>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-foreground">Blog</h1>
          <p className="text-muted-foreground mt-2">
            Textos e dicas sobre nutrição, emagrecimento e comportamento
            alimentar.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto py-8">
        <div className="grid gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border-b border-primary-foreground pb-6 last:border-0 last:pb-0"
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
