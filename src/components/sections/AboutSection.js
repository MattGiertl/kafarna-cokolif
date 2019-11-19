import React from "react"
import styled from "@emotion/styled"

import InfoStrip from "../molecules/InfoStrip"

import SectionHeading from "../atoms/SectionHeading"
import Paragraph from "../atoms/Paragraph"
import Image from "../atoms/Image"

const StyledSection = styled.section({
  display: "flex",
  flexDirection: "column",
})

const AboutSection = ({ aboutImage, aboutText }) => (
  <StyledSection id="o-nas">
    <SectionHeading>O KAFÁRNĚ</SectionHeading>
    <Paragraph textAlign="center">{aboutText}</Paragraph>
    <Image alt="hoši" src={aboutImage} />
    <InfoStrip info="Otevírací doba" infoText="Po - So 8:01 - 19:01" />
    <InfoStrip
      info="Adresa"
      infoText="Pavelčákova 5/13, Olomouc, 1. Patro (malá ulička Uhelná)"
    />
  </StyledSection>
)

export default AboutSection
