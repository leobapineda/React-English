import React from "react";
//stylesheet
import "../stylesheet/Card.css";

export default function Card({
  card: { id, title, description, price, coverImg, stats, location, openSpots },
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card__container">
      {(openSpots === 0 || location === "Online") && (
        <div className="card__badge">{badgeText}</div>
      )}
      <img className="card__img" src={coverImg} alt={"coverImg"} />
      <div className="card__rating">
        <img
          className="card__star"
          src={require("../images/star.png")}
          alt={"star img"}
        />
        <span>{stats.rating}</span>
        <span className="card__card__rating--gray">
          {" "}
          {`(${stats.reviewCount})`} - {location}
        </span>
        <div className="card__text">{title}</div>
        <div className="card__price">
          <strong>From {price}</strong> / person
        </div>
      </div>
    </div>
  );
}
