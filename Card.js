import React from "react";
import "../style/Card.css"


import star from "../images/star.png"

export default function Card(props){
    console.log(props)
    return(
        
            <div className="card">
                <img src={`../images/${props.img}`} alt="katie" className="card--img" />
                <div className="card--stats">
                    <img src={star} alt="star" className="star--img"/>
                    <span>{props.rating}</span>
                    <span>({props.rank}) •</span>
                    <span>{props.location}</span>
                </div>
                <p>{props.desc}</p>
                <p>{props.price}</p>
            </div> 
       
        
    )
}
