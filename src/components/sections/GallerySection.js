import React from "react"
import styled from "@emotion/styled"

// import { useStaticQuery, graphql } from "gatsby"

import SectionHeading from "../atoms/SectionHeading"
// import Posts from "../atoms/Posts"
// import Post from "../atoms/Post"

const SectionWrapper = styled.section({
  display: "flex",
  flexDirection: "column",
})

const GallerySection = () => {
  // const data = useStaticQuery(instagramQuery)
  // const { edges } = data.allInstagramContent

  return (
    <SectionWrapper>
      <SectionHeading>INSTAGRAM @cokolif_kafarna</SectionHeading>
      {/* <Posts>
        {edges.map(edge => {
          // const { url } = edge.node.images.standard_resolution
          const { fluid } = edge.node.localImage.childImageSharp
          const { text } = edge.node.caption

          return (
            <Post
              key={text}
              src={fluid}
              alt={text ? text : "Sledujte nás na Instagramu"}
            />
          )
        })}
      </Posts> */}
    </SectionWrapper>
  )
}

// const instagramQuery = graphql`
//   query InstagramQuery {
//     allInstagramContent(limit: 6) {
//       edges {
//         node {
//           localImage {
//             childImageSharp {
//               fluid(maxWidth: 400) {
//                 aspectRatio
//                 base64
//                 originalImg
//                 originalName
//                 presentationHeight
//                 presentationWidth
//                 sizes
//                 src
//                 srcSet
//                 srcSetWebp
//                 srcWebp
//                 tracedSVG
//               }
//             }
//           }
//           images {
//             standard_resolution {
//               url
//             }
//           }
//           caption {
//             text
//           }
//         }
//       }
//     }
//   }
// `

export default GallerySection
