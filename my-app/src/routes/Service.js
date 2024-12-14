import React from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Trip from "../components/Recenttrip"
import Tripdata from "../components/Tripdata"

const Services=()=>{
    return(
    <div>
      <Navbar/>
        <Hero
      cName="about"
      img="https://wallpapercave.com/wp/wp3103568.jpg"
      title="Services"
      btn="hide"
      />
      <Trip/>
      <Footer/>
    </div>
    )
}
export default Services