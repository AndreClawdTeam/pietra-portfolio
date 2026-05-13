"use client";

import { reportConversion } from "@/lib/gtag";

const variants = {
  primary: `bg-gradient-to-br from-tertiary-light to-tertiary text-tertiary-foreground font-medium hover:from-tertiary-mid hover:to-tertiary shadow-md shadow-tertiary/30 transition duration-300 py-3 px-8 rounded-full`,
  ghost:
    "text-gray-800 font-medium hover:text-primary transition duration-300 py-3 hover:underline",
};

export function ExternalLink(props: {
  content: string;
  className?: string;
  link: string;
  variant?: "primary" | "ghost";
}) {
  return (
    <a
      href={props.link}
      className={`${props.className} ${variants[props.variant || "primary"]} inline-block text-center`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={reportConversion}
    >
      {props.content}
    </a>
  );
}
