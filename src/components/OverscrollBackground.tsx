"use client";

import { useEffect } from "react";
import { overscrollEdge } from "@/lib/overscroll";

/**
 * Sets `data-overscroll` on `<html>` to the page edge that is nearer.
 * Safari on macOS paints the rubber-band area with the `<html>` background color.
 * `globals.css` maps each edge to the color of the section at that edge.
 */
export function OverscrollBackground() {
  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      const edge = overscrollEdge(
        window.scrollY,
        root.scrollHeight - window.innerHeight,
      );
      if (root.dataset.overscroll !== edge) root.dataset.overscroll = edge;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      delete root.dataset.overscroll;
    };
  }, []);

  return null;
}
