import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarsReview from "../components/StarsReview/StarsReview";
import calculateAvgRating from "./../utils/avgRating";
import Booking from "../components/Booking/Booking";

const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState([]);
  const [tourRaiting, setTourRaiting] = useState(0);
  const reviewMsgRef = useRef("");
  const [isLoading, setIsLoading] = useState(true);
  // const [formData, setFormData] = useState({
  //   title: "",
  //   city: "",
  //   address: "",
  //   distance: "",
  //   photo: "",
  //   desc: "",
  //   price: "",
  //   numberOfPeople: "",
  //   dificulty: "",
  //   featured: false,
  // });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/tours/${id}`);
      setTour(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    // try {
    //   const response = await axios.post(
    //     "http://localhost:3001/reviews",
    //     reviewData
    //   );
    //   console.log("Review posted:", response.data);
    //   alert("review posted");
    // } catch (error) {
    //   console.error("Error making POST request:", error);
    // }
  };

  const {
    title,
    photo,
    desc,
    price,
    reviews,
    address,
    city,
    distance,
    numberOfPeople,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return (
    <>
      <section>
        <Container className="mt-5">
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
                  <span> {address}</span>
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
                      1 <i class="bi bi-star-fill" />
                    </span>
                    <span onClick={() => setTourRaiting(2)}>
                      2 <i class="bi bi-star-fill" />
                    </span>
                    <span onClick={() => setTourRaiting(3)}>
                      3 <i class="bi bi-star-fill" />
                    </span>
                    <span onClick={() => setTourRaiting(4)}>
                      4 <i class="bi bi-star-fill" />
                    </span>
                    <span onClick={() => setTourRaiting(5)}>
                      5 <i class="bi bi-star-fill" />
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
                            <h5>User name</h5>
                            <p>
                              {new Date("01-01-2023").toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span>5</span>
                        </div>
                        <h6>review comment</h6>
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
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
