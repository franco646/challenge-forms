import React from "react";

const Select = ({ item, ...anotherProps }) => {
  return (
    <select id={`${item.name}-input`} {...anotherProps}>
      {item.options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;
