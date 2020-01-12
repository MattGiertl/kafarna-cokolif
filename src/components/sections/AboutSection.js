import React from "react"
import styled from "@emotion/styled"

import { DATE_FORMAT } from '../../utils/consts'
 
import InfoStrip from "../molecules/InfoStrip"

import SectionHeading from "../atoms/SectionHeading"
import Paragraph from "../atoms/Paragraph"
import Image from "../atoms/Image"

import moment from "moment"

const StyledSection = styled.section({
  display: "flex",
  flexDirection: "column",
})

const AboutSection = ({ aboutImage, aboutText }) => {
  
  const openingDate = moment([2019, 2, 13], DATE_FORMAT)
  const today = moment(new Date(), DATE_FORMAT)
  const daysSinceOpening = today.diff(openingDate, "days")

  return (
    <StyledSection id="o-nas">
      <SectionHeading>O KAFÁRNĚ</SectionHeading>
      <Paragraph textAlign="center">{aboutText}</Paragraph>
      <Paragraph bold textAlign="center">
        {`Už ${daysSinceOpening} dní`}
      </Paragraph>
      <Image alt="hoši" src={aboutImage} />
      <InfoStrip
        info="Otevírací doba"
        infoText="Po - So 8:01 - 19:01, Ne 10:01 - 18:01"
      />
      <InfoStrip
        info="Adresa"
        infoText="Pavelčákova 5/13, Olomouc, 1. Patro (malá ulička Uhelná)"
      />
    </StyledSection>
  )
}

export default AboutSection
