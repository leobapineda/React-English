import React from "react";
import logo from "../images/logo-github.svg";
import "../stylesheet/Button.css";

export default function Button() {
  return (
    // <div className="button-container">
    <>
      <button className="button">
        <div className="button-img">
          <img src={logo} alt="" />
        </div>
        <span className="button__text">GitHub</span>
      </button>
    </>
    // </div>
  );
}
