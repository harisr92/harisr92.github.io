import React, { FC, useEffect, useState } from 'react';
import { Link } from 'gatsby';

interface Props {
  // True when the page starts with the sky hero; the nav stays transparent until it scrolls past
  overHero?: boolean;
}

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/blogs', label: 'Blog' },
  { to: '/about', label: 'About' },
];

const Header: FC<Props> = ({ overHero = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(overHero);

  useEffect(() => {
    if (!overHero) return;
    const scene = document.getElementById('sky-scene');
    if (!scene) return;

    const update = () => setIsTransparent(scene.getBoundingClientRect().bottom > 0);
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [overHero]);

  const classes = ['nav'];
  if (isTransparent) classes.push('over-hero');
  if (isMenuOpen) classes.push('menu-open');

  return (
    <header className={classes.join(' ')}>
      <Link to="/" className="brand">
        Harikrishnan
      </Link>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mobile-menu-toggle"
        aria-label="Toggle mobile menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
