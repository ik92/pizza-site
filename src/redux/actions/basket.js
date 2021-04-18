import { ADD_PIZZA_TO_BASKET } from "../consts";

export const addPizzaToBasket = (pizzaObj) => ({
  type: ADD_PIZZA_TO_BASKET,
  payload: pizzaObj,
});
