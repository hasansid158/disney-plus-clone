import React from "react";
import style from "./viewers.module.css";

function Viewers() {
  return (
    <div className={style.container}>
      <div>
        <img src="images/viewers-disney.png" alt="disney" />
      </div>
      <div>
        <img src="images/viewers-pixar.png" alt="pixar" />
      </div>
      <div>
        <img src="images/viewers-marvel.png" alt="marvel" />
      </div>
      <div>
        <img src="images/viewers-starwars.png" alt="starwars" />
      </div>
      <div>
        <img src="images/viewers-national.png" alt="national" />
      </div>
    </div>
  );
}

export default Viewers;
