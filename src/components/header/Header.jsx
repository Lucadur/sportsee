import React from "react";
import "./Header.css"

export default function Header({ userName }) {
    return (
      <div className="dashboard-header">
        <h1>
          Bonjour <span className="firstname">{userName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    );
  }