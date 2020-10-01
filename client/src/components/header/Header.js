import React from 'react';
import logo from '../../img/tree-solid.svg';
//style
import './Header.scss';
import americanExpress from '../../img/american-express.png';
import discover from '../../img/discover.png';
import mastercard from '../../img/mastercard.png';
import visa from '../../img/visa.png';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="ecotreecare-logo" className="logo"/>
      <form action="#" className="search">
        <input
          className="search-input"
          placeholder="Search trees"
          type="text"
        />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="credit-cards">
        <img src={americanExpress} alt="american-express.png" />
        <img src={discover} alt="discover.png" />
        <img src={mastercard} alt="mastercard.png" />
        <img src={visa} alt="visa.png" />
      </div>
      <div className="subscribe">
        <p>Questions? <br />Contact us today!<br /> (530) 206-7681 </p>
      </div>
    </div>
  )
}

export default Header
