import React from "react"
import Paragraph from "../atoms/Paragraph"
import styled from "@emotion/styled";

const InfoStripWrapper = styled.div({
  display: "flex",
  margin: "16px auto 0 0",
})

const InfoStrip = ({ info, infoText }) => (
  <InfoStripWrapper>
    <Paragraph bold margin="0 10px 0 0">
      {`${info}:`}
    </Paragraph>
    <Paragraph margin="0">{infoText}</Paragraph>
  </InfoStripWrapper>
)

export default InfoStrip
