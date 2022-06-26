import React from "react";
// styles
import "./Review.scss";
import { Card } from "react-bootstrap";
// components
import Rating from "../rating/Rating";

const Reviews = ({ review }) => {
  return (
    <div className="reviews">
      <figure className="review">
        <div className="review-text">{review.text}</div>
        <figcaption className="review-user">
          <Card.Img src={review.image} alt="" className="review-photo" />
          <Rating value={review.rating} />
          <div className="review-user-box">
            <p className="review-user-name">{review.name}</p>
            <p className="review-user-date">{review.date}</p>
          </div>
        </figcaption>
      </figure>
      {/* <button className="btn-inline">
        Show all
        <span>
          <i className="fas fa-arrow-right"></i>
        </span>
      </button> */}
    </div>
  );
};

export default Reviews;
