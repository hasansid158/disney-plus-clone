import React from "react";
import style from "./movies.module.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useCollection } from "../../hooks/useCollection";

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
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

function Movies() {
  let titleImageUrls = null;
  const { documents, error } = useCollection("movies");

  if (error !== null) {
    console.log("Error! " + error);
  } else if (documents !== null) {
    titleImageUrls = documents.map((movie) => {
      return { id: movie.id, movieList: movie.listImage };
    });
  }

  return (
    <section>
      <div className={style.movieSliders}>
        <h4>Recommended For You</h4>
        {documents && (
          <ImageSlider images={titleImageUrls} settings={sliderSettings} />
        )}
      </div>
      <div className={style.movieSliders}>
        <h4>New to Disney+</h4>
        {documents && (
          <ImageSlider images={titleImageUrls} settings={sliderSettings} />
        )}
      </div>
    </section>
  );
}

export default Movies;
