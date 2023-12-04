import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "./testimonial-slider.css";
import { Fragment } from "react";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="slider">
      <Fragment>
        <p className="review__text">
          "Order arrived on time and in good condition. I am very pleased with
          the quality of the product. I will definitely order from this company
          again."
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" />
          <h6>Eugene Jones</h6>
        </div>
      </Fragment>
      <Fragment>
        <p className="review__text">
          "Order arrived on time and in good condition. I am very pleased with
          the quality of the product. I will definitely order from this company
          again."
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" />
          <h6>Fia Baxter</h6>
        </div>
      </Fragment>
      <Fragment>
        <p className="review__text">
          "Order arrived on time and in good condition. I am very pleased with
          the quality of the product. I will definitely order from this company
          again."
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" />
          <h6>Adam Desiato</h6>
        </div>
      </Fragment>
    </Slider>
  );
};

export default TestimonialSlider;
