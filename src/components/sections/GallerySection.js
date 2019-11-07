import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"

import SectionHeading from "../atoms/SectionHeading"
import Posts from "../atoms/Posts"
import Post from "../atoms/Post"

const SectionWrapper = styled.section({
  display: "flex",
  flexDirection: "column",
})

const GallerySection = () => {
  const data = useStaticQuery(instagramQuery)
  const { edges } = data.allInstagramContent

  return (
    <SectionWrapper>
      <SectionHeading>GALERIE</SectionHeading>
      <Posts>
        {edges.map(edge => {
          const { url } = edge.node.images.standard_resolution
          const { text } = edge.node.caption

          return <Post src={url} alt={text} />
        })}
      </Posts>
    </SectionWrapper>
  )
}

const instagramQuery = graphql`
  query InstagramQuery {
    allInstagramContent(limit: 6) {
      edges {
        node {
          images {
            standard_resolution {
              url
            }
          }
          caption {
            text
          }
        }
      }
    }
  }
`

export default GallerySection
