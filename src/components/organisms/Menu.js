import React, { useState } from "react"
import styled from "@emotion/styled"

import menuData from "../../data/menu.json"

import MenuToggle from "../molecules/MenuToggle"
import MenuItem from "../molecules/MenuItem"

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
  const { eat, drink } = menuData

  const renderFoodMenu = eat.map(menuItem => {
    const { name, description, price } = menuItem
    return <MenuItem title={name} description={description} price={price} />
  })

  const renderDrinkMenu = drink.map(menuItem => {
    const { name, description, price } = menuItem
    return <MenuItem title={name} description={description} price={price} />
  })

  return (
    <MenuWrapper>
      <ToggleWrapper onClick={() => toggleMenu(!displayFoodMenu)}>
        <MenuToggle isSelected={displayFoodMenu} heading="Něco k pití" />
        <MenuToggle isSelected={!displayFoodMenu} heading="Něco k snědku" />
      </ToggleWrapper>
      <ContentWrapper>
        {displayFoodMenu ? renderFoodMenu : renderDrinkMenu}
      </ContentWrapper>
    </MenuWrapper>
  )
}

export default Menu
