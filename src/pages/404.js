import React from "react"
import styled from "@emotion/styled"
import "../normalize.css"

import Wrapper from "../components/atoms/Wrapper"
import Paragraph from "../components/atoms/Paragraph"
import { Link } from "gatsby"
import theme from "../utils/theme"

import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const { colors } = theme

const StyledErrorImage = styled(Img)({
  height: "50vh",
  width: "50vw",
  margin: "0 auto",
})

const StyledLink = styled(props => <Link {...props} />)(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10vh auto",
    textDecoration: "none",
    cursor: "pointer",
    width: "30vh",
    fontSize: "4vmin",
    textAlign: "center",
    padding: "2vh 8vh",
    background: "inherit",
    fontFamily: "Inconsolata sans-serif",
    backgroundColor: colors.blue,
    transition: "background 300ms",
    borderRadius: "5px 5px",
    "&:hover": {
      color: theme.colors.black,
      background: "#EDEDED",
    },
  },
  props => ({
    color: props.color ? props.color : "white",
  })
)

const NotFoundPage = () => {
  const data = useStaticQuery(errorQuery)
  const { fluid } = data.file.childImageSharp

  return (
    <Wrapper>
      <StyledErrorImage fluid={fluid} alt="Error image" />
      <Paragraph
        textAlign="center"
        fontFamily="Inconsolata sans-serif"
        fontSize="calc(1.1vmax + 2.1vmin)"
      >
        Ajéje, něco se pokazilo, vraťte se prosím zpět
      </Paragraph>
      <StyledLink to="/">Zpátky do kafárny</StyledLink>
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
