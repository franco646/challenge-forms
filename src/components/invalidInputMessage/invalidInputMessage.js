import React from "react";

import "./invalidInputMessage.scss";

const InvalidInputMessage = ({ error }) => {
  return <div className="invalid-input-message">{error}</div>;
};

export default InvalidInputMessage;
