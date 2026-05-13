"use client";

import siteContent from "@/content/siteContent";
import { reportConversion } from "@/lib/gtag";

export const ctaButtonColorCn =
  "bg-gradient-to-br from-tertiary-light to-tertiary text-tertiary-foreground font-medium hover:from-tertiary-mid hover:to-tertiary shadow-md shadow-tertiary/30 transition duration-300";

export function CtaButton(props: { content: string; className?: string }) {
  return (
    <a
      href={`https://wa.me/${siteContent.site.whatsappNumber}`}
      className={`${props.className} ${ctaButtonColorCn} py-3 px-8 rounded-full text-center`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={reportConversion}
    >
      {props.content}
    </a>
  );
}
