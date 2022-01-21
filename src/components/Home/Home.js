import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../Viewers/Viewers";
import Movies from "../Movies/Movies";
import { useCollection } from "../../hooks/useCollection";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

function Home() {
  let titleImageUrls = null;
  const { documents, error } = useCollection("movies");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  if (error !== null) {
    console.log("Error! " + error);
  } else if (documents !== null) {
    titleImageUrls = documents.map((movie) => {
      return { id: movie.id, movieList: movie.sliderImage };
    });
  }

  const onImagesLoad = (loaded) => {
    setTimeout(() => {
      setImagesLoaded(loaded);
    }, 500);
  };

  return (
    <main className={style.mainContainer}>
      <SpinnerLoader loaded={imagesLoaded} />
      {documents && (
        <ImageSlider images={titleImageUrls} getImageLoaded={onImagesLoad} />
      )}
      <Viewers />
      <Movies />
    </main>
  );
}

export default Home;
