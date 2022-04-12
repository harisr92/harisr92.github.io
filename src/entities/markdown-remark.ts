export type MarkdownRemark = {
    id: string;
    frontmatter: {
      title: string;
      date: string;
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
    excerpt: string;
    html: string;
    fields: {
      slug: string;
    }
}
