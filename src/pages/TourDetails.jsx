import React, { useEffect } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarsReview from "../components/StarsReview/StarsReview";
import calculateAvgRating from "./../utils/avgRating";
import Booking from "../components/Booking/Booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import TourReviews from "../components/TourReviews/TourReviews";

const TourDetails = () => {
  const { id } = useParams();

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    title,
    city,
    country,
    distance,
    photo,
    desc,
    reviews,
    price,
    numberOfPeople,
    dificulty,
  } = tour;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  console.log(totalRating);

  return (
    <>
      <section>
        <Container className="mt-5">
          {!loading && !error && (
            <Row className="row-container-details">
              <Col lg="8" className=" m-auto">
                <div className="tour-details-img-container">
                  <img src={photo} alt="" />
                </div>
                <div className="tour-title-reviews">
                  <h2>{title}</h2>
                  <div className="detail-tour-reviews">
                    <StarsReview avgRating={avgRating} />
                    <div className="detail-tour-reviews-numbers">
                      <span>
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length} reviews)</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="tour-info">
                  <div className="icons-info col-3">
                    <span>
                      <i className="bi bi-geo-alt"></i>
                      {city}
                    </span>
                    <span>
                      <i className="bi bi-globe-americas"></i>
                      {country}
                    </span>
                    <span>
                      <i className="bi bi-people"></i>Max. {numberOfPeople}
                    </span>
                    <span>
                      <i className="bi bi-broadcast"></i>
                      {distance} km
                    </span>
                    <span>
                      <i className="bi bi-bar-chart"></i>
                      {dificulty}
                    </span>
                    <span className="span-price">€ {price} / person</span>
                  </div>
                  <p>{desc}</p>
                </div>
                <TourReviews />
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
