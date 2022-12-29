import React from "react";
import cardImage from '../../images/katie-zaferes.png';
import "./Card.css";


function Card() {
    return(
        <div className="card">
            <img src={cardImage} className="card-image"/>
        </div>
    );

}

export default Card;