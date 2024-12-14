import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Menuitems } from "./Menuitems"
import "./Navbarstyle.css"
//import ""
//import {} from "react-router-dom"

const Navbar =()=>{
    const [clicked , setclicked]=useState(false)
    return(
        <nav className="navabaritems">
            <h1 className="navbar-logo">Khushi tech</h1>
            <div className="menu-icons" onClick={()=>setclicked(!clicked)}>
                <i className={clicked ? "fas fa-times":"fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav_menu active": "nav_menu"}>
                {Menuitems.map((item ,index)=>{
                return(
                    <li key={index}>
                    <Link to={item.url} className={item.cName}>
                    <i className={item.icon}> </i>
                    {item.title}
                </Link>
                </li>
                )
                })}
                <button>Sign up</button>
            </ul>
        </nav>
    )
}
export default Navbar