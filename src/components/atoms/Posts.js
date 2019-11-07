import styled from "@emotion/styled"

import { mobileQuery } from "../../utils/mediaqueries"

const Posts = styled.div({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",

  [mobileQuery]: {
    justifyContent: "center",
  },
})

export default Posts
