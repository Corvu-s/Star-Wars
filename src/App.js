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
    age: undefined,
    person: undefined
  };
  //https://swapi.co/api/films/2/
  getData = async event => {
    event.preventDefault();
    const thing = event.target.elements.text.value;
    const number = event.target.elements.number.value;
    const api_call = await fetch(`https://swapi.co/api/${thing}/${number}/`);
    const data = await api_call.json();
    if (thing.equals("people")) {
      this.setState({
        type: thing,
        age: data.birth_year,
        person: true,
        planet: false,
        ship: false
      });
    } else if (thing.equals("planets")) {
    } else if (thing.equals("starships ")) {
    }
  };

  render() {
    return (
      <div>
        <Title />
        <Form getData={this.getData} />
        <Display data={} />
      </div>
    );
  }
}

export default App;
