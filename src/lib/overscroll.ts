export type OverscrollEdge = "top" | "bottom";

/**
 * Gives the page edge that is nearer to the scroll position.
 * The overscroll color is set before the user reaches the edge, so Safari shows no flash.
 * A page that cannot scroll gives "top".
 */
export function overscrollEdge(
  scrollTop: number,
  maxScrollTop: number,
): OverscrollEdge {
  return maxScrollTop > 0 && scrollTop > maxScrollTop / 2 ? "bottom" : "top";
}
