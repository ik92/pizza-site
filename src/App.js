import {
  Header,
  Menu,
  SliderBlock,
  BlockFood,
  DeliveryInfoBlock,
  Footer,
} from "./components/blocks";

import "./App.scss";
import "swiper/swiper.scss";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
