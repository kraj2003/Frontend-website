import React from 'react'
import "./Navbarstyle.css"
import Tripdata from './Tripdata'

const Trip=()=>{
    return(
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>you can discover
                unique destination using google maps</p>
                <div className="tripcard">
                    <Tripdata
                    title="Recent Trips"
                    image="https://images6.alphacoders.com/875/thumb-1920-875211.jpg"
                    text="you can discover
                    unique destination using google maps"
                    />
                     <Tripdata
                    title="Recent Trips"
                    image="https://images6.alphacoders.com/875/thumb-1920-875211.jpg"
                    text="you can discover
                    unique destination using google maps"
                    /> 
                    <Tripdata
                    title="Recent Trips"
                    image="https://images6.alphacoders.com/875/thumb-1920-875211.jpg"
                    text="you can discover
                    unique destination using google maps"
                    /> 
                </div>
        </div>
    )
}
export default Trip