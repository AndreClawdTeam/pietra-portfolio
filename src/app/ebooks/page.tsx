import { getAllEbooks } from "@/services/ebooks";
import { EbookCard } from "./components/ebook-card";

export const revalidate = 1;

export default async function Page() {
  const ebooks = await getAllEbooks();

  return (
    <div className="flex flex-col">
      {/* Compact Header */}
      <div>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-foreground">
            Ebooks e Cursos
          </h1>
          <p className="text-muted-foreground mt-2">
            Descubra meus ebooks e cursos exclusivos com os segredos para uma
            vida mais saudável e equilibrada! Aqui você encontra guias práticos
            e completos para transformar sua relação com a alimentação de forma
            definitiva, sem dietas restritivas.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto py-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="border-b border-primary-foreground pb-6 last:border-0 last:pb-0"
            >
              <EbookCard ebook={ebook} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
