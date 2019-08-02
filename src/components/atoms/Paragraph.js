import React from "react"

const Paragraph = ({
  children,
  bold,
  marginRight,
  margin,
  color,
  marginLeft,
}) => (
  <p
    style={{
      color: color,
      lineHeight: 1.5,
      fontSize: 15,
      fontWeight: bold ? "bold" : "normal",
      marginRight: marginRight,
      marginLeft: marginLeft,
      margin: margin,
    }}
  >
    {children}
  </p>
)

export default Paragraph
