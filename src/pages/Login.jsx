import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import { Helmet, CommonSection } from "../components";

import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    resetForm();
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col xxl="8" xl="10" md="12" className="m-auto text-center">
              <form
                className="form login__form checkout__form"
                onSubmit={submitLoginHandler}
              >
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form__group mb-3 text-start">
                  <span>
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </span>
                </div>
                <button type="submit" className="addToCart__btn payment__btn">
                  Login
                </button>
                <div className="form__group mt-3 mb-0">
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <span className="d-inline">
                      <Link to="/register">Register</Link>
                    </span>
                  </p>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
