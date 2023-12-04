import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import {
  Helmet,
  Category,
  ProductCard,
  TestimonialSlider,
} from "../components";

import heroImg from "../assets/images/hero.png";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import "../styles/home.css";

const featureData = [
  {
    id: 1,
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Order food from favorite restaurant near you. Choose from more than 150+ variety of dishes.",
  },
  {
    id: 2,
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Order food from favorite restaurant near you. Choose from more than 150+ variety of dishes.",
  },
  {
    id: 3,
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Order food from favorite restaurant near you. Choose from more than 150+ variety of dishes.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizzaProducts = products.filter(
      (product) => product.category === "Pizza"
    );
    const hotPizzaProducts = filteredPizzaProducts.slice(0, 4);
    setHotPizza(hotPizzaProducts);
  }, []);

  useEffect(() => {
    if (category === "All") {
      setAllProducts(products);
    }
    if (category === "Pizza") {
      const pizzaProducts = products.filter(
        (product) => product.category === "Pizza"
      );
      setAllProducts(pizzaProducts);
    }
    if (category === "Burger") {
      const burgerProducts = products.filter(
        (product) => product.category === "Burger"
      );
      setAllProducts(burgerProducts);
    }
    if (category === "Bread") {
      const beardProducts = products.filter(
        (product) => product.category === "Bread"
      );
      setAllProducts(beardProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="hero__title mb-4">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Order food from favorite restaurant near you. Choose from more
                  than 150+ variety of dishes.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex justify-content-between align-items-center">
                    Order Now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button
                    className="all__foods-btn"
                    onClick={() => navigate("/foods")}
                  >
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="Hero" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="category__section pt-0">
        <Category />
      </section>
      <section className="service__section">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                We will <span>take care </span>
              </h2>
              <p className="feature__text mb-1 mt-4">
                Order food from favorite restaurant near you. Choose from more
                than 150+ variety of dishes.
              </p>
              <p className="feature__text">
                Order food from favorite restaurant near you. Choose from more
                than 150+ variety of dishes.
              </p>
            </Col>
            {featureData.map((item) => (
              <Col lg="4" md="6" sm="6" key={item.id} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <div className="feature__img">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-25 mb-3"
                    />
                  </div>
                  <h5 className="feature__title fw-bold mb-3">{item.title}</h5>
                  <p className="feature__text">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex justify-content-center align-items-center gap-4 mt-4">
                <button
                  className={`category__btn ${
                    category === "All" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("All")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Burger" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("Burger")}
                >
                  <img src={foodCategoryImg01} alt="" /> Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Pizza" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("Pizza")}
                >
                  <img src={foodCategoryImg02} alt="" /> Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Bread" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("Bread")}
                >
                  <img src={foodCategoryImg03} alt="" /> Bread
                </button>
              </div>
            </Col>
            {allProducts?.map((product) => (
              <Col lg="3" md="4" key={product.id} className="mt-5">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why__choose__us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="why__img">
                <img src={whyImg} alt="Why Tasty Treat" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty__treat">
                <h2 className="tasty__treat__title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat__text">
                  Order food from favorite restaurant near you. Choose from more
                  than 150+ variety of dishes.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="bg-transparent border-0 ps-0">
                    <p className="choose__us__title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Fresh and
                      tasty foods
                    </p>
                    <p className="choose__us__desc">
                      Order food from favorite restaurant near you. Choose from
                      more than 150+ variety of dishes.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent border-0 ps-0">
                    <p className="choose__us__title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Quality
                      support
                    </p>
                    <p className="choose__us__desc">
                      Order food from favorite restaurant near you. Choose from
                      more than 150+ variety of dishes.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent border-0 ps-0">
                    <p className="choose__us__title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Order from any
                      location
                    </p>
                    <p className="choose__us__desc">
                      Order food from favorite restaurant near you. Choose from
                      more than 150+ variety of dishes.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((product) => (
              <Col lg="3" md="4" key={product.id} className="mt-5">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Order food from favorite restaurant near you. Choose from more
                  than 150+ variety of dishes.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="Testimonial Img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
