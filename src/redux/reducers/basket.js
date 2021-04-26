import {
  ADD_ELEMENT_TO_BASKET,
  MINUS_BASKET_ITEM,
  PLUS_BASKET_ITEM,
  REMOVE_BASKET_ITEM,
} from "../consts";

const initialState = {
  items: {
    pizzas: {},
    combo: {},
    snacks: {},
    desserts: {},
    drinks: {},
    other_goods: {},
  },
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (items) =>
  Object.values(items)
    .map((arr) => {
      let sum = 0;
      Object.values(arr).map((el) => {
        return el.forEach((i) => (sum += i.price));
      });
      return sum;
    })
    .reduce((acc, arr) => arr + acc, 0);

const getTotalCount = (items) =>
  Object.values(items)
    .map((arr) => {
      let sum = 0;
      Object.values(arr).map((el) => {
        return (sum += el.length);
      });
      return sum;
    })
    .reduce((acc, arr) => arr + acc, 0);

const basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT_TO_BASKET: {
      const currentPizzaItems = !state.items[action.payload.category][
        action.payload._id
      ]
        ? [action.payload]
        : [
            ...state.items[action.payload.category][action.payload._id],
            action.payload,
          ];

      const newItems = {
        ...state.items,
        [action.payload.category]: {
          ...state.items[action.payload.category],
          [action.payload._id]: currentPizzaItems,
        },
      };

      const price = getTotalPrice(newItems);
      const count = getTotalCount(newItems);

      return {
        ...state,
        items: newItems,
        totalPrice: price,
        totalCount: count,
      };
    }

    case REMOVE_BASKET_ITEM: {
      const currentPizzaItems = [
        ...state.items[action.payload.category][action.payload._id].filter(
          (arr) =>
            arr.size !== action.payload.size || arr.type !== action.payload.type
        ),
      ];

      const newItems = {
        ...state.items,
        [action.payload.category]: {
          ...state.items[action.payload.category],
          [action.payload._id]: currentPizzaItems,
        },
      };

      const price = getTotalPrice(newItems);
      const count = getTotalCount(newItems);

      return {
        ...state,
        items: newItems,
        totalPrice: price,
        totalCount: count,
      };
    }
    case PLUS_BASKET_ITEM: {
      const currentPizzaItems = [
        ...state.items[action.payload.category][action.payload._id],
        [
          ...state.items[action.payload.category][action.payload._id].filter(
            (arr) =>
              arr.size === action.payload.size &&
              arr.type === action.payload.type
          ),
        ][0],
      ];

      const newItems = {
        ...state.items,
        [action.payload.category]: {
          ...state.items[action.payload.category],
          [action.payload._id]: currentPizzaItems,
        },
      };

      const price = getTotalPrice(newItems);
      const count = getTotalCount(newItems);

      return {
        ...state,
        items: newItems,
        totalPrice: price,
        totalCount: count,
      };
    }

    case MINUS_BASKET_ITEM: {
      // const [first, ...arr] = [
      //   ...state.items[action.payload.category][action.payload._id].filter(
      //     (arr) =>
      //       arr.size === action.payload.size && arr.type === action.payload.type
      //   ),
      // ];

      const currentPizzaItems = [
        ...state.items[action.payload.category][action.payload._id],
      ];

      let arrWithoutRemoveElement = [];

      for (let i = 0; i < currentPizzaItems.length; i++) {
        if (
          currentPizzaItems[i].size === action.payload.size &&
          currentPizzaItems[i].type === action.payload.type
        ) {
          delete currentPizzaItems[i];
          break;
        }
      }

      for (let i = 0; i < currentPizzaItems.length; i++) {
        if (currentPizzaItems[i]) {
          arrWithoutRemoveElement.push(currentPizzaItems[i]);
        }
      }

      const newItems = {
        ...state.items,
        [action.payload.category]: {
          ...state.items[action.payload.category],
          [action.payload._id]: arrWithoutRemoveElement,
        },
      };

      const price = getTotalPrice(newItems);
      const count = getTotalCount(newItems);

      return {
        ...state,
        items: newItems,
        totalPrice: price,
        totalCount: count,
      };
    }

    default:
      return state;
  }
};

export default basket;
