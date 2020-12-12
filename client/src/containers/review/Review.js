import React from 'react';
// components
import Sidebar from '../../components/sidebar/Sidebar';
// style
import './Review.scss';

const Review = () => {
  return (
    <div className="review">
      <Sidebar />
      <div className="container">
        <form id="form" className="form">
          <h1 className='review-title'>Thank you for leaving a review its helps us tremendously!</h1>
          <br />
          <div className="form-control">
            <label for="name">Name</label>
            <input type="text" id="username" placeholder="Enter name" />
            <small></small>
          </div>
          <div className="form-control">
            <label for="username">Review</label>
            {/* <input type="text" id="username" placeholder="Enter Username" /> */}
            <textarea name="comment" form="usrform" placeholder="Enter text here..."></textarea>
            <small></small>
          </div>
          <button className="review-button">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Review
