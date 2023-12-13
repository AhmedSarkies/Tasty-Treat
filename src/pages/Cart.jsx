import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Col, Container, Row } from "reactstrap";

import { removeItemFromCart } from "../store/slices/cartSlice";

import { CommonSection, Helmet } from "../components";

import "../styles/cart.css";

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
                <p className="text-center">Your cart is empty</p>
              </Col>
            )}
            {cart.length !== 0 && (
              <Col lg="12" className="cart__table">
                <table className="table w-100">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={item.image01}
                            alt={item.title}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteItem(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
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

export default Cart;
