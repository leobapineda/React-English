import "../stylesheet/Card.css";

function Card({ logo }) {
  return (
    <div className="card-container">
      <header>
        <p className="header__img-container">
          <img src={logo} alt="freecodecamp logo" /> <span> ReactFacts</span>
        </p>
        <p>React Course - Project 1</p>
      </header>
      <main>
        <h3>Fun facts about React</h3>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordn Walke</li>
          <li>Has well over 100k stars in GitHub</li>
          <li>Is it maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  );
}

export default Card;
