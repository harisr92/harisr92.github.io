import React from "react"
import { PageProps} from "gatsby"
import { css } from "@emotion/core";

const Container: React.FC<PageProps> = ({
    children
}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container
