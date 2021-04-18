import React from "react";
import { Link } from "react-router-dom";

import { BasketItem, Footer } from "../../blocks";
import { Button } from "../../ui";

import "./Basket.scss";

const Basket = ({ title, order }) => {
  return (
    <>
      <div className="container">
        <div className="basket__wrapper">
          <h1>{title}</h1>
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <h2>
            Сумма заказа: <span>1875 P</span>
          </h2>
          <div className="basket__btn">
            <Link to="/">
              <Button text="Вернуться в меню" color="grey" prev="prev" />
            </Link>
            {!order && (
              <Link to="order">
                <Button text="Оформить заказ" color="orange" next="next" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Basket;
