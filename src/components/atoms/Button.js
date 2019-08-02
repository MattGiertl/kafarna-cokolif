import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.button({
  display: "flex",
  justifyItems: "center",
  backgroundColor: "black",
  color: "white",
  padding: "8px 16px",
  width: "95px",
  height: "43px",
  textAlign: "center",
  fontSize: "16px",
  cursor: "pointer",
})

const Button = ({ text, onClick }) => (
  <StyledButton style={{}} onClick={onClick}>
    {text}
  </StyledButton>
)

export default Button
