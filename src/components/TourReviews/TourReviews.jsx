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
  const { user } = useContext(AuthContext);

  const { data: reviews } = useFetch(`${BASE_URL}/review/${id}/reviews`);
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    if (reviews) {
      setAllReviews(reviews);
    }
  }, [reviews]);

  console.log(allReviews);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in");
      }

      console.log(user);

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

      if (!res.ok) {
        alert(res.message);
      } else {
        id.slice(0, -1);
        const response = await axios.get(`${BASE_URL}/review/${id}/reviews`);
        const newReviews = response.data;
        setAllReviews(newReviews);
        console.log(allReviews);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  console.log(totalRating);
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
            Reviews <span>({allReviews.length} reviews)</span>
          </h4>
          {allReviews
            ? allReviews.map((rev) => (
                <div className="review-item" key={rev._id}>
                  <div className="user-reviews-top">
                    <img src={userImg} alt="" />
                    <span>{rev.username}</span>
                    <StarsReview totalRating={Number(rev.rating)} />
                  </div>

                  <div className="user-reviews-rating-data">
                    <span>
                      {new Date(rev.createdAt).toLocaleDateString(
                        "en-US",
                        options
                      )}
                    </span>
                  </div>

                  <p>{rev.reviewText}</p>
                </div>
              ))
            : reviews.map((rev) => (
                <div className="review-item" key={rev._id}>
                  <div className="user-reviews-top">
                    <img src={userImg} alt="" />
                    <span>{rev.username}</span>
                    <StarsReview totalRating={Number(rev.rating)} />
                  </div>

                  <div className="user-reviews-rating-data">
                    <span>
                      {new Date(rev.createdAt).toLocaleDateString(
                        "en-US",
                        options
                      )}
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
