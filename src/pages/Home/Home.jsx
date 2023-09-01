import React from "react";
import NavBar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import Redirect from "../../components/Redirect/Redirect";
import "./Home.css"

function Home () {
    return ( 
    <div>
        <NavBar/>
        <Redirect/>
        <SideBar/>
    </div>
    )
}

export default Home