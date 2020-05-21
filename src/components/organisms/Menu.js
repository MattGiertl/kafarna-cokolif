import React, { useState } from "react"
import styled from "@emotion/styled"
import theme from "../../utils/theme.js"

import { useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import MenuToggle from "../molecules/MenuToggle"

const MenuWrapper = styled.div({
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
  zIndex: 1,
})

const Toggles = styled.div({
  display: "flex",
  justifyContent: "space-between",
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
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            menuSections {
              content
              title
            }
          }
        }
      }
    }
  `)

  console.log(allMarkdownRemark)
  //const { menuSections } = allMarkdownRemark.nodes.frontmatter
  const [activeTab, setActiveTab] = useState(0)

  return (
    <MenuWrapper>
      {/* <Toggles>
        {menuSections.map(section => (
          <MenuToggle
            heading={section.title}
            isSelected={section.title === menuSections[activeTab].title}
            key={section.title}
            onClick={() => setActiveTab(menuSections.indexOf(section))}
          />
        ))}
      </Toggles>
      <ContentWrapper>
        <ReactMarkdown source={menuSections[activeTab].content} />
      </ContentWrapper> */}
    </MenuWrapper>
  )
}

export default Menu
