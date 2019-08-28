import React from "react"

import AboutSection from "../components/sections/AboutSection"

import Navbar from "../components/organisms/Navbar"
import Splash from "../components/organisms/Splash"
import Footer from "../components/organisms/Footer"

import Anchor from "../components/atoms/Anchor"
import MenuSection from "../components/sections/MenuSection"
import VisitUsSection from "../components/sections/VisitUsSection"
import Wrapper from "../components/atoms/Wrapper"
import styled from "@emotion/styled"

import "../normalize.css"
import { mobileQuery } from "../utils/mediaqueries/mediaqueries"

import mainPageData from "../data/mainpage.json"

import Banner from "../../static/images/cokolif-banner.jpg"

const ContentWrapper = styled(Wrapper)({
  maxWidth: "700px",
  margin: "0 auto",
  [mobileQuery]: {
    margin: "0 10px",
  },
})

const IndexPage = () => (
  <>
    <Wrapper>
      <Navbar>
        <Anchor to="#" text="DOMŮ" />
        <Anchor to="#o-nas" text="O NÁS" />
        <Anchor to="#menu" text="MENU" />
        <Anchor to="#navstivte-nas" text="NAVŠTIVTE NÁS" />
      </Navbar>
      <Splash backgroundImage={mainPageData.splashImage} />
      <ContentWrapper>
        <AboutSection
          aboutImage={mainPageData.aboutUsImage}
          aboutText={mainPageData.aboutUs}
          review={mainPageData.review}
          reviewAuthor={mainPageData.reviewAuthor}
        />
        <MenuSection />
        <VisitUsSection visitUsImage={mainPageData.whereToFindUsImage} />
      </ContentWrapper>
      <Footer />
    </Wrapper>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Banner})`
      }}
    >
      Web je ve výstavbě...
    </div>
  </>
)

export default IndexPage
