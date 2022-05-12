import { React, useState } from "react";
import memeData from "./memeData";
// atylesheet
import "../stylesheet/Meme.css";

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/28j0te.jpg',
  });

  const [allMemeImages, setallMemeImages] = useState(memeData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    let memeUrl = memesArray[randomNumber].url
    
    setMeme((prevMeme) => {
      return(
        {
          ...prevMeme,
          randomImage : memeUrl
        }
      )
    })
}

  return (
    <main className="meme__container">
      <div className="form">
        <input
          className="meme__firstInput"
          type="text"
          placeholder={'Top Text'}
        />
        <input
          className="meme__secondInput"
          type="text"
          placeholder={'Bottom Text'}
        />
        <button className="meme__button" onClick={getMemeImage}>
          Get a new meme 1 😆
        </button>
      </div>
      <div className="meme__img-container">
        <img className="meme__img" src={meme.randomImage} alt="meme img" />
      </div>
    </main>
  );
}
