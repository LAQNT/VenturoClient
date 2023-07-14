import React, { useContext, useState } from "react";
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
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();

  const { username, id, email } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: id,
    userEmail: email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (!username || username === undefined || username === null) {
        return alert("Please sign in");
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/bookedTour");
    } catch (error) {
      alert(error.message);
    }

    console.log(booking);
    navigate("/bookedTour");
  };

  const serviceFee = 10;
  const totalAmount =
    Number(tour.price) * Number(booking.guestSize) + Number(serviceFee);
  console.log(totalAmount);
  console.log(booking);
  console.log(serviceFee);
  console.log(tour.price);

  return (
    <div className="booking">
      <div className="booking-top">
        <h3>
          € {price} <span>/ person</span>
        </h3>
        <div className="reviews-stars">
          <StarsReview avgRating={avgRating} />{" "}
          <div className="review-numbers">
            <span>({reviews?.length} reviews)</span>
          </div>
        </div>
      </div>

      <div className="booking-form">
        <h5>Booking Information</h5>
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
              id="phone"
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
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Guests"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking-bottom">
        <ListGroup>
          <ListGroupItem className="d-flex justify-content-between ">
            <span>Price per Person: </span>
            <span>€ {price} </span>
          </ListGroupItem>

          <ListGroupItem className="d-flex justify-content-between ">
            <span>Service Charge:</span>
            <span> € {serviceFee}</span>
          </ListGroupItem>

          <ListGroupItem className="d-flex justify-content-between ">
            <span>Total: </span>
            <span> € {totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button variant="success" onClick={handleClick} className="mt-4">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
