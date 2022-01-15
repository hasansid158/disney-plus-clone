import React from "react";
import style from "./imageSlider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

function ImageSlider() {
  return (
    <Slider {...settings} className={style.imageSlider}>
      <div className={style.sliderCont}>
        <img src="/images/slider-badag.jpg" alt="slider img 1" />
      </div>
      <div className={style.sliderCont}>
        <img src="/images/slider-badging.jpg" alt="slider img 2" />
      </div>
      <div className={style.sliderCont}>
        <img src="/images/slider-scale.jpg" alt="slider img 3" />
      </div>
      <div className={style.sliderCont}>
        <img src="/images/slider-scales.jpg" alt="slider img 4" />
      </div>
    </Slider>
  );
}

export default ImageSlider;
