import { css } from "@emotion/core";
import { PageProps } from "gatsby";
import React from "react"
import Layout from "../components/Layout"
import Seo from '../components/Seo';

function myDetails(): React.FC<PageProps> {
  return (
    <Layout>
      <Seo title="Home" />
      <div css={css`
            text-align: center;
          `} >
        <Layout.Heading title="Harikrishnan Namboothiri" />
        <Layout.Container>
          <p>
            I am a web developer. I'm interested in technologies like Ruby, Ruby on Rails, Golang and different frameworks.
            I am also interested in devops and handling servers. If you are intersted please have look
            at the <a href="/blogs">Blogs</a> and <a href="/about">About</a> page.
          </p>
        </Layout.Container>
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
