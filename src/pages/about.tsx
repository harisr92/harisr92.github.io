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
            <div>
                <Layout.Heading title="Contact" />
            </div>
        </Layout>
    )
}

export default AboutIndex
