import { React, useState } from "react";
import axios from "axios";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../styles/back-office.css";
import { Link } from "react-router-dom";

function BackOfficeAddTour() {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    photo: "",
    desc: "",
    price: 0,
    numberOfPeople: 0,
    dificulty: "",
    featured: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/tours",
        formData
      );
      console.log("Tour created:", response.data);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center">New Tour</h2>
        <Row>
          <Col sm="10" className="m-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group className=" mt-3">
                <Form.Label>Tour Title:</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  isInvalid={!formData.title}
                />
                <Form.Control.Feedback type="invalid">
                  A title is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Image URL:</Form.Label>
                <Form.Control
                  type="text"
                  name="photo"
                  value={formData.photo}
                  onChange={handleInputChange}
                  isInvalid={!formData.photo}
                />
                <Form.Control.Feedback type="invalid">
                  An image url is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Location (town, city):</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  isInvalid={!formData.city}
                />
                <Form.Control.Feedback type="invalid">
                  A location is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Country:</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  isInvalid={!formData.address}
                />
                <Form.Control.Feedback type="invalid">
                  A country is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Distance:</Form.Label>
                <Form.Control
                  type="text"
                  name="distance"
                  value={formData.distance}
                  onChange={handleInputChange}
                  isInvalid={!formData.distance}
                />
                <Form.Control.Feedback type="invalid">
                  A distance is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  name="desc"
                  value={formData.desc}
                  onChange={handleInputChange}
                  isInvalid={!formData.desc}
                />
                <Form.Control.Feedback type="invalid">
                  A description is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  isInvalid={!formData.price}
                />
                <Form.Control.Feedback type="invalid">
                  A price is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Number of participants:</Form.Label>
                <Form.Control
                  type="text"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleInputChange}
                  isInvalid={!formData.numberOfPeople}
                />
                <Form.Control.Feedback type="invalid">
                  An amount of persons is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Difficulty:</Form.Label>
                <Form.Select
                  defaultValue="Select difficulty"
                  name="dificulty"
                  value={formData.dificulty}
                  onChange={handleInputChange}
                  isInvalid={!formData.dificulty}
                >
                  <option disabled>Select difficulty</option>
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Challenging</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Difficulty is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mt-5" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Best Deal"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Row className="my-5">
                <Button
                  variant="warning"
                  type="submit"
                  className="col-2 mx-2"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button variant="secondary" className="col-2">
                  <Link to="/backoffice"> Go Back</Link>
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BackOfficeAddTour;
