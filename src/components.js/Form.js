import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { Row, Col, Container } from "reactstrap";

import styles from "./styles.css";

const Forms = props => {
  return (
    <Form onSubmit={props.getData}>
      <FormGroup>
        <Input type="select" id="thing">
          <option value="people"> People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <input type="number" name="number" placeholder="id" />
      </FormGroup>
      <Button> Submit</Button>
    </Form>
  );
};

export default Forms;
