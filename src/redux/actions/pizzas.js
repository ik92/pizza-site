import axios from "axios";
import { SET_LOADED, SET_PIZZAS } from "../consts";

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(`http://localhost:5000/api/pizzas`)
    .then(({ data }) => dispatch(setPizzas(data)));
};
