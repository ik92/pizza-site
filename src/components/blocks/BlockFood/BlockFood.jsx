import React from "react";

import { CardFood } from "../index";

import "./BlockFood.scss";

function BlockFood() {
  return (
    <div className="block__food">
      <div className="block__food-title">
        <h2>Пицца</h2>
      </div>
      <div className="block__food-item">
        {Array(32)
          .fill(0)
          .map((el) => (
            <CardFood />
          ))}
      </div>
    </div>
  );
}

export default BlockFood;
