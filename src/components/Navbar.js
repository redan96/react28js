import React from "react";
import "../styles/navbar.css"

export default function Navbar() {
    return(
        <nav className="navbar text-bg-warning">
            <h1>Medium</h1>
            <h3>Our Story</h3>
            <h3>Membership</h3>
            <h3>Write</h3>
            <a>Sign in</a>
            <button className="boton-start btn text-bg-dark">Get Started</button>
        </nav>
    )
}

