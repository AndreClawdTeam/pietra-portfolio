import siteContent from "@/content/siteContent";
import { CodeIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${siteContent.site.title} | Blog`,
  description: siteContent.site.description,
  applicationName: "Nutricionista Pietra Fogaça",
  metadataBase: new URL("https://www.nutricionistapietra.com.br"),
  keywords: [
    "Nutricionista",
    "Nutri",
    "Pietra",
    "Fogaça",
    "Nutricionista Comportamental",
    "Nutricionista São Paulo",
    "Nutricionista Porto Alegre",
    "Nutricionista Online",
    "Nutricionista Presencial",
    "Nutricionista Online São Paulo",
    "Nutricionista Online Porto Alegre",
    "Nutricionista Presencial São Paulo",
    "Nutricionista Presencial Porto Alegre",
    "Método 3C's",
    "Método 3C's São Paulo",
    "Método 3C's Porto Alegre",
    "Método 3C's Online",
    "Método 3C's Presencial",
    "Método 3C's Online São Paulo",
    "Método 3C's Online Porto Alegre",
    "Nutricionista Comportamental São Paulo",
    "Nutricionista Comportamental Porto Alegre",
    "Nutricionista Comportamental Online",
    "Nutricionista Comportamental Presencial",
    "Nutricionista Comportamental Online São Paulo",
    "Nutricionista Comportamental Online Porto Alegre",
    "Nutricionista Comportamental Presencial São Paulo",
  ],
  authors: [{ name: "André Treib", url: "https://andretreib.com" }],
  creator: "André Treib",
  publisher: "André Treib",
  generator: "Next.js",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.site.title,
    description: siteContent.site.description,
    creator: "André Treib",
  },
};

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-[100dvh] blog">
      <header className="bg-background border-b px-4 md:px-6 flex items-center h-14">
        <div className="flex items-center gap-2">
          <CodeIcon className="h-6 w-6" />
          <span className="font-medium">{`Nutricionista Pietra Fogaça`}</span>
        </div>
        <nav className="ml-auto flex gap-4">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Início
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">{children}</div>
      </main>
      <footer className="bg-background border-t px-4 md:px-6 py-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-sm text-muted-foreground">
          &copy;{" "}
          {`${new Date().getFullYear()} Nutricionista Pietra Fogaça. Todos os direitos reservados.`}
        </div>
        <nav className="flex gap-4 mt-4 lg:mt-0">
          <Link
            href="/#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contato
          </Link>
        </nav>
      </footer>
    </div>
  );
}
