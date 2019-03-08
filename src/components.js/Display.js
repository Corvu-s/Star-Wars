import React from "react";

function Display(props) {
  if (props.person) {
    return (
      <div>
        <p>You have chosen {props.name}. </p>
        <p>Age: {props.age}. </p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height} Units</p>
        <p>Mass: {props.mass} Units</p>
      </div>
    );
  } else if (props.place) {
    return <p>Place</p>;
  } else if (props.thing) {
    return <p>thing</p>;
  } else {
    return <p>Enter either People, Planets or Starships</p>;
  }
}

export default Display;
