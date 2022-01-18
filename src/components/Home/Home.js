import React, { useEffect } from "react";
import style from "./home.module.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../Viewers/Viewers";
import Movies from "../Movies/Movies";

const imageUrls = [
  "/images/slider-badag.jpg",
  "/images/slider-badging.jpg",
  "/images/slider-scale.jpg",
  "/images/slider-scales.jpg",
];

function Home() {
  return (
    <main className={style.mainContainer}>
      <Viewers />
      <Movies />
    </main>
  );
}

export default Home;
