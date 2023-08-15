import React from "react";
import "./Header.css";
import Search from "./Search";
import { HomeIcon } from "../assets/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Search />
      <Link to="/">
        <HomeIcon />
      </Link>
    </div>
  );
};

export default Header;
