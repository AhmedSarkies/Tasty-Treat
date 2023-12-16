import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Container, Row, Col } from "reactstrap";

import { CommonSection, Helmet } from "../components";

import "../styles/checkout.css";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [orders, setOrders] = useState([]);
  const { totalAmount } = useSelector((state) => state.cart);
  const sippingCost = 30;
  const tax = 10;
  const totalTax = totalAmount * 0.1;
  const total = totalAmount + sippingCost + totalTax;

  const resetForm = () => {
    setName("");
    setEmail("");
    setAddress("");
    setCity("");
    setCountry("");
    setZipCode("");
    setPhoneNumber("");
    setMessage("");
  };

  const submitPaymentHandler = (e) => {
    e.preventDefault();
    const order = {
      name,
      email,
      address,
      city,
      country,
      zipCode,
      phoneNumber,
      message,
      totalAmount,
      sippingCost,
      tax,
      total,
    };
    setOrders([...orders, order]);
    resetForm();
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col xl="8">
              <h6 className="shipping__address mb-4">Shipping Address</h6>
              <form
                className="form checkout__form w-100 mb-5 mt-0"
                onSubmit={submitPaymentHandler}
              >
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter you name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter you email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter you address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter you city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter you country"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter you zip code"
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter you phone number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter you message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="form__group">
                  <button type="submit" className="addToCart__btn payment__btn">
                    Payment
                  </button>
                </div>
              </form>
            </Col>
            <Col xl="4">
              {/* <h6 className="shipping__address mb-4">Your Order</h6> */}
              <div className="cart__page-checkout checkout__bill mt-0">
                <h6 className="d-flex justify-content-between align-items-center mb-3">
                  Subtotal:{" "}
                  <span className="cart__subtotal">${totalAmount}</span>
                </h6>
                <h6 className="d-flex justify-content-between align-items-center mb-3">
                  Shipping:{" "}
                  <span className="cart__subtotal">${sippingCost}</span>
                </h6>
                <h6 className="d-flex justify-content-between align-items-center mb-3">
                  Tax: <span className="cart__subtotal">{tax}%</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex justify-content-between align-items-center">
                    Total: <span className="cart__subtotal">${total}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
