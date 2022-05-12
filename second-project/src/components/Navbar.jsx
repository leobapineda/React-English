import React from "react";
import airbnbLogo from "../images/airbnb.png";
// stylesheet
import "../stylesheet/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <img src={airbnbLogo} alt="bnb logo" />
    </div>
  );
}
