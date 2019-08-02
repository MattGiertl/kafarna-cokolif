import React from "react"
import Paragraph from "../atoms/Paragraph"

const Footer = () => (
  <div
    style={{
      marginTop: "50px",
      display: "flex",
      height: "100px",
      background: "#EDEDED",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Paragraph margin="0">
      Built by{" "}
      <a
        style={{ textDecoration: "none" }}
        href="https://github.com/MattGiertl"
      >
        Matúš Giertl
      </a>
    </Paragraph>
  </div>
)

export default Footer
