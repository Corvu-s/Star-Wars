import React from "react";
import styles from "./styles.css";
import image from "./logo.jpg";
function Title() {
  return (
    <div classname={"total"}>
      <h1 className={"h1"}>This is the Star Wars app</h1>
      <img src={image} alt="new" />

      <h1 className={"p"}>
        some id's for the starship are a bit fucky so dont panic
      </h1>
    </div>
  );
}
export default Title;
