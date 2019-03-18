import React from "react";
import { Container, Row, Col } from "reactstrap";

function Display(props) {
  if (props.person) {
    if (props.number < 87) {
      return (
        <Container>
          <p>You have chosen {props.name}. </p>
          <p>Age: {props.age}. </p>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height} Cm</p>
          <p>Mass: {props.mass} Kg</p>
        </Container>
      );
    } else {
      return <p>This id number is out of bounds. 87 is the max</p>;
    }
  } else if (props.place) {
    if (props.number < 61) {
      return (
        <div>
          <p>You have chosen {props.planetName}</p>
          <p>
            {props.planetName}'s climate is {props.climate}
          </p>
          <p>Diameter: {props.diameter} Km</p>
          <p>Gravity: {props.gravity}</p>
          <p>Population: {props.population} People</p>
          <p>Terrain type: {props.terrain}</p>
        </div>
      );
    } else {
      return <p>This id number is out of bounds. 61 is the max</p>;
    }
  } else if (props.thing) {
    if (props.number < 31) {
      return (
        <div>
          <p>You have chosen the {props.shipName}</p>
          <p>Consumables: {props.food} worth</p>
          <p>Cost {props.cost} credits</p>
          <p>Crew capacity: {props.crew} People</p>
          <p>Length {props.length} meters</p>
          <p>Hyoerdrive type: {props.drive}</p>
          <p>Manufacurer: {props.manufacturer}</p>
          <p>Model: {props.model}</p>
        </div>
      );
    } else {
      return <p>This id number is out of bounds. 32 is the max</p>;
    }
  } else {
    return <p>Enter either People, Planets or Starships</p>;
  }
}

export default Display;
