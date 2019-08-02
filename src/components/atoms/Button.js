import React from "react"

const Button = ({ text, onClick }) => (
  <button
    style={{
      display: "flex",
      justifyItems: "center",
      backgroundColor: "black",
      color: "white",
      padding: "8px 16px",
      width: "95px",
      height: "43px",
      textAlign: "center",
      fontSize: "16px",
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button
