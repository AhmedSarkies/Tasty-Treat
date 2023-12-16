import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import { Helmet, CommonSection } from "../components";

import "../styles/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const submitRegisterHandler = (e) => {
    e.preventDefault();
    console.log("Register form submitted");
    resetForm();
  };

  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col xxl="8" xl="10" md="12" className="m-auto text-center">
              <form
                className="form register__form checkout__form"
                onSubmit={submitRegisterHandler}
              >
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="addToCart__btn payment__btn">
                  Register
                </button>
                <div className="form__group mt-3 mb-0">
                  <p className="mb-0">
                    Already have an account?{" "}
                    <span className="d-inline">
                      <Link to="/login">Login</Link>
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

export default Register;
