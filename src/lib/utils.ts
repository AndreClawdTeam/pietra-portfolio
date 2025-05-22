import { z } from "zod";

export function cn(...classes: (string | undefined | null | false | 0)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: Date | string) {
  const parsedDate = z.coerce.date().parse(date);
  return parsedDate.toLocaleDateString("pt-BR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
