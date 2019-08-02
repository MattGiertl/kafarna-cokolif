import React, { useState } from "react"
import MenuToggle from "../molecules/MenuToggle"
import MenuItem from "../molecules/MenuItem"

const Menu = () => {
  const [displayFoodMenu, toggleMenu] = useState(true)
  return (
    <div
      style={{
        boxShadow:
          "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
        maxHeight: "700px",
      }}
    >
      <div
        onClick={() => toggleMenu(!displayFoodMenu)}
        style={{
          display: "flex",
          padding: "8px 16px",
          boxShadow:
            "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
        }}
      >
        <MenuToggle isSelected={displayFoodMenu} heading="Něco k pití" />
        <MenuToggle isSelected={!displayFoodMenu} heading="Něco k snědku" />
      </div>
      <div
        style={{
          padding: "48px 16px",
        }}
      >
        <MenuItem
          title="Lívance s citronovo - vanilkovým mascarpone"
          description="S omáčkou z lesního ovoce a vlašskými ořechy"
          price="50"
        />
        <MenuItem
          title="Lívance s citronovo - vanilkovým mascarpone"
          description="S omáčkou z lesního ovoce a vlašskými ořechy"
          price="50"
        />
        <MenuItem
          title="Lívance s citronovo - vanilkovým mascarpone"
          description="S omáčkou z lesního ovoce a vlašskými ořechy"
          price="50"
        />
        <MenuItem
          title="Lívance s citronovo - vanilkovým mascarpone"
          description="S omáčkou z lesního ovoce a vlašskými ořechy"
          price="50"
        />
      </div>
    </div>
  )
}

export default Menu
