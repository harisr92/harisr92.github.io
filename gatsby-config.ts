import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Harikrishnan Namboothiri`,
    description: `Senior Backend Engineer with 9+ years building and scaling SaaS, financial, and supply-chain platforms. Ruby on Rails, Java, Kafka, PostgreSQL, and AWS, with a focus on API architecture and performance engineering.`,
    author: `Harikrishnan Namboothiri`,
    siteUrl: `https://profile.hari-in-it.in`,
    keywords: `Ruby on Rails, Backend Engineer, AWS, API Development, Performance Optimization, PostgreSQL, DevOps, Rust, React`,
    social: {
      linkedin: `harikrishnan-namboothiri`,
      github: `harisr92`,
      email: `harikrishnansr92@gmail.com`,
      website: `profile.hari-in-it.in`,
    },
  },
  plugins: [
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
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
  path: `.env.${process.env.NODE_ENV}`,
  quiet: true,
})

export default config;
