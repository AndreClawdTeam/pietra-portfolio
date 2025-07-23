import { SanityEbookPost } from "@/sanity/types";
import { Ebook, ebookSchema } from "./types";
import {
  getEbookBySlugFromSanity,
  getEbooksFromSanity,
  imageBuilder,
} from "@/sanity/sanity-utils";
import { z } from "zod";

function mapSanityToDomain(post: SanityEbookPost): Ebook {
  return {
    id: post.slug.current,
    title: post.title,
    content: post.body,
    description: post.description,
    link: post.link,
    thumbnailImage: post.thumbnailImage
      ? imageBuilder(post.thumbnailImage).url()
      : undefined,
    previewImage: post.previewImage
      ? imageBuilder(post.previewImage).url()
      : undefined,
    author: {
      name: post.author.name,
      avatar: imageBuilder(post.author.image).url(),
    },
    date: z.coerce.date().parse(post.publishedAt),
  };
}

async function getAllEbooks(): Promise<Array<Ebook>> {
  const ebooks = await getEbooksFromSanity();
  return ebookSchema
    .array()
    .parse(ebooks.map((ebook) => mapSanityToDomain(ebook)));
}

async function getEbookById(id: string): Promise<Ebook | null> {
  const ebook = await getEbookBySlugFromSanity(id);
  if (!ebook) return null;
  return ebookSchema.parse(mapSanityToDomain(ebook));
}

export { getAllEbooks, getEbookById };
