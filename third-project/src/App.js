import { React, useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import memeFace from "./images/Troll Face.png";
import startEmpty from "./images/icon/star-regular.svg";
import startSolid from "./images/icon/star-solid.svg";

import "./App.css";

function App() {
 

    return (


      <div className="App">
        <Header />
        <Meme />
      </div>
    );


  // const [contact, setContact] = useState({
  //   firstName: "Leo",
  //   lastName: "Pineda",
  //   phone: "69",
  //   email: "lol@example.com",
  //   isFavorite: true,
  // });

  // const { firstName, lastName, phone, email, isFavorite } = contact;

  // let icon = contact.isFavorite ? startSolid : startEmpty;


  // function toggleFavorite() {}

  // return (
  //   <main>
  //     <article className="card">
  //       <img src={memeFace} className="card--image" />
  //       <div className="card--info">
  //         <img src={icon} className="card--favorite" onClick={toggleFavorite} />
  //         <h2 className="card--name">
  //           {firstName} {lastName}
  //         </h2>
  //         <p className="card--contact">{phone}</p>
  //         <p className="card--contact">{email}</p>
  //       </div>
  //     </article>
  //   </main>
  // );
}

export default App;
