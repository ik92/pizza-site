import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addElementToBasket } from "../../../redux/actions/basket";
import { fetchPizzas } from "../../../redux/actions/pizzas";

import {
  Menu,
  SliderBlock,
  BlockFood,
  DeliveryInfoBlock,
  Footer,
} from "../../blocks/index";

function MainPages() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const { pizzas } = useSelector((state) => state.pizzas);
  const { totalCount } = useSelector((state) => state.basket);
  console.log(pizzas);

  const handleAddPizzaToBasket = (obj) => {
    dispatch(addElementToBasket(obj));
  };

  return (
    <>
      <div className="container">
        <Menu totalCount={totalCount} />
        <SliderBlock pizzas={pizzas} />
        <BlockFood pizzas={pizzas} onClickAddPizza={handleAddPizzaToBasket} />
        {/* <BlockFood /> */}
        {/* <BlockFood /> */}
        {/* <BlockFood /> */}
        {/* <BlockFood /> */}
        {/* <BlockFood /> */}
        <DeliveryInfoBlock />
      </div>
      <Footer />
    </>
  );
}

export default MainPages;
