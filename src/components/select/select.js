import React, { useState } from "react";

import "./select.scss";

const Select = ({ item, value, onChange, onBlur }) => {
  return (
    <div class="floating-label">
      <select
        id={`${item.name}-select`}
        className={`floating-select ${!value ? "isEmpty" : ""}`}
        name={item.name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value=""></option>
        {item.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <label htmlFor={`${item.name}-select`}>
        {item.label}{" "}
        {item.required ? <span className="require-asterisk">*</span> : null}
      </label>
    </div>
  );
};

/**
 * <select id={`${item.name}-input`} {...anotherProps}>
      {item.options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
 */

export default Select;
