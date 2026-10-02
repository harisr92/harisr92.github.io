import React from "react"
import Header from '../Header'
import Footer from '../Footer'
import Heading from "./Heading"
import Container from "./Container"

interface LayoutProps {
  children?: React.ReactNode;
  hero?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> & {
  Heading: typeof Heading;
  Container: typeof Container;
} = ({ children, hero }) => {
  return (
    <>
      <Header overHero={Boolean(hero)} />
      {hero}
      <div className="global-wrapper" data-has-hero={Boolean(hero)}>
          <main>{children}</main>
          <Footer />

          {/* Floating Action Button for Contact */}
          <a
            href="mailto:harikrishnansr92@gmail.com"
            className="fab"
            title="Get in touch"
            aria-label="Email me"
          >
            ✉️
          </a>
      </div>
    </>
  )
}

Layout.Heading = Heading
Layout.Container = Container

export default Layout;
