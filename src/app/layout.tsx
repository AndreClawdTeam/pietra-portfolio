import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import siteContent from "@/content/siteContent";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteContent.site.title,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta
          name="facebook-domain-verification"
          content={process.env.FACEBOOK_DOMAIN_VERIFICATION_ID}
        />
      </head>
      <body className={`${poppins.variable} font-sans font-light`}>
        {children}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
    </html>
  );
}
