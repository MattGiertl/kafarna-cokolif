import React from "react"
import styled from "@emotion/styled"

import Paragraph from "../atoms/Paragraph"
import SectionHeading from "../atoms/SectionHeading"
import Map from "../atoms/Map"

const VisitUsSectionWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
})

const VisitUsSection = () => (
  <VisitUsSectionWrapper id="navstivte-nas">
    <SectionHeading>KDE NÁS MŮŽETE NAJÍT?</SectionHeading>
    <Paragraph margin={0}>
      Pavelčákova 5/13, Olomouc (malá ulička Uhelná)
    </Paragraph>
    <Paragraph margin={0}>1. PATRO</Paragraph>
    <Paragraph margin={0}>
      <strong>Otevřeno Po - So: </strong>8:01 - 19:01
    </Paragraph>
    <Paragraph margin={0}>
      <strong>Tel: </strong>+420 728 758 632
    </Paragraph>
    <Paragraph margin={0}>
      <strong>Mail: </strong>cokolif@post.cz
    </Paragraph>
    <Map />
  </VisitUsSectionWrapper>
)

export default VisitUsSection
