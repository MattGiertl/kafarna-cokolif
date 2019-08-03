import React from "react"
import Paragraph from "../atoms/Paragraph"
import styled from "@emotion/styled"

const MenuItemWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
})

const StyledHeading = styled.h5({
  margin: "0",
  fontWeight: 400,
  fontSize: "18px",
})

const MenuItem = ({ title, description, price }) => (
  <MenuItemWrapper>
    <StyledHeading>{title}</StyledHeading>
    <Paragraph color="#757575">{description}</Paragraph>
    <Paragraph margin="0 50px 0 auto" color="#757575">
      {`${price},-`}
    </Paragraph>
  </MenuItemWrapper>
)

export default MenuItem
