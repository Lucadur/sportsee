import React from "react";
import "./Error404.css"
import NavBar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Error404 (){
    return (
        <div className="home">
          <NavBar />
          <SideBar/>
          <div className="error-container">
          <h1 className="error">Erreur 404</h1>
          <p className="errorp">Impossible de trouver cet utilisateur</p>
          <Link className="error-btn" to="/">
              <div>Retour à la page d'accueil</div>
            </Link>
          </div>
        </div>
      );
    }