import React from "react"
import styled from "@emotion/styled"

const Splashwrapper = styled.div(
  {
    height: "100vh",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "brightness(1.45)",
  },
  props => ({
    backgroundImage: `url(${props.backgroundImage})`,
  })
)

const Splash = ({ backgroundImage }) => (
  <Splashwrapper backgroundImage={backgroundImage} />
)

export default Splash
