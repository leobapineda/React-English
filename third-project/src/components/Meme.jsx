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
  const [memeText, setMemeText] = useState({topText:'', bottomText:''});

  function getMemeImage(e) {
    e.preventDefault()
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

  function handleMemeText(e) {
    const {name, value} = e.target
    setMemeText(memeText => {
      return(
        {
          ...memeText,
          [name] : value
        }
      )
    })
  }

  return (
    <main className="meme__container">
      <form className="form">
        <input
          className="meme__firstInput"
          type="text"
          placeholder={'Top Text'}
          name='topText'
          value={memeText.topText}
          onChange={handleMemeText}
        />
        <input
          className="meme__secondInput"
          type="text"
          placeholder={'Bottom Text'}
          name='bottomText'
          value={memeText.bottomText}
          onChange={handleMemeText}

        />
        <button className="meme__button" onClick={getMemeImage}>
          Get a new meme 😆
        </button>
      </form>
      <div className="meme__img-container">
          <img className="meme__img" src={meme.randomImage} alt="meme img" />
          <div className="meme-text top" >{memeText.topText}</div>
          <div className="meme-text bottom" >{memeText.bottomText}</div>
        </div>
    </main>
  );
}
