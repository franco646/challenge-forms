import React from "react";
import InvalidInputMessage from "../invalidInputMessage/invalidInputMessage";

import "./input.scss";

const Input = ({ item, onChange, onBlur, value, error }) => {
  return (
    <div className="form__group">
      <input
        type={item.type === "date" ? "text" : item.type}
        name={item.name}
        id={`${item.name}-input`}
        onChange={onChange}
        className={`form__field ${error ? "invalid" : ""}`}
        placeholder={item.label}
        onBlur={onBlur}
        onFocus={(e) =>
          item.type === "date" ? (e.target.type = "date") : null
        }
        value={value}
      />
      <label htmlFor={`${item.name}-input`} className="form__label">
        {item.label}{" "}
        {item.required ? <span className="require-asterisk">*</span> : null}
      </label>
      <InvalidInputMessage error={error} />
    </div>
  );
};

export default Input;
