import React from "react"
import { PageProps} from "gatsby"
import { css } from "@emotion/core";

interface Props {
    title?: string
}

const Heading: React.FC<PageProps<Props>> = ({
    title
}) => {
    return (
        <h1 css={css`
            display: inline-block;
            border-bottom: 1px solid;
            `}
        >
            A little about me
        </h1>
    )
}

export default Heading
