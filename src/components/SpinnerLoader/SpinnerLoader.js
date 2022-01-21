import React, { useEffect, useState } from "react";
import style from "./spinnerLoader.module.css";

function SpinnerLoader({ loaded }) {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      setContentLoaded(true);
    }
  }, [loaded]);

  return (
    <div
      className={`
    ${style.spinLoader}
    ${loaded === true ? style.spinDisabled : ""}`}
    >
      <img src="/images/spinner.svg" alt="loader" />
    </div>
  );
}

export default SpinnerLoader;
