import React from "react";
import styles from "./styles.css";
import image from "./logo.jpg";
function Title() {
  return (
    <div>
      <h1 className={styles.h1}>This is the Star Wars app</h1>
      <img src={image} alt="new" />
      <p>some id's for the starship are a bit fucky so dont panic</p>
    </div>
  );
}
export default Title;
