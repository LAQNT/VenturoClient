import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarsReview from "../components/StarsReview/StarsReview";
import "./tour-card.css";

const TourCard = ({ tour }) => {
  const { id, title, city, address, photo, price, avgRating, reviews } = tour;

  return (
    <Card className="tour-card">
      <div className="img-container">
        <span className="card-featured">Best Deal</span>
        <img src={photo} alt="tour-img" />
      </div>
      <div className="tour-card-body">
        <div className="card-top">
          <div>
            <span className="tour-title">
              <Link to={`/tours/${id}`}>{title}</Link>
            </span>
            <span className="tour-location">
              <i class="bi bi-geo-alt"></i>
              {city}, {address}
            </span>
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
