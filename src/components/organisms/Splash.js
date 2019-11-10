import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

const SplashWrapper = styled(BackgroundImage)(
  {
    height: "100vh",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
)

const Splash = () => {
  const data = useStaticQuery(splashQuery)
  const { fluid } = data.file.childImageSharp

  return (
    <SplashWrapper fluid={fluid} />
  )
}

const splashQuery = graphql`
  query SplashQuery {
    file(relativePath: { eq: "cokolif_cafarna_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3300) {
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

export default Splash
