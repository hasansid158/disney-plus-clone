import React, { useState } from "react";
import { useParams } from "react-router-dom";
import style from "./details.module.css";
import { useCollection } from "../../hooks/useCollection";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

function Details() {
  const { documents, error } = useCollection("movies");
  const [imageLoadCount, setImageLoadCount] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { id } = useParams();

  const urls =
    documents &&
    documents.filter((movie) => {
      if (movie.id === id) {
        return {
          mainImage: movie.mainImage,
          logoImage: movie.logoImage,
          description: movie.description,
        };
      }
    });

  const onLoadComplete = () => {
    setImageLoadCount(imageLoadCount + 1);
    if (imageLoadCount >= 2) {
      setImagesLoaded(true);
    }
  };

  return (
    <main className={style.detailsContainer}>
      <SpinnerLoader loaded={imagesLoaded} />
      <div className={style.backgroundImg}>
        <img
          src={urls && urls[0].mainImage}
          alt="mainImg"
          onLoad={onLoadComplete}
        />
      </div>
      <div className={style.titleImage}>
        <img
          src={urls && urls[0].logoImage}
          alt="titleImage"
          onLoad={onLoadComplete}
        />
      </div>
      <div className={style.controls}>
        <button className={style.playButton}>
          <img
            src="/images/play-icon-black.png"
            alt="play"
            onLoad={onLoadComplete}
          />
          <span>PLAY</span>
        </button>
        <button className={`${style.playButton} ${style.trailerButton}`}>
          <div>TRAILER</div>
        </button>
        <div className={style.featureButtons}>
          <button className={style.addButton}>
            <svg
              alt=""
              aria-hidden="true"
              aria-label="watchlist"
              color="#fff"
              role="img"
              version="1.1"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              data-route="WATCHLIST"
            >
              <path
                d="M27.85 15.1H20.9V8.15a2.9 2.9 0 0 0-5.8 0v6.95H8.15a2.9 2.9 0 0 0 0 5.8h6.95v6.95a2.9 2.9 0 0 0 5.8 0V20.9h6.95a2.9 2.9 0 1 0 0-5.8z"
                className="sc-kAzzGY dGwULW"
              ></path>
            </svg>
          </button>
          <button className={style.groupWatchButton}>
            <svg
              alt=""
              aria-label="groupWatch"
              role="img"
              version="1.1"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-jotlie dIUtAY"
            >
              <path
                className="people"
                d="M 23.465 19.672 C 23.496 19.83 23.97 24.967 23.798 25.96 C 23.55 27.399 21.837 28.426 18.168 28.426 C 14.634 28.426 12.829 27.189 12.483 25.715 C 12.152 24.314 12.807 19.581 12.839 19.427 C 13.638 15.502 16.851 15.295 17.961 15.287 L 18.306 15.287 C 19.343 15.287 22.646 15.664 23.465 19.672 Z M 10.313 16.315 C 10.639 16.315 11.213 16.332 11.831 16.545 C 11.416 17.263 11.105 18.086 10.915 19.016 C 10.906 19.061 10.111 24.229 10.571 26.186 C 10.574 26.198 10.582 26.206 10.585 26.218 C 10.298 26.195 10 26.152 9.689 26.073 C 6.928 25.381 5.88 24.015 5.843 23.261 C 5.787 22.101 6.11 19.77 6.136 19.645 C 6.792 16.42 9.255 16.315 10.089 16.315 Z M 25.976 16.315 C 26.863 16.321 29.223 16.498 29.864 19.645 C 29.89 19.77 30.214 22.101 30.157 23.261 C 30.122 24.015 29.073 25.381 26.312 26.074 C 26.119 26.121 25.932 26.158 25.749 26.184 C 25.945 24.628 25.427 19.459 25.387 19.262 C 25.166 18.176 24.788 17.262 24.305 16.501 C 24.87 16.331 25.386 16.315 25.688 16.315 L 25.688 16.315 Z M 25.77 10.111 C 27.203 10.111 28.366 11.301 28.366 12.77 C 28.366 14.238 27.203 15.429 25.77 15.429 C 24.336 15.429 23.171 14.238 23.171 12.77 C 23.171 11.301 24.336 10.111 25.77 10.111 Z M 10.231 10.111 C 11.666 10.111 12.829 11.301 12.829 12.77 C 12.829 14.238 11.666 15.429 10.231 15.429 C 8.798 15.429 7.636 14.238 7.636 12.77 C 7.636 11.301 8.798 10.111 10.231 10.111 Z M 18.207 7.574 C 19.99 7.574 21.436 9.053 21.436 10.878 C 21.436 12.704 19.99 14.184 18.207 14.184 C 16.422 14.184 14.976 12.704 14.976 10.878 C 14.976 9.053 16.422 7.574 18.207 7.574 Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={style.description}>
        <span>{urls && urls[0].description}</span>
      </div>
    </main>
  );
}

export default Details;
