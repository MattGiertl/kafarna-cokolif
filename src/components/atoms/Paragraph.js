import React from "react"
import styled from "@emotion/styled"

const StyledParagraph = styled.p(
  {
    lineHeight: 1.5,
    fontSize: 15,
  },
  props => ({
    color: props.color,
    fontWeight: props.bold ? "bold" : "normal",
    marginRight: props.marginRight,
    marginLeft: props.marginLeft,
    margin: props.margin,
    fontSize: props.fontSize,
  })
)

const Paragraph = ({
  children,
  bold,
  fontSize,
  marginRight,
  margin,
  color,
  marginLeft,
}) => (
  <StyledParagraph
    fontSize={fontSize}
    color={color}
    bold={bold}
    margin={margin}
    marginRight={marginRight}
    marginLeft={marginLeft}
  >
    {children}
  </StyledParagraph>
)

export default Paragraph
