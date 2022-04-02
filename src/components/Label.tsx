import * as React from 'react'
import styled, { keyframes } from 'styled-components'

interface ILabelProps {
    title: string
    color?: string
    fs?: string
    mt?: string
    fw?: number
    ml?: string
    mb?: string
    mr?: string
    cursor?: string
    alignCenter?: boolean
    absolute?: boolean
    onClick?: () => void
}

const StyledText = styled.p<{ cursor?: string }>`
    &:hover {
        text-shadow: ${props => props.cursor === "pointer" ? "1px 1px 9px white, 0 0 2em white, 0 0 1em darkblue" : "none"};
    }
`

const Label = (props: ILabelProps) => {
    const { title, color, fs, mt, mb, fw, ml, mr, cursor, alignCenter, absolute } = props
    return (
        <StyledText style={{
            color: color ? color : "white",
            fontSize: fs ? fs : "14px",
            margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
            fontWeight: fw ? fw : 400,
            marginLeft: ml ? ml : 0,
            cursor: cursor ? cursor : "default",
            textAlign: alignCenter ? "center" : "left",
            position: absolute ? "absolute" : "relative"
        }}
            cursor={cursor}
            onClick={props.onClick}
        >{title}</StyledText>
    )
}

export default Label