import React from "react";

import "./SliderBlock.scss";

import { Slider } from "../../ui/index";

import sliderImg1 from "../../../assets/img/slider/slider-1.jpeg";
import sliderImg2 from "../../../assets/img/slider/slider-2.jpeg";
import sliderImg3 from "../../../assets/img/slider/slider-3.jpeg";
import sliderImg4 from "../../../assets/img/slider/slider-4.jpeg";
import sliderImg5 from "../../../assets/img/slider/slider-5.jpeg";
import sliderImg6 from "../../../assets/img/slider/slider-6.jpeg";

function SliderBlock({ pizzas }) {
  return (
    <div className="slider__block">
      <Slider
        images={[
          sliderImg1,
          sliderImg2,
          sliderImg3,
          sliderImg4,
          sliderImg5,
          sliderImg6,
        ]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
        }}
        size="big"
        navigation
        loop
      />
      <h2>Новое и популярное</h2>
      <Slider
        pizzas={pizzas}
        slidesPerView={4.5}
        size="small"
        pagination={false}
        navigation
        loop
        mousewheel
      />
    </div>
  );
}

export default SliderBlock;
