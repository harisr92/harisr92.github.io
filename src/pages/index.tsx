import { css } from "@emotion/core";
import { PageProps } from "gatsby";
import React from "react"
import Layout from "../components/layout"

function myDetails(): React.FC<PageProps> {
  return (
    <Layout>
      <div>
        <h1 css={css`
          display: inline-block;
          border-bottom: 1px solid;
          `}
        >
          A little about me
        </h1>
      </div>
    </Layout>
  )
}

function underMaintenance(): React.FS<PageProps> {
  return (
      <div>
        <h1>Site under maintance</h1>
        <span>Thank you for understanding</span>
      </div>
  )
}

const Home: React.FC<PageProps> = ({
  data
}) => {
  if(process.env.GATSBY_MAINTENANCE === "enabled") {
    return (underMaintenance())
  } else {
    return(myDetails())
  }
}

export default Home;
