import React, { Component } from "react";
import Title from "./components.js/Title";
import Form from "./components.js/Form";
import Display from "./components.js/Display";
class App extends Component {
  state = {
    person: false,
    planet: false,
    ship: false,
    number: undefined,
    submit: undefined,
    age: undefined
  };
  //https://swapi.co/api/films/2/
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
        person: true,
        planet: false,
        ship: false
      });
    } else if (thing === "planets") {
    } else if (thing === "starships") {
    }
  };

  render() {
    return (
      <div>
        <Title />
        <Form getData={this.getData} />
        <Display name={this.state.name} type={this.state.type} />
      </div>
    );
  }
}

export default App;
