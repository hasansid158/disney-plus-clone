import React from "react";
import style from "./login.module.css";

function Login() {
  return (
    <main className={style.container}>
      <img
        className={style.backgroundImg}
        src="./images/login-background.jpg"
        alt="login background"
      />
      <article className={style.ctaBox}>
        <img
          className={style.ctaLogo}
          src="/images/cta-logo-one.svg"
          alt="ctaLogo1"
        />
        <button className={style.signUpButton}>GET ALL THERE</button>
        <p className={style.ctaDescription}>
          Disney+ gives you something for every mood, all in one place. With
          entertainment from Disney, Pixar, Marvel, Star Wars™, National
          Geographic and Star, there's always something exciting to watch. Watch
          the latest releases, Original series and movies, classic films,
          throwbacks and so much more.
        </p>
        <img
          className={style.ctaLogo}
          src="/images/cta-logo-two.png"
          alt="ctaLogo2"
        />
      </article>
    </main>
  );
}

export default Login;
