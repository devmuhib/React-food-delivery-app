import React from "react";

import "../../../styles/product-card.css";

// import productImg from "../../../assets/images/product_2.1.jpg";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="Pizza" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods(${id})`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">{price} € </span>
          <button className="addTOCART__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
