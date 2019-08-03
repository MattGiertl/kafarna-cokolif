import React from "react"
import styled from "@emotion/styled"

const StyledHeading = styled.h5({
  margin: "10px 0",
  padding: "64px 0",
  textAlign: "center",
  fontSize: "18px",
  lineHeight: 1.5,
  fontWeight: "normal",
  letterSpacing: "4px",
})

const StyledSpan = styled.span({
  padding: "3px 10px",
  background: "black",
  textAlign: "center",
  color: "white",
})

const SectionHeading = ({ children }) => (
  <StyledHeading>
    <StyledSpan>{children}</StyledSpan>
  </StyledHeading>
)

export default SectionHeading
