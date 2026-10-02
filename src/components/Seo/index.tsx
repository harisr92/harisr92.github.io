/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  title?: string;
}

const Seo: FC<Props> = ({ description, lang, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            social {
              linkedin
              github
              email
              website
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  const pageTitle = title
    ? (defaultTitle ? `${title} | ${defaultTitle}` : title)
    : defaultTitle;

  return (
    <>
      <html lang={lang || 'en'} />
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={site.siteMetadata?.author || ``} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata?.siteUrl || ``} />
      <meta property="og:site_name" content={site.siteMetadata?.title || ``} />
      <meta name="linkedin:card" content="summary" />
      <meta name="linkedin:creator" content={site.siteMetadata?.social?.linkedin || ``} />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F4F2FF" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#15182F" />
      <meta name="msapplication-TileColor" content="#15182F" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    </>
  );
};

export default Seo;
