import React from "react";
import { Route, Link } from "react-router-dom";
//style
import "./Header.scss";
import logo from "../../img/tree-solid.svg";
import btc from "../../img/btc-logo.png";
import eth from "../../img/eth-logo.png";
import americanExpress from "../../img/american-express.png";
import discover from "../../img/discover.png";
import mastercard from "../../img/mastercard.png";
import visa from "../../img/visa.png";
// components
import SearchBox from "../searchBox/SearchBox";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="ecotreecare-logo" className="logo" />
      </Link>
      {/* <form action="#" className="search">
        <input
          className="search-input"
          placeholder="Search trees"
          type="text"
        />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </form> */}
      <Route render={({ history }) => <SearchBox history={history} />} />
      <div className="credit-cards">
        <img
          src={americanExpress}
          alt="american-express.png"
          id="american-express"
        />
        <img src={discover} alt="discover.png" id="discover" />
        <img src={mastercard} alt="mastercard.png" id="mastercard" />
        <img src={visa} alt="visa.png" id="visa" />
      </div>
      <div className="btc-eth">
        <img src={btc} alt="btc-logo" id="btc" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={eth} alt="eth-logo" id="eth" />
      </div>
      <div className="subscribe">
        <p>
          Questions? <br />
          Contact us today!
          <br /> (530) 206-7681{" "}
        </p>
      </div>
    </div>
  );
};

export default Header;
