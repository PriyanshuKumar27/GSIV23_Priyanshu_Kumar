import React from "react";
import "./Search.css";
import { SearchIcon } from "../assets/icons";

const Search = () => {
  return (
    <>
      <SearchIcon />
      <input className="input-text" type="text" placeholder="Search" />
    </>
  );
};

export default Search;
