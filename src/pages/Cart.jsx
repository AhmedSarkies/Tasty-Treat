import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Col, Container, Row } from "reactstrap";

import { removeItemFromCart } from "../store/slices/cartSlice";

import { CommonSection, Helmet } from "../components";

import "../styles/cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const deleteItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            {cart.length === 0 && (
              <Col lg="12" className="cart__empty">
                <p className="text-center">
                  No items in cart. <Link to="/foods">Foods</Link>
                </p>
              </Col>
            )}
            {cart.length !== 0 && (
              <Col lg="12" className="cart__table">
                <table className="table table-bordered text-center w-100">
                  <thead>
                    <tr className="align-middle">
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <Tr key={item.id} item={item} deleteItem={deleteItem} />
                    ))}
                  </tbody>
                </table>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

// Tr component for table row in cart page
const Tr = ({ item, deleteItem }) => {
  const { id, title, price, quantity, image01 } = item;

  return (
    <tr className="align-middle" key={id}>
      <td>
        <img
          src={image01}
          alt={title}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
      </td>
      <td>
        <Link to={`/foods/${id}`}>{title}</Link>
      </td>
      <td>${price}</td>
      <td>{quantity}px</td>
      <td>
        <i
          className="ri-delete-bin-line addToCart__btn delete__item-btn"
          onClick={() => deleteItem(id)}
        ></i>
      </td>
    </tr>
  );
};

export default Cart;
