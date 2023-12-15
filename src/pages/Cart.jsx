import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { Col, Container, Row } from "reactstrap";

import { removeItemFromCart } from "../store/slices/cartSlice";

import { CommonSection, Helmet } from "../components";

import "../styles/cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state) => state.cart);

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
            {cart.length !== 0 && (
              <Col lg="12">
                <div className="cart__page-checkout mt-4">
                  <h6>
                    Subtotal:{" "}
                    <span className="cart__subtotal">${totalAmount}</span>
                  </h6>
                  <p>Taxes and shipping calculated at checkout</p>
                  <div className="cart__page-btn">
                    <button
                      onClick={() => navigate("/foods")}
                      className="addToCart__btn me-3"
                    >
                      Continue Shopping
                    </button>
                    <button
                      onClick={() => navigate("/checkout")}
                      className="addToCart__btn"
                    >
                      Proceed to checkout
                    </button>
                  </div>
                </div>
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
