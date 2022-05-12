import React from "react";
import worldImg from "../icons/globe-solid.svg";

// stylesheet
import "../stylesheet/Header.css";
export default function Header() {
  return (
    <div className="header__container">
      <img className="header__img" src={worldImg} alt="world icon" />
      <span className="header__text">my travel journal</span>
    </div>
  );
}
