import React, { useEffect } from "react";
import style from "./home.module.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../Viewers/Viewers";
import Movies from "../Movies/Movies";
import { useCollection } from "../../hooks/useCollection";

function Home() {
  let titleImageUrls = null;
  const { documents, error } = useCollection("movies");

  if (error !== null) {
    console.log("Error! " + error);
  } else if (documents !== null) {
    titleImageUrls = documents.map((movie) => {
      return { id: movie.id, movieList: movie.sliderImage };
    });
  }
  return (
    <main className={style.mainContainer}>
      {documents && <ImageSlider images={titleImageUrls} />}
      <Viewers />
      <Movies />
    </main>
  );
}

export default Home;
