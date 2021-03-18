import React from "react";

import "./CardFood.scss";

import cardFoodImg from "../../assets/img/card-food.jpeg";

function CardFood() {
  return (
    <div className="card__food">
      <div className="card__food-img">
        <img src={cardFoodImg} alt="Card-foodimage" />
      </div>
      
      <h3>Ветчина и грибы</h3>
      <h5>Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус</h5>
      <div className="card__food-down">
        <div className="card__food-down-price">
          <h3>от 375 Р</h3>
        </div>
        <div className="card__food-down-btn">
          <button className="button button--peach">Выбрать</button>
        </div>
      </div>
    </div>
  );
}

export default CardFood;
