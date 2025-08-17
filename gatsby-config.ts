import register from 'ts-node';
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Harikrishnan Namboothiri`,
    description: `Senior Backend Engineer with 8+ years of experience in high-scale API development, Ruby on Rails, AWS, and performance optimization. Specialized in scaling SaaS platforms to millions of monthly transactions.`,
    author: `Harikrishnan Namboothiri`,
    siteUrl: `https://harisr92.github.io`,
    keywords: `Ruby on Rails, Backend Engineer, AWS, API Development, Performance Optimization, PostgreSQL, DevOps, Rust, React`,
    social: {
      linkedin: `harikrishnan-namboothiri`,
      github: `harisr92`,
      email: `harikrishnansr92@gmail.com`,
      website: `harisr92.github.io`,
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/images`,
        name: `images`,
      },
    }
  ]
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

export default config;
