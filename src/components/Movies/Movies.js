import React from "react";
import style from "./movies.module.css";
import ImageSlider from "../ImageSlider/ImageSlider";

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 350,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

function Movies() {
  let imageUrls = {
    urls: [
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/825BE4A837FD462FF7CD6981B5ECFA0F020B10A9A6476F123A5286D544D0C160/scale?width=400&aspectRatio=1.78&format=jpeg",
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4C123159C993227B099A26AFAB346496145E0BE6180BF9F3C5B697D98E0F8D27/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AE3140956ABD946A7A7F6A3BA5609EF401DD8121265A3D2ABAEA4419E8402E46/scale?width=400&aspectRatio=1.78&format=jpeg",
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC2BD3D0355C58B637CB6C5120D77996D7C0979AAB0C12B7A1E360EF18AA738F/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F427602670984E1237037A26C67FBDD3CB6EF4F7AE2A5CC84B6DAC61A54A520D/scale?width=400&aspectRatio=1.78&format=jpeg",
    ],
  };

  //Multiplying urls 3 times to fill up the carousel
  const duplicateArr = (arr, times) =>
    Array(times)
      .fill([...arr])
      .reduce((a, b) => a.concat(b));
  imageUrls.urls = duplicateArr(imageUrls.urls, 3);

  return (
    <section>
      <div className={style.movieSliders}>
        <h4>Recommended For You</h4>
        <ImageSlider images={imageUrls} settings={sliderSettings} />
      </div>
      <div className={style.movieSliders}>
        <h4>New to Disney+</h4>
        <ImageSlider images={imageUrls} settings={sliderSettings} />
      </div>
    </section>
  );
}

export default Movies;
