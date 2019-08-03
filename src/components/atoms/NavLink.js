import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavlinkWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  transition: "background 300ms",
  "&:hover": {
    background: "#EDEDED",
  },
})

const StyledLink = styled(Link)(
  {
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "11px",
    textAlign: "center",
    width: "100%",
    height: "100%",
    padding: "8px",
    "&:hover": {
      color: "black",
    },
  },
  props => ({
    color: props.color ? props.color : "white",
  })
)

const NavLink = ({ text, to, color }) => (
  <NavlinkWrapper>
    <StyledLink color={color} to={to}>
      {text}
    </StyledLink>
  </NavlinkWrapper>
)

export default NavLink
