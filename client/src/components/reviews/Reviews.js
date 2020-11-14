import React from 'react';
// styles
import './Reviews.scss';
import mattb from '../../img/2.jpg'

const Reviews = () => {
  return (
    <div className="reviews">
      <figure className="review">
        <blockquote className="review-text">
          The work was great. Trees are all shined and cleaned up, no more dangerous hazards, and yard looks great. I highly recommend.
        </blockquote>
        <figcaption className="review-user">
          <img src="" alt="" className="review-photo" />
          <div className="review-user-box">
            <p className="review-user-name">Matt Bower</p>
            <p className="review-user-date">11/21/2020</p>
          </div>
        </figcaption>
      </figure>
      <figure className="review">
        <blockquote className="review-text">
          The work was great. 
        </blockquote>
        <figcaption className="review-user">
          <img src={mattb} alt="" className="review-photo" />
          <div className="review-user-box">
            <p className="review-user-name">Matt Bower</p>
            <p className="review-user-date">11/21/2020</p>
          </div>
        </figcaption>
      </figure>
      <figure className="review">
        <blockquote className="review-text">
          The work was great. I highly recommend to anybody in the area!
        </blockquote>
        <figcaption className="review-user">
          <img src="" alt="" className="review-photo" />
          <div className="review-user-box">
            <p className="review-user-name">Matt Bower</p>
            <p className="review-user-date">11/21/2020</p>
          </div>
        </figcaption>
      </figure>
      <button className="btn-inline">Show all
        <span><i className="fas fa-arrow-right"></i></span>
      </button>
    </div>
  )
}

export default Reviews
