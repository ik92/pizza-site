import { ADD_ELEMENT_TO_BASKET } from "../consts";

export const addElementToBasket = (pizzaObj) => ({
  type: ADD_ELEMENT_TO_BASKET,
  payload: pizzaObj,
});

export const removeBasketItem = (id) => ({
  type: "REMOVE_BASKET_ITEM",
  payload: id,
});

export const plusBasketItem = (id) => ({
  type: "PLUS_BASKET_ITEM",
  payload: id,
});

export const minusBasketItem = (id) => ({
  type: "MINUS_BASKET_ITEM",
  payload: id,
});
