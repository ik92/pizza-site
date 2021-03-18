import SliderBlock from "./components/SliderBlock/SliderBlock";
import BlockFood from "./components/BlockFood/BlockFood";
import DeliveryInfoBlock from "./components/DeliveryInfoBlock/DeliveryInfoBlock";

import "./App.scss";
import "swiper/swiper.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
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
    </div>
  );
}

export default App;
