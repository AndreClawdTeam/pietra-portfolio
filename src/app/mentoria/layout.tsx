import siteContent from "@/content/siteContent";
import { Metadata } from "next";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: `Mentoria Nutri Plus | ${siteContent.site.title}`,
  description:
    "Mentoria prática e individual para nutricionistas que querem se posicionar com estratégia, ter segurança clínica e construir uma carreira mais valorizada e lucrativa.",
  applicationName: "Nutricionista Pietra Fogaça",
  metadataBase: new URL("https://www.nutricionistapietra.com.br"),
  keywords: [
    "Mentoria Nutri Plus",
    "Mentoria para nutricionistas",
    "Posicionamento para nutricionistas",
    "Carreira em nutrição",
    "Nutricionista Pietra Fogaça",
    "Mentoria nutricionista",
    "Nutricionista comportamental mentora",
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
    title: `Mentoria Nutri Plus | ${siteContent.site.title}`,
    description:
      "Mentoria prática e individual para nutricionistas que querem se posicionar, ter segurança clínica e construir uma carreira mais lucrativa.",
    creator: "André Treib",
  },
};

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header isEbookLayout={true} />

      {/* Main content */}
      <main className="bg-accent flex-1 pt-24 pb-12">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
