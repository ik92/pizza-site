import { combineReducers } from "redux";
import pizzas from "./pizzas";
import basket from "./basket";

const rootReducer = combineReducers({ pizzas, basket });

export default rootReducer;
