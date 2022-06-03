import { React, useEffect, useState } from "react";
// import memeData from "./memeData";
// atylesheet
import "../stylesheet/Meme.css";

export default function Meme() {
  /**
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  // first useState
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/28j0te.jpg",
  });

  // second useState
  const [allMemeImages, setallMemeImages] = useState([]);
  // third useState
  const [memeText, setMemeText] = useState({ topText: "", bottomText: "" });

  const randomNumber = Math.floor(Math.random() * 100);

  const [index, setIndex] = useState(randomNumber)

  function newIndex() {
    const randomNumber = Math.floor(Math.random() * 100);
    setIndex(randomNumber)  
  }

  
  function getMemeImage(e) {
    e.preventDefault();
    newIndex()

    let memeUrl = allMemeImages.replaceAll('"', '');
    console.log(memeUrl);


    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memeUrl,
      };
    });
  }

  function handleMemeText(e) {
    const { name, value } = e.target;
    setMemeText((memeText) => {
      return {
        ...memeText,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((responce) => responce.json())
    // .then((dataApi) => setallMemeImages(JSON.stringify(dataApi.data.memes)));
    // .then((dataApi) => console.log(JSON.stringify(dataApi.data.memes[index].name)));
    .then((dataApi) => setallMemeImages(JSON.stringify(dataApi.data.memes[index].url)));
  }, [index])

    
  return (
    <main className="meme__container">
      <form className="form">
        <input
          className="meme__firstInput"
          type="text"
          placeholder={"Top Text"}
          name="topText"
          value={memeText.topText}
          onChange={handleMemeText}
        />
        <input
          className="meme__secondInput"
          type="text"
          placeholder={"Bottom Text"}
          name="bottomText"
          value={memeText.bottomText}
          onChange={handleMemeText}
        />
        <button className="meme__button" onClick={getMemeImage}>
          Get a new meme 😆
        </button>
      </form>
      <div className="meme__img-container">
        <img className="meme__img" src={meme.randomImage} alt="meme img" />
        <div className="meme-text top">{memeText.topText}</div>
        <div className="meme-text bottom">{memeText.bottomText}</div>
      </div>
    </main>
  );
}
