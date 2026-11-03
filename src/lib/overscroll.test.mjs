import { test } from "node:test";
import assert from "node:assert/strict";
import { overscrollEdge } from "./overscroll.ts";

test("gives top at the start of a scrollable page", () => {
  // Assemble
  const scrollTop = 0;
  const maxScrollTop = 3000;

  // Act
  const edge = overscrollEdge(scrollTop, maxScrollTop);

  // Assert
  assert.equal(edge, "top");
});

test("gives bottom at the end of a scrollable page", () => {
  const edge = overscrollEdge(3000, 3000);

  assert.equal(edge, "bottom");
});

test("gives top before the midpoint and bottom after it", () => {
  assert.equal(overscrollEdge(1500, 3000), "top");
  assert.equal(overscrollEdge(1501, 3000), "bottom");
});

test("gives top when the page cannot scroll", () => {
  const edge = overscrollEdge(0, 0);

  assert.equal(edge, "top");
});

test("gives top during the rubber-band bounce above the page", () => {
  const edge = overscrollEdge(-40, 3000);

  assert.equal(edge, "top");
});

test("gives bottom during the rubber-band bounce below the page", () => {
  const edge = overscrollEdge(3040, 3000);

  assert.equal(edge, "bottom");
});
