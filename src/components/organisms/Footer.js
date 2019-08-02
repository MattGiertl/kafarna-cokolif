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

const Footer = () => (
  <FooterWrapper>
    <Paragraph margin="0">
      Built by{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", "&:visited": { color: "black" } }}
        href="https://github.com/MattGiertl"
      >
        Matúš Giertl
      </a>
    </Paragraph>
  </FooterWrapper>
)

export default Footer
