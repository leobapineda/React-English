import React from "react";
import memeLogo from '../images/Troll Face.png'

// stylesheet
import "../stylesheet/Header.css";

export default function Header() {
  return(
    <header className="header__container">
    <div className="header__logo" >
        <img className="header__img" src={memeLogo} alt="meme logo" />
        <h2 className="header__name" >MemeGenerator</h2>
    </div>
    <h5 className="header__text" >React Project-3</h5>
</header>
  )
}
