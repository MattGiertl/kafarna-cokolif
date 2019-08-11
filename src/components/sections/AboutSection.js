import React from "react"
import styled from "@emotion/styled"

import ReviewBox from "../molecules/ReviewBox"
import InfoStrip from "../molecules/InfoStrip"

import SectionHeading from "../atoms/SectionHeading"
import Paragraph from "../atoms/Paragraph"
import Image from "../atoms/Image"

const StyledSection = styled.section({
  display: "flex",
  flexDirection: "column",
})

const AboutSection = ({ aboutImage, aboutText, review, reviewAuthor }) => (
  <StyledSection id="o-nas">
    <SectionHeading>O KAFÁRNĚ</SectionHeading>
    <Paragraph>{aboutText}</Paragraph>
    <ReviewBox review={review} author={reviewAuthor} />
    <Image alt="hoši" src={aboutImage} />
    <InfoStrip info="Otervírací doba" infoText="Po - So 8:01 - 19:00" />
    <InfoStrip info="Adresa" infoText="Pavelčákova 5/13, Olomouc, 1. Patro" />
  </StyledSection>
)

export default AboutSection
