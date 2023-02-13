import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>MyPizza</h5>
              <p>Best Pizzas in town, try it out!</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delifery Time</h5>
            <ListGroup>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Tuesday</span>
                <p>10:00am - 11:00 pm</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0  ">
                <span>Wednesday - Thursday</span>
                <p>Off day </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6"></Col>
          <Col lg="3" md="4" sm="6"></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
