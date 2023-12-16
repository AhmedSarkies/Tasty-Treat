import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";

import "./footer.css";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <Container>
        <Row className="g-3">
          <Col xl="3" lg="4" md="6" sm="12">
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" onClick={() => navigate("/home")} />
              <h5 className="footer__title" onClick={() => navigate("/home")}>
                Tasty Treat
              </h5>
              <p>
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consectetur adip
              </p>
            </div>
          </Col>
          <Col xl="3" lg="4" md="6" sm="12">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Monday - Friday</span>
                <p>8:00am - 11:00am</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Saturday - Sunday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xl="3" lg="4" md="6" sm="12">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Location: Cairo</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: +201023456789</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: Example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xl="3" lg="12">
            <h5>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              &copy; 2024 All Rights Reserved. Developed By Tasty Treat
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__icons">
              <p className="m-0">Follow: </p>
              <span>
                <Link
                  to="https://www.linkedin.com/in/AhmedSarkies"
                  target="_blank"
                >
                  <i className="ri-linkedin-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/AhmedSarkies" target="_blank">
                  <i className="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link
                  to="https://www.facebook.com/AhmedSarkes11/"
                  target="_blank"
                >
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://twitter.com/AhmedSarkes11" target="_blank">
                  <i className="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link
                  to="https://www.instagram.com/AhmedSarkes11/"
                  target="_blank"
                >
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
