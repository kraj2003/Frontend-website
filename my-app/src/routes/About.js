import React from "react"
import Aboutus from "../components/aboutus"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const About=()=>{
    return(
    <div>
        <Navbar/>
        <Hero
      cName="about"
      img="https://images.unsplash.com/photo-1473442240418-452f03b7ae40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzdGluYXRpb258ZW58MHx8MHx8&w=1000&q=80"
      title="About"
      btn="hide"
      />
      <Aboutus/>
      <Footer/>
        
    </div>
    )
}
export default About