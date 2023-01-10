import React from "react";

import "./checkbox.scss";

const Checkbox = ({ item, onChange, value, onBlur }) => {
  return (
    <div className="checkbox-group">
      <div>
        <input
          type="checkbox"
          id={`${item.name}-checkbox`}
          onBlur={onBlur}
          name={item.name}
          onChange={onChange}
          value={value}
        />
      </div>
      <label htmlFor={`${item.name}-checkbox`}>
        {item.label}{" "}
        {item.required ? <span className="require-asterisk">*</span> : null}
      </label>
    </div>
  );
};

export default Checkbox;
