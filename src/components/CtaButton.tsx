"use client";

import siteContent from "@/content/siteContent";
import { reportConversion } from "@/lib/gtag";

export const ctaButtonColorCn =
  "bg-gradient-to-br from-emerald-700 to-emerald-900 text-white font-medium hover:from-emerald-800 hover:to-emerald-950 shadow-md shadow-emerald-900/20 transition duration-300";

export function CtaButton(props: { content: string; className?: string }) {
  return (
    <a
      href={`https://wa.me/${siteContent.site.whatsappNumber}`}
      className={`${props.className} ${ctaButtonColorCn} py-3 px-8 rounded-full`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={reportConversion}
    >
      {props.content}
    </a>
  );
}
