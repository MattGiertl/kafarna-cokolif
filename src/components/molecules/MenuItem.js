import React from "react"
import Paragraph from "../atoms/Paragraph"

const MenuItem = ({ title, description, price }) => (
  <div
    style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
  >
    <h5 style={{ margin: "0", fontWeight: 400, fontSize: "18px" }}>{title}</h5>
    <Paragraph color="#757575">{description}</Paragraph>
    <Paragraph margin="0 50px 0 auto" color="#757575">
      {price}
    </Paragraph>
  </div>
)

export default MenuItem
