import React from "react"

import styled from "@emotion/styled"

const StyledMap = styled.iframe({
  width: "100%",
  height: "450px",
  marginTop: "10px",
})

const Map = () => (
  <StyledMap
    frameBorder="0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.2876705743115!2d17.248543216046208!3d49.5923243793663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47124fe70f05da77%3A0x5567314fa6ed4c05!2sCokolif%20Kaf%C3%A1rna!5e0!3m2!1sen!2scz!4v1572702813380!5m2!1sen!2scz"
    width="600"
  />
)

export default Map
