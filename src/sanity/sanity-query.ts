import { groq } from "next-sanity";

const postData = `{
  title,
  metadata,
  slug,
  tags,
  author->{
    _id,
    name,
    slug,
    image,
    bio
  },
  mainImage,
  publishedAt,
  description,
  body
}`;

export const postQuery = groq`*[_type == "post"] | order(publishedAt desc) ${postData}`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug][0] ${postData}`;

export const postQueryByTag = groq`*[_type == "post" && $slug in tags[]->slug.current] ${postData}`;

export const postQueryByAuthor = groq`*[_type == "post" && author->slug.current == $slug] ${postData}`;

export const postQueryByCategory = groq`*[_type == "post" && category->slug.current == $slug] ${postData}`;

const ebookData = `{
  title,
  metadata,
  description,
  slug,
  tags,
  author->{
    _id,
    name,
    slug,
    image,
    bio
  },
  thumbnailImage,
  previewImage,
  publishedAt,
  body,
  link
}`;

export const ebookQuery = groq`*[_type == "ebook"] | order(publishedAt desc) ${ebookData}`;

export const ebookQueryBySlug = groq`*[_type == "ebook" && slug.current == $slug][0] ${ebookData}`;

export const ebookQueryByTag = groq`*[_type == "ebook" && $slug in tags[]->slug.current] ${ebookData}`;

export const ebookQueryByAuthor = groq`*[_type == "ebook" && author->slug.current == $slug] ${ebookData}`;

export const ebookQueryByCategory = groq`*[_type == "ebook" && category->slug.current == $slug] ${ebookData}`;
