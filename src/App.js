import { Basket, MainPages } from "./components/pages/index";
import { Route } from "react-router-dom";

import "./App.scss";
import "swiper/swiper.scss";
import { Header } from "./components/blocks";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <MainPages />
      </Route>
      <Route path="/basket" exact>
        <Basket title="Корзина"></Basket>
      </Route>
      <Route path="/order" exact>
        <Basket title="Ваш заказ" order ></Basket>
      </Route>
    </div>
  );
}

export default App;
