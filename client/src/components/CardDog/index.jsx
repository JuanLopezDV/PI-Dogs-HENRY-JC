/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./CardDog.css";
import { Link } from "react-router-dom";

function CardDog({ id, height, image, life_span, name, temperament, weight }) {
  return (
    <div className="dog-card">
      <div className="face front">
        <div className="dog-card--image">
          <img src={image} alt={`Pic of ${name}`} />
        </div>
        <div className="dog-card--info">
          <h3>{name}</h3>
        </div>
      </div>

      <div className="face back">
        <div>
          <h3>{name}</h3>
          <p>Altura: {height} cm</p>
          <p>Años de vida: {life_span}</p>
          <p>Peso: {weight} kg</p>
          <p>Temperamentos:</p>
          <div className="face-back-temperament">
            <p>{temperament}</p>
          </div>
        </div>
        <div className="link">
          <Link to={`/detail/${id}`} relative="route">
            Ver más detalles
          </Link>
        </div>
      </div>
    </div>
  );
}

export { CardDog };
