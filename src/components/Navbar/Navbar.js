import React from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";

export default function Navbar() {

    return(
        <nav className="navbar text-bg-warning">
            <div className="Links">
                <h1 className="logo">Medium</h1>
                <Link to="/" className="btn text-bg-success" >Home</Link>
                <Link to="/Post" className="btn text-bg-success" >Create Post</Link>
                <button className="boton-start btn text-bg-dark" >Get Started</button>
            </div>
        </nav>
    )
}

