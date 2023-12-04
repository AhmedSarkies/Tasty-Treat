import React from "react";

import { Header, Footer } from "../";

import Routers from "../../routes/Routers";
import { Fragment } from "react";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Fragment>
        <Routers />
      </Fragment>
      <Footer />
    </Fragment>
  );
};

export default Layout;
