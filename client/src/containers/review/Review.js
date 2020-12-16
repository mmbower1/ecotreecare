import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// actions
import { setReview } from '../../actions/reviewActions';
// components
import Sidebar from '../../components/sidebar/Sidebar';
// style
import './Review.scss';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const Review = ({ history, location }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const dispatch = useDispatch()
  const reviewList = useSelector((state) => state.reviewReducer)
  const { reviews } = reviewList;
  const redirect = location.search ? location.search.split('=')[1] : '/'
  console.log('reviews: ', reviews);

  const submitHandler = (e) => {
    e.preventDefault()
    if (name === '' || text === '') {
      Swal.fire({
        title: 'Please fill out both fields!',
        customClass: 'swal-font',
        icon: 'warning'        
      })
    } else {
      dispatch(setReview(name, text))
      Swal.fire({
        title: 'Thanks',
        title: 'Your review has been sent!',
        icon: 'success',
        height: '400px',
        width: '400px'
      })
    }
  }

  useEffect(() => {
    if (reviews) {
      history.push(redirect)
    }
  }, [history, reviews, redirect])

  return (
    <div className="review">
      <Sidebar />
      <div className="container">
        <form id="form" className="form" onSubmit={submitHandler}>
          <h1 className='review-title'>Thank you so much for your service!</h1>
          <br />
          <div className="form-control">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <small></small>
          </div>
          <div className="form-control">
            <label for="username">Review</label>
            {/* <input type="text" id="username" placeholder="Enter Username" /> */}
            <textarea 
              name="comment" 
              form="usrform" 
              placeholder="Enter text here..."
              onChange={(e) => setText(e.target.value)}
              value={text}
            >
            </textarea>
            <small></small>
          </div>
          <button className="review-button">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Review
