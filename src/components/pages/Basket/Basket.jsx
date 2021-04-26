import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  minusBasketItem,
  plusBasketItem,
  removeBasketItem,
} from "../../../redux/actions/basket";

import { BasketItem, Footer } from "../../blocks";
import { Button } from "../../ui";

import "./Basket.scss";

const Basket = ({ title, order }) => {
  const {
    items: { pizzas, combo, snacks, desserts, drinks, other_goods },
    totalCount,
    totalPrice,
  } = useSelector((state) => state.basket);
  console.log(pizzas);

  const dispatch = useDispatch();

  const typesPizzas = ["Тонкое", "Традиционное"];

  const arrPizza = Object.entries(pizzas).map(([key, value]) => {
    return [...new Set(value.map((el) => el.size))].map((obj) => {
      return {
        [obj]: {
          [typesPizzas[0]]: [
            value.filter(
              (el1) => el1.size === obj && el1.type === typesPizzas[0]
            ),
          ],
          [typesPizzas[1]]: [
            value.filter(
              (el1) => el1.size === obj && el1.type === typesPizzas[1]
            ),
          ],
        },
      };
    });
  });

  const onRemoveItem = (category, _id, size, type) => {
    dispatch(removeBasketItem(category, _id, size, type));
  };

  const onPlusItem = (category, _id, size, type) => {
    dispatch(plusBasketItem(category, _id, size, type));
  };

  const onMinusItem = (category, _id, size, type) => {
    dispatch(minusBasketItem(category, _id, size, type));
  };

  console.log(arrPizza);

  return (
    <>
      <div className="container">
        <div className="basket__wrapper">
          <h1>{title}</h1>
          <h2>Пиццы</h2>

          {arrPizza.map((arr) =>
            Object.values(arr).map((el) =>
              Object.entries(el).map(([key, value]) =>
                Object.values(value).map((arr1) =>
                  arr1.map((inner) => {
                    if (inner.length) {
                      return (
                        <BasketItem
                          key={inner[0]._id}
                          count={inner.length}
                          {...inner[0]}
                          onMinus={onMinusItem}
                          onPlus={onPlusItem}
                          onRemove={onRemoveItem}
                        />
                      );
                    }
                    return null;
                  })
                )
              )
            )
          )}

          <div className="basket__title">
            <h2>
              Количество: <span>{totalCount} шт</span>
            </h2>
            <h2>
              Сумма заказа: <span>{totalPrice} P</span>
            </h2>
          </div>

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
