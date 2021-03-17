import SliderBlock from "./components/SliderBlock/SliderBlock";

import "./App.scss";
import "swiper/swiper.scss";
import BlockFood from "./components/BlockFood/BlockFood";

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
      </div>
    </div>
  );
}

export default App;
