import React from "react"
import styled from "@emotion/styled"

const SplashWrapper = styled.div(
  {
    height: "100vh",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "brightness(1.45)",
  },
  props => ({
    backgroundImage: props.backgroundImage,
  })
)

const Splash = ({ backgroundImage }) => {
  const background = `url(${require(`../../assets${backgroundImage}`)})`

  return <SplashWrapper backgroundImage={background} />
}

export default Splash
