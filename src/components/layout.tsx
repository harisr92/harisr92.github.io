import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Aside from "./Aside/Aside";
import "react-pro-sidebar/dist/css/styles.css";
import "./Aside/Aside.scss";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div css={css`
        margin: 0 auto;
        max-width: 800px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Aside />
      {children}
    </div>
  )
}

export default Layout;
