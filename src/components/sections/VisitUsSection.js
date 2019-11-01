import React from "react"
import styled from "@emotion/styled"


import Paragraph from "../atoms/Paragraph"
import SectionHeading from "../atoms/SectionHeading"
import Image from "../atoms/Image"

const VisitUsSectionWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
})

const VisitUsSection = ({ visitUsImage }) => (
  <VisitUsSectionWrapper id="navstivte-nas">
    <SectionHeading>KDE NÁS MŮŽETE NAJÍT?</SectionHeading>
    <Paragraph margin={0}>Pavelčákova 5/13, Olomouc</Paragraph>
    <Paragraph margin={0}>1. PATRO</Paragraph>
    <Image
      alt="kafe"
      src={visitUsImage}
      style={{ width: "100%", marginTop: "16px" }}
    />
  </VisitUsSectionWrapper>
)

export default VisitUsSection
