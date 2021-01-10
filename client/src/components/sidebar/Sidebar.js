import React from 'react';
import { Link } from "react-router-dom";
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
          <i className="fas fa-home fa-3x icon"></i>
            <Link to='/' className='side-nav-link'>
              home
            </Link>
          </li>
          <li className='side-nav-item'>
          <i className="fas fa-tree fa-3x icon"></i>
            <Link to='/services' className='side-nav-link'>
              services
            </Link>
          </li>
          <li className='side-nav-item'>
          <i className="fas fa-images fa-3x icon"></i>
            <Link to='/gallery' className='side-nav-link'>
              gallery
            </Link>
          </li>
          <li className='side-nav-item'>
          <i className="fas fa-thumbs-up fa-3x icon"></i>
            <Link to='/review' className='side-nav-link'>
              review
            </Link>
          </li>
          <li className='side-nav-item'>
          <i className="fas fa-address-card fa-3x icon"></i>
            <Link to='/about-us' className='side-nav-link'>
              about
            </Link>
          </li>
        </ul>
        <div className="sidebar-images">
          <img src={certified} alt="certified.png" id="certified" />
          <img src={accredited} alt="accredited.png" id="accredited" />
        </div>
        <div className="sidebar-content">
          <p>BBB Rating A+ as of 9/30/2020. <a href="#">Click for profile</a></p>
          <span className="legal">
            Contractors License #672627<br /><br />
            Business Hours: 24/7
            by appointment. 
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
