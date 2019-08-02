import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavlinkWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px",
  width: "100%",
})

const StyledLink = styled(Link)(
  {
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "11px",
  },
  props => ({
    color: props.color,
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
