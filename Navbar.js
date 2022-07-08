import React from "react";
import logo from "../images/Airbnb-logo.jpg";
import "../style/Navbar.css" 

export default function Navbar(){
    return (
        <nav className="nav--bar">
            <img src={logo} alt="logo" className="logo--img"/>
        </nav>
            
    )
}