

import React from "react"
import "./Navbarstyle.css"


const Data=(props)=>{
    return(
        <div className={props.cName}>
                <div className="destext">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
                <div className={props.image}>
                    <img alt="img" src={props.img1}/>
                    <img alt="img" src={props.img2}/>
                </div>
            </div>
    )
}
export default Data