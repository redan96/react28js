import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.js";
import Header from "../components/Header/Header.js"
import Home from "../pages/MainPage/Home.js";

export default function MainLayout() {
    return(
        <div className="mainlayout">
            <Navbar/>
            <Header/>
            <Home />
            <div>  
                <Outlet />
            </div>
            
        </div>
    )
}