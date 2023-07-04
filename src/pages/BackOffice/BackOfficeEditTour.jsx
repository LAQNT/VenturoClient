import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/back-office.css";
import TourFormBackOffice from "../../components/TourFormBackOffice/TourFormBackOffice";

function BackOfficeEditTour() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formActual, setFormActual] = useState({});
  const { tourId } = useParams();

  const [formData, setFormData] = useState({
    title: formActual.title,
    city: formActual.city,
    address: formActual.address,
    distance: formActual.distance,
    photo: formActual.photo,
    desc: formActual.desc,
    price: formActual.price,
    numberOfPeople: formActual.numberOfPeople,
    dificulty: formActual.dificulty,
    featured: formActual.featured,
  });

  const fetchTourData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/tours/${tourId}`);
      const tourData = response.data;
      setFormActual(tourData);
    } catch (error) {
      console.error("Error fetching tour data:", error);
    }
  };

  useEffect(() => {
    fetchTourData();
  }, [tourId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputValue = value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (e) => {
    setFormSubmitted(true);
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:3001/tours/${tourId}`,
        formData
      );
      console.log("Tour updated:", response.data);
      window.location.href = "/backOffice";
    } catch (error) {
      console.error("Error making PUT request:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Edit Tour</h2>
      <h6 className="text-center">Tour id: {tourId}</h6>
      <Row>
        <Col sm="10" className="m-auto">
          <TourFormBackOffice
            formActual={formActual}
            formData={formData}
            formSubmitted={formSubmitted}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            variantButton="success"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BackOfficeEditTour;
