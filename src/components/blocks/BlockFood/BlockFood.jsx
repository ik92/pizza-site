import React from "react";

import { CardFood } from "../index";

import "./BlockFood.scss";

function BlockFood({ pizzas, onClickAddPizza }) {
  return (
    <div className="block__food">
      <div className="block__food-title">
        <h2>Пицца</h2>
      </div>
      <div className="block__food-item">
        {pizzas.map((pizza) => (
          <CardFood onClickAddPizza={onClickAddPizza} {...pizza} />
        ))}
      </div>
    </div>
  );
}

export default BlockFood;
