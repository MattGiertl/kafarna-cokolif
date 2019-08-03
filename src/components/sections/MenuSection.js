import React from "react"

import styled from "@emotion/styled"

import Menu from "../organisms/Menu"

import HighlightedHeading from "../atoms/HighlightedHeading"

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
