import React from "react"

import SplashCover from "../images/cokolif-wall.jpg"

import AboutSection from "../components/sections/AboutSection"

import Navbar from "../components/organisms/Navbar"
import Splash from "../components/organisms/Splash"
import Footer from "../components/organisms/Footer"

import NavLink from "../components/atoms/NavLink"
import MenuSection from "../components/sections/MenuSection"
import VisitUsSection from "../components/sections/VisitUsSection"
import Wrapper from "../components/atoms/Wrapper"
import styled from "@emotion/styled"

import "../normalize.css"

const ContentWrapper = styled(Wrapper)({
  maxWidth: "700px",
  margin: "0 auto",
})

const IndexPage = () => (
  <Wrapper>
    <Navbar>
      <NavLink to="#" text="DOMŮ" />
      <NavLink to="#o-nas" text="O NÁS" />
      <NavLink to="#menu" text="MENU" />
      <NavLink to="#navstivte-nas" text="NAVŠTIVTE NÁS" />
    </Navbar>
    <Splash backgroundImage={SplashCover} />
    <ContentWrapper>
      <AboutSection />
      <MenuSection />
      <VisitUsSection />
    </ContentWrapper>
    <Footer />
  </Wrapper>
)

export default IndexPage
