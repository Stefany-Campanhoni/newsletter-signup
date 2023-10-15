import "./App.css"

import Info from "./components/Info"
import Inputs from "./components/Inputs"

import MobileSvg from "./assets/images/illustration-sign-up-mobile.svg?react"
import DesktopSvg from "./assets/images/illustration-sign-up-desktop.svg?react"
import { useEffect, useState } from "react"

function getWindowWidth():number {
  return window.innerWidth
}

function App() {

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowWidth())
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  return (
    <div className="container">
      {windowWidth > 375 ? <DesktopSvg /> : <MobileSvg />}
      <div className="info-wrapper">
        <Info />
        <Inputs />
      </div>
    </div>
  )
}

export default App
