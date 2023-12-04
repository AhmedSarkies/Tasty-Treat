import React, { Fragment } from "react";

const Helmet = ({ title, children }) => {
  document.title = `Tasty Treat App - ${title}`;

  return <Fragment>{children}</Fragment>;
};

export default Helmet;
