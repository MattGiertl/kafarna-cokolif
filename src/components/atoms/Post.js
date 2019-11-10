import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"

import { OutboundLink } from "gatsby-plugin-google-analytics"

const PostBase = styled(BackgroundImage)({
  height: "200px",
  width: "200px",
  marginBottom: "45px",
  cursor: "pointer",
})

const Post = ({ src, alt }) => (
  <OutboundLink
    rel="noopener noreferrer"
    target="_blank"
    href="https://www.instagram.com/cokolif_kafarna/"
  >
    <PostBase fluid={src} alt={alt} />
  </OutboundLink>
)

export default Post
