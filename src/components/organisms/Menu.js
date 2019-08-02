import React, { useState } from "react"
import MenuToggle from "../molecules/MenuToggle"
import MenuItem from "../molecules/MenuItem"
import styled from "@emotion/styled"

const MenuWrapper = styled.div({
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
  maxHeight: "700px",
})

const ToggleWrapper = styled.div({
  display: "flex",
  padding: "8px 16px",
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
})

const ContentWrapper = styled.div({
  padding: "48px 16px",
})

const Menu = () => {
  const [displayFoodMenu, toggleMenu] = useState(true)
  return (
    <MenuWrapper>
      <ToggleWrapper onClick={() => toggleMenu(!displayFoodMenu)}>
        <MenuToggle isSelected={displayFoodMenu} heading="Něco k pití" />
        <MenuToggle isSelected={!displayFoodMenu} heading="Něco k snědku" />
      </ToggleWrapper>
      <ContentWrapper>
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
      </ContentWrapper>
    </MenuWrapper>
  )
}

export default Menu
