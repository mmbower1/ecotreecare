import React from 'react';
// style
import './Footer.scss';
import accredited from '../../img/accredited.png';
import certified from '../../img/certified.png';

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer-credentials">
        <img src={certified} alt="" style={{height: '10rem'}} />
        <img src={accredited} alt="" style={{width: '15rem'}}  />
      </span>
      <span className="footer-writing">American Arbor Tree Care Professionals<br /> 10500 Subaco Rd Knights Landing, CA 95645 <br />Phone: (530) 206-7681<br />
        © Copyright 2020 · American Arbor Tree Care Professionals ·<br /> All Rights Reserved
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
