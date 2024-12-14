/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import "./Navbarstyle.css"
const Tripdata=(props)=>{
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image } alt="image" />
            </div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default Tripdata
//ghcmgh