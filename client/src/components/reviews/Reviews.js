import React from "react";
// styles
import "./Reviews.scss";
import mattb2 from "../../img/mattb2.jpg";
import marlene from "../../img/marlene.jpg";
import tina from "../../img/tina.jpg";

const Reviews = () => {
  return (
    <div className="reviews">
      <figure className="review">
        <blockquote className="review-text">
          Trees are all shined and cleaned up, no more dangerous hazards, and
          yard looks great. Five stars.
        </blockquote>
        <figcaption className="review-user">
          <img src={tina} alt="" className="review-photo" />
          <div className="review-user-box">
            <p className="review-user-name">Tina Dolan</p>
            <p className="review-user-date">1/21/2019</p>
          </div>
        </figcaption>
      </figure>
      <figure className="review">
        <blockquote className="review-text">
          The work was great - exactly how I wanted my trees to look.
        </blockquote>
        <figcaption className="review-user">
          <img src={mattb2} alt="" className="review-photo" />
          <div className="review-user-box">
            <p className="review-user-name">Davis Adams</p>
            <p className="review-user-date">11/21/2020</p>
          </div>
        </figcaption>
      </figure>
      <figure className="review">
        <blockquote className="review-text">
          Healthy trees, no more hazards for my kids playing in the driveway. I
          highly recommend to anybody in the area.
        </blockquote>
        <figcaption className="review-user">
          <img src={marlene} alt="" className="review-photo" />
          <div className="review-user-box">
            <p className="review-user-name">Marlene Chapman</p>
            <p className="review-user-date">8/14/2020</p>
          </div>
        </figcaption>
      </figure>
      <button className="btn-inline">
        Show all
        <span>
          <i className="fas fa-arrow-right"></i>
        </span>
      </button>
    </div>
  );
};

export default Reviews;
