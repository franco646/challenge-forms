import React from "react";
import Select from "../select/select";

const Input = ({ item }) => {
  return (
    <div>
      {item.type === "submit" ? null : (
        <label htmlFor={item.name ? `${item.name}-input` : null}>
          {item.label}{item.required ? '*' : null}
        </label>
      )}
      {item.type === "select" ? (
        <Select item={item} />
      ) : (
        <input
          type={item.type}
          name={item.name}
          id={item.name ? `${item.name}-input` : null}
        />
      )}
    </div>
  );
};

export default Input;
