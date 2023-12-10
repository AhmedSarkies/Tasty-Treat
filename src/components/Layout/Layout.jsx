import React, { Fragment } from "react";

import Routers from "../../routes/Routers";

import { useDispatch } from "react-redux";

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
