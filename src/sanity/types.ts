/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableTextBlock } from "sanity";

export type SanityAuthor = {
  name: string;
  image: string;
  bio?: string;
  slug: {
    current: string;
  };
  _id?: number | string;
  _ref?: number | string;
};

export type SanityBlogPost = {
  _id: number;
  title: string;
  slug: any;
  description: string;
  metadata: string;
  body: PortableTextBlock[];
  mainImage: any;
  author: SanityAuthor;
  tags: string[];
  publishedAt: string;
};
