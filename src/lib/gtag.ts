"use client";

declare global {
  interface Window {
    gtag: (command: string, action: string, params: object) => void;
  }
}

export function reportConversion() {
  if (typeof window !== "undefined" && window.gtag !== undefined) {
    window.gtag("event", "conversion", {
      send_to: "AW-17059362533/MeOQCLPbidIaEOXtxMY_",
    });
  }
}
