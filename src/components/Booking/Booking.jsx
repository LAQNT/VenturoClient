import React, { useState } from "react";
import "./booking.css";
import {
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import StarsReview from "../StarsReview/StarsReview";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "example@gexample.com",
    fullName: "",
    phone: "",
    guestsNumber: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
    navigate("/bookedTour");
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestsNumber) + Number(serviceFee);

  return (
    <div className="booking">
      <div className="booking-top">
        <h3>
          {price} <span>/ person</span>
        </h3>
        <div>
          <StarsReview props={avgRating} />
          {avgRating === 0 ? null : avgRating}({reviews?.length})
        </div>

        <div className="booking-form">
          <h5>Information</h5>
          <Form className="booking-info-form" onSubmit={handleClick}>
            <FormGroup>
              <input
                type="text"
                placeholder="Full Name"
                required
                id="fullName"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <input
                type="number"
                placeholder="Phone"
                required
                id="fullName"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <input
                type="date"
                placeholder=""
                id="bookAt"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Guests"
                id="guestsNumber"
                required
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </div>

        <div className="booking-bottom">
          <ListGroup>
            <ListGroupItem>
              <h5>
                $ {price} <i class="bi bi-x-circle"></i>
              </h5>
              <span> € {price}</span>
            </ListGroupItem>

            <ListGroupItem>
              <h5>Service Charge</h5>
              <span> € {serviceFee}</span>
            </ListGroupItem>

            <ListGroupItem>
              <h5>Total</h5>
              <span> € {totalAmount}</span>
            </ListGroupItem>
          </ListGroup>
          <Button variant="warning" onClick={handleClick}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
