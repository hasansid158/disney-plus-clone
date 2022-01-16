import React from "react";
import style from "./imageSlider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let defaultSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

function ImageSlider(props) {
  const imageUrls = props.images && props.images.urls;

  defaultSettings =
    props.settings != undefined ? props.settings : defaultSettings;

  return (
    <Slider {...defaultSettings} className={style.imageSlider}>
      {imageUrls.map((url, idx) => {
        return (
          <div className={style.sliderCont} key={idx}>
            <img src={url} alt={idx} />
          </div>
        );
      })}
    </Slider>
  );
}

export default ImageSlider;
