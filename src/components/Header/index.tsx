import React, { FC, useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/coming-soon.png/" }) {
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
    <header className="glass-nav" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: '1rem',
      zIndex: 100,
      flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Image
          fixed={logo}
          alt="logo"
          className="logo"
          style={{ borderRadius: '50%' }}
        />
        <span style={{ 
          fontWeight: 'var(--fontWeight-bold)', 
          fontSize: 'var(--fontSize-3)',
          color: 'var(--color-heading)'
        }}>
          Harikrishnan
        </span>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          color: 'var(--color-text)',
          cursor: 'pointer',
          padding: '0.5rem',
          borderRadius: 'var(--radius-md)',
        }}
        className="mobile-menu-toggle"
        aria-label="Toggle mobile menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <nav 
        className={`nav-menu ${isMenuOpen ? 'show' : ''}`}
        style={{ 
          display: 'flex', 
          gap: '2rem',
        }}
      >
        <Link 
          to="/" 
          className="btn-glass"
          style={{ 
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            fontWeight: 'var(--fontWeight-medium)',
            transition: 'all var(--transition-normal)'
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/blogs" 
          className="btn-glass"
          style={{ 
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            fontWeight: 'var(--fontWeight-medium)',
            transition: 'all var(--transition-normal)'
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link>
        <Link 
          to="/about" 
          className="btn-glass"
          style={{ 
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            fontWeight: 'var(--fontWeight-medium)',
            transition: 'all var(--transition-normal)'
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
