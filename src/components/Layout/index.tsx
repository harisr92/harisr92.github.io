import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"
import Header from '../Header'
import Footer from '../Footer'
import Heading from "./Heading"
import Container from "./Container"

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> & {
  Heading: typeof Heading;
  Container: typeof Container;
} = ({ children }) => {
  return (
    <div css={css`
        margin: 0 auto;
        max-width: 800px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* Floating Action Button for Contact */}
        <a 
          href="mailto:harikrishnansr92@gmail.com" 
          className="fab"
          title="Get in touch"
        >
          ✉️
        </a>
    </div>
  )
}

Layout.Heading = Heading
Layout.Container = Container

export default Layout;
