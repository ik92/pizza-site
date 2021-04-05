import React from "react";

import {
  Header,
  Menu,
  SliderBlock,
  BlockFood,
  DeliveryInfoBlock,
  Footer,
} from "../../blocks/index";

function MainPages() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <SliderBlock />
        <BlockFood />
        <BlockFood />
        <BlockFood />
        <BlockFood />
        <BlockFood />
        <BlockFood />
        <DeliveryInfoBlock />
      </div>
      <Footer />
    </>
  );
}

export default MainPages;
