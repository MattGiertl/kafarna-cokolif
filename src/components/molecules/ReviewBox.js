import React from "react"
import Paragraph from "../atoms/Paragraph"
import styled from "@emotion/styled"

const ReviewBoxWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  borderLeft: "5px solid black",
  background: "#EDEDED",
  margin: "16px 0",
  padding: "0 16px",
})

const ReviewBox = ({ review, author }) => (
  <ReviewBoxWrapper>
    <Paragraph>{`"${review}"`}</Paragraph>
    <Paragraph>{`- ${author}`}</Paragraph>
  </ReviewBoxWrapper>
)

export default ReviewBox
