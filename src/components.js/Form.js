import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getData}>
      <label>
        People:
        <input type="radio" name="text" value="people" />
      </label>
      <label>
        Planets:
        <input type="radio" name="text" value="planets" />
      </label>
      <label>
        Starships:
        <input type="radio" name="text" value="starships" />
      </label>
      <input type="number" name="number" placeholder="id" />
      <button> Submit</button>
    </form>
  );
};

export default Form;
