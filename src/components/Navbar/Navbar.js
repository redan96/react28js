import React from "react";

import "./navbar.scss"

export default function Navbar() {
    return(
        <nav className="navbar text-bg-warning">
            <div className="Links">
                <h1 className="logo">Medium</h1>
                <p className="option">Membership</p>
                <p className="option">Write</p>
                <p className="option">Sign in</p>
                <button className="boton-start btn text-bg-dark" >Get Started</button>
            </div>
        </nav>
    )
}

