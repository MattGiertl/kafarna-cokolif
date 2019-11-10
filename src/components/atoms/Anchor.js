import React from "react"
import styled from "@emotion/styled"
import theme from "../../utils/theme"

const AnchorWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  cursor: "pointer",
  height: "100%",
  background: "inherit",
  transition: "background 300ms",
  "&:hover": {
    background: "#EDEDED",
  },
})

const StyledAnchor = styled.a(
  {
    textDecoration: "none",
    cursor: "pointer",
    width: '100%',
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
