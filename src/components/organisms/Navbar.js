import React from "react"
import styled from "@emotion/styled"

const StyledNavbar = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "black",
  height: "45px",
  position: "fixed",
  zIndex: 1,
  top: 0,
})

const NavBar = ({ children }) => <StyledNavbar>{children}</StyledNavbar>

export default NavBar
