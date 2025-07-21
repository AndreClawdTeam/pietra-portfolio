import { z } from "zod";

const ebookSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.any(),
  description: z.string(),
  link: z.string(),
  thumbnail: z.string(),
  author: z.object({
    name: z.string(),
    avatar: z.string(),
  }),
  date: z.coerce.date(),
});
type Ebook = z.output<typeof ebookSchema>;

export { ebookSchema };
export type { Ebook };
