import React, { useState } from "react";

import "./CardFood.scss";

import pizzaImg from "../../../assets/img/card-food.jpeg";
import cardFoodImg from "../../../assets/img/card-food.jpeg";
import { Button, ModalWindow } from "../../ui/index";

function CardFood() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="card__food" onClick={() => setModalActive(true)}>
        <div className="card__food-img">
          <img src={cardFoodImg} alt="Card-foodimage" />
        </div>

        <h3>Ветчина и грибы</h3>
        <h5>
          Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус
        </h5>
        <div className="card__food-down">
          <div className="card__food-down-price">
            <h3>от 375 Р</h3>
          </div>
          <div className="card__food-down-btn">
            <Button color="peach" text="Выбрать" />
          </div>
        </div>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div className="modal__window-content">
          <div className="modal__window-img">
            <img src={pizzaImg} alt="pizza-img" />
          </div>
          <div className="modal__window-wrapper">
            <div className="modal__window-description">
              <div className="modal__window-description-title">Додо Микс</div>
              <div className="modal__window-description-subtitle">
                30 см, традиционное тесто, 670 г
              </div>
              <div className="modal__window-description-btnsize">
                {["Маленькая", "Средняя", "Большая"].map((name) => (
                  <Button color={"grey"} text={name} />
                ))}
              </div>
              <div className="modal__window-description-btntype">
                {["Традиционное", "Тонкое"].map((type) => (
                  <Button  color={"grey"} text={type} />
                ))}
              </div>
            </div>
            <div className="modal__window-add">
              <Button  color={"orange"} text={"Добавить в корзину за 745 Р"} />
            </div>
          </div>
        </div>
      </ModalWindow>
    </>
  );
}

export default CardFood;
