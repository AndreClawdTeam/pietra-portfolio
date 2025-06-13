"use client";

import siteContent from "@/content/siteContent";
import { reportConversion } from "@/lib/gtag";

export const ctaButtonColorCn =
  "bg-green-600 text-white font-medium hover:bg-green-700 transition duration-300";

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
