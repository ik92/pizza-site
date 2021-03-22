import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper";
import classNames from "classnames";

import "./Slider.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import { CardSlider } from "../../blocks/index";

function Slider({
  images,
  slidesPerView,
  loop,
  navigation,
  pagination,
  autoplay,
  mousewheel,
  size,
}) {
  SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel]);

  return (
    <div className={classNames("slider", { [`slider__${size}`]: size })}>
      <Swiper
        slidesPerView={slidesPerView}
        loop={loop}
        navigation={navigation}
        pagination={pagination}
        autoplay={autoplay}
        mousewheel={mousewheel}
      >
        {images
          ? images.map((image) => (
              <SwiperSlide>
                <img src={image} alt="Slider_image" />
              </SwiperSlide>
            ))
          : Array(10)
              .fill(0)
              .map((page) => (
                <SwiperSlide>
                  <CardSlider />
                </SwiperSlide>
              ))}
      </Swiper>
    </div>
  );
}

export default Slider;
