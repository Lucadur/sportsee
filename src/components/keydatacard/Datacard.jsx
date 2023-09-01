import React from "react";
import "./Datacard.css"

export default function Datacard(props) {
    let formattedValue = props.number + "g"; // Par défaut, affiche en grammes

    if (props.name.toLowerCase() === "calories") {
        // Formater en kcalories avec 3 décimales et une virgule si le nom est "calories"
        const kcalValue = (props.number / 1000).toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 }); // Convertir en kcal et formater les décimales
        formattedValue = `${kcalValue.replace('.', ',')}kCal`;
    }

    return (
        <div className="data-card">
                <img src={props.imgSrc} alt={props.imgName} />
                <div className="keydata-text">
                    <p className="keydata-number">{formattedValue}</p>
                    <p className="keydata-name">{props.name}</p>
                </div>
        </div>
    )
}
