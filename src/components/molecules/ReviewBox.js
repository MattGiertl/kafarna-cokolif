import React from "react"
import Paragraph from "../atoms/Paragraph"

const ReviewBox = ({ review, author }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      borderLeft: "5px solid black",
      background: '#EDEDED',
      margin: "16px 0",
      padding: "0 16px",
    }}
  >
    <Paragraph>{`"${review}"`}</Paragraph>
    <Paragraph>{`-${author}`}</Paragraph>
  </div>
)

export default ReviewBox
