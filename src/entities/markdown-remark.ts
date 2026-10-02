import type { ImageDataLike } from "gatsby-plugin-image";

export type MarkdownRemark = {
    id: string;
    frontmatter: {
      title: string;
      date: string;
      featuredImage?: ImageDataLike;
    };
    excerpt: string;
    html: string;
    fields: {
      slug: string;
    };
}
