import React from "react"

import styled from "@emotion/styled"

import Menu from "../organisms/Menu"

import SectionHeading from "../molecules/SectionHeading"

const MenuSectionWrapper = styled.section({
  display: "flex",
  flexDirection: "column",
})

const MenuSection = () => (
  <MenuSectionWrapper id="menu">
    <SectionHeading>MENU</SectionHeading>
    <Menu />
  </MenuSectionWrapper>
)

export default MenuSection
