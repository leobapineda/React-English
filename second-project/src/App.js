import React from "react";
import Navbar from "./components/Navbar";
import Wallpaper from "./components/wallpaper";
import Card from "./components/Card";
import Data from "./components/Data";
import "./App.css";

function App() {
  let dataElement = Data.map((element) => {
    return <Card key={element.id} card={element} />;
  });

  return (
    <div className="main-container">
      <Navbar />
      <Wallpaper />
      <div className="cards-container">{dataElement}</div>
    </div>
  );
}

export default App;
