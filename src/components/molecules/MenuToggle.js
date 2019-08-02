import React from "react"

const MenuToggle = ({ isSelected, heading }) => (
  <div
    style={{
      display: "flex",
      width: "50%",
      height: "32px",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: isSelected ? "1.5px solid black" : "none",
    }}
  >
    {heading}
  </div>
)

export default MenuToggle
