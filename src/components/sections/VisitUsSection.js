import React from "react"
import styled from "@emotion/styled"

import Banner from "../../images/cokolif-banner.jpg"

import Paragraph from "../atoms/Paragraph"
import HighlightedHeading from "../atoms/HighlightedHeading"
import Input from "../atoms/Input"
import Button from "../atoms/Button"
import Image from "../atoms/Image";

const VisitUsSectionWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
})

const VisitUsSection = () => (
  <VisitUsSectionWrapper id="navstivte-nas">
    <HighlightedHeading>KDE NÁS MŮŽETE NAJÍT?</HighlightedHeading>
    <Paragraph margin={0}>Pavelčákova 5/13, Olomouc</Paragraph>
    <Paragraph margin={0}>1. PATRO</Paragraph>
    <Image alt="kafe" src={Banner} style={{ width: "100%", marginTop: "16px" }} />
    <Paragraph>
      <strong>Rezervujte</strong> si stůl, zeptejte se na dnešní specíal, nebo
      nám prostě pošlete zprávu
    </Paragraph>
    <Input placeholder="Jméno" />
    <Input placeholder="Počet lidí" />
    <Input placeholder="Zpráva / speciální požadavky" />
    <Button text="ODESLAT" />
  </VisitUsSectionWrapper>
)

export default VisitUsSection
