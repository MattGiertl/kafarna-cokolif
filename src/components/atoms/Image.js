import styled from "@emotion/styled"
import { mobileQuery } from "../../utils/mediaqueries"
import Img from "gatsby-image"

const Image = styled(Img)({
  marginTop: "16px",
  width: "100%",
  height: "620px",

  [mobileQuery]: {
    height: "300px",
  },
})

export default Image
