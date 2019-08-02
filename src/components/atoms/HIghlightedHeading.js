import React from "react"

const HighlightedHeading = ({ children }) => (
  <h5
    style={{
      margin: "10px 0",
      padding: "64px 0",
      textAlign: "center",
      fontSize: "18px",
      lineHeight: 1.5,
      fontWeight: "normal",
      letterSpacing: "4px",
    }}
  >
    <span
      style={{
        padding: "0 10px",
        background: "black",
        textAlign: "center",
        color: "white",
      }}
    >
      {children}
    </span>
  </h5>
)

export default HighlightedHeading
