import React from 'react';
// components
import './Sidebar.scss';
// style
import accredited from '../../img/accredited.png';
import certified from '../../img/certified.png';

const Sidebar = () => {
  return (
    <div>
      <nav className='sidebar'>
        <ul className='side-nav'>
          <li className='side-nav-item side-nav-item--active'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-home fa-3x icon"></i>
            <a href='#' className='side-nav-link'>
              home
            </a>
          </li>
          <li className='side-nav-item'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-address-card fa-3x icon"></i>
            <a href='#' className='side-nav-link'>
              about us
            </a>
          </li>
          <li className='side-nav-item'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-tree fa-3x icon"></i>
            <a href='#' className='side-nav-link'>
              services
            </a>
          </li>
          <li className='side-nav-item'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-images fa-3x icon"></i>
            <a href='#' className='side-nav-link'>
              gallery
            </a>
          </li>
          <li className='side-nav-item'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-thumbs-up fa-3x icon"></i>
            <a href='#' className='side-nav-link'>
              leave a review
            </a>
          </li>
        </ul>
        <img src={certified} alt="certified.png" id="certified" />
        <img src={accredited} alt="accredited.png" id="accredited" />
        <p>BBB Rating A+ as of 9/30/2020. <a href="#">Click for profile</a></p>
        <span className="legal">
          &copy; 2020 American Arbor Tree Care Professionals - All Rights Reserved
        </span>
      </nav>
    </div>
  )
}

export default Sidebar
