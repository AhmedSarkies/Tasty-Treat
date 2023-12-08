import React, { useEffect, useRef } from "react";

import { NavLink, Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Container } from "reactstrap";

import logo from "../../assets/images/res-logo.png";

import "./header.css";

const navLinks = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const openCart = () => {
    document.querySelector(".cart__container").classList.toggle("open");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between w-100">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
          {/* =========Menu========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <span className="close__menu__btn">+</span>
            <div className="menu">
              {navLinks.map(({ display, path }, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* =========Nav Right Icons========== */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={openCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">
                {
                  cartItems?.cart?.length > 0
                    ? cartItems?.cart?.length
                    : totalQuantity
                }
              </span>
            </span>
            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
