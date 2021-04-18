import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizzaToBasket } from "../../../redux/actions/basket";
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
  console.log(totalCount);

  const handleAddPizzaToBasket = (obj) => {
    dispatch(addPizzaToBasket(obj));
  };

  return (
    <>
      <div className="container">
        <Menu totalCount={totalCount} />
        <SliderBlock />
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
