import {
  ADD_ELEMENT_TO_BASKET,
  MINUS_BASKET_ITEM,
  PLUS_BASKET_ITEM,
  REMOVE_BASKET_ITEM,
} from "../consts";

export const addElementToBasket = (pizzaObj) => ({
  type: ADD_ELEMENT_TO_BASKET,
  payload: pizzaObj,
});

export const removeBasketItem = (category, _id, size, type) => ({
  type: REMOVE_BASKET_ITEM,
  payload: { category, _id, size, type },
});

// export const removeBasketItem = (category, _id, size, type) => {
//   console.log(size);
//   return {
//     type: REMOVE_BASKET_ITEM,
//     payload: { category, _id, size, type },
//   };
// };

export const plusBasketItem = (category, _id, size, type) => ({
  type: PLUS_BASKET_ITEM,
  payload: { category, _id, size, type },
});

export const minusBasketItem = (category, _id, size, type) => ({
  type: MINUS_BASKET_ITEM,
  payload: { category, _id, size, type },
});
