import path from "path"
import fs from "fs/promises"
import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';
import { MarkdownRemark } from '../entities/markdown-remark';

// Render the About page content (src/data/resume.ts) to public/resume.pdf for download.
// Runs after bootstrap so the file exists in both `gatsby develop` and `gatsby build`.
export const onPostBootstrap: GatsbyNode['onPostBootstrap'] = async ({ reporter }) => {
  const React = await import("react")
  const { renderToFile } = await import("@react-pdf/renderer")
  const { default: ResumePdf } = await import("./src/resume/ResumePdf")
  const out = path.resolve("public", "resume.pdf")
  await renderToFile(React.createElement(ResumePdf) as Parameters<typeof renderToFile>[0], out)
  reporter.info(`Generated resume PDF at ${out}`)
}

// Pages kept out of the sitemap (404s and scratch pages)
const SITEMAP_EXCLUDE = [/^\/404/, /^\/dev-404-page/, /^\/typescript/]

type SitemapData = {
  site: { siteMetadata: { siteUrl: string } }
  allSitePage: { nodes: { path: string }[] }
}

// Write public/sitemap.xml listing every built page (referenced from static/robots.txt)
export const onPostBuild: GatsbyNode['onPostBuild'] = async ({ graphql, reporter }) => {
  const result = await graphql<SitemapData>(`
    query {
      site { siteMetadata { siteUrl } }
      allSitePage { nodes { path } }
    }
  `)
  if (!result.data) {
    reporter.panicOnBuild('Failed querying pages for sitemap.xml')
    return
  }

  const siteUrl = result.data.site.siteMetadata.siteUrl.replace(/\/$/, '')
  const urls = result.data.allSitePage.nodes
    .map(({ path: pagePath }) => pagePath)
    .filter((pagePath) => !SITEMAP_EXCLUDE.some((re) => re.test(pagePath)))
    .sort()
    .map((pagePath) => `  <url><loc>${siteUrl}${pagePath}</loc></url>`)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`
  await fs.writeFile(path.resolve('public', 'sitemap.xml'), xml)
  reporter.info(`Generated sitemap.xml with ${urls.length} URLs`)
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

type ResultData = {
    allMarkdownRemark: {
        edges: {
            node: Partial<MarkdownRemark>
        } []
    }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql<ResultData>(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    if (!result.data) {
        throw new Error('Failed fetching blog posts');
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (!node?.fields) {
            return;
        }
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.tsx`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
        })
    })
}
