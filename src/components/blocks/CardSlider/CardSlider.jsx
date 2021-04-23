import React from "react";

import "./CardSlider.scss";

function CardSlider({ img, name, price }) {
  return (
    <div className="card__slider">
      <div className="card__slider-img">
        <img src={img} alt="Card slider" />
      </div>
      <div className="card__slider-text">
        <div className="card__slider-text-title">{name}</div>
        <div className="card__slider-text-subtitle">от {price} р</div>
      </div>
    </div>
  );
}

export default CardSlider;
