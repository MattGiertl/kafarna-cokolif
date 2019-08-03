import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.button({
  background: "black",
  color: "white",
  padding: "8px 16px",
  width: "100px",
  height: "43px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background 300ms",

  "&:hover": {
    background: "#EDEDED",
    color: "black",
  },
})

const Button = ({ text, onClick }) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
)

export default Button
