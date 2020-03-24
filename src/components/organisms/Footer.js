import React from "react"
import Paragraph from "../atoms/Paragraph"
import styled from "@emotion/styled"
import theme from "../../utils/theme"

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
  borderBottom: `1px solid ${theme.colors.black}`,
  "&:visited": { color: theme.colors.black },
})

const Footer = () => (
  <FooterWrapper>
    <Paragraph margin="0" fontSize={14}>
      Copyright &copy;{" "}
      <StyledAnchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/MattGiertl"
      >
        Matúš Giertl
      </StyledAnchor>{" "}
      {new Date().getFullYear()}
    </Paragraph>
  </FooterWrapper>
)

export default Footer
