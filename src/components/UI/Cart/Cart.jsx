import React, { useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { ListGroup } from "reactstrap";

import { CartItem } from "../../";

import "./cart.css";
import { clearCart } from "../../../store/slices/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const cartRef = useRef();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  const openCart = () => {
    if (cartRef.current.className === "cart__container open") {
      cartRef.current.className = "cart__container";
    } else {
      cartRef.current.className = "cart__container open";
    }
  };

  const closeCart = () => {
    cartRef.current.className = "cart__container";
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart__container" ref={cartRef}>
      <div className="cart__overlay" onClick={closeCart}></div>
      <ListGroup className="cart">
        <div className="cart__close">
          <span className="cart__close-close">
            <i className="ri-close-fill" onClick={openCart}></i>
          </span>
          <span className="cart__close-clear">
            <i className="ri-delete-bin-line" onClick={clearCartHandler}></i>
          </span>
        </div>
        <div className="cart__item-list">
          {cartItems?.cart?.length > 0 ? (
            cartItems?.cart?.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <p className="text-center">No items in cart</p>
          )}
        </div>
        <div className="cart__bottom d-flex justify-content-between align-items-center">
          <h6>
            Subtotal:{" "}
            <span>${cartItems?.totalAmount || cart?.totalAmount}</span>
          </h6>
          <button
            className="checkout"
            onClick={() => {
              navigate("/checkout");
              closeCart();
            }}
          >
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Cart;
