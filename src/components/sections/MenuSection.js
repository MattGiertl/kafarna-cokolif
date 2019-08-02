import React from "react"

import Menu from "../organisms/Menu"

import HighlightedHeading from "../atoms/HighlightedHeading"
import styled from "@emotion/styled"

const MenuSectionWrapper = styled.section({
  display: "flex",
  flexDirection: "column",
})

const MenuSection = () => (
  <MenuSectionWrapper id="menu">
    <HighlightedHeading>MENU</HighlightedHeading>
    <Menu />
  </MenuSectionWrapper>
)

export default MenuSection
