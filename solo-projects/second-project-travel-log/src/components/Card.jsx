import React from "react";
import findIcon from "../icons/location-dot-solid.svg";

// stylesheet
import "../stylesheet/Card.css";

export default function Card({
  CardElement: {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  },
}) {
  return (
    <div className="card-container">
      <img className="card__img" src={imageUrl} alt="" />
      <div className="card__info">
        <div className="card__header">
          <img className="card__icon" src={findIcon} alt="" />
          <span className="card__country">{location} </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="card__link"
            href={googleMapsUrl}
          >
            View on Google Maps
          </a>
        </div>
        <div className="card__location">{title}</div>
        <div className="card__date">
          {startDate} - {endDate}
        </div>
        <div className="card__text">{description}</div>
      </div>
    </div>
  );
}
