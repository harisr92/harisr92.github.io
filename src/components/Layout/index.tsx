import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"
import Header from '../Header'
import Footer from '../Footer'
import Heading from "./Heading"

const Layout: React.FC = ({ children }) => {
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
    </div>
  )
}

Layout.Heading = Heading

export default Layout;
