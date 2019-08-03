import React from "react"
import styled from "@emotion/styled"

import GuysImg from "../../images/guys.jpg"

import ReviewBox from "../molecules/ReviewBox"
import InfoStrip from "../molecules/InfoStrip"

import SectionHeading from '../atoms/SectionHeading';
import Paragraph from "../atoms/Paragraph"
import Image from "../atoms/Image"

const StyledSection = styled.section({
  display: "flex",
  flexDirection: "column",
})

const AboutSection = () => (
  <StyledSection id="o-nas">
    <SectionHeading>O KAFÁRNĚ</SectionHeading>
    <Paragraph>
      Aromatic macchiato seasonal irish, grounds robust spoon mug whipped
      acerbic. Kopi-luwak extra medium, cream barista mug, aged ut french press
      variety froth. Frappuccino mazagran qui bar galão percolator extraction.
      Cappuccino, aroma, dark and bar americano iced. Crema single shot white,
      beans grinder cortado sweet breve that.
    </Paragraph>
    <Paragraph>
      Kopi-luwak and crema ut body crema americano organic eu white. Extraction
      variety breve single origin, rich dripper that, crema medium body espresso
      roast.
    </Paragraph>
    <ReviewBox
      review="Moc doporučuji návštěvu. Cokolif není jen kavárna, je to místo s neuvěřitelně pozitivní energií majitelů, pohodová oáza k odpočinku a ráj pro hladové chuťové pohárky - jídlo, které v Cokolifu dělají, je hotové umělecke dílo, symfonie chutí i barev. A kafe? Boží ❤️!"
      author="Jana Zelená"
    />
    <Image alt="hoši" src={GuysImg} />
    <InfoStrip info="Otervírací doba" infoText="Po - So 8:01 - 19:00" />
    <InfoStrip info="Adresa" infoText="Pavelčákova 5/13, Olomouc, 1. Patro" />
  </StyledSection>
)

export default AboutSection
