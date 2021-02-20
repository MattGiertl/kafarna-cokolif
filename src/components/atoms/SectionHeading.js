import React from "react"
import styled from "@emotion/styled"
import Twig from "./Twig"
import theme from "../../utils/theme"

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px 0",
})

const StyledHeading = styled.h5({
  margin: "10px 0",
  textAlign: "center",
  fontSize: "18px",
  lineHeight: 1.5,
  fontWeight: "normal",
  letterSpacing: "4px",
})

const StyledSpan = styled.span(
  {
    padding: "3px 5px 3px 10px",
    textAlign: "center",
    color: "white",
  },
  props => ({
    background: props.backgroundColor
      ? props.backgroundColor
      : theme.colors.black,
  })
)

const SectionHeading = ({ children, backgroundColor = theme.colors.black }) => (
  <Wrapper>
    <StyledHeading>
      <StyledSpan backgroundColor={backgroundColor}>{children}</StyledSpan>
    </StyledHeading>
    <Twig />
  </Wrapper>
)

export default SectionHeading
