import React, { useState } from "react"
import styled from "@emotion/styled"

import breakfastMenu from "../../data/breakfastmenu.json"
import drinkMenu from "../../data/drinkmenu.json"
import eatMenu from "../../data/eatmenu.json"

import MenuToggle from "../molecules/MenuToggle"
import MenuItem from "../molecules/MenuItem"
import theme from "../../utils/theme.js"

const MenuWrapper = styled.div({
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
  zIndex: 1,
})

const ToggleWrapper = styled.div({
  display: "flex",
  justifyContent: 'space-between',
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
  const [activeMenus, setActiveMenu] = useState({
    eatMenuActive: true,
    breakfastMenuActive: false,
    drinkMenuActive: false,
  })

  const { drinkmenuCollection } = drinkMenu
  const { eatmenuCollection } = eatMenu
  const { breakfastCollection } = breakfastMenu

  const { eatMenuActive, breakfastMenuActive, drinkMenuActive } = activeMenus

  const renderMenu = menuCollection =>
    menuCollection.map(menuItem => {
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
      <ToggleWrapper>
        <MenuToggle
          isSelected={breakfastMenuActive}
          heading="Snídaně"
          onClick={() =>
            setActiveMenu({
              breakfastMenuActive: true,
              eatMenuActive: false,
              drinkMenuActive: false,
            })
          }
        />
        <MenuToggle
          isSelected={eatMenuActive}
          heading="Menu"
          onClick={() =>
            setActiveMenu({
              breakfastMenuActive: false,
              eatMenuActive: true,
              drinkMenuActive: false,
            })
          }
        />
        <MenuToggle
          isSelected={drinkMenuActive}
          heading="Nápoje"
          onClick={() =>
            setActiveMenu({
              breakfastMenuActive: false,
              eatMenuActive: false,
              drinkMenuActive: true,
            })
          }
        />
      </ToggleWrapper>
      <ContentWrapper>
        <>
          {eatMenuActive && renderMenu(eatmenuCollection)}
          {drinkMenuActive && renderMenu(drinkmenuCollection)}
          {breakfastMenuActive && renderMenu(breakfastCollection)}
        </>
      </ContentWrapper>
    </MenuWrapper>
  )
}

export default Menu
