import React from "react"

const NavBar = ({ children }) => (
  <div
    style={{
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "black",
      height: "55px",
      position: "fixed",
      zIndex: 1,
      top: 0,
    }}
  >
    {children}
  </div>
)

export default NavBar
