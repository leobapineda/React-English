import React from "react";
import profilePicture from "../images/perfil.jpg";
// stylesheet
import "../stylesheet/Profile.css";

export default function Perfil() {
  return (
    <div className="profile-container">
      <img className="profile-img" src={profilePicture} alt="" />
      <div className="profile-text">
        <h2 className="profile-name">Leobardo Pineda</h2>
        <p className="profile-job">FrontEnd Developer</p>
        <p className="profile-webPage">
          <a href="">leobardo.com.mx</a>
        </p>
      </div>
    </div>
  );
}
