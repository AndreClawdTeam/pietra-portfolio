export const BLOG_REVALIDATE_TIME = process.env.BLOG_REVALIDATE_TIME
  ? parseInt(process.env.BLOG_REVALIDATE_TIME)
  : 60 * 10;
