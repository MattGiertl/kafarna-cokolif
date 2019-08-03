import React from "react"
import Paragraph from "../atoms/Paragraph"
import styled from "@emotion/styled"

const FooterWrapper = styled.div({
  marginTop: "50px",
  display: "flex",
  height: "100px",
  background: "#EDEDED",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
})

const StyledAnchor = styled.a({
  textDecoration: "none",
  borderBottom: "1px solid black",
  "&:visited": { color: "black" },
})

const Footer = () => (
  <FooterWrapper>
    <Paragraph margin="0">
      Built by{" "}
      <StyledAnchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/MattGiertl"
      >
        Matúš Giertl
      </StyledAnchor>
    </Paragraph>
  </FooterWrapper>
)

export default Footer
