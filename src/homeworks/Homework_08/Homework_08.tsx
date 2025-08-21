import React from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

const Homework09 = () => {
  return (
    <div>
      <h1>Homework 09</h1>
      <Input disabled={true} placeholder="Disabled input" />
      <Input error="Some error" placeholder="Error input" />
      <Input placeholder="Normal input" />
      <Button disabled={true}>Disabled button</Button>
      <Button isRed={true}>Red button</Button>
      <Button>Normal button</Button>
    </div>
  );
};

export default Homework09;
