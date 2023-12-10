import React from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addToCart } from "../../../store/slices/cartSlice";

import "./product-card.css";

const ProductCard = ({ product }) => {
  const { id, title, price, image01 } = product;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt={title} className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addToCart__btn" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
