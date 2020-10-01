import React from 'react';
// style
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <span>American Arbor Tree Care Professionals<br /> 10500 Subaco Rd Knights Landing, CA 95645 | Phone: (530) 206-7681<br />
        © Copyright 2020 · American Arbor Tree Care Professionals · All rights reserved
      </span>
      
      <div className="social-media">
        <span>Find us on: </span><br />
        <i className="fab fa-yelp">&nbsp;Yelp</i><br />
        <i className="fab fa-facebook">&nbsp;Facebook</i><br />
        <i className="fab fa-pinterest">&nbsp;Pinterest</i><br />
        <i className="fab fa-google">&nbsp;Maps</i>
      </div>
    </div>
  )
}

export default Footer
