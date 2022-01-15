import React from "react";
import style from "./viewers.module.css";

function Viewers() {
  return (
    <div className={style.container}>
      <div>
        <video autoPlay loop muted>
          <source src="videos/disney.mp4" type="video/mp4" />
        </video>
        <img src="images/viewers-disney.png" alt="disney" />
      </div>
      <div>
        <video autoPlay loop muted>
          <source src="videos/pixar.mp4" type="video/mp4" />
        </video>
        <img src="images/viewers-pixar.png" alt="pixar" />
      </div>
      <div>
        <video autoPlay loop muted>
          <source src="videos/marvel.mp4" type="video/mp4" />
        </video>
        <img src="images/viewers-marvel.png" alt="marvel" />
      </div>
      <div>
        <video autoPlay loop muted>
          <source src="videos/star-wars.mp4" type="video/mp4" />
        </video>
        <img src="images/viewers-starwars.png" alt="starwars" />
      </div>
      <div>
        <video autoPlay loop muted>
          <source src="videos/national-geographic.mp4" type="video/mp4" />
        </video>
        <img src="images/viewers-national.png" alt="national" />
      </div>
      <div>
        <video autoPlay loop muted>
          <source src="videos/star.mp4" type="video/mp4" />
        </video>
        <img src="images/viewers-star.png" alt="star" />
      </div>
    </div>
  );
}

export default Viewers;
