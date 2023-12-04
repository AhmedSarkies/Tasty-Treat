import React, { Fragment } from "react";

const Helmet = ({ title, children }) => {
  document.title = `Food ordering app - ${title}`;

  return <Fragment>{children}</Fragment>;
};

export default Helmet;
