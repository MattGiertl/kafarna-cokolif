import React from "react"

const Input = ({ placeholder }) => (
  <input
    placeholder={placeholder}
    style={{
      marginBottom: "18px",
      fontSize: "18px",
      padding: "16px 8px",
      width: "100%",
      type: "text",
      border: "1px solid #ccc",
    }}
  />
)

export default Input
