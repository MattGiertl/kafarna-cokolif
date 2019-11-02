import React, { useState } from "react"
import styled from "@emotion/styled"

import drinkMenu from "../../data/drinkmenu.json"
import eatMenu from "../../data/eatmenu.json"

import MenuToggle from "../molecules/MenuToggle"
import MenuItem from "../molecules/MenuItem"
import theme from "../../utils/theme.js"

const MenuWrapper = styled.div({
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
  zIndex: 1,
  maxHeight: "700px",
})

const ToggleWrapper = styled.div({
  display: "flex",
  background: theme.colors.black,
  padding: "8px 16px",
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
  position: "sticky",
  zIndex: 2,
  top: "45px",
})

const ContentWrapper = styled.div({
  padding: "48px 16px",
  position: "relative",
  zIndex: 0,
})

const Menu = () => {
  const [displayFoodMenu, toggleMenu] = useState(true)
  const { drinkmenuCollection } = drinkMenu
  const { eatmenuCollection } = eatMenu

  const renderFoodMenu = eatmenuCollection.map(menuItem => {
    const { name, description, price } = menuItem
    return (
      <MenuItem
        key={name}
        title={name}
        description={description}
        price={price}
      />
    )
  })

  const renderDrinkMenu = drinkmenuCollection.map(menuItem => {
    const { name, description, price } = menuItem
    return (
      <MenuItem
        key={name}
        title={name}
        description={description}
        price={price}
      />
    )
  })

  return (
    <MenuWrapper>
      <ToggleWrapper onClick={() => toggleMenu(!displayFoodMenu)}>
        <MenuToggle isSelected={displayFoodMenu} heading="Něco k snědku" />
        <MenuToggle isSelected={!displayFoodMenu} heading="Něco k pití" />
      </ToggleWrapper>
      <ContentWrapper>
        {displayFoodMenu ? renderFoodMenu : renderDrinkMenu}
      </ContentWrapper>
    </MenuWrapper>
  )
}

export default Menu
