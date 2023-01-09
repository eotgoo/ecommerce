import React from "react";
import { Button } from "react-bootstrap";

const Btn = (props) => {
  return (
    <Button variant={props.variant} onClick={props.handleClick}>
      {props.title}
    </Button>
  );
};

export default Btn;
