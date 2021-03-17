import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import classNames from "classnames";

import "./Slider.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import CardSlider from "../CardSlider/CardSlider";

function Slider({
  images,
  slidesPerView,
  loop,
  navigation,
  pagination,
  autoplay,
  size,
}) {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <div className={classNames("slider", { [`slider__${size}`]: size })}>
      <Swiper
        slidesPerView={slidesPerView}
        loop={loop}
        navigation={navigation}
        pagination={pagination}
        autoplay={autoplay}
      >
        {images ? (
          images.map((image) => (
            <SwiperSlide>
              <img src={image} alt="Slider_image" />
            </SwiperSlide>
          ))
        ) : (
          <div className="slider__wrapper">
            {Array(10)
              .fill(0)
              .map((page) => (
                <SwiperSlide>
                  <CardSlider />
                </SwiperSlide>
              ))}
          </div>
        )}
      </Swiper>
    </div>
  );
}

export default Slider;
