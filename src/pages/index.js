import React from "react"

import AboutSection from "../components/sections/AboutSection"

import Navbar from "../components/organisms/Navbar"
import Splash from "../components/organisms/Splash"
import Footer from "../components/organisms/Footer"

import Anchor from "../components/atoms/Anchor"
import MenuSection from "../components/sections/MenuSection"
import VisitUsSection from "../components/sections/VisitUsSection"
import GallerySection from "../components/sections/GallerySection"
import Wrapper from "../components/atoms/Wrapper"
import styled from "@emotion/styled"

import "../normalize.css"
import { mobileQuery } from "../utils/mediaqueries"

import mainPageData from "../data/mainpage.json"
import SEO from "../components/atoms/SEO"

const ContentWrapper = styled(Wrapper)({
  maxWidth: "700px",
  margin: "0 auto",
  [mobileQuery]: {
    margin: "0 10px",
  },
})

const IndexPage = () => (
  <Wrapper>
    <SEO />
    <Navbar>
      <Anchor to="#" text="DOMŮ" />
      <Anchor to="#o-nas" text="O NÁS" />
      <Anchor to="#menu" text="ROZVOZ" />
      <Anchor to="#navstivte-nas" text="NAVŠTIVTE NÁS" />
    </Navbar>
    <Splash backgroundImage={mainPageData.splashImage} />
    <ContentWrapper>
      <AboutSection
        aboutImage={mainPageData.aboutUsImage}
        aboutText={mainPageData.aboutUs}
      />
      <GallerySection />
      <MenuSection />
      <VisitUsSection visitUsImage={mainPageData.whereToFindUsImage} />
    </ContentWrapper>
    <Footer />
  </Wrapper>
)

export default IndexPage
