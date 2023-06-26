import React from 'react'
import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  let Component
  switch(window.location.pathname){
    case"/":
      Component = Home
      break
    case "/pricing":
      Component = Pricing
      break
    case "/about":
      Component = About
      break
    default:
      Component = Pricing
      break
  }


  return(
    <>
      <Navbar /> 
      <Component />
    </>
  ) 
}

export default App
