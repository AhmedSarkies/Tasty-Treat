import React, { useState } from "react";

import { Col, Container, Row } from "reactstrap";

import { CommonSection, Helmet } from "../components";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const sendEmailHandler = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <Helmet title="Contact Us">
      <CommonSection title="Contact Us" />
      <section>
        <Container>
          <Row>
            <Col xxl="8" xl="10" md="12" className="m-auto text-center">
              <form
                className="form login__form checkout__form"
                onSubmit={sendEmailHandler}
              >
                <div className="form__group mb-3">
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Subject *"
                    required
                    value={subject}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="3"
                    placeholder="Message *"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  value="Send"
                  className="addToCart__btn payment__btn"
                >
                  Contact Us
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
