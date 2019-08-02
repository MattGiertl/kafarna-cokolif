import React from "react"
import Paragraph from "../atoms/Paragraph"

const InfoStrip = ({ info, infoText }) => (
  <div style={{ display: "flex", margin: "16px auto 0 0" }}>
    <Paragraph bold margin="0 10px 0 0">
      {`${info}:`}
    </Paragraph>
    <Paragraph margin="0">{infoText}</Paragraph>
  </div>
)

export default InfoStrip
