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
  } else if (props.thing) {
    return (
      <div>
        <p>You have chosen the {props.shipName}</p>
        <p>Consumables: {props.food} months worth</p>
        <p>Cost {props.cost} cradits</p>
        <p>Crew capacity: {props.crew} People</p>
        <p>Length {props.length}</p>
        <p>Hyoerdrive type: {props.drive}</p>
        <p>Manufacurer: {props.manufacturer}</p>
        <p>Model: {props.model}</p>
      </div>
    );
  } else {
    return <p>Enter either People, Planets or Starships</p>;
  }
}

export default Display;
