import styled from "@emotion/styled"
import { mobileQuery } from "../../utils/mediaqueries"

const Image = styled.img({
  marginTop: "16px",
  width: "100%",
  height: "620px",

  [mobileQuery]: {
    height: "300px",
  },
})

export default Image
