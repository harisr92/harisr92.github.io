import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const AboutIndex: React.FC<PageProps> = ({
    data
}) => {
    return (
        <Layout>
            <Seo title="About" />
        </Layout>
    )
}

export default AboutIndex
