import { React, useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarsReview from "../components/StarsReview/StarsReview";
import calculateAvgRating from "./../utils/avgRating";
import Booking from "../components/Booking/Booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const TourDetails = () => {
  const { id } = useParams();
  const [tourRaiting, setTourRaiting] = useState(null);
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
    featured,
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
        username: user?.username,
        reviewText,
        rating: tourRaiting,
      };

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
      // alert("review submited");
    } catch (error) {
      alert(error.message);
    }
  };

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };

  return (
    <>
      <section>
        <Container className="mt-5">
          {!loading && !error && (
            <Row>
              <Col lg="8" className=" m-auto">
                <div className="tour-details-img-container">
                  <img src={photo} alt="" />
                </div>
                <div className="tour-title-reviews">
                  <h2>{title}</h2>
                  <div>
                    <StarsReview props={avgRating} />
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>({reviews?.length} reviews)</span>
                    )}
                  </div>
                </div>
                <div className="tour-info">
                  <div>
                    <span> {city}</span>
                    <span> {country}</span>
                    <span>max. {numberOfPeople}</span>
                    <span>€ {price}</span>
                  </div>
                  <p>{desc}</p>
                </div>
                <div className="tour-reviews">
                  <h4>
                    Reviews <span>({reviews?.length} reviews)</span>
                  </h4>
                  <Form onSubmit={handleSubmit}>
                    <div className="raiting">
                      <span onClick={() => setTourRaiting(1)}>
                        1 <i className="bi bi-star-fill" />
                      </span>
                      <span onClick={() => setTourRaiting(2)}>
                        2 <i className="bi bi-star-fill" />
                      </span>
                      <span onClick={() => setTourRaiting(3)}>
                        3 <i className="bi bi-star-fill" />
                      </span>
                      <span onClick={() => setTourRaiting(4)}>
                        4 <i className="bi bi-star-fill" />
                      </span>
                      <span onClick={() => setTourRaiting(5)}>
                        5 <i className="bi bi-star-fill" />
                      </span>
                    </div>
                    <div className="review-input">
                      <input type="text" placeholder="share your experience" />
                      <Button
                        variant="success"
                        type="submit"
                        ref={reviewMsgRef}
                        className="col-2 mx-2 success p-0"
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>

                  <ListGroup className="user-reviews">
                    {reviews?.map((review) => (
                      <div className="review-item">
                        <img
                          src="C:\Users\laura\Desktop\Epicode\M7\Capstone Project\Venturo\client\src\assets\imgs\user-icon.jpg"
                          alt=""
                        />
                        <div>
                          <div>
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {new Date("01-01-2023").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span></span>
                          </div>
                          <h6>{review.reviewtext}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </Col>
              <Col lg="4" className="mt-md-5">
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
