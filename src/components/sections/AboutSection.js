import React from "react"
import styled from "@emotion/styled"
import moment from "moment"

import { DATE_FORMAT } from "../../utils/consts"
import { graphql, useStaticQuery } from "gatsby"

import ReactMarkdown from "react-markdown"
import SectionHeading from "../atoms/SectionHeading"
import Paragraph from "../atoms/Paragraph"
import Image from "../atoms/Image"

const StyledSection = styled.section({
  display: "flex",
  flexDirection: "column",
})

const AboutSection = () => {
  const data = useStaticQuery(aboutQuery)
  const { fluid } = data.file.childImageSharp

  const openingDate = moment([2019, 2, 13], DATE_FORMAT)
  const today = moment(new Date(), DATE_FORMAT)
  const daysSinceOpening = today.diff(openingDate, "days")

  return (
    <StyledSection id="o-nas">
      <SectionHeading>O KAFÁRNĚ</SectionHeading>
      {/* <Paragraph>
        <ReactMarkdown source={pageData.aboutUs} />
      </Paragraph> */}
      <Paragraph bold textAlign="center">
        {`Už ${daysSinceOpening} dní`}
      </Paragraph>
      <Image alt="hoši" fluid={fluid} />
    </StyledSection>
  )
}

const aboutQuery = graphql`
  query AboutQuery {
    file(relativePath: { eq: "dsc_5862-25_fotor1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          aspectRatio
          base64
          originalImg
          originalName
          presentationHeight
          presentationWidth
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
          tracedSVG
        }
      }
    }
  }
`

export default AboutSection
