import React from "react"

import styled from "@emotion/styled"

const StyledButton = styled.button(
  {
    textDecoration: "none",
    cursor: "pointer",
    width: "100%",
    fontSize: "15px",
    textAlign: "center",
    padding: "8px",
    "&:hover": {
      color: theme.colors.black,
    },
  },
  props => ({
    color: props.color ? props.color : "white",
  })
)

const Button = () => <StyledButton />

export default Button
