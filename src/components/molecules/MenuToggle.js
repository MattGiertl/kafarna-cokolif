import React from "react"
import styled from "@emotion/styled"

const MenuToggleWrapper = styled.div(
  {
    color: "white",
    display: "flex",
    width: "50%",
    height: "32px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
    transition: "background 300ms, color 300ms",

    "&:hover": {
      background: "white",
      color: "black",
    },
  },
  props => ({
    borderBottom: props.isSelected ? "1.5px solid white" : "none",
  })
)

const StyledAnchor = styled.a({
  color: "inherit",
  textDecoration: "none",
  "&:visited": {
    color: "inherit",
  },
})

const MenuToggle = ({ isSelected, heading }) => (
  <MenuToggleWrapper isSelected={isSelected}>
    <StyledAnchor href="#menu">{heading}</StyledAnchor>
  </MenuToggleWrapper>
)

export default MenuToggle
