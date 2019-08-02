import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledLink = styled(Link)(
  {
    textDecoration: "none",
    cursor: "pointer",
  },
  props => ({
    color: props.color,
  })
)

const NavLink = ({ text, to, color }) => (
  <StyledLink color={color} to={to}>
    {text}
  </StyledLink>
)

export default NavLink
