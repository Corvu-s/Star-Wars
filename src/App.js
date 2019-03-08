import React, { Component } from "react";
import Title from "./components.js/Title";
import Form from "./components.js/Form";
import Display from "./components.js/Display";

class App extends Component {
  state = {
    person: false,
    planet: false,
    ship: false,
    /////////////////
    number: undefined,
    submit: undefined,
    ////////////////person
    age: undefined,
    name: undefined,
    height: undefined,
    gender: undefined,
    mass: undefined,
    //////////////////place
    planetName: undefined,
    climate: undefined,
    diameter: undefined,
    gravity: undefined,
    population: undefined,
    terrain: undefined,
    ////////////////////ships
    shipName: undefined,
    cargoCapacity: undefined,
    food: undefined,
    cost: undefined,
    crew: undefined,
    drive: undefined,
    manufacturer: undefined,
    model: undefined,
    length: undefined
  };
  getData = async event => {
    event.preventDefault();
    const thing = event.target.elements.text.value;
    const number = event.target.elements.number.value;
    const api_call = await fetch(`https://swapi.co/api/${thing}/${number}/`);
    const data = await api_call.json();
    console.log(data);
    if (thing === "people") {
      this.setState({
        type: thing,
        age: data.birth_year,
        name: data.name,
        height: data.height,
        gender: data.gender,
        mass: data.mass,
        number: number,
        person: true,
        planet: false,
        ship: false
      });
    } else if (thing === "planets") {
      this.setState({
        type: thing,
        number: number,
        planetName: data.name,
        climate: data.climate,
        diameter: data.diameter,
        gravity: data.gravity,
        population: data.population,
        terrain: data.terrain,
        person: false,
        planet: true,
        ship: false
      });
    } else if (thing === "starships") {
      this.setState({
        shipName: data.name,
        number: number,
        cargoCapacity: data.cargo_capacity,
        food: data.consumables,
        cost: data.cost_in_credits,
        crew: data.crew,
        drive: data.hyperdrive_rating,
        manufacturer: data.manufacturer,
        model: data.model,
        length: data.length,
        person: false,
        planet: false,
        ship: true
      });
    }
  };

  render() {
    return (
      <div>
        <Title />
        <Form getData={this.getData} />
        <Display
          number={this.state.number}
          person={this.state.person}
          place={this.state.planet}
          thing={this.state.ship}
          type={this.state.type}
          //////////////////////
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
          gender={this.state.gender}
          mass={this.state.mass}
          ////////////////////
          planetName={this.state.planetName}
          climate={this.state.climate}
          diameter={this.state.diameter}
          gravity={this.state.gravity}
          population={this.state.population}
          terrain={this.state.terrain}
          ////////////////////
          shipName={this.state.shipName}
          cargoCapacity={this.state.cargoCapacity}
          food={this.state.food}
          cost={this.state.cost}
          crew={this.state.crew}
          drive={this.state.drive}
          manufacturer={this.state.manufacturer}
          model={this.state.model}
          length={this.state.length}
        />
      </div>
    );
  }
}

export default App;
