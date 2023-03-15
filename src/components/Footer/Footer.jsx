import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
          <h5>MyPizza</h5>
          <p>Best Pizzas in town, try it out!</p>
        </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <ListGroupItem className="delivery__time-item border-0 ps-0">
            <span>Friday - Tuesday</span>
            <p>10:00am - 11:00pm</p>
          </ListGroupItem>
          <ListGroupItem className="delivery__time-item border-0 ps-0">
            <span>Wednesday - Thursday</span>
            <p>Off day</p>
          </ListGroupItem>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
