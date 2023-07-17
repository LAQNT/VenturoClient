import React, { useEffect, useState, useRef, useContext } from "react";
import userImg from "../../assets/imgs/default_user.jpg";
import axios from "axios";
import "../../styles/tour-details.css";
import { Row, Form, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarsReview from "../../components/StarsReview/StarsReview";
import calculateAvgRating from "../../utils/avgRating";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";

function TourReviews() {
  const { id } = useParams();
  const [tourRating, setTourRating] = useState(null);
  const reviewMsgRef = useRef("");
  const { username, token } = useContext(AuthContext);

  const { data: reviews } = useFetch(`${BASE_URL}/review/${id}/reviews`);
  const [allReviews, setAllReviews] = useState(reviews || []);

  useEffect(() => {
    setAllReviews(reviews);
  }, [reviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!username || username === undefined || username === null) {
        alert("Please sign in");
        return;
      }

      const reviewObj = {
        tourId: id,
        username: username,
        reviewText: reviewMsgRef.current.value,
        rating: tourRating,
      };

      const tokenjwt = JSON.parse(localStorage.getItem("user")).token;

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          data: tokenjwt,
        },
        body: JSON.stringify(reviewObj),
        credentials: "include",
      });

      const result = await res.json();

      if (!result.ok) {
        alert(result.message);
        setAllReviews([reviewObj, ...allReviews]);
      } else {
        reviewMsgRef.current.value = "";
        setTourRating(null);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const options = { day: "numeric", month: "long", year: "numeric" };

  return (
    <>
      <div className="tour-reviews">
        <Row>
          <div className="post-review">
            <Form onSubmit={handleSubmit}>
              <div className="review-input">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Share your experience:</Form.Label>

                  <div className="rating">
                    <div className="star-post-review">
                      <span>1</span>
                      <i
                        className="bi bi-star-fill"
                        onClick={() => setTourRating(1)}
                      />
                    </div>

                    <div className="star-post-review">
                      <span>2</span>
                      <i
                        className="bi bi-star-fill"
                        onClick={() => setTourRating(2)}
                      />
                    </div>

                    <div className="star-post-review">
                      <span>3</span>
                      <i
                        className="bi bi-star-fill"
                        onClick={() => setTourRating(3)}
                      />
                    </div>

                    <div className="star-post-review">
                      <span>4</span>
                      <i
                        className="bi bi-star-fill"
                        onClick={() => setTourRating(4)}
                      />
                    </div>

                    <div className="star-post-review">
                      <span>5</span>
                      <i
                        className="bi bi-star-fill"
                        onClick={() => setTourRating(5)}
                      />
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
            Reviews <span>({allReviews.length} reviews)</span>
          </h4>
          {allReviews.map((rev) => (
            <div className="review-item" key={rev._id}>
              <div className="user-reviews-top">
                <div className="img-username">
                  <img src={userImg} alt="" />
                  <span>{rev.username}</span>
                </div>

                <StarsReview singleRating={rev.rating} />
              </div>

              <div className="user-reviews-rating-data">
                <span>
                  {new Date(rev.createdAt).toLocaleDateString("en-US", options)}
                </span>
              </div>

              <p>{rev.reviewText}</p>
            </div>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default TourReviews;
