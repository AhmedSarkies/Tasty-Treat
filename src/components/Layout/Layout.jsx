import React, { Fragment } from "react";

import { useDispatch } from "react-redux";

import Routers from "../../routes/Routers";

import { loadCartItems } from "../../store/slices/cartSlice";

import { Header, Footer, Cart } from "../";

const Layout = () => {
  const dispatch = useDispatch();

  if (localStorage.getItem("cartItems")) {
    dispatch(loadCartItems());
  }

  return (
    <Fragment>
      <Header />
      <Cart />
      <Fragment>
        <Routers />
      </Fragment>
      <Footer />
    </Fragment>
  );
};

export default Layout;
