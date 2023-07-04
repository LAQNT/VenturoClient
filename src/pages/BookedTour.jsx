import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/booked-tour.css";

const BookedTour = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="booked-tour">
              <i class="bi bi-check-circle"></i>
              <span>your tour has been successfully booked </span>
              <h2>Have a nice adventure!</h2>
              <Button variant="success">
                {" "}
                <Link to="/home">Back to Home Page</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookedTour;
