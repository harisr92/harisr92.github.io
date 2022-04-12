import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import HelmetHead from "../components/helmet"
import { MarkdownRemark } from "../entities/markdown-remark"
import Img from "gatsby-image"
import { css } from "@emotion/core"

type GraphQLResults = {
  markdownRemark: MarkdownRemark;
}

const BlogPost: React.FC<PageProps<GraphQLResults>> = ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
      <Layout>
          <HelmetHead>
            <title>Blog | {post.frontmatter.title}</title>
          </HelmetHead>
          <div>
            <h1>{post.frontmatter.title}</h1>
            <Img fluid={featuredImgFluid} />
            <div dangerouslySetInnerHTML={{ __html: post.html }} css={css`
                margin-top: 10px;
                `}
            />
          </div>
      </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPost;
