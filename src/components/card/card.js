import React from "react";

import "./card.scss";

const Card = ({ children, title }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Card;
