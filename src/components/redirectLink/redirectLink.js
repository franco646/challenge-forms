import React from "react";

import "./redirectLink.scss";

const RedirectLink = ({ onClick }) => {
  return (
    <p className="redirect-link-group">
      Para ver los resultados haga{" "}
      <u className="redirect-link" onClick={onClick}>
        click aquí
      </u>
    </p>
  );
};

export default RedirectLink;
