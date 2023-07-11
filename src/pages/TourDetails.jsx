import React, { useState, useEffect, useRef, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarsReview from "../components/StarsReview/StarsReview";
import calculateAvgRating from "./../utils/avgRating";
import Booking from "../components/Booking/Booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
import userImg from "../assets/imgs/default_user.jpg";

const TourDetails = () => {
  const { id } = useParams();
  const [tourRating, setTourRating] = useState(null);
  const reviewMsgRef = useRef("");
  const { user } = useContext(AuthContext);

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    title,
    city,
    country,
    distance,
    photo,
    desc,
    price,
    numberOfPeople,
    dificulty,
    reviews,
  } = tour;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in");
      }

      const reviewObj = {
        tourId: id,
        username: user?.username,
        reviewText: reviewText,
        rating: tourRating,
      };
      console.log(reviewObj);

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  console.log(totalRating);
  const options = { day: "numeric", month: "long", year: "numeric" };

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
                        {avgRating === 0
                          ? null
                          : parseFloat(avgRating).toFixed(1)}
                      </span>
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
                      <i className="bi bi-geo-alt"></i> {city}
                    </span>
                    <span>
                      <i className="bi bi-globe-americas"></i> {country}
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
                <div className="tour-reviews">
                  <Row>
                    <div className="post-review">
                      <Form onSubmit={handleSubmit}>
                        <div className="review-input">
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Share your experience:</Form.Label>

                            <div className="rating">
                              <div className="star-post-review">
                                <span onClick={() => setTourRating(1)}>1</span>
                                <i className="bi bi-star-fill" />
                              </div>

                              <div className="star-post-review">
                                <span onClick={() => setTourRating(2)}>2</span>
                                <i className="bi bi-star-fill" />
                              </div>

                              <div className="star-post-review">
                                <span onClick={() => setTourRating(3)}>3</span>
                                <i className="bi bi-star-fill" />
                              </div>

                              <div className="star-post-review">
                                <span onClick={() => setTourRating(4)}>4</span>
                                <i className="bi bi-star-fill" />
                              </div>

                              <div className="star-post-review">
                                <span onClick={() => setTourRating(5)}>5</span>
                                <i className="bi bi-star-fill" />
                              </div>
                            </div>
                            <Form.Control
                              type="text"
                              as="textarea"
                              ref={reviewMsgRef}
                              placeholder="your review here"
                            />
                          </Form.Group>

                          <Button
                            variant="dark"
                            type="submit"
                            className="success py-0"
                            onClick={handleSubmit}
                          >
                            submit review
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Row>

                  <ListGroup className="user-reviews col-6">
                    <h4>
                      Reviews <span>({reviews?.length} reviews)</span>
                    </h4>
                    {reviews?.map((review) => (
                      <div className="review-item" key={review._id}>
                        <div className="user-reviews-top">
                          <img src={userImg} alt="" />
                          <span>{review.username}</span>
                          <StarsReview totalRating={review.tourRating} />
                        </div>

                        <div className="user-reviews-rating-data">
                          <span>
                            {new Date(review.createdAt).toLocaleDateString(
                              "en-US",
                              options
                            )}
                          </span>
                        </div>

                        <p>{review.reviewText}</p>
                      </div>
                    ))}
                  </ListGroup>
                </div>
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
