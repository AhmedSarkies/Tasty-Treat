import React from "react";

import { ListGroupItem } from "reactstrap";

import "./cart-item.css";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  deleteFromCart,
  addToCart,
} from "../../../../store/slices/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        ...cartItem,
        quantity: 1,
        totalPrice: cartItem.price,
      })
    );
  };

  const removeItemFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const deleteFromCartHandler = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <ListGroupItem className="cart__item border-0">
      <div className="cart__item-info d-flex gap-2">
        <img
          src={cartItem.image01}
          alt={cartItem.title}
          className="product-img"
        />
        <div className="cart__product-info w-100 d-flex align-items-center justify-content-between gap-4">
          <div>
            <h6 className="cart__product-title">{cartItem.title}</h6>
            <p className="cart__product-price d-flex align-items-center gap-5">
              {cartItem.quantity}x <span>${cartItem.price}</span>
            </p>
            <div className="increase__decrease-btn d-flex align-items-center justify-content-between">
              <span className="increase__btn" onClick={addToCartHandler}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{cartItem.quantity}</span>
              <span
                className="decrease__btn"
                onClick={() => deleteFromCartHandler(cartItem.id)}
              >
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn">
            <i
              className="ri-delete-bin-line"
              onClick={() => removeItemFromCartHandler(cartItem.id)}
            ></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
