import React from "react"
import styled from "@emotion/styled"
import { mobileQuery } from "../../utils/mediaqueries/mediaqueries"

const StyledInput = styled.input({
  marginBottom: "18px",
  fontSize: "18px",
  padding: "16px 8px",
  width: "100%",
  type: "text",
  border: "1px solid #ccc",

  [mobileQuery]: {
    width: "95%",
  },
})

const Input = ({ placeholder }) => <StyledInput placeholder={placeholder} />

export default Input
