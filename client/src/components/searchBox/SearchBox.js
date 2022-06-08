import React, { useState } from "react";
import "./SearchBox.scss";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form onSubmit={submitHandler} inline>
      <input
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Trees..."
        className="search-input"
      ></input>
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBox;
