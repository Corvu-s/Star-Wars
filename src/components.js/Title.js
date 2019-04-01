import React from "react";
import styles from "./styles.css";
import image from "./logo.jpg";
import { Row, Col, Container } from "reactstrap";

function Title() {
  return (
    <div className={"thing"}>
      <h1 className={"h1"}>This is the Star Wars app</h1>
      <p className={"p"}>
        some id's for the starship are a bit fucky so dont panic
      </p>
    </div>
  );
}
export default Title;
