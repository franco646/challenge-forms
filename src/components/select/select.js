import React from "react";
import InvalidInputMessage from "../invalidInputMessage/invalidInputMessage";

import "./select.scss";

const Select = ({ item, value, onChange, onBlur, error, ...otherProps }) => {
  return (
    <div className="floating-label" {...otherProps}>
      <select
        id={`${item.name}-select`}
        className={`floating-select ${!value ? "isEmpty" : ""} ${
          error ? "invalid" : ""
        }`}
        name={item.name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value=""></option>
        {item.options.map((option, i) => (
          <option value={option.value} key={i}>{option.label}</option>
        ))}
      </select>
      <label htmlFor={`${item.name}-select`}>
        {item.label}{" "}
        {item.required ? <span className="require-asterisk">*</span> : null}
      </label>
      <InvalidInputMessage error={error} />
    </div>
  );
};

export default Select;
