import React from "react"
import styled from "@emotion/styled"
import theme from "../../utils/theme"

import { OutboundLink } from "gatsby-plugin-google-analytics"

const AnchorWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: '100%',
  background: "inherit",
  transition: "background 300ms",
  "&:hover": {
    background: "#EDEDED",
  },
})

const StyledAnchor = styled(OutboundLink)(
  {
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "15px",
    textAlign: "center",
    padding: "8px",
    "&:hover": {
      color: theme.colors.black,
    },
  },
  props => ({
    color: props.color ? props.color : "white",
  })
)

const Anchor = ({ text, to, color }) => (
  <AnchorWrapper>
    <StyledAnchor color={color} href={to}>
      {text}
    </StyledAnchor>
  </AnchorWrapper>
)

export default Anchor
