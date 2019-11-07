import React from "react"
import styled from "@emotion/styled"

const PostBase = styled.img({
  height: "200px",
  width: "200px",
  marginBottom: "45px",
  cursor: "pointer",
})

const Post = ({ src, alt }) => (
  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://www.instagram.com/cokolif_kafarna/"
  >
    <PostBase src={src} alt={alt} />
  </a>
)

export default Post
