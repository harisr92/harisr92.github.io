import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"
import { MarkdownRemark } from "../entities/markdown-remark"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

type GraphQLResults = {
  markdownRemark: MarkdownRemark;
}

const BlogPost: React.FC<PageProps<GraphQLResults>> = ({ data }) => {
  const post = data.markdownRemark;
  const featuredImg = getImage(post.frontmatter.featuredImage ?? null)

  return (
      <Layout>
          <div>
            <h1>{post.frontmatter.title}</h1>
            {featuredImg && <GatsbyImage image={featuredImg} alt={post.frontmatter.title} />}
            <div dangerouslySetInnerHTML={{ __html: post.html }} css={css`
                margin-top: 10px;
                `}
            />
          </div>
      </Layout>
  )
}

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
