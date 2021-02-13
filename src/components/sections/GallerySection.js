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
      <SectionHeading>INSTAGRAM @cokolif_kafarna</SectionHeading>
      <Posts>
        {edges.map(({ node }) => {
          const { caption, media_url } = node

          return (
            <Post
              key={caption}
              src={media_url}
              alt={caption ? caption : "Sledujte nás na Instagramu"}
            />
          )
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
          caption
          media_url
        }
      }
    }
  }
`

export default GallerySection
