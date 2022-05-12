import React from "react";
// components
import Profile from "./componenets/Profile";
import Button from "./componenets/Button";
import Description from "./componenets/Description";
import Footer from "./componenets/Footer";
// stylesheets
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Profile />
      <div className="app__button-container">
        <Button />
        <Button />
      </div>
      <Description />
      <Description />
      <Footer />
    </div>
  );
}
