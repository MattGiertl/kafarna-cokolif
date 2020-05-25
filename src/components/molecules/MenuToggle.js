import React from "react"
import styled from "@emotion/styled"
import theme from "../../utils/theme"

const MenuToggleWrapper = styled.div(
  {
    color: "white",
    display: "flex",
    width: "100%",
    height: "32px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
    transition: "background 300ms, color 300ms",
    textAlign: "center",

    "&:hover": {
      background: "white",
      color: theme.colors.black,
    },
  },
  props => ({
    borderBottom: props.isSelected ? "1.5px solid white" : "none",
  })
)

const StyledAnchor = styled.a({
  color: "inherit",
  textDecoration: "none",
})

const MenuToggle = ({ isSelected, heading, onClick }) => (
  <MenuToggleWrapper isSelected={isSelected} onClick={onClick}>
    <StyledAnchor href="#menu">{heading}</StyledAnchor>
  </MenuToggleWrapper>
)

export default MenuToggle
