import React from "react"

import styled from "@emotion/styled"

import Menu from "../organisms/Menu"

import SectionHeading from "../atoms/SectionHeading"

const MenuSectionWrapper = styled.section({
  display: "flex",
  flexDirection: "column",
})

const MenuSection = () => (
  <MenuSectionWrapper id="menu">
    <SectionHeading>ROZVOZ A MENU</SectionHeading>
    <Menu />
  </MenuSectionWrapper>
)

export default MenuSection
