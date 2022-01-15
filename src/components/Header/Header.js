import React from "react";
import style from "./header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <img src="/images/logo.svg" className={style.logoImg} alt="logo" />

      <nav className={style.navMenu}>
        <button>
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </button>
        <button>
          <img src="/images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </button>
        <button>
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>WATCHLIST</span>
        </button>
        <button>
          <img src="/images/original-icon.svg" alt="original" />
          <span>ORIGINALS</span>
        </button>
        <button>
          <img src="/images/movie-icon.svg" alt="movie" />
          <span>MOVIES</span>
        </button>
        <button>
          <img src="/images/series-icon.svg" alt="series" />
          <span>SERIES</span>
        </button>
      </nav>

      <img className={style.userImg} src="images/myImageSquare.jpg" />
    </header>
  );
}

export default Header;
