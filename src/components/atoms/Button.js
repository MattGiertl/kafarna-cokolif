import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.button({
  backgroundColor: "black",
  color: "white",
  padding: "8px 16px",
  width: "100px",
  height: "43px",
  fontSize: "16px",
  cursor: "pointer",
})

const Button = ({ text, onClick }) => (
  <StyledButton onClick={onClick}>
    {text}
  </StyledButton>
)

export default Button
