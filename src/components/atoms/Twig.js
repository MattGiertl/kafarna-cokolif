import React from "react"
import styled from "@emotion/styled"

// import TwigImg from "../../../static/assets/twig.png"

import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const StyledTwig = styled(Img)({
  height: "50px",
  width: "80px",
  margin: "0 auto",
})

const Twig = () => {
  const data = useStaticQuery(twigQuery)
  const { fluid } = data.file.childImageSharp

  return <StyledTwig fluid={fluid} alt="Cokolif větvička" />
}

const twigQuery = graphql`
  query TwigQuery {
    file(relativePath: { eq: "twig.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
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

export default Twig
