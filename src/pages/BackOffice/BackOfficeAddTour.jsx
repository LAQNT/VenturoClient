import { React, useState } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import "../../styles/back-office.css";
import TourFormBackOffice from "../../components/TourFormBackOffice/TourFormBackOffice";

function BackOfficeAddTour() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    country: "",
    distance: "",
    photo: "",
    desc: "",
    price: "",
    numberOfPeople: "",
    dificulty: "",
    bestDeal: false,
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
    setFormSubmitted(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/tours",
        formData
      );
      console.log("Tour created:", response.data);
      window.location.href = "/backOffice";
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
            <TourFormBackOffice
              formActual={""}
              formData={formData}
              formSubmitted={formSubmitted}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              variantButton={"warning"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BackOfficeAddTour;
