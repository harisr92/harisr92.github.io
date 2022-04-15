import React, { FC } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Header: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const logo = data?.logo?.childImageSharp?.fixed;

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
    }}>
      <Image
        fixed={logo}
        alt="logo"
        className="logo"
      />

      <nav>
        <Link style={{ marginLeft: '1rem' }} to="/">Home</Link>
        <Link style={{ marginLeft: '1rem' }} to="/blogs">Blog</Link>
        <Link style={{ marginLeft: '1rem' }} to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
