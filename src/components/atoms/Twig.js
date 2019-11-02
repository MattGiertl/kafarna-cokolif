import React from "react"
import styled from "@emotion/styled"

import TwigImg from "../../../static/assets/twig.png"

const StyledTwig = styled.img({
  height: "50px",
  width: "70px",
  margin: "0 auto",
})

const Twig = () => <StyledTwig src={TwigImg} />

export default Twig
