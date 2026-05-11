"use client";

import { reportConversion } from "@/lib/gtag";
import Link from "next/link";

const variants = {
  primary: `bg-gradient-to-br from-emerald-700 to-emerald-900 text-white font-medium hover:from-emerald-800 hover:to-emerald-950 shadow-md shadow-emerald-900/20 transition duration-300 py-3 px-8 rounded-full`,
  ghost:
    "text-gray-800 font-medium hover:text-primary transition duration-300 py-3 hover:underline",
};

export function InternalLink(props: {
  content: string;
  className?: string;
  link: string;
  variant?: "primary" | "ghost";
}) {
  return (
    <Link
      href={props.link}
      className={`${props.className} ${variants[props.variant || "primary"]} inline-block`}
      prefetch={false}
      onClick={reportConversion}
    >
      {props.content}
    </Link>
  );
}
