import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarsReview from "../components/StarsReview/StarsReview";
import "./tour-card.css";

const TourCard = ({ tour }) => {
  const {
    id,
    title,
    city,
    address,
    distance,
    photo,
    desc,
    price,
    numberOfPeople,
    difficulty,
    avgRating,
    reviews,
    featured,
  } = tour;

  return (
    <div className="tour-card">
      <Card>
        <img src={photo} alt="tour-img" />
        <Card.Body>
          <div className="card-top">
            <div>
              <span>Featured</span>
              <h5 className="tour-title">
                <Link to={`/tours/${id}`}>{title}</Link>
              </h5>
            </div>
          </div>
          <div className="card-body">
            <span className="tour-location">
              <i class="bi bi-geo-alt"></i>
              {city}, {address}
            </span>
            <span className="tour-rating">
              <StarsReview props={avgRating} />
              <span>({reviews.length} reviews)</span>
            </span>
          </div>

          <div className="card-bottom">
            <h5>
              €{price} <span> per person</span>{" "}
            </h5>
            <button className="btn-booking">
              <Link to={`/tours/${id}`}>Book now</Link>
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TourCard;
