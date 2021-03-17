import React from "react";

import "./CardSlider.scss";

import cardSlider from "../../assets/img/card-slider.jpeg";

function CardSlider() {
  return (
    <div className="card__slider">
      <div className="card__slider-img">
        <img src={cardSlider} alt="Card slider" />
      </div>
      <div className="card__slider-text">
        <div className="card__slider-text-title">Нежный лосось</div>
        <div className="card__slider-text-subtitle">от 465р</div>
      </div>
    </div>
  );
}

export default CardSlider;
