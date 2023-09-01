import React from "react"
import logo from "./logo.png"
import "./Navbar.css"

function NavBar () {
    return <div className="navbar">
        <div className="navbar-elements">
                <img src={logo} alt="sportsee logo" /> 
                <p>Accueil</p>
                <p>Profil</p>
                <p>Réglages</p>
                <p>Communauté</p>
            </div>
    </div>
}

export default NavBar