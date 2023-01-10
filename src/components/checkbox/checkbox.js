import React from "react";
import InvalidInputMessage from "../invalidInputMessage/invalidInputMessage";

import "./checkbox.scss";

const Checkbox = ({ item, onChange, value, onBlur, error, ...otherProps }) => {
  return (
    <div className="checkbox-group" {...otherProps}>
      <div>
        <input
          type="checkbox"
          id={`${item.name}-checkbox`}
          onBlur={onBlur}
          name={item.name}
          onChange={onChange}
          value={value}
        />
        <InvalidInputMessage error={error} />
      </div>
      <label htmlFor={`${item.name}-checkbox`}>
        {item.label}{" "}
        {item.required ? <span className="require-asterisk">*</span> : null}
      </label>
    </div>
  );
};

export default Checkbox;
