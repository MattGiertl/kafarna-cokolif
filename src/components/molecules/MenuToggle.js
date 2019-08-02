import React from "react"
import styled from "@emotion/styled"

const MenuToggleWrapper = styled.div(
  {
    display: "flex",
    width: "50%",
    height: "32px",
    justifyContent: "center",
    alignItems: "center",
  },
  props => ({
    borderBottom: props.isSelected ? "1.5px solid black" : "none",
  })
)

const MenuToggle = ({ isSelected, heading }) => (
  <MenuToggleWrapper isSelected={isSelected}>{heading}</MenuToggleWrapper>
)

export default MenuToggle
