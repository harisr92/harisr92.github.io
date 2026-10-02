import React from "react"
import Layout from "../components/Layout"
import { css } from "@emotion/react";
import { graphql, Link, PageProps } from "gatsby";
import { MarkdownRemark } from "../entities/markdown-remark";

type GraphQLData = {
  allMarkdownRemark: AllMarkdownRemark;
}

export type AllMarkdownRemark = {
  totalCount: number;
  edges: {
    node: MarkdownRemark
  }[]
}

const BlogIndex: React.FC<PageProps<GraphQLData>> = ({
    data
}) => {
  return (
    <Layout>
      <div>
        <Layout.Heading title="My experiences and notes" />
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: var(--spacing-2);
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: var(--color-text-muted);
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
