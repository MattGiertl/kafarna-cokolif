import React from "react"
import styled from "@emotion/styled"

import Map from "../atoms/Map"
import ReactMarkdown from "react-markdown"

const VisitUsSectionWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
})

const VisitUsSection = ({ addressAndHours }) => (
  <VisitUsSectionWrapper id="navstivte-nas">
    <ReactMarkdown source={addressAndHours} />
    <Map />
  </VisitUsSectionWrapper>
)

export default VisitUsSection
