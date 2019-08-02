import React from "react"

const Splash = ({ backgroundImage }) => (
  <div
    style={{
      height: "100vh",
      background: `url(${backgroundImage})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      filter: "brightness(1.45)",
    }}
  />
)

export default Splash
