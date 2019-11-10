import React from "react"
import styled from "@emotion/styled"

import theme from "../../utils/theme"
import { mobileQuery } from "../../utils/mediaqueries"

const { colors } = theme

const StyledNavbar = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: colors.blue,
  height: "45px",
  position: "fixed",
  zIndex: 2,
  top: 0,

  [mobileQuery]: {
    height: "52px",
  },
})

const NavBar = ({ children }) => <StyledNavbar>{children}</StyledNavbar>

export default NavBar
