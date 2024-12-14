import React from "react"
import Contactform from "../components/constactform"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Contact=()=>{
    return(
    <div>
        <Navbar/>
        <Hero
      cName="about"
      img="https://images6.alphacoders.com/875/thumb-1920-875211.jpg"
      title="Contact us"
      btn="hide"
      />
      <Contactform/>
      <Footer/>
    </div>
    )
}
export default Contact