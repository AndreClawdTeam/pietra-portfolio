"use client";

import { useState } from "react";
import siteContent from "@/content/siteContent";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        {siteContent.faq.title}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-accent rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left bg-background hover:underline cursor-pointer transition-colors"
              onClick={() => toggleOpen(index)}
            >
              <span className="font-medium text-foreground">
                {item.question}
              </span>
              <span className="ml-4 flex-shrink-0">
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="p-4 bg-background">
                <p className="text-foreground">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
