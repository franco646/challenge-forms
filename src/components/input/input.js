import React from "react";

import "./input.scss";

const Input = ({ item, onChange, onBlur, value }) => {
  return (
    <div className="form__group">
      <input
        type={item.type}
        name={item.name}
        id={`${item.name}-input`}
        onChange={onChange}
        className="form__field"
        placeholder={item.label}
        onBlur={onBlur}
        value={value}
      />
      <label htmlFor={`${item.name}-input`} className="form__label">
        {item.label}{" "}
        {item.required ? <span className="require-asterisk">*</span> : null}
      </label>
    </div>
  );
};

export default Input;
