import React from "react"
import Destination from "../components/Destination"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Trip from "../components/Recenttrip"

const Home=()=>{
    return(
    <div>
      <Navbar/>
      <Hero
      cName="Hero"
      img="https://wallpaperaccess.com/full/472182.jpg"
      title="your journey start here"
      re="jhedkjahn"
      btntext="travel paln"
      url="/"
      btn="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
    )
}
export default Home