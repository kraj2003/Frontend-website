import React from "react"
import Navbar from "./Navbar"
import "./Navbarstyle.css"

const Hero=(props)=>{
    return(
    <div className={props.cName}  >
        <img src={props.img} alt="dest"/>
        <div className="herotext">
            <h1>{props.title}</h1>
            <p className="p">{props.re} </p>
            <a href={props.url} className={props.btn}>{props.btntext}</a>
        </div>
    
    </div>
    )
}
export default Hero