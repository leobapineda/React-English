import wallpaper from "../images/airbnb-wallpaper.png";

// stylesheet
import "../stylesheet/Wallpaper.css";

export default function Wallpaper() {
  return (
    <div className="wallpaper-container">
      <img className="wallpaper-img" src={wallpaper} alt="airbnb wallpaper" />
      <h1>Online Experiences</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro atque
        reprehenderit, iure quisquam molestias dolore esse possimus quibusdam
        consectetur delectus magnam. Voluptatibus dolores voluptas doloremque
        ducimus. Reiciendis, atque suscipit! Doloribus.
      </p>
    </div>
  );
}
