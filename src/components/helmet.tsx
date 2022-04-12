import React from "react"
import { Helmet } from "react-helmet"

const HelmetHead: React.FC = ({ children }) => {
  return (
      <Helmet>
          <meta charSet="utf-8" />
          <link rel="canonical" href="https://harisr92.github.io" />
          {children}
      </Helmet>
  )
}

export default HelmetHead
