import { React, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarsReview from "../components/StarsReview/StarsReview";
import "./tour-card.css";
import avgRating from "../utils/avgRating";
import calculateAvgRating from "../utils/avgRating";

const TourCard = ({ tour }) => {
  const { _id, title, city, country, photo, price, reviews, bestDeal } = tour;

  const avgRating = calculateAvgRating(reviews);

  return (
    <Card className="tour-card">
      <div className="img-container">
        {bestDeal ? <span className="card-featured">Best Deal</span> : null}
        <img src={photo} alt="tour-img" />
      </div>
      <div className="tour-card-body">
        <div className="card-top">
          <div>
            <span className="tour-title">
              <Link to={`/tours/${_id}`}>{title}</Link>
            </span>
            <div className="tour-location">
              <span>
                <i className="bi bi-geo-alt"></i>
                {city}
              </span>
              <span>
                <i className="bi bi-globe-americas"></i>
                {country}
              </span>
            </div>
          </div>
          <div className="tour-rating">
            <div className="stars">
              <StarsReview avgRating={avgRating.avgRating} />
            </div>
          </div>
        </div>
        <div className="card-bottom">
          <h5>
            €{price} <span> /person</span>{" "}
          </h5>
          <Button variant="dark">
            <Link className="link-booking" to={`/tours/${_id}`}>
              See more
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;
