export type MarkdownRemark = {
    id: string;
    frontmatter: {
      title: string;
      date: string;
      featuredImage?: {
        childImageSharp?: {
          fluid?: {
            aspectRatio: number;
            src: string;
            srcSet: string;
            sizes: string;
            base64?: string;
            tracedSVG?: string;
            srcWebp?: string;
            srcSetWebp?: string;
          };
        };
      };
    };
    excerpt: string;
    html: string;
    fields: {
      slug: string;
    };
}
