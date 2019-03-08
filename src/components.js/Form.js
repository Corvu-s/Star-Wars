import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getData}>
      <input
        type="text"
        name="text"
        placeholder="people,planets,starships..."
      />
      <input type="number" name="number" placeholder="id" />
      <button> Submit</button>
    </form>
  );
};

export default Form;
