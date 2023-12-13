import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Container, Row, Col } from "reactstrap";

import { Helmet, CommonSection, ProductCard } from "../components";

import { addToCart } from "../store/slices/cartSlice";

import products from "../assets/fake-data/products";

import "../styles/food-details.css";

const FoodDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("description");
  const [activePreviewImg, setActivePreviewImg] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [userComment, setUserComment] = useState("");
  const product = products.find((product) => product.id === id);
  const { title, image01, image02, image03, price, category, desc } = product;
  const [previewImg, setPreviewImg] = useState(image01);

  const relatedProducts = products.filter(
    (product) => product.category === category
  );

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        ...product,
        quantity,
      })
    );
    setQuantity(1);
  };

  useEffect(() => {
    setPreviewImg(image01);
    setActivePreviewImg(1);
  }, [product, image01]);

  return (
    <Helmet title={`Product Details - ${title}`}>
      <CommonSection title={title} />
      <section>
        <Container>
          <Row className="food__details-row">
            <Col
              lg="2"
              className="d-flex justify-content-center align-items-center"
            >
              <div className="product__images w-50">
                <div
                  className={`img__item mb-2 ${
                    activePreviewImg === 1 ? "active-preview-img" : ""
                  }`}
                  onClick={() => {
                    setPreviewImg(image01);
                    setActivePreviewImg(1);
                  }}
                >
                  <img src={image01} alt={title} className="w-100 p-2" />
                </div>
                <div
                  className={`img__item mb-2 ${
                    activePreviewImg === 2 ? "active-preview-img" : ""
                  }`}
                  onClick={() => {
                    setPreviewImg(image02);
                    setActivePreviewImg(2);
                  }}
                >
                  <img src={image02} alt={title} className="w-100 p-2" />
                </div>
                <div
                  className={`img__item mb-2 ${
                    activePreviewImg === 3 ? "active-preview-img" : ""
                  }`}
                  onClick={() => {
                    setPreviewImg(image03);
                    setActivePreviewImg(3);
                  }}
                >
                  <img src={image03} alt={title} className="w-100 p-2" />
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              className="d-flex justify-content-center align-items-center"
            >
              <div className="product__main-img">
                <img src={previewImg} alt={title} className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <span className="product__price">
                  Price: <span>${price}</span>
                </span>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <div className="add__product__group">
                  <div className="increase__decrease-btn d-flex align-items-center justify-content-between">
                    <span
                      className="decrease__btn"
                      style={{
                        color: quantity === 1 ? "#ccc" : "#212245",
                        cursor: quantity === 1 ? "not-allowed" : "pointer",
                      }}
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : 1)
                      }
                    >
                      <i className="ri-subtract-line"></i>
                    </span>
                    <span className="quantity">{quantity}</span>
                    <span
                      className="increase__btn"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <i className="ri-add-line"></i>
                    </span>
                  </div>
                  <button className="addToCart__btn" onClick={addToCartHandler}>
                    Add to cart
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-3">
                <h6
                  className={`${tab === "description" ? "active" : ""}`}
                  onClick={() => setTab("description")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "review" ? "active" : ""}`}
                  onClick={() => setTab("review")}
                >
                  Review
                </h6>
              </div>
              {tab === "description" && (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              )}
              {tab === "review" && (
                <div className="tab__content">
                  <div className="review mb-3">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">John.Doe@mail.com</p>
                    <p className="user__comment">great product</p>
                  </div>
                  <div className="review mb-3">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">John.Doe@mail.com</p>
                    <p className="user__comment">great product</p>
                  </div>
                  <div className="review mb-3">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">John.Doe@mail.com</p>
                    <p className="user__comment">great product</p>
                  </div>
                  <div className="tab__form">
                    <form className="form">
                      <div className="form__group">
                        <input
                          type="text"
                          placeholder="Enter your name"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                      <div className="form__group">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                        />
                      </div>
                      <div className="form__group rating__group d-flex justify-content-center align-items-center">
                        {[...Array(5)].map((_, idx) => (
                          <span
                            onClick={() =>
                              rating === idx + 1
                                ? setRating(idx)
                                : setRating(idx + 1)
                            }
                            key={idx}
                          >
                            {idx + 1}
                            <i
                              className={`${
                                idx + 1 <= rating
                                  ? "ri-star-s-fill"
                                  : "ri-star-line"
                              }`}
                            ></i>
                          </span>
                        ))}
                      </div>
                      <div className="form__group">
                        <textarea
                          name="review"
                          id="review"
                          cols="30"
                          rows="3"
                          placeholder="Write your review"
                          value={userComment}
                          onChange={(e) => setUserComment(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="form__group">
                        <button className="addToCart__btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12">
              <div className="related__products">
                <h2 className="related__products-title mb-5 mt-4">
                  You May Also Like
                </h2>
                <Row>
                  {relatedProducts?.slice(0, 6)?.map((product) => (
                    <Col lg="4" md="6" sm="12" key={product.id} className="g-4">
                      <ProductCard product={product} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
