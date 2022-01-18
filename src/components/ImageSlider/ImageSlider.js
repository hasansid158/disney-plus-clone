import React from "react";
import style from "./imageSlider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

function ImageSlider(props) {
  const imageUrls = props.images;

  const settings =
    props.settings != undefined ? props.settings : defaultSettings;

  return (
    <Slider {...settings} className={style.imageSlider}>
      {imageUrls.map((url, idx) => {
        return (
          <Link to={`/detail/${url.id}`} key={idx}>
            <div className={style.sliderCont}>
              <img src={url.movieList} alt={idx} />
            </div>
          </Link>
        );
      })}
    </Slider>
  );
}

export default ImageSlider;
