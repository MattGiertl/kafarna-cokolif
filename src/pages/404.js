import React from "react"
import styled from "@emotion/styled"

import Wrapper from "../components/atoms/Wrapper"
import Paragraph from "../components/atoms/Paragraph"

import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const StyledErrorImage = styled(Img)({
  height: "60vh",
  width: "60vh",
  margin: "0 auto",
})

const NotFoundPage = () => {
  const data = useStaticQuery(errorQuery)
  const { fluid } = data.file.childImageSharp

  return (
    <Wrapper>
      <StyledErrorImage fluid={fluid} alt="Error image" />
      <Paragraph bold textAlign="center" fontSize="calc(1.3vmax + 1.5vmin)">
        Ajéje, něco se pokazilo, vraťte se prosím zpět
      </Paragraph>
    </Wrapper>
  )
}
const errorQuery = graphql`
  query ErrorQuery {
    file(relativePath: { eq: "cokolif_cafarna_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          aspectRatio
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          srcSet
          src
          sizes
          presentationWidth
          presentationHeight
          originalName
          originalImg
        }
      }
    }
  }
`
export default NotFoundPage
