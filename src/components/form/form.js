import React from "react";
import Input from "../input/input";

const Form = ({ items }) => {
  return (
    <form>
      {items.map((item) => (
        <Input item={item} />
      ))}
    </form>
  );
};

export default Form;
