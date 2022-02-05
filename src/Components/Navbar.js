import React from "react";
import logo from "../assets/logo.png";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const Click = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={showLinks ? "open" : "close"}>
      <Link to="/">
      <img src={logo} alt="LOGO" />
        </Link>
        
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={Click}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;