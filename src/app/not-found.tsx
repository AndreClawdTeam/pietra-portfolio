import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-accent flex items-center justify-center px-6">
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/404-illustration.svg"
            alt="Page not found illustration"
            fill
            priority
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Ops! Página não encontrada
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
