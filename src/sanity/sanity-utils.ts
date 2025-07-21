import ImageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
import {
  ebookQuery,
  ebookQueryBySlug,
  postQuery,
  postQueryBySlug,
} from "./sanity-query";
import { SanityBlogPost, SanityEbookPost } from "./types";

export const client = createClient(clientConfig);

export function imageBuilder(source: string) {
  return ImageUrlBuilder(clientConfig).image(source);
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    next: {
      revalidate: 1,
      tags,
    },
  });
}

export const getPostsFromSanity = async () => {
  return sanityFetch<SanityBlogPost[]>({
    query: postQuery,
    qParams: {},
    tags: ["post", "author", "category"],
  });
};

export const getPostBySlugFromSanity = async (slug: string) => {
  return sanityFetch<SanityBlogPost>({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });
};

export const getEbooksFromSanity = async () => {
  return sanityFetch<SanityEbookPost[]>({
    query: ebookQuery,
    qParams: {},
    tags: ["ebook", "author", "category"],
  });
};

export const getEbookBySlugFromSanity = async (slug: string) => {
  return sanityFetch<SanityEbookPost>({
    query: ebookQueryBySlug,
    qParams: { slug },
    tags: ["post", "author", "category"],
  });
};
