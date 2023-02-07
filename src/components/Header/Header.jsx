import React from "react";
import logo from "../../assets/images/res-logo.png";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "All Pizzas",
    path: "/pizzas",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>MyPizza</h5>
          </div>

          {/* ___ menu ___ */}
          <div className="navigation">
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : " "
                  }
                >
                  {" "}
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ____ nav right icons ___ */}
          <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart__icon">
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </span>

            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
