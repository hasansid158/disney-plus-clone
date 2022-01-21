import React, { useState } from "react";
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
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const checkImagesLoad = () => {
    if (imagesLoaded >= props.images.length) {
      props.getImageLoaded && props.getImageLoaded(true);
    } else {
      setImagesLoaded(imagesLoaded + 1);
    }
  };

  const settings =
    props.settings != undefined ? props.settings : defaultSettings;

  return (
    <React.Fragment>
      <Slider {...settings} className={style.imageSlider}>
        {props.images.map((url, idx) => {
          return (
            <Link
              to={`/detail/${url.id}`}
              key={idx}
              className={style.sliderCont}
            >
              <img src={url.movieList} alt={idx} onLoad={checkImagesLoad} />
            </Link>
          );
        })}
      </Slider>
    </React.Fragment>
  );
}

export default ImageSlider;
