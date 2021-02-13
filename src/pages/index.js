import React from "react"

import AboutSection from "../components/sections/AboutSection"

import Navbar from "../components/organisms/Navbar"
import Splash from "../components/organisms/Splash"
import Footer from "../components/organisms/Footer"

import Anchor from "../components/atoms/Anchor"
import MenuSection from "../components/sections/MenuSection"
import VisitUsSection from "../components/sections/VisitUsSection"
// import GallerySection from "../components/sections/GallerySection"
import Wrapper from "../components/atoms/Wrapper"
import styled from "@emotion/styled"

import "../normalize.css"
import { mobileQuery } from "../utils/mediaqueries"

import SEO from "../components/atoms/SEO"
import { useStaticQuery, graphql } from "gatsby"

const ContentWrapper = styled(Wrapper)({
  maxWidth: "700px",
  margin: "0 auto",
  [mobileQuery]: {
    margin: "0 10px",
  },
})

const IndexPage = () => {
  const data = useStaticQuery(pageQuery)

  const {
    splashImage,
    aboutText,
    aboutUsImage,
    addressAndHours,
  } = data.markdownRemark.frontmatter

  return (
    <Wrapper>
      <SEO />
      <Navbar>
        <Anchor to="#" text="DOMŮ" />
        <Anchor to="#o-nas" text="O NÁS" />
        <Anchor to="#menu" text="MENU" />
        <Anchor to="#navstivte-nas" text="NAVŠTIVTE NÁS" />
      </Navbar>
      <Splash backgroundImage={splashImage} />
      <ContentWrapper>
        <AboutSection aboutImage={aboutUsImage} aboutText={aboutText} />
        {/* <GallerySection /> */}
        <MenuSection />
        <VisitUsSection addressAndHours={addressAndHours} />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  )
}

export default IndexPage

const pageQuery = graphql`
  query PageQuery {
    markdownRemark {
      frontmatter {
        splashImage
        aboutText
        aboutUsImage
        addressAndHours
      }
    }
  }
`
