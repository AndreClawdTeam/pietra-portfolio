import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import siteContent from "@/content/siteContent";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteContent.site.title,
  description: siteContent.site.description,
  applicationName: "Nutricionista Pietra Fogaça",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans font-light`}>
        {children}
      </body>
    </html>
  );
}
