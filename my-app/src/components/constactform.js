import "./Navbarstyle.css"
import React from "react"
const Contactform=()=>{
    return(
        <div className="form-container">
            <h1>end a message to us!</h1>
            <form>

                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}
export default Contactform