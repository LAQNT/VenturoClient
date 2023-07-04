import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarsReview from "../components/StarsReview/StarsReview";
import "./tour-card.css";

const TourCard = ({ tour }) => {
  const {
    id,
    title,
    city,
    address,
    photo,
    price,
    avgRating,
    reviews,
    featured,
  } = tour;

  return (
    <Card className="tour-card">
      <div className="img-container">
        {featured === true ? (
          <span className="card-featured">Best Deal</span>
        ) : null}
        <img src={photo} alt="tour-img" />
      </div>
      <div className="tour-card-body">
        <div className="card-top">
          <div>
            <span className="tour-title">
              <Link to={`/tours/${id}`}>{title}</Link>
            </span>
            <div className="tour-location">
              <span>
                <i class="bi bi-geo-alt"></i>
                {city}
              </span>
              <span>
                <i class="bi bi-globe-americas"></i>
                {address}
              </span>
            </div>
          </div>
          <div className="tour-rating">
            <div className="stars">
              <StarsReview props={avgRating} />
            </div>
            <span>({reviews.length} reviews)</span>
          </div>
        </div>
        <div className="card-bottom">
          <h5>
            €{price} <span> /person</span>{" "}
          </h5>
          <Button variant="dark">
            <Link className="link-booking" to={`/tours/${id}`}>
              See more
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;
