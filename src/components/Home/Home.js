import React from "react";
import style from "./home.module.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../Viewers/Viewers";

function Home() {
  return (
    <main className={style.mainContainer}>
      <ImageSlider />
      <Viewers />
    </main>
  );
}

export default Home;
