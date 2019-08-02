import React from "react"

import Navbar from "../components/organisms/Navbar"
import NavLink from "../components/atoms/NavLink"
import Splash from "../components/organisms/Splash"
import HighlightedHeading from "../components/atoms/HIghlightedHeading"
import Paragraph from "../components/atoms/Paragraph"
import ReviewBox from "../components/molecules/ReviewBox"
import InfoStrip from "../components/molecules/InfoStrip"
import Menu from "../components/organisms/Menu"

import SplashCover from "../images/cokolif-wall.jpg"
import GuysImg from "../images/guys.jpg"
import Banner from "../images/cokolif-banner.jpg"
import Input from "../components/atoms/Input"
import Button from "../components/atoms/Button"
import Footer from "../components/organisms/Footer"

const IndexPage = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Navbar>
      <NavLink color="white" to="#" text="DOMŮ" />
      <NavLink color="white" to="#" text="O NÁS" />
      <NavLink color="white" to="#" text="MENU" />
      <NavLink color="white" to="#" text="NAVŠTIVTE NÁS" />
    </Navbar>
    <Splash backgroundImage={SplashCover} />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <HighlightedHeading>O KAFÁRNĚ</HighlightedHeading>
      <Paragraph>
        Aromatic macchiato seasonal irish, grounds robust spoon mug whipped
        acerbic. Kopi-luwak extra medium, cream barista mug, aged ut french
        press variety froth. Frappuccino mazagran qui bar galão percolator
        extraction. Cappuccino, aroma, dark and bar americano iced. Crema single
        shot white, beans grinder cortado sweet breve that.
      </Paragraph>
      <Paragraph>
        Kopi-luwak and crema ut body crema americano organic eu white.
        Extraction variety breve single origin, rich dripper that, crema medium
        body espresso roast.
      </Paragraph>
      <ReviewBox
        review="Moc doporučuji návštěvu. Cokolif není jen kavárna, je to místo s neuvěřitelně pozitivní energií majitelů, pohodová oáza k odpočinku a ráj pro hladové chuťové pohárky - jídlo, které v Cokolifu dělají, je hotové umělecke dílo, symfonie chutí i barev. A kafe? Boží ❤️!"
        author="Jana Zelená"
      />
      <img
        alt="hoši"
        src={GuysImg}
        style={{ width: "100%", marginTop: "16px" }}
      />
      <InfoStrip info="Otervírací doba" infoText="Po - So 8:01 - 19:00" />
      <InfoStrip info="Adresa" infoText="Pavelčákova 5/13, Olomouc, 1. Patro" />
      <HighlightedHeading>MENU</HighlightedHeading>
      <Menu />
      <HighlightedHeading>KDE NÁS MŮŽETE NAJÍT?</HighlightedHeading>
      <Paragraph margin={0}>Pavelčákova 5/13, Olomouc</Paragraph>
      <Paragraph margin={0}>1. PATRO</Paragraph>
      <img
        alt="kafe"
        src={Banner}
        style={{ width: "100%", marginTop: "16px" }}
      />
      <Paragraph>
        <strong>Rezervujte</strong> si stůl, zeptejte se na dnešní specíal, nebo
        nám prostě pošlete zprávu
      </Paragraph>
      <Input placeholder="Jméno" />
      <Input placeholder="Počet lidí" />
      <Input placeholder="Zpráva / speciální požadavky" />
      <Button text="ODESLAT" />
    </div>
    <Footer />
  </div>
)

export default IndexPage
