import React from "react";
import grid from "../images/photo-collage-frame-effect-mockup_117023-2567.jpg"
import "../style/Main.css"

export default function Main(){
    return(
        <div>
            <img src={grid} alt="grid" className="main--img" />
            <div className="text--div">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}