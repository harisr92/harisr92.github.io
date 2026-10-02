import React from "react"
import { PageProps} from "gatsby"
import { css } from "@emotion/react";

const Container: React.FC<{ children?: React.ReactNode }> = ({
    children
}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container
