import React from "react"
import styled from "@emotion/styled"
import theme from "../../utils/theme"

const StyledParagraph = styled.p(
  {
    lineHeight: 1.5,
    fontSize: 15,
  },
  props => ({
    color: props.color ? props.color : theme.colors.black,
    fontWeight: props.bold ? "bold" : "normal",
    marginRight: props.marginRight,
    marginLeft: props.marginLeft,
    margin: props.margin,
    textAlign: props.textAlign,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
  })
)

const Paragraph = props => (
  <StyledParagraph {...props}>{props.children}</StyledParagraph>
)

export default Paragraph
