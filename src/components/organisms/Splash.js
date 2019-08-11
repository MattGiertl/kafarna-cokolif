import React from "react"
import styled from "@emotion/styled"

const SplashWrapper = styled.div(
  {
    height: "100vh",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "brightness(1.5)",
  },
  props => ({
    backgroundImage: `url(${props.backgroundImage})`,
  })
)

const Splash = ({ backgroundImage }) => (
  <SplashWrapper backgroundImage={backgroundImage} />
)

export default Splash
